import React from "react";
import "./TextField.scss";

import type { Props } from "./types";

export const TextField = ({
  className,
  error = "",
  label,
  name,
  ...props
}: Props): JSX.Element => {
  return (
    <label htmlFor={name} className="text-field">
      <input
        name={name}
        className={`${className} text-field__input`}
        {...props}
      />
      <span className="text-field__label">{label}</span>
      <span className="text-field__error">{error}</span>
    </label>
  );
};
