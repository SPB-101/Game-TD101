import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { getTheme } from "@selectors/widgets/currentView";
import { setThemeProfile } from "@thunks/widgets/profile";
import { THEME_LIGHT, THEME_DARK } from "@constants/index";

import type { Props } from "./types";
import type { State } from "@reducers/index";

import "./style.scss";

const setBodyClass = (themeName: string) => {
  const $body = document.querySelector("body")!;
  $body.classList.remove(...$body.classList);
  $body.classList.add(themeName);
};

export const ToggleBlock = ({
  small,
  theme = THEME_DARK,
  setThemeThunk,
}: Props) => {
  const { t } = useTranslation();

  const toggleClass = classnames("toggle-switch", {
    [`toggle-switch--small`]: small,
  });

  const toggleTheme = useCallback(() => {
    const themeName = theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
    setThemeThunk(themeName);
    setBodyClass(themeName);
  }, [theme]);

  const isLight = theme ? theme === THEME_LIGHT : false;

  useEffect(() => {
    setBodyClass(theme);
  }, []);

  return (
    <div className={toggleClass}>
      <span className="toggle-switch__label">{!small ? t("dark") : null}</span>
      <span>
        <label className="switch">
          <input
            id="theme-switch"
            className="switch__input"
            type="checkbox"
            onChange={toggleTheme}
            checked={isLight}
          />
          <span className="slider round" />
        </label>
      </span>
      <span className="toggle-switch__label toggle-switch__label-right">
        {!small ? t("light") : isLight ? t("dark") : t("light")}
      </span>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  theme: getTheme(state),
});

const mapDispatchToProps = {
  setThemeThunk: setThemeProfile,
};

export const Toggle = connect(mapStateToProps, mapDispatchToProps)(ToggleBlock);
