import React from "react";
import styled, { keyframes } from "styled-components";

import { IContainerProps, IStyledProps } from "~ts/typings";

const revealComponentAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const RevealContainerStyled = styled.div`
  animation: ${revealComponentAnimation} 1s ease-out;
`;

interface IRevealContainerProps extends IContainerProps, IStyledProps {}

export const RevealContainer = ({
  children,
  className
}: IRevealContainerProps) => (
  <RevealContainerStyled className={className}>
    {children}
  </RevealContainerStyled>
);
