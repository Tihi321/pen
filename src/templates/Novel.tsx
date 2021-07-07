import React from "react";
import styled from "styled-components";

import { ColumnsContainer } from "~ts/components/Containers";
import { Layout } from "~ts/components/Layout";
import { NovelLink } from "~ts/components/Novels/NovelLink";
import { Pagination } from "~ts/components/Novels/Pagination";
import { EBreakpoints, ELinkSizes, ESide } from "~ts/enums";
import { IPagination, TPostLink } from "~ts/typings";
import { media } from "~ts/utils";

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
  pageContext: IContextProps
}

export const NovelPage = ({ pageContext }: INovelPageProps) => {
  return (
    <Layout title={pageContext.title}>
      <ColumnsContainer>
        <ContainerStyled>
          {pageContext.chapters.map(chapter => (
            <NovelLink
              key={chapter.title}
              to={chapter.path}
              text={chapter.title}
              size={ELinkSizes.Small}
            />
          ))}
          <PaginationStyled context={pageContext} />
        </ContainerStyled>
      </ColumnsContainer>
    </Layout>
  );
};


export default NovelPage;
