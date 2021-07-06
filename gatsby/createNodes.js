const { createFilePath } = require("gatsby-source-filesystem");

const {
  removePostNameSlugSuffix,
  getSlugFromPath,
  trimPathSlashes,
  getNovelInfo,
} = require("./utils");

const onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === "MarkdownRemark") {
    const { createNodeField } = actions;
    const path = removePostNameSlugSuffix(createFilePath({ node, getNode }));
    const { chapter, title } = getNovelInfo(
      trimPathSlashes(createFilePath({ node, getNode }))
    );

    createNodeField({
      node,
      name: "path",
      value: path,
    });

    createNodeField({
      node,
      name: "slug",
      value: getSlugFromPath(trimPathSlashes(path)),
    });

    createNodeField({
      node,
      name: "novel",
      value: {
        chapter,
        title,
      },
    });
  }
};

module.exports = {
  onCreateNode,
};
