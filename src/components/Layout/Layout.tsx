import React from "react";

import { IContainerProps } from "~ts/typings";

import { Footer } from "./Footer";
import { Head } from "./Head";
import { Header } from "./Header";
import { SEO } from "./SEO";

interface ILayoutProps extends IContainerProps {
  title: string;
  description?: string;
  pageUrl?: string;
}

export const Layout = ({
  children,
  title,
  description,
  pageUrl
}: ILayoutProps) => (
  <>
    <SEO title={title} description={description} pageUrl={pageUrl} />
    <Head />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
