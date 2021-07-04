const createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  const postTypeDefs = [
    schema.buildObjectType({
      name: "Md",
      frontmatter: {
        title: "String!",
        date: "Date!",
        tags: "[String!]!",
        excerpt: "String",
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
