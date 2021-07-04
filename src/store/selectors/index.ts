import { TSelector } from "ts-use";

import { ETheme } from "~ts/enums";

import { TState } from "../store";

export const getTheme: TSelector<TState, ETheme> = state => state.theme;
