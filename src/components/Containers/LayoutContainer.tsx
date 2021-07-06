import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useLocalStorage } from "ts-use";

import { ETheme, LocalStorageKeys } from "~ts/enums";
import { initialState, setTheme, useStore } from "~ts/store";
import { IContainerProps } from "~ts/typings";
import { isTheme } from "~ts/utils";

import { GdrpModal } from "../Modals";
import { RevealContainer } from "./RevealContainer";

const RevealContainerStyled = styled(RevealContainer)`
  display: grid;
  height: 100%;
  grid-template-rows: max-content 1fr max-content;
`;

const LoaderContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const LayoutContainer = ({ children }: IContainerProps) => {
  const [showLoader, setShowLoader] = useState(true);
  const { dispatch } = useStore();
  const {
    data: isGdprCompliant,
    setLocalStorage: setGdprLocalStorage
  } = useLocalStorage(LocalStorageKeys.Gdpr, false);
  const { data: theme } = useLocalStorage(
    LocalStorageKeys.Theme,
    initialState.theme
  );

  const memoizedTheme = useMemo(() => theme, [theme]);
  const memoizedIsGdprCompliant = useMemo(() => isGdprCompliant, [
    isGdprCompliant
  ]);

  const onGdprAgree = () => {
    setGdprLocalStorage(true);
  };

  useEffect(() => {
    if (isTheme(memoizedTheme as string)) {
      dispatch(setTheme(memoizedTheme as ETheme));
    }
  }, [memoizedTheme]);

  useEffect(() => {
    setShowLoader(false);
  }, [memoizedTheme, memoizedIsGdprCompliant]);

  if (showLoader) {
    return <LoaderContainer />;
  }

  return (
    <RevealContainerStyled>
      {!memoizedIsGdprCompliant && <GdrpModal onClick={onGdprAgree} />}
      {children}
    </RevealContainerStyled>
  );
};
