const { resolve, join } = require("path");
const { POSTS_PER_PAGE } = require("./constants");
const {
  createPagedPageCallback,
  createTagURI,
  createNovelURI,
} = require("./utils");

const templatesPath = resolve(__dirname, "../src/templates");

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  createPage({
    path: "/404",
    component: join(templatesPath, "404.tsx"),
  });

  const result = await graphql(`
    query {
      posts: allMarkdownRemark(
        filter: { frontmatter: { publish: { eq: true } } }
      ) {
        nodes {
          fields {
            path
            novel {
              title
              chapter
            }
          }
          frontmatter {
            title
            tags
          }
          id
        }
      }
    }
  `);

  let allPosts = [];

  result.data.posts.nodes.forEach(
    ({ fields: { path, novel }, id, frontmatter: { title, tags } }) => {
      allPosts = [
        ...allPosts,
        {
          title,
          path,
          tags,
          id,
          novel,
        },
      ];
    }
  );

  let postNovels = [];
  let postTags = [];

  allPosts.forEach(({ path, tags, novel: { title, chapter }, id }, index) => {
    const previous = index === allPosts.length - 1 ? null : allPosts[index + 1];
    const next = index === 0 ? null : allPosts[index - 1];
    postTags = [...postTags, ...tags];
    if (chapter === 1) {
      postNovels = [...postNovels, title];
    }
    createPage({
      path,
      component: join(templatesPath, "Chapter.tsx"),
      context: {
        post: allPosts[index],
        id,
        previous: previous
          ? {
              title: previous.title,
              path: previous.path,
            }
          : null,
        next: next
          ? {
              title: next.title,
              path: next.path,
            }
          : null,
      },
    });
  });

  const allTags = Array.from(new Set(postTags)).map((tag) => ({
    name: tag,
    path: createTagURI(tag),
  }));

  const novels = Array.from(new Set(postNovels)).map((novel) => ({
    name: novel,
    path: createNovelURI(novel),
  }));

  allTags.forEach(({ name, path }) => {
    const tagPosts = allPosts.filter(({ tags, novel }) => tags.includes(name) && novel.chapter === 1);
    const tagNovels = tagPosts.map(({novel}) => novel.title);

    createPagedPageCallback({
      callback: createPage,
      postsPerPage: POSTS_PER_PAGE,
      numOfPosts: tagPosts.length,
      path,
      component: join(templatesPath, "Novels.tsx"),
      context: {
        tag: name,
        tags: allTags,
        novels: novels.filter(({ name }) => tagNovels.includes(name))
      },
    });
  });

  novels.forEach(({ name, path}) => {
    let novelTags = new Set();
    const chapters = allPosts.filter(({ novel: {title} }) => title === name);

    chapters.forEach(chapter => {
      novelTags.add(...chapter.tags)
    });

    console.log(novelTags);

    createPagedPageCallback({
      callback: createPage,
      postsPerPage: POSTS_PER_PAGE,
      numOfPosts: chapters.length,
      path,
      component: join(templatesPath, "Novel.tsx"),
      context: {
        title: name,
        chapters: chapters.map(({title, path}) => ({title, path}))
      },
    });
  });

  createPagedPageCallback({
    callback: createPage,
    postsPerPage: POSTS_PER_PAGE,
    numOfPosts: allPosts.length,
    path: "/",
    component: join(templatesPath, "Novels.tsx"),
    context: {
      tags: allTags,
      novels
    },
  });
};

module.exports = {
  createPages,
};
