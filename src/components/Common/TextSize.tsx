import React from "react";
import styled, { css } from "styled-components";

import { EBreakpoints, ESide, ETextSizes } from "~ts/enums";
import {
  hugeFontThemeResponsiveFontStyles,
  largeFontThemeResponsiveFontStyles,
  mediumFontThemeResponsiveFontStyles,
  regularFontThemeResponsiveFontStyles,
  smallFontThemeResponsiveFontStyles,
  tinyFontThemeResponsiveFontStyles
} from "~ts/styles";
import { IStyledProps, ITextSizes } from "~ts/typings";
import { media } from "~ts/utils";

const hugeStyles = css`
  ${hugeFontThemeResponsiveFontStyles(EBreakpoints.MOBILE)};
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    ${hugeFontThemeResponsiveFontStyles(EBreakpoints.LAPTOP)}
  }
`;

const largeStyles = css`
  ${largeFontThemeResponsiveFontStyles(EBreakpoints.MOBILE)};
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    ${largeFontThemeResponsiveFontStyles(EBreakpoints.LAPTOP)}
  }
`;

const mediumStyles = css`
  ${mediumFontThemeResponsiveFontStyles(EBreakpoints.MOBILE)};
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    ${mediumFontThemeResponsiveFontStyles(EBreakpoints.LAPTOP)}
  }
`;

const regularStyles = css`
  ${regularFontThemeResponsiveFontStyles(EBreakpoints.MOBILE)};
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    ${regularFontThemeResponsiveFontStyles(EBreakpoints.LAPTOP)}
  }
`;

const smallStyles = css`
  ${smallFontThemeResponsiveFontStyles(EBreakpoints.MOBILE)};
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    ${smallFontThemeResponsiveFontStyles(EBreakpoints.LAPTOP)}
  }
`;

const tinyStyles = css`
  ${tinyFontThemeResponsiveFontStyles(EBreakpoints.MOBILE)};
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    ${tinyFontThemeResponsiveFontStyles(EBreakpoints.LAPTOP)}
  }
`;

interface ITextSizeProps extends ITextSizes, IStyledProps {
  children?: React.ReactNode;
}

const FontSizesStyled = styled(({ children, ...props }: ITextSizeProps) => (
  <span {...props}>{children}</span>
))`
  display: inline-block;
  ${props => {
    switch (props.size) {
      case ETextSizes.Huge:
        return hugeStyles;
      case ETextSizes.Large:
        return largeStyles;
      case ETextSizes.Medium:
        return mediumStyles;
      case ETextSizes.Small:
        return smallStyles;
      case ETextSizes.Tiny:
        return tinyStyles;

      default:
        return regularStyles;
    }
  }}
`;

export const TextSize = ({
  children,
  className,
  size = ETextSizes.Regular
}: ITextSizeProps) => (
  <FontSizesStyled className={className} size={size}>
    {children}
  </FontSizesStyled>
);
