import type { Action } from "@actions/index";

export const SET_THEME = "theme/SET_THEME";

export type SetThemeAction = Action<typeof SET_THEME, string>;
export type ThemeActions = SetThemeAction;

export const setTheme = (payload: string) =>
  ({
    type: SET_THEME,
    payload,
  } as SetThemeAction);
