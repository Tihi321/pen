import React from "react";

import { StyleLayout } from "./src/components/Layout";
import { CoreStylesClass } from "./src/enums";
import { ThemeContainer } from "./src/themes";

export const wrapRootElement = ({ element }) => (
  <ThemeContainer>{element}</ThemeContainer>
);

export const wrapPageElement = ({ element, props }) => (
  <StyleLayout {...props}>{element}</StyleLayout>
);

export const onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({
    className: CoreStylesClass,
  });
};
