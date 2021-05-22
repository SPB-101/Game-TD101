import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { ThemeContext } from "../ThemeProvider";

import { Props } from "./types";

import "./Toggle.scss";

export const Toggle = ({ small }: Props) => {
  const { light, toggle } = useContext(ThemeContext);
  const { t } = useTranslation();
  const toggleClass = classnames("toggle-switch", {
    [`toggle-switch--small`]: small,
  });

  return (
    <div className={toggleClass}>
      <span className="toggle-switch__label">{!small ? t("dark") : null}</span>
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
      <span className="toggle-switch__label toggle-switch__label-right">
        {!small ? t("light") : light ? t("dark") : t("light")}
      </span>
    </div>
  );
};
