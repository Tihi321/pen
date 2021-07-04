import React from "react";
import styled from "styled-components";

import { Heading } from "~ts/components/Common";
import { EHeadingSizes } from "~ts/enums";
import { IStyledProps } from "~ts/typings";

const ListTitleStyled = styled(Heading)`
  padding-bottom: 15px;
`;

interface IListTitleProps extends IStyledProps {
  title: string;
}

export const ListTitle = ({ title, className }: IListTitleProps) => (
  <ListTitleStyled className={className} size={EHeadingSizes.Regular}>
    {title}
  </ListTitleStyled>
);
