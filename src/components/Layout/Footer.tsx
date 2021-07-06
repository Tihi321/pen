import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

import { FeaturedButton } from "~ts/components/Buttons";
import { TextSize } from "~ts/components/Common";
import { InternalLink, Link } from "~ts/components/Links";
import {
  CONTACT,
  EBreakpoints,
  EFeaturedButtonType,
  EInternalLinks,
  ESide,
  ETextSizes,
  EZIndex
} from "~ts/enums";
import { useMediaQuery, useSwitchTheme } from "~ts/hooks";
import { getTheme, useSelector } from "~ts/store";
import { backgroundColor } from "~ts/themes";
import { media } from "~ts/utils";

const FooterStyled = styled.footer`
  display: flex;
  box-sizing: content-box;
  flex-direction: column;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;

  ${media(EBreakpoints.TABLET)} {
    padding-bottom: 0;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterLinksGroupStyled = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const FooterAuthorStyled = styled.div`
  text-align: center;
  margin-top: 20px;
  ${media(EBreakpoints.TABLET)} {
    margin-top: 0;
  }
`;

const FooterLinkStyled = styled(Link)`
  margin-right: 10px;
`;

const ThemeButtonContainerStyled = styled.div`
  background-color: ${backgroundColor};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  z-index: ${EZIndex.FOOTER_THEME_BUTTON};
`;

const ThemeButtonTextStyled = styled(TextSize)`
  text-transform: capitalize;
`;

interface IPageQuery {
  site: {
    siteMetadata: {
      author: {
        name: string;
      };
    };
  };
}

export const Footer = () => {
  const { site }: IPageQuery = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author {
              name
            }
          }
        }
      }
    `
  );

  const theme = useSelector(getTheme);
  const { switchTheme } = useSwitchTheme();

  const isMobile = useMediaQuery(EBreakpoints.MOBILE, ESide.MIDDLE);

  return (
    <FooterStyled>
      <FooterLinksGroupStyled>
        <FooterLinkStyled to={CONTACT.MAIL}>Mail</FooterLinkStyled>
        <FooterLinkStyled to={CONTACT.GITHUB}>Github</FooterLinkStyled>
        <FooterLinkStyled to={CONTACT.LINKEDIN}>Linkedin</FooterLinkStyled>
        {isMobile && <InternalLink to={EInternalLinks.BLOG}>Blog</InternalLink>}
      </FooterLinksGroupStyled>
      <FooterAuthorStyled>
        © {new Date().getFullYear()} {site.siteMetadata.author.name}
      </FooterAuthorStyled>
      {isMobile && (
        <ThemeButtonContainerStyled>
          <FeaturedButton
            type={EFeaturedButtonType.Wide}
            onClick={() => switchTheme()}
          >
            <ThemeButtonTextStyled size={ETextSizes.Medium}>
              {theme}
            </ThemeButtonTextStyled>
          </FeaturedButton>
        </ThemeButtonContainerStyled>
      )}
    </FooterStyled>
  );
};
