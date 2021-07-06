import { css } from "styled-components";

import { CoreStylesClass, EBreakpoints, ESide } from "~ts/enums";
import {
  asideBackgroundColor,
  asideColor,
  backgroundColor,
  blockquoteColor,
  codeBackgroundColor,
  inputBackgroundColor,
  inputColor,
  linkColor,
  markBackgroundColor,
  markColor,
  textColor
} from "~ts/themes";
import { media } from "~ts/utils";

import {
  blockquoteResponsiveFontStyles,
  bodyResponsiveFontStyles,
  heading01ResponsiveFontStyles,
  heading02ResponsiveFontStyles,
  heading03ResponsiveFontStyles,
  heading04ResponsiveFontStyles,
  listResponsiveFontStyles
} from "./fonts";

export const coreStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  #___gatsby,
  #gatsby-focus-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  body,
  .${CoreStylesClass} {
    background-color: ${backgroundColor};
    color: ${textColor};
    margin: 0;
    padding: 20px;
    min-height: 100vh;
    display: flex;

    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      padding: 55px 30px;
    }
  }

  body,
  .${CoreStylesClass} {
    ${bodyResponsiveFontStyles(EBreakpoints.MOBILE)};
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      ${bodyResponsiveFontStyles(EBreakpoints.LAPTOP)}
    }
  }
`;

export const headingStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  h1 {
    padding-bottom: 20px;
    ${heading01ResponsiveFontStyles(EBreakpoints.MOBILE)};
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      padding-bottom: 30px;
      ${heading01ResponsiveFontStyles(EBreakpoints.LAPTOP)}
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    padding-bottom: 15px;
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      padding-bottom: 20px;
    }
  }

  h2 {
    ${heading02ResponsiveFontStyles(EBreakpoints.MOBILE)};
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      ${heading02ResponsiveFontStyles(EBreakpoints.LAPTOP)}
    }
  }

  h3 {
    ${heading03ResponsiveFontStyles(EBreakpoints.MOBILE)};
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      ${heading03ResponsiveFontStyles(EBreakpoints.LAPTOP)}
    }
  }

  h4,
  h5,
  h6 {
    ${heading04ResponsiveFontStyles(EBreakpoints.MOBILE)};
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      ${heading04ResponsiveFontStyles(EBreakpoints.LAPTOP)}
    }
  }
`;

export const textStyles = css`
  dl,
  p {
    padding-bottom: 30px;
    margin: 0;
    ${bodyResponsiveFontStyles(EBreakpoints.MOBILE)};
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      ${bodyResponsiveFontStyles(EBreakpoints.LAPTOP)}
    }
  }

  dd {
    margin-left: 25px;
  }

  a {
    color: ${linkColor};
    text-decoration: none;
    display: inline-flex;
    transition: filter 0.2s ease;

    &:hover {
      filter: brightness(1.3);
    }
  }

  mark {
    color: ${markColor};
    background-color: ${markBackgroundColor};
  }

  blockquote {
    padding-left: 15px;
    margin: 0px 25px 20px;
    border-left-width: 3px;
    border-left-style: solid;
    border-color: ${blockquoteColor};
    ${blockquoteResponsiveFontStyles(EBreakpoints.MOBILE)};
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      margin: 0px 30px 30px;
      ${blockquoteResponsiveFontStyles(EBreakpoints.LAPTOP)}
    }
  }

  aside {
    padding: 15px;
    margin-bottom: 30px;
    border-radius: 4px;
    border-left: 8px solid ${asideColor};
    background-color: ${asideBackgroundColor};
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      padding: 30px;
    }
  }

  code {
    background-color: ${codeBackgroundColor};
    border-radius: 5px;
    padding: 3px 5px;
  }
`;

export const tableStyles = css`
  ul,
  ol {
    padding: 0;
    margin: 0px 0px 25px 20px;
    list-style-position: outside;
    list-style-image: none;
    ${listResponsiveFontStyles(EBreakpoints.MOBILE)}
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      ${listResponsiveFontStyles(EBreakpoints.LAPTOP)}
      margin: 0px 0px 30px 30px;
      list-style-image: none;
    }
  }
  li {
    margin-bottom: 0;
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      margin-bottom: 5px;
    }
  }
`;

export const inputStyles = css`
  input,
  textarea {
    padding: 5px;
    border: 2px solid ${inputColor};
    background: ${inputBackgroundColor};
    color: ${textColor};
  }
`;

export const mdxStyles = css`
  .centered {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .spaced {
    padding: 15px 0;
  }

  .full-width {
    width: 100%;
  }

  .space-bottom {
    padding-bottom: 30px;
  }
`;
