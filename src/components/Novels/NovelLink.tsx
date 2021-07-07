import React from "react";
import styled from "styled-components";

import { BottomLineContainer } from "~ts/components/Containers";
import { HeadingLink } from "~ts/components/Links";
import {
  EHeadingSizes,
  ELinkSizes,
} from "~ts/enums";
import { TLinkSizes, TTagLink } from "~ts/typings";

interface ILinkProps {
  text: string;
  to: string;
  tags?: TTagLink[];
}

interface INovelLinkProps extends ILinkProps {
  size: TLinkSizes;
}

const BottomLineContainerStyled = styled(BottomLineContainer)`
  margin-bottom: 10px;
`;

const HeadingLinkStyled = styled(HeadingLink)`
  padding-bottom: 0;
`;

export const NovelLink = ({
  text,
  to,
  size = ELinkSizes.Regular,
}: INovelLinkProps) => (
  <BottomLineContainerStyled>
    <HeadingLinkStyled
      text={text}
      to={to}
      size={
        size === ELinkSizes.Regular
          ? EHeadingSizes.Medium
          : EHeadingSizes.Regular
      }
    />
  </BottomLineContainerStyled>
);
