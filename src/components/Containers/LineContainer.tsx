import React from "react";
import styled from "styled-components";

import { bottomLineBorderColor } from "~ts/themes";
import { IContainerProps, IStyledProps } from "~ts/typings";

interface IBottomLineContainerProps extends IContainerProps, IStyledProps {}

const LineContainerStyled = styled.div`
  padding: 2px 0;
  border-bottom: 1px solid ${bottomLineBorderColor};
  border-top: 1px solid ${bottomLineBorderColor};
`;

export const LineContainer = ({
  children,
  className
}: IBottomLineContainerProps) => (
  <LineContainerStyled className={className}>{children}</LineContainerStyled>
);
