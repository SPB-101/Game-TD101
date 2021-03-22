import React from "react";
import "./TextField.scss";

import { Props } from "./types";

export const TextField = ({
  className,
  error = "",
  label,
  ...props
}: Props): JSX.Element => {
  return (
    <label htmlFor="" className="text-field">
      <input className={`${className} text-field__input`} {...props} />
      <span className="text-field__label">{label}</span>
      <span className="text-field__error">{error}</span>
    </label>
  );
};
