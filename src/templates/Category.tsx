import { graphql } from "gatsby";
import React from "react";

import { PostsPage } from "~ts/components/Posts";
import { IPostsProps } from "~ts/typings";

const CategoryPage = ({ data, pageContext }: IPostsProps) => (
  <PostsPage context={pageContext} posts={data.data.posts} />
);

export const query = graphql`
  query CategoryQuery($tag: [String], $limit: Int, $skip: Int) {
    data: allMarkdownRemark(
      filter: { frontmatter: { tags: { in: $tag }, publish: { eq: true } } }
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

export default CategoryPage;
