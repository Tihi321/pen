import React from "react";
import styled from "styled-components";

import { IContainerProps } from "~ts/typings";

const CenterContainerStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CenterContainer = ({ children }: IContainerProps) => (
  <CenterContainerStyled>{children}</CenterContainerStyled>
);
