import React from "react";

import { IStyledProps, THeadingSizes } from "~ts/typings";

interface IHeadingProps extends IStyledProps {
  size: THeadingSizes;
  children: React.ReactNode;
}

const tags = {
  large: "h1",
  medium: "h2",
  regular: "h3",
  small: "h4"
};

export const Heading = ({ size, children, ...props }: IHeadingProps) =>
  React.createElement(tags[size] || tags.regular, props, children);
