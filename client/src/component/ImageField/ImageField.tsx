import React from "react";
import classNames from "classnames";

import type { Props } from "./types";

import "./ImageField.scss";

export const ImageField = ({ name, label, onChange, disabled }: Props) => {
  const fieldClass = classNames("image-field", classNames);

  return (
    <div className={fieldClass}>
      <label htmlFor={name} className="image-field_label">
        {label}
        <input
          type="file"
          name={name}
          className="image-field_input"
          disabled={disabled}
          onChange={onChange}
        />
      </label>
    </div>
  );
};
