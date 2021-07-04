import React from "react";
import styled from "styled-components";

import { EBreakpoints, ESide, ETagType } from "~ts/enums";
import { tagsResponsiveFontStyles } from "~ts/styles";
import {
  tagPrimaryTextColor,
  tagSecondaryTextColor,
  tagTertiaryTextColor
} from "~ts/themes";
import { IStyledProps } from "~ts/typings";
import { media } from "~ts/utils";

interface ITextProps extends IStyledProps {
  text: string;
  type?: ETagType.Primary | ETagType.Secondary | ETagType.Tertiary;
}

const TagStyled = styled(({ text, ...props }: ITextProps) => (
  <span {...props}>{text}</span>
))`
  cursor: pointer;
  display: inline-block;
  position: relative;
  font-style: italic;
  color: ${props => {
    switch (props.type) {
      case ETagType.Secondary:
        return tagSecondaryTextColor;
      case ETagType.Tertiary:
        return tagTertiaryTextColor;

      default:
        return tagPrimaryTextColor;
    }
  }};
  &::before {
    content: "#";
    font-size: 0.7em;
    padding-right: 2px;
  }

  ${tagsResponsiveFontStyles(EBreakpoints.MOBILE)};
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    ${tagsResponsiveFontStyles(EBreakpoints.LAPTOP)}
  }
`;

export const TagText = ({
  text,
  className,
  type = ETagType.Primary
}: ITextProps) => <TagStyled type={type} className={className} text={text} />;
