import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

interface ISEOProps {
  title: string;
  description?: string;
  imageUrl?: string;
  pageUrl?: string;
}

interface IPageQuery {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: {
        name: string;
      };
      siteUrl: string;
    };
  };
  logo: {
    publicURL: string;
  };
}

export const SEO = ({ title, description, imageUrl, pageUrl }: ISEOProps) => {
  const { site, logo }: IPageQuery = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              name
            }
            siteUrl
          }
        }
        logo: file(relativePath: { eq: "logo.svg" }) {
          publicURL
        }
      }
    `
  );

  const siteDescription = description || site.siteMetadata.description;
  const pageImageUrl = imageUrl || logo.publicURL;
  const siteTitle = `${title} | ${site.siteMetadata.title}`;
  const siteUrl =
    (pageUrl && `${site.siteMetadata.siteUrl}/${pageUrl}`) ||
    site.siteMetadata.siteUrl;

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: siteDescription
        },
        {
          property: `og:title`,
          content: siteTitle
        },
        {
          property: `og:description`,
          content: siteDescription
        },
        {
          property: `og:image`,
          content: pageImageUrl
        },
        {
          property: `og:url`,
          content: siteUrl
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author.name
        },
        {
          name: `twitter:title`,
          content: siteTitle
        },
        {
          name: `twitter:description`,
          content: siteDescription
        }
      ]}
    />
  );
};
