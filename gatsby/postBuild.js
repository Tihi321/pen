const fs = require("fs");

const onPostBuild = async ({ graphql }) => {
  await graphql(`
    {
      posts: allMarkdownRemark(
        filter: { frontmatter: { publish: { eq: true } } }
        sort: {fields: [fields___novel___title, fields___novel___chapter], order: [ASC, ASC]}
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
  `).then((result) => {
    const restPath = "./public/rest";
    const restNovelPath = "./public/rest/pen";

    const posts = result.data.posts.nodes;

    if (!fs.existsSync(restPath)) {
      fs.mkdirSync(restPath);
    }

    if (!fs.existsSync(restNovelPath)) {
      fs.mkdirSync(restNovelPath);
    }

    const postsData = posts.map(data => ({id: data.id, title: data.frontmatter.title, tags: data.frontmatter.tags, novel: data.fields.novel.title}));

    fs.writeFileSync(`${restPath}/pens.json`, JSON.stringify(postsData));

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
