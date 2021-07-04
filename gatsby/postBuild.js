const fs = require("fs");

const onPostBuild = async ({ graphql }) => {
  await graphql(`
    {
      posts: allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
            html
          }
        }
      }
    }
  `).then((result) => {
    const postsPath = "./public/tales";
    const postPath = "./public/tales/tale";

    const posts = result.data.posts.edges.map(({ node }) => node);

    if (!fs.existsSync(postsPath)) {
      fs.mkdirSync(postsPath);
    }

    if (!fs.existsSync(postPath)) {
      fs.mkdirSync(postPath);
    }

    fs.writeFileSync(`${postsPath}/index.json`, JSON.stringify(posts));

    posts.map((post) => {
      const data = {
        ...post.frontmatter,
        slug: post.fields.slug,
        body: post.html,
      };

      fs.writeFileSync(
        `${postPath}/${post.fields.slug}.json`,
        JSON.stringify(data)
      );
    });
  });
};

module.exports = {
  onPostBuild,
};
