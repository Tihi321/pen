import {
  useReducerSelector,
  useReducerStore,
  withReducerProvider
} from "ts-use";

import { ETheme } from "~ts/enums";

import { initialState, reducer } from "./reducers";

export type TState = {
  theme: ETheme;
};

const useStore = useReducerStore;

const useSelector = useReducerSelector;

const withThemeProvider = withReducerProvider(reducer, initialState);

export { useStore, useSelector, withThemeProvider };
