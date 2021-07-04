import { graphql } from "gatsby";
import React from "react";

import { PostsPage as Page } from "~ts/components/Posts";
import { IPostsProps } from "~ts/typings";

const PostsPage = ({ data, pageContext }: IPostsProps) => (
  <Page context={pageContext} posts={data.data.posts} />
);

export const query = graphql`
  query PostsQuery($limit: Int, $skip: Int) {
    data: allMarkdownRemark(
      filter: { frontmatter: { publish: { eq: true } } }
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      posts: nodes {
        frontmatter {
          title
          tags
        }
        fields {
          path
          readingTime {
            text
          }
        }
      }
    }
  }
`;

export default PostsPage;
