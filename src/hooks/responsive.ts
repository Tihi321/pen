import { useMediaQuery as useResponsive } from "react-responsive";

import { createMediaQueryCommand, TUseMediaProps } from "~ts/utils";

export const useMediaQuery: TUseMediaProps = (breakpoint, side) =>
  useResponsive({
    query: createMediaQueryCommand(breakpoint, side)
  });
