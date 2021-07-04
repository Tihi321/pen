import { Breakpoints, EBreakpoints, ESide } from "~ts/enums";

export type TMediaProps = (breakpoint: EBreakpoints, side?: ESide) => string;
export type TUseMediaProps = (
  breakpoint: EBreakpoints,
  side?: ESide
) => boolean;

export const createMediaQueryCommand: TMediaProps = (breakpoint, side) => {
  switch (side) {
    case ESide.UP:
      return `(min-width: ${Breakpoints[breakpoint][0]}px)`;
    case ESide.DOWN:
      return `(max-width: ${Breakpoints[breakpoint][1]}px)`;
    case ESide.MIDDLE:
      return `(min-width: ${Breakpoints[breakpoint][0]}px) and (max-width: ${Breakpoints[breakpoint][1]}px)`;
    default:
      return `(min-width: ${Breakpoints[breakpoint][0]}px)`;
  }
};

export const media: TMediaProps = (breakpoint, side) =>
  `@media ${createMediaQueryCommand(breakpoint, side)}`;
