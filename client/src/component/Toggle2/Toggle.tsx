import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { ThemeContext } from "../ThemeProvider";

import "./Toggle.scss";

export const Toggle2 = (): JSX.Element => {
  const { light, toggle } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className="toggle-switch">
      <span>
        <label className="switch2">
          <input
            id="theme-switch"
            className="switch2__input"
            type="checkbox"
            onChange={toggle}
            checked={light}
          />
          <span className="slider2 round" />
        </label>
      </span>
      <span className="toggle-switch__label">
        {light ? t("dark") : t("light")}
      </span>
    </div>
  );
};
