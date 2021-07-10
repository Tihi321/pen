import React from "react";
import styled from "styled-components";

import { Layout } from "~ts/components/Layout";
import { NovelLink } from "~ts/components/Novels/NovelLink";
import { Pagination } from "~ts/components/Novels/Pagination";
import { EBreakpoints, ELinkSizes, ESide } from "~ts/enums";
import { IPagination, TTagLink } from "~ts/typings";
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
  tag?: string;
  tags: TTagLink[];
  novels: TTagLink[];
}

interface INovelsPageProps {
  pageContext: IContextProps
}

export const NovelsPage = ({ pageContext }: INovelsPageProps) => {
  console.log("pageContext", pageContext);
  return (
    <Layout title={pageContext?.tag || "Pen"}>
      {!pageContext.tag && "Welcome to Pen, general writting blog"}
      <select name="cars" id="cars" onChange={event => { console.log(event.currentTarget.value)}}>
        <option value="all">All</option>
        {pageContext.tags.map(tag => <option value={tag.name}>{tag.name}</option>)}
      </select>
      <ContainerStyled>
        {pageContext.novels.map(novel => (
          <NovelLink
            key={novel.name}
            to={novel.path}
            text={novel.name}
            size={ELinkSizes.Small}
          />
        ))}
        <PaginationStyled context={pageContext} />
      </ContainerStyled>
    </Layout>
  );
};


export default NovelsPage;
