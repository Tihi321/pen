import { useLocalStorage } from "ts-use";

import { LocalStorageKeys } from "~ts/enums";
import {
  getTheme,
  switchTheme as switchThemeAction,
  useSelector,
  useStore
} from "~ts/store";
import { getSwitchedTheme } from "~ts/utils";

export const useSwitchTheme = () => {
  const { dispatch } = useStore();
  const theme = useSelector(getTheme);
  const { setLocalStorage: saveTheme } = useLocalStorage(
    LocalStorageKeys.Theme,
    false
  );

  const switchTheme = () => {
    dispatch(switchThemeAction());
    saveTheme(getSwitchedTheme(theme));
  };

  return { switchTheme };
};
