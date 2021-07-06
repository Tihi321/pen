import React from "react";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

import { LayoutContainer, MaxWidthContainer } from "~ts/components/Containers";
import {
  coreStyles,
  headingStyles,
  inputStyles,
  mdxStyles,
  tableStyles,
  textStyles
} from "~ts/styles";
import { IContainerProps } from "~ts/typings";

const CoreStyle = createGlobalStyle`
  ${coreStyles}
  ${headingStyles}
  ${textStyles}
  ${tableStyles}
  ${inputStyles}
  ${mdxStyles}
`;

interface IStyleLayout extends IContainerProps {
  withoutLayout?: boolean;
}

export const StyleLayout = ({ children, withoutLayout }: IStyleLayout) => (
  <>
    <Normalize />
    <CoreStyle />
    <MaxWidthContainer>
      {withoutLayout ? (
        <>{children}</>
      ) : (
        <LayoutContainer>{children}</LayoutContainer>
      )}
    </MaxWidthContainer>
  </>
);
