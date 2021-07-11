import React from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import { Select, TOption } from "~ts/components/Inputs";

import { Layout } from "~ts/components/Layout";
import { NovelLink } from "~ts/components/Novels/NovelLink";
import { Pagination } from "~ts/components/Novels/Pagination";
import {
  EBreakpoints,
  EInternalLinks,
  ELinkSizes,
  ESide,
  ETextSizes,
} from "~ts/enums";
import { IPagination, TTagLink } from "~ts/typings";
import { media } from "~ts/utils";
import { TextSize } from "~ts/components/Common";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleStyled = styled(TextSize)`
  text-align: center;
  display: block;
`;

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 15px 0;

  ${media(EBreakpoints.TABLET)} {
    flex-direction: row;
  }
`;

const CategoriesTextStyled = styled(TextSize)`
  flex: 1;
  padding-bottom: 15px;
  text-align: center;
  ${media(EBreakpoints.TABLET)} {
    padding-bottom: 0;
    text-align: left;
  }
`;

const CategoriesSelectStyled = styled(Select)`
  flex: 1;
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
  const selectItems: TOption[] = pageContext.tags.map((tag) => ({
    value: tag.path,
    name: tag.name,
  }));

  const selectedItem = pageContext.tag
    ? pageContext.tags
        .filter((tagItem) => tagItem.name === pageContext.tag)
        .map((item) => ({ value: item.path, name: item.name }))[0]
    : undefined;
  return (
    <Layout title={pageContext?.tag || "Pen"}>
      <TitleStyled size={ETextSizes.Medium}>
        Welcome to my pen joutnal
      </TitleStyled>
      <CategoriesContainer>
        <CategoriesTextStyled size={ETextSizes.Regular}>
          Category
        </CategoriesTextStyled>
        <CategoriesSelectStyled
          items={selectItems}
          selected={selectedItem}
          all={true}
          onChange={(option) => {
            if (option.value === "all") {
              navigate(EInternalLinks.HOME);
            } else {
              navigate(option.value);
            }
          }}
        />
      </CategoriesContainer>
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
