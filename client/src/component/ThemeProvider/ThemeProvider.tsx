import React, { useCallback, useEffect, useState } from "react";

import { LIGHT_THEME, DARK_THEME, LS_THEME } from "../../constants";

import type { Props } from "./types";

const initialState = {
  light: false,
  toggle: () => {
    /**/
  },
};

const getPreferTheme = (isLight: boolean) =>
  isLight ? LIGHT_THEME : DARK_THEME;

const setBodyClass = (isLight: boolean) => {
  const $body = document.querySelector("body")!;
  const theme = getPreferTheme(isLight);
  if (theme === LIGHT_THEME) {
    $body.classList.add(theme);
  } else {
    $body.classList.remove(...$body.classList);
  }
};

export const ThemeContext = React.createContext(initialState);

export const ThemeProvider: React.FC = ({ children }: Props) => {
  const [light, setLight] = useState(false);
  useEffect(() => {
    const isLight = localStorage.getItem(LS_THEME) === LIGHT_THEME;
    setLight(isLight);
    setBodyClass(isLight);
  }, [light]);

  const toggle = useCallback(() => {
    const isLight = !light;
    const theme = getPreferTheme(isLight);
    localStorage.setItem(LS_THEME, theme);
    setLight(isLight);
  }, [light]);

  return (
    <ThemeContext.Provider value={{ light, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
