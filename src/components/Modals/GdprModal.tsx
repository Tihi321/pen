import React from "react";
import styled from "styled-components";

import { FeaturedButton } from "../Buttons";
import { BottomModal } from "./Modal";

const ModalStyled = styled(BottomModal)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

const TextStyled = styled.div`
  padding-right: 20px;
`;

interface IModalProps {
  onClick: () => void;
}
export const GdrpModal = ({ onClick }: IModalProps) => (
  <ModalStyled>
    <TextStyled>
      This blog does not have any analytics scripts implemened. It does not
      track and do not collect any data related to visitors
    </TextStyled>
    <FeaturedButton onClick={onClick}>Agree</FeaturedButton>
  </ModalStyled>
);
