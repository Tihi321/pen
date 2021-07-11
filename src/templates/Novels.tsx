import React, { useState } from "react";
import styled from "styled-components";
import { Select, TOption } from "~ts/components/Inputs";

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
  pageContext: IContextProps;
}

export const NovelsPage = ({ pageContext }: INovelsPageProps) => {
  const [selected, setSelected] = useState({} as TOption);
  const selectItems: TOption[] = pageContext.tags.map((tag) => ({
    value: tag.path,
    name: tag.name,
  }));

  const selectItem = selected
    ? pageContext.tags
        .filter((tagItem) => tagItem.name === selected.name)
        .map((item) => ({ value: item.path, name: item.name }))[0]
    : undefined;
  return (
    <Layout title={pageContext?.tag || "Pen"}>
      <Select
        items={selectItems}
        selected={selectItem}
        onChange={(option) => {
          setSelected(option);
        }}
      />
      <ContainerStyled>
        {pageContext.novels.map((novel) => (
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
