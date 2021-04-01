import React from "react";
import classNames from "classnames";

import "./TextField.scss";

import type { Props } from "./types";

export const TextField = ({
  className,
  error = "",
  name,
  label,
  type,
  ...props
}: Props): JSX.Element => {
  const fieldClass = classNames("text-field", {
    ["text-field_password"]: type === "password",
    ["text-field_error"]: !!error,
  });
  const inputClass = classNames("text-field__input", className);

  return (
    <label htmlFor={name} className={fieldClass}>
      <input name={name} className={inputClass} {...props} type={type} />
      <div className="text-field__label">{label}</div>
      <span className="text-field__error">{error}</span>
    </label>
  );
};
