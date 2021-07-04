import React from "react";
import styled from "styled-components";

import { TextSize } from "~ts/components/Common";
import { BottomLineContainer } from "~ts/components/Containers";
import { HeadingLink, ImageLink, TagLink } from "~ts/components/Links";
import {
  EFeaturedImageSizes,
  EHeadingSizes,
  EPostLinkSizes,
  ETextSizes
} from "~ts/enums";
import { TPostLinkSizes, TTagLink } from "~ts/typings";

interface ILinkProps {
  text: string;
  to: string;
  tags?: TTagLink[];
  readingTime: string;
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

const TagLinkStyled = styled(TagLink)`
  padding-right: 5px;
`;

const PostLinkFooterStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
`;

const ReadingTimeStyled = styled(TextSize)`
  margin-left: auto;
`;

export const PostLink = ({
  text,
  to,
  size = EPostLinkSizes.Regular,
  tags = [],
  readingTime
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
    <PostLinkFooterStyled>
      {tags &&
        tags.map((tag, index) => (
          <TagLinkStyled
            key={`${text}-${tag.name}-${index}`}
            to={tag.path}
            text={tag.name}
          />
        ))}
      <ReadingTimeStyled size={ETextSizes.Tiny}>
        {readingTime}
      </ReadingTimeStyled>
    </PostLinkFooterStyled>
  </BottomLineContainerStyled>
);
