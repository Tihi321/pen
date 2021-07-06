import React from "react";
import styled from "styled-components";

import { CONTAINER_WIDTH } from "~ts/enums";
import { IContainerProps } from "~ts/typings";

const MaxWidthContainerStyled = styled.div`
  max-width: ${CONTAINER_WIDTH}px;
  width: 100%;
`;

export const MaxWidthContainer = ({ children }: IContainerProps) => (
  <MaxWidthContainerStyled>{children}</MaxWidthContainerStyled>
);
