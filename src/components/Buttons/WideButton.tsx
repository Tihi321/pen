import React from "react";
import styled from "styled-components";

import { TextSize } from "~ts/components/Common";
import { EBreakpoints, ESide, ETextSizes } from "~ts/enums";
import { resetButtonStyles } from "~ts/styles";
import { wideButtonColor } from "~ts/themes";
import { IStyledProps } from "~ts/typings";
import { media } from "~ts/utils";

interface IButtonProps extends IStyledProps {
  text: string;
  onClick: () => void;
}

const ButtonStyled = styled.button`
  ${resetButtonStyles}
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
  border: 2px solid ${wideButtonColor};

  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    border-radius: 5px;
  }
`;

const TextStyled = styled(TextSize)`
  color: ${wideButtonColor};
`;

export const WideButton = ({ text, onClick, className }: IButtonProps) => (
  <ButtonStyled onClick={onClick} className={className}>
    <TextStyled size={ETextSizes.Medium}>{text}</TextStyled>
  </ButtonStyled>
);
