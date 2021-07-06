const createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  const postTypeDefs = [
    schema.buildObjectType({
      name: "MarkdownRemark",
      frontmatter: {
        title: "String!",
        tags: "[String!]!",
        publish: "Boolean!",
      },
      fields: {
        path: "String!",
        slug: "String!",
        novel: `
        type Novel {
          title: String!,
          chapter: Int!,
        }`,
      },
      interfaces: ["Node"],
    }),
  ];
  createTypes(postTypeDefs);
};

module.exports = {
  createSchemaCustomization,
};
