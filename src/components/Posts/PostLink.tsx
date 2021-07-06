import React from "react";
import styled from "styled-components";

import { BottomLineContainer } from "~ts/components/Containers";
import { HeadingLink } from "~ts/components/Links";
import {
  EHeadingSizes,
  EPostLinkSizes,
} from "~ts/enums";
import { TPostLinkSizes, TTagLink } from "~ts/typings";

interface ILinkProps {
  text: string;
  to: string;
  tags?: TTagLink[];
}

interface IPostLinkProps extends ILinkProps {
  size: TPostLinkSizes;
}

const BottomLineContainerStyled = styled(BottomLineContainer)`
  margin-bottom: 10px;
`;

const HeadingLinkStyled = styled(HeadingLink)`
  padding-bottom: 0;
`;

export const PostLink = ({
  text,
  to,
  size = EPostLinkSizes.Regular,
}: IPostLinkProps) => (
  <BottomLineContainerStyled>
    <HeadingLinkStyled
      text={text}
      to={to}
      size={
        size === EPostLinkSizes.Regular
          ? EHeadingSizes.Medium
          : EHeadingSizes.Regular
      }
    />
  </BottomLineContainerStyled>
);
