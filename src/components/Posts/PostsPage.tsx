import React from "react";
import styled from "styled-components";

import { ColumnsContainer } from "~ts/components/Containers";
import { Layout } from "~ts/components/Layout";
import { TagLinkFeaturedList, TagLinkList } from "~ts/components/List";
import { PostLink } from "~ts/components/Posts";
import { EBreakpoints, EPostLinkSizes, ESide } from "~ts/enums";
import { useMediaQuery } from "~ts/hooks";
import { IPostsContext, TPost } from "~ts/typings";
import { connectTagLinks, media } from "~ts/utils";

import { PostsPagination } from "./PostsPagination";

const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

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
  const isLaptop = useMediaQuery(EBreakpoints.LAPTOP);

  return (
    <Layout title={context?.tag || "Blog"}>
      <ColumnsContainer>
        <TagsContainer>
          {isLaptop ? (
            <TagLinkList
              tags={context.tags}
              title="Categories"
              selected={context?.tag}
            />
          ) : (
            <TagLinkFeaturedList
              tags={context.tags}
              title="Categories"
              selected={context?.tag}
            />
          )}
        </TagsContainer>
        <PostsContainerStyled>
          {posts.map(post => (
            <PostLink
              key={post.frontmatter.title}
              to={post.fields.path}
              text={post.frontmatter.title}
              size={EPostLinkSizes.Small}
              readingTime={post.fields.readingTime.text}
              tags={connectTagLinks(context.tags)(post.frontmatter.tags)}
            />
          ))}
          <PostsPaginationStyled context={context} />
        </PostsContainerStyled>
      </ColumnsContainer>
    </Layout>
  );
};
