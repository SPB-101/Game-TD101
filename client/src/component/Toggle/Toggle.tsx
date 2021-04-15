import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { ThemeContext } from "../ThemeProvider";

import "./Toggle.scss";

export const Toggle = (): JSX.Element => {
  const { light, toggle } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className="toggle-switch">
      <span>{t("dark")}</span>
      <span>
        <label className="switch">
          <input
            id="theme-switch"
            className="switch__input"
            type="checkbox"
            onChange={toggle}
            checked={light}
          />
          <span className="slider round" />
        </label>
      </span>
      <span>{t("light")}</span>
    </div>
  );
};
