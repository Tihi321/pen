import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";

import { LineContainer } from "~ts/components/Containers";
import { Layout } from "~ts/components/Layout";
import { ArrowLink } from "~ts/components/Links";
import { NovelHeader } from "~ts/components/Novels";
import { EArrowLinkSides, EBreakpoints, ESide } from "~ts/enums";
import { TPostLink, TTagLink } from "~ts/typings";
import { media } from "~ts/utils";

interface IChapterQuery {
  post: {
    fields: {
      readingTime: {
        text: string;
      };
      path: string;
    };
    frontmatter: {
      title: string;
    };
    html: string;
  };
}

interface IChapterPageProps {
  data: IChapterQuery;
  pageContext: {
    novel: {
      chapter: number;
      title: string;
    };
    previous: TPostLink | null;
    next: TPostLink | null;
  };
}

const NovelHeaderStyled = styled(NovelHeader)`
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

const ChapterPage = ({ data, pageContext }: IChapterPageProps) => {
  console.log(pageContext);
  return (
    <Layout title={pageContext.novel.title} pageUrl={data.post.fields.path}>
      <NovelHeaderStyled
        title={data.post.frontmatter.title}
        readingTime={data.post.fields.readingTime.text}
        pageUrl={data.post.fields.path}
      />
      <ContentContainerStyled>
        <div dangerouslySetInnerHTML={{ __html: data.post.html }}></div>
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
};

export const query = graphql`
  query ChapterPage($id: String) {
    post: markdownRemark(id: { eq: $id }) {
      fields {
        readingTime {
          text
        }
        path
      }
      frontmatter {
        title
      }
      html
    }
  }
`;

export default ChapterPage;
