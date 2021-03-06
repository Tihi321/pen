import React from "react";
import styled from "styled-components";

import { FeaturedButton } from "~ts/components/Buttons";
import { InternalLink } from "~ts/components/Links";
import { EBreakpoints, EHeadingSizes, EInternalLinks } from "~ts/enums";
import { useMediaQuery, useSwitchTheme } from "~ts/hooks";
import Logo from "~ts/images/logo.inline.svg";
import { getTheme, useSelector } from "~ts/store";
import { logoBackgroundColor, logoForegroundColor } from "~ts/themes";
import { media } from "~ts/utils";
import { Heading } from "../Common";

const TitleStyled = styled(Heading)`
  text-transform: uppercase;
  align-self: center;
`;

const LogoStyled = styled(Logo)`
  width: 126px;
  height: 130px;
  --logo-background-color: ${logoBackgroundColor};
  --logo-text-color: ${logoForegroundColor};
`;

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  padding-bottom: 40px;

  ${media(EBreakpoints.TABLET)} {
    padding-bottom: 60px;
    justify-content: space-between;
  }
`;

const HeaderLinksGroupStyled = styled.div`
  display: flex;
  height: fit-content;
  align-items: center;
`;

const ThemeButtonStyled = styled(FeaturedButton)`
  text-transform: capitalize;
`;

interface IHeaderProps {
  title?: string;
}

export const Header = ({ title }: IHeaderProps) => {
  const theme = useSelector(getTheme);
  const { switchTheme } = useSwitchTheme();
  const isTablet = useMediaQuery(EBreakpoints.TABLET);

  return (
    <HeaderStyled>
      <InternalLink to={EInternalLinks.HOME}>
        <LogoStyled />
      </InternalLink>
      {isTablet && (
        <>
          <TitleStyled size={EHeadingSizes.Medium}>
            {title || "Pen"}
          </TitleStyled>
          <HeaderLinksGroupStyled>
            <ThemeButtonStyled onClick={() => switchTheme()}>
              {theme}
            </ThemeButtonStyled>
          </HeaderLinksGroupStyled>
        </>
      )}
    </HeaderStyled>
  );
};
