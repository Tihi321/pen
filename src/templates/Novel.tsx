import React from "react";
import styled from "styled-components";
import { TextSize } from "~ts/components/Common";

import { Layout } from "~ts/components/Layout";
import { NovelLink } from "~ts/components/Novels/NovelLink";
import { Pagination } from "~ts/components/Novels/Pagination";
import { EBreakpoints, ELinkSizes, ESide, ETextSizes } from "~ts/enums";
import { IPagination, TPostLink } from "~ts/typings";
import { media } from "~ts/utils";

const TitleStyled = styled(TextSize)`
  text-align: center;
  display: block;
  text-transform: capitalize;
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
  chapters: TPostLink[];
}

interface INovelPageProps {
  pageContext: IContextProps;
}

export const NovelPage = ({ pageContext }: INovelPageProps) => {
  console.log();
  return (
    <Layout title={pageContext.title}>
      <ContainerStyled>
        <TitleStyled size={ETextSizes.Medium}>{pageContext.title}</TitleStyled>
        <ChaptersStyled size={ETextSizes.Regular}>Chapters</ChaptersStyled>
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
