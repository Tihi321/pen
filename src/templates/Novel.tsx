import { graphql } from "gatsby";
import React from "react";


const NovelPage = ({ data, pageContext }) => {
  console.log("data", data);
  console.log("pageContext", pageContext);
  return (<div>NovelPage</div>)
};

export const query = graphql`
  query NovelPage($id: String) {
    post: markdownRemark(id: { eq: $id }) {
      fields {
        readingTime {
          text
        }
      }
      html
    }
  }
`;

export default NovelPage;
