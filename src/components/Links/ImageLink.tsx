import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { EFeaturedImageSizes } from "~ts/enums";
import { resetLinkStyles } from "~ts/styles";
import { IStyledProps } from "~ts/typings";

import { FeaturedImage } from "../Images";

interface IImageLinkProps extends IStyledProps {
  alt: string;
  to: string;
  src: string;
  size?: EFeaturedImageSizes;
}

const LinkStyled = styled(Link)`
  ${resetLinkStyles}
  cursor: pointer;
  display: block;
`;

export const ImageLink = ({
  alt,
  to,
  src,
  className,
  size
}: IImageLinkProps) => (
  <LinkStyled className={className} to={to}>
    <FeaturedImage size={size} src={src} alt={alt} />
  </LinkStyled>
);
