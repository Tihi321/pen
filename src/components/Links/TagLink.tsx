import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { TagText } from "~ts/components/Common";
import { TagContainer } from "~ts/components/Containers";
import { ETagContainerType, ETagType } from "~ts/enums";
import { resetFontStyles, resetLinkStyles } from "~ts/styles";
import { IStyledProps } from "~ts/typings";

interface ILinkProps extends IStyledProps {
  text: string;
  to: string;
  active?: boolean;
}

const LinkStyled = styled(Link)`
  ${resetFontStyles}
  ${resetLinkStyles}
`;

export const TagLink = ({
  text,
  to,
  className,
  active = false
}: ILinkProps) => (
  <LinkStyled className={className} to={to}>
    <TagText
      text={text}
      className={className}
      type={active ? ETagType.Tertiary : ETagType.Primary}
    />
  </LinkStyled>
);

export const FeaturedTagLink = ({
  text,
  to,
  className,
  active = false
}: ILinkProps) => (
  <TagContainer
    className={className}
    type={active ? ETagContainerType.Secondary : undefined}
  >
    <LinkStyled className={className} to={to}>
      <TagText
        text={text}
        className={className}
        type={active ? ETagType.Tertiary : ETagType.Secondary}
      />
    </LinkStyled>
  </TagContainer>
);
