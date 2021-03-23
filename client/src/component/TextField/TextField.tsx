import React from "react";
import "./TextField.scss";

import { Props } from "./types";

export const TextField = ({
  className,
  error = "",
  name,
  label,
  ...props
}: Props): JSX.Element => {
  return (
    <label htmlFor={name} className="text-field">
      <input
        name={name}
        className={`${className} text-field__input`}
        {...props}
      />
      <div className="text-field__label">{label}</div>
      <div className="text-field__error">{error}</div>
    </label>
  );
};
