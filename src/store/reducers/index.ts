import { ETheme } from "~ts/enums";
import { getSwitchedTheme } from "~ts/utils";

import { EActionTypes, TAction } from "../actions";
import { TState } from "../store";

export const initialState: TState = {
  theme: ETheme.Dark
};

export const reducer = (state: TState, { type, payload }: TAction) => {
  switch (type) {
    case EActionTypes.ThemeSet:
      return {
        ...state,
        theme: payload
      };
    case EActionTypes.ThemeSwitch:
      return {
        ...state,
        theme: getSwitchedTheme(state.theme)
      };
    default:
      throw new Error();
  }
};
