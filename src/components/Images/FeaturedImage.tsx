import React, { useState } from "react";
import styled from "styled-components";

import {
  EFeaturedImageSizes,
  ETextSizes,
  FEATURED_IMAGE_MAX_HEIGHT
} from "~ts/enums";
import { backdropColor, quoteBGColor, quoteColor } from "~ts/themes";
import { IStyledProps } from "~ts/typings";

import { TextSize } from "../Common";

interface IFeaturedImageProps extends IStyledProps {
  src: string;
  alt: string;
  quote?: string;
  quotebackground?: string;
  size?: EFeaturedImageSizes;
}

const FeaturedImageStyled = styled(({ alt, ...props }) => (
  <img alt={alt} {...props} />
))`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 58vw;
  max-height: ${props => props.maxheight};
`;

const FeaturedImageContainerStyled = styled(({ children, ...props }) => (
  <span {...props}>{children}</span>
))`
  display: block;
  position: relative;
  transition: opacity 0.5s ease;
  opacity: ${props => (props.loaded === "true" ? "1" : "0")};
`;

const QuoteStyled = styled.span`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${backdropColor};
  color: ${quoteColor};
  align-items: center;
  justify-content: center;
`;

const QuoteTextStyled = styled(({ children, ...props }) => (
  <TextSize {...props}>{children}</TextSize>
))`
  max-width: 82%;
  text-align: center;
  padding: 5px;
  background-color: ${props =>
    props.quotebackground ? props.quotebackground : quoteBGColor};
  display: inline-block;
`;

export const FeaturedImage = ({
  src,
  alt,
  size = EFeaturedImageSizes.Regular,
  className,
  quote,
  quotebackground
}: IFeaturedImageProps) => {
  const [loaded, setLoaded] = useState("false");

  return (
    <FeaturedImageContainerStyled loaded={loaded}>
      <FeaturedImageStyled
        maxheight={FEATURED_IMAGE_MAX_HEIGHT[size]}
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setLoaded("true")}
      />
      {quote && (
        <QuoteStyled>
          <QuoteTextStyled
            quotebackground={quotebackground}
            size={ETextSizes.Regular}
          >
            {quote}
          </QuoteTextStyled>
        </QuoteStyled>
      )}
    </FeaturedImageContainerStyled>
  );
};
