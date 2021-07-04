import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";

import { LineContainer } from "~ts/components/Containers";
import { Layout } from "~ts/components/Layout";
import { ArrowLink } from "~ts/components/Links";
import { PostHeader } from "~ts/components/Posts";
import { EArrowLinkSides, EBreakpoints, ESide } from "~ts/enums";
import { IPostPageQuery, TPostLink, TTagLink } from "~ts/typings";
import { media } from "~ts/utils";

interface IPageProps {
  data: IPostPageQuery;
  pageContext: {
    tags: TTagLink[];
    previous: TPostLink | null;
    next: TPostLink | null;
  };
}

const PostHeaderStyled = styled(PostHeader)`
  margin-bottom: 30px;

  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    margin-bottom: 50px;
  }
`;

const PostFooterStyled = styled(LineContainer)`
  display: flex;
  margin-top: 30px;

  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    margin-top: 50px;
  }
`;

const ArrowLinkNextStyled = styled(ArrowLink)`
  margin-left: auto;
`;

const ContentContainerStyled = styled.article`
  display: grid;
`;

const PostPage = ({ data, pageContext }: IPageProps) => (
  <Layout
    title={data.post.frontmatter.title}
    description={data.post.frontmatter.excerpt}
    pageUrl={data.post.fields.path}
  >
    <PostHeaderStyled
      title={data.post.frontmatter.title}
      readingTime={data.post.fields.readingTime.text}
      tags={pageContext.tags}
      date={data.post.frontmatter.date}
      pageUrl={data.post.fields.path}
    />
    <ContentContainerStyled>
      <div dangerouslySetInnerHTML={{ __html: data.post.html }} />
    </ContentContainerStyled>
    <PostFooterStyled>
      {pageContext.previous && (
        <ArrowLink
          text={pageContext.previous.title}
          to={pageContext.previous.path}
          side={EArrowLinkSides.Left}
        />
      )}
      {pageContext.next && (
        <ArrowLinkNextStyled
          text={pageContext.next.title}
          to={pageContext.next.path}
          side={EArrowLinkSides.Right}
        />
      )}
    </PostFooterStyled>
  </Layout>
);

export const query = graphql`
  query PostQuery($id: String) {
    post: markdownRemark(id: { eq: $id }) {
      fields {
        readingTime {
          text
        }
        path
      }
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        title
        excerpt
      }
      html
    }
  }
`;

export default PostPage;
