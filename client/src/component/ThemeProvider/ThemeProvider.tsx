import React, { useCallback, useEffect, useState } from "react";

import { THEME_LIGHT, THEME_DARK, THEME_LS } from "@constants/index";

import type { Props } from "./types";

const initialState = {
  light: false,
  toggle: () => {
    /**/
  },
};

const getPreferTheme = (isLight: boolean) =>
  isLight ? THEME_LIGHT : THEME_DARK;

const setBodyClass = (isLight: boolean) => {
  const $body = document.querySelector("body")!;
  const theme = getPreferTheme(isLight);
  if (theme === THEME_LIGHT) {
    $body.classList.add(theme);
  } else {
    $body.classList.remove(...$body.classList);
  }
};

export const ThemeContext = React.createContext(initialState);

export const ThemeProvider: React.FC = ({ children }: Props) => {
  const [light, setLight] = useState(false);
  useEffect(() => {
    const isLight = localStorage.getItem(THEME_LS) === THEME_LIGHT;
    setLight(isLight);
    setBodyClass(isLight);
  }, [light]);

  const toggle = useCallback(() => {
    const isLight = !light;
    const theme = getPreferTheme(isLight);
    localStorage.setItem(THEME_LS, theme);
    setLight(isLight);
  }, [light]);

  return (
    <ThemeContext.Provider value={{ light, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
