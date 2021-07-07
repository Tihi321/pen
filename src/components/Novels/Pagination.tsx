import { range } from "lodash";
import React from "react";
import styled from "styled-components";

import { BottomLineContainer } from "~ts/components/Containers";
import { ArrowLink, InternalLink } from "~ts/components/Links";
import { EArrowLinkSides } from "~ts/enums";
import { IPagination, IStyledProps } from "~ts/typings";

const { createPaginatedURI } = require("~ts/gatsby/utils");

interface IPaginationLink {
  path: string;
  active: boolean;
  number: number;
}

interface IPaginationProps extends IStyledProps {
  context: IPagination;
}

const PaginationFooterStyled = styled(BottomLineContainer)`
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InternalLinkStyled = styled(({ children, ...props }) => (
  <InternalLink {...props}>{children}</InternalLink>
))`
  pointer-events: ${props => (props.active ? "none" : "initial")};
  cursor: ${props => (props.active ? "default" : "pointer")};
  opacity: ${props => (props.active ? "0.5" : "1")};
  padding: 0 5px;
  margin: 0 2px;
`;

const ArrowLinkStyled = styled(({ ...props }) => <ArrowLink {...props} />)`
  pointer-events: ${props => (!props.active ? "none" : "initial")};
  cursor: ${props => (!props.active ? "default" : "pointer")};
  opacity: ${props => (!props.active ? "0.5" : "1")};
`;

export const Pagination = ({
  context: { current, paged, src },
  className
}: IPaginationProps) => {
  const paginationLinks: IPaginationLink[] = range(paged).map(pageNumber => ({
    path: pageNumber > 0 ? createPaginatedURI(src, pageNumber) : src,
    number: pageNumber,
    active: pageNumber === current - 1
  }));

  return (
    <PaginationFooterStyled className={className}>
      <ArrowLinkStyled
        to={current > 2 ? createPaginatedURI(src, current - 2) : src}
        side={EArrowLinkSides.Left}
        active={current > 1}
      />
      {paginationLinks.map(link => (
        <InternalLinkStyled key={link.path} active={link.active} to={link.path}>
          {link.number}
        </InternalLinkStyled>
      ))}
      <ArrowLinkStyled
        to={createPaginatedURI(src, current)}
        side={EArrowLinkSides.Right}
        active={current < paged}
      />
    </PaginationFooterStyled>
  );
};
