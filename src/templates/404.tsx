import React from "react";
import styled from "styled-components";

import { CenterContainer } from "~ts/components/Containers";
import { Layout } from "~ts/components/Layout";
import { InternalLink } from "~ts/components/Links";
import { EInternalLinks } from "~ts/enums";
import { textColor } from "~ts/themes";

const TitleStyled = styled.h1`
  margin: 20px 0;
  padding: 15px;
  color: ${textColor};
`;

const NotFoundPage = () => (
  <Layout title="Page Not Found">
    <CenterContainer>
      <TitleStyled>Page not found</TitleStyled>
      <InternalLink to={EInternalLinks.HOME}>Go home</InternalLink>
    </CenterContainer>
  </Layout>
);

export default NotFoundPage;
