import React, { useCallback, useEffect, useState } from "react";

import { resolveSetTheme } from "@resolvers/users";
import { THEME_LIGHT, THEME_DARK, THEME_LS } from "@constants/index";

import type { Props } from "./types";

const initialState = {
  theme: THEME_LIGHT,
  toggle: () => {
    /**/
  },
};

const setBodyClass = (themeName: string) => {
  const $body = document.querySelector("body")!;
  if (themeName === THEME_LIGHT) {
    $body.classList.add(themeName);
  } else {
    $body.classList.remove(...$body.classList);
  }
};

export const ThemeContext = React.createContext(initialState);

export const ThemeProvider = ({ children, initialTheme }: Props) => {
  const [theme, setTheme] = useState(initialTheme || THEME_LIGHT);

  useEffect(() => {
    if (initialTheme === undefined) {
      const themeName = localStorage.getItem(THEME_LS) || THEME_LIGHT;
      setTheme(themeName);
      setBodyClass(themeName);
    }
  }, [theme]);

  const toggle = useCallback(() => {
    const themeName = theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;

    localStorage.setItem(THEME_LS, themeName);
    resolveSetTheme({
      theme: themeName,
    });

    setTheme(themeName);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
