import React from "react";
import styled from "styled-components";

import { ETagContainerType } from "~ts/enums";
import { featuredTagColor } from "~ts/themes";
import { IStyledProps } from "~ts/typings";

interface IContainerProps extends IStyledProps {
  children: React.ReactNode;
  type?: ETagContainerType;
}

const TagContainerStyled = styled(({ children, ...props }: IContainerProps) => (
  <span {...props}>{children}</span>
))`
  padding: 2px 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-style: solid;
  border-color: ${featuredTagColor};
  ${props =>
    props.type === ETagContainerType.Secondary &&
    `background-color: ${featuredTagColor(props)}`}
`;

export const TagContainer = ({
  children,
  className,
  type = ETagContainerType.Primary
}: IContainerProps) => (
  <TagContainerStyled type={type} className={className}>
    {children}
  </TagContainerStyled>
);
