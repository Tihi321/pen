import { ETheme } from "~ts/enums";

export const getSwitchedTheme = (theme: ETheme) =>
  theme === ETheme.Light ? ETheme.Dark : ETheme.Light;

export const isTheme = (theme: string) =>
  theme && (theme === ETheme.Light || theme === ETheme.Dark);
