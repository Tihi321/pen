import React from "react";
import styled from "styled-components";

import { EBreakpoints, ESide } from "~ts/enums";
import { modalBackgroundColor } from "~ts/themes";
import { IContainerProps, IStyledProps } from "~ts/typings";
import { media } from "~ts/utils";

const ModalStyled = styled.div`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: ${modalBackgroundColor};
  bottom: 60px;

  ${media(EBreakpoints.TABLET, ESide.UP)} {
    bottom: 0;
  }
`;

interface IModalProps extends IStyledProps, IContainerProps {}

export const BottomModal = ({ children, className }: IModalProps) => (
  <ModalStyled className={className}>{children}</ModalStyled>
);
