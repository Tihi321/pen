export enum EZIndex {
  PROJECT_LIST = 5,
  FOOTER_THEME_BUTTON = 10
}
export enum EBreakpoints {
  MOBILE = "MOBILE",
  TABLET = "TABLET",
  LAPTOP = "LAPTOP",
  DESKTOP = "DESKTOP"
}

export const Breakpoints = {
  [EBreakpoints.MOBILE]: [0, 380],
  [EBreakpoints.TABLET]: [381, 768],
  [EBreakpoints.LAPTOP]: [769, 1024],
  [EBreakpoints.DESKTOP]: [1025, 1440]
};

export enum ESide {
  UP = "up",
  DOWN = "down",
  MIDDLE = "middle"
}

export const CoreStylesClass = "core-styles-class";
