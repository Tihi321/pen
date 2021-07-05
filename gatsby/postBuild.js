const fs = require("fs");

const onPostBuild = async ({ graphql }) => {
  await graphql(`
    {
      posts: allMarkdownRemark {
        edges {
          node {
            fields {
              novel {
                title
                chapter
              }
            }
            frontmatter {
              title
              tags
            }
            html
            id
          }
        }
      }
    }
  `).then((result) => {
    const restPath = "./public/rest";
    const restNovelPath = "./public/rest/novel";

    const posts = result.data.posts.edges.map(({ node }) => node);

    if (!fs.existsSync(restPath)) {
      fs.mkdirSync(restPath);
    }

    if (!fs.existsSync(restNovelPath)) {
      fs.mkdirSync(restNovelPath);
    }

    const postsData = posts.map(data => ({id: data.id, title: data.frontmatter.title, tags: data.frontmatter.tags, novel: data.fields.novel.title}));

    fs.writeFileSync(`${restPath}/novels.json`, JSON.stringify(postsData));

    posts.map((post) => {
      const data = {
        ...post.frontmatter,
        ...post.fields,
        body: post.html,
      };

      fs.writeFileSync(
        `${restNovelPath}/${post.id}.json`,
        JSON.stringify(data)
      );
    });
  });
};

module.exports = {
  onPostBuild,
};
