const createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  const postTypeDefs = [
    schema.buildObjectType({
      name: "MarkdownRemark",
      frontmatter: {
        title: "String!",
        chapter: "String!",
        date: "Date!",
        featured: "Boolean!",
        publish: "Boolean!",
      },
      fields: {
        path: "String!",
        slug: "String!",
      },
      interfaces: ["Node"],
    }),
  ];
  createTypes(postTypeDefs);
};

module.exports = {
  createSchemaCustomization,
};
