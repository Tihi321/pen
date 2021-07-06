import { createSelector } from "reselect";
import { ThemeProps } from "styled-components";

const themeColors = (state: ThemeProps<any>) => state.theme.colors;
const sharedColors = (state: ThemeProps<any>) => state.theme.sharedColors;

export const focusColor = createSelector(themeColors, colors => colors.focus);

export const primaryColor = createSelector(
  themeColors,
  colors => colors.primary
);

export const secondaryColor = createSelector(
  themeColors,
  colors => colors.secondary
);

export const tertiaryColor = createSelector(
  themeColors,
  colors => colors.tertiary
);

export const tertiarySemiTransparenColor = createSelector(
  themeColors,
  colors => colors.tertiarySemiTransparent
);

export const textColor = createSelector(
  themeColors,
  colors => colors.fontColor
);

export const backdropColor = createSelector(
  sharedColors,
  colors => colors.backdrop
);

export const quoteBGColor = createSelector(
  sharedColors,
  colors => colors.quoteBackground
);

export const quoteColor = createSelector(sharedColors, colors => colors.white);

export const rowBorderColor = tertiaryColor;
export const backgroundColor = focusColor;
export const socialBackgroundColor = focusColor;
export const sociaColor = textColor;
export const logoBackgroundColor = primaryColor;
export const logoForegroundColor = focusColor;
export const featuredButtonBackgroundColor = primaryColor;
export const featuredButtonColor = focusColor;
export const linkColor = secondaryColor;
export const inputColor = secondaryColor;
export const inputBackgroundColor = tertiarySemiTransparenColor;
export const tagButtonColor = tertiaryColor;
export const tagPrimaryTextColor = tertiaryColor;
export const tagSecondaryTextColor = secondaryColor;
export const tagTertiaryTextColor = primaryColor;
export const featuredTagColor = secondaryColor;
export const wideButtonColor = secondaryColor;
export const bottomLineBorderColor = tertiarySemiTransparenColor;
export const blockquoteColor = secondaryColor;
export const asideColor = secondaryColor;
export const asideBackgroundColor = tertiarySemiTransparenColor;
export const codeBackgroundColor = tertiarySemiTransparenColor;
export const modalBackgroundColor = tertiarySemiTransparenColor;
export const projectTitleBackgroundColor = tertiarySemiTransparenColor;
export const projectBorderColor = secondaryColor;
export const markColor = focusColor;
export const markBackgroundColor = secondaryColor;
