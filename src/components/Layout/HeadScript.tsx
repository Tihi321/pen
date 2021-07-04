import React from "react";
import { Helmet } from "react-helmet";

interface IHeadScriptProps {
  src: string;
  type?: string;
  async?: boolean;
}

export const HeadScript = ({
  src,
  type = "javascript",
  async = false,
  ...props
}: IHeadScriptProps) => (
  <Helmet>
    {type === "javascript" ? (
      <script type="text/javascript" src={src} {...props} async={async} />
    ) : (
      <link rel="stylesheet" type="text/css" href={src} {...props} />
    )}
  </Helmet>
);
