import React from "react";
import styled from "styled-components";
import { TextSize } from "~ts/components/Common";

import { Layout } from "~ts/components/Layout";
import { InternalLink } from "~ts/components/Links";
import { NovelLink } from "~ts/components/Novels/NovelLink";
import { Pagination } from "~ts/components/Novels/Pagination";
import { EBreakpoints, ELinkSizes, ESide, ETextSizes } from "~ts/enums";
import { IPagination, TPostLink, TTagLink } from "~ts/typings";
import { media } from "~ts/utils";

const CategoriesStyled = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ChaptersStyled = styled(TextSize)`
  margin: 15px 0;
`;

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const PaginationStyled = styled(Pagination)`
  padding-top: 30px;
  margin-top: auto;

  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    padding-top: 50px;
  }
`;

interface IContextProps extends IPagination {
  title: string;
  tags: TTagLink[];
  chapters: TPostLink[];
}

interface INovelPageProps {
  pageContext: IContextProps;
}

export const NovelPage = ({ pageContext }: INovelPageProps) => {
  console.log(pageContext);
  return (
    <Layout title={pageContext.title}>
      <ContainerStyled>
        <ChaptersStyled size={ETextSizes.Regular}>
          Chapters
          <CategoriesStyled>
            {pageContext.tags.map((tag) => (
              <InternalLink size={ETextSizes.Tiny} to={tag.path}>
                {tag.name}
              </InternalLink>
            ))}
          </CategoriesStyled>
        </ChaptersStyled>
        {pageContext.chapters.map((chapter) => (
          <NovelLink
            key={chapter.title}
            to={chapter.path}
            text={chapter.title}
            size={ELinkSizes.Small}
          />
        ))}
        <PaginationStyled context={pageContext} />
      </ContainerStyled>
    </Layout>
  );
};

export default NovelPage;
