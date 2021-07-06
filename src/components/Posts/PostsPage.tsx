import React from "react";
import styled from "styled-components";

import { ColumnsContainer } from "~ts/components/Containers";
import { Layout } from "~ts/components/Layout";
import { PostLink } from "~ts/components/Posts";
import { EBreakpoints, EPostLinkSizes, ESide } from "~ts/enums";
import { IPostsContext, TPost } from "~ts/typings";
import { media } from "~ts/utils";

import { PostsPagination } from "./PostsPagination";

const PostsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostsPaginationStyled = styled(PostsPagination)`
  padding-top: 30px;
  margin-top: auto;

  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    padding-top: 50px;
  }
`;

interface IPostsProps {
  posts: TPost[];
  context: IPostsContext;
}

export const PostsPage = ({ posts, context }: IPostsProps) => {
  return (
    <Layout title={context?.tag || "Blog"}>
      <ColumnsContainer>
        <PostsContainerStyled>
          {posts.map(post => (
            <PostLink
              key={post.frontmatter.title}
              to={post.fields.path}
              text={post.frontmatter.title}
              size={EPostLinkSizes.Small}
            />
          ))}
          <PostsPaginationStyled context={context} />
        </PostsContainerStyled>
      </ColumnsContainer>
    </Layout>
  );
};
