import React from "react";
import styled from "styled-components";

import { bottomLineBorderColor } from "~ts/themes";
import { IContainerProps, IStyledProps } from "~ts/typings";

interface IBottomLineContainerProps extends IContainerProps, IStyledProps {}

const BottomLineContainerStyled = styled.div`
  padding: 4px 0;
  border-bottom: 1px solid ${bottomLineBorderColor};
`;

export const BottomLineContainer = ({
  children,
  className
}: IBottomLineContainerProps) => (
  <BottomLineContainerStyled className={className}>
    {children}
  </BottomLineContainerStyled>
);
