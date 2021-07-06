import { css } from "styled-components";

export const resetFontStyles = css`
  line-height: 1;
  font-size: 1em;
`;

export const resetButtonStyles = css`
  background: none;
  border: none;
  padding: 0;
`;

export const resetLinkStyles = css`
  &:hover {
    filter: unset;
  }
`;

export const removeListkStyles = css`
  margin: 0;

  li {
    list-style: none;
  }
`;
