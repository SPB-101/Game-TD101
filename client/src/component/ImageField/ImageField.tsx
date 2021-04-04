import React from "react";
import classNames from "classnames";

import "./ImageField.scss";

import type { Props } from "./types";

export const ImageField = ({ name, label, ...props }: Props): JSX.Element => {
  const fieldClass = classNames("image-field", classNames);

  return (
    <div className={fieldClass}>
      <label htmlFor={name} className="image-field_label">
        {label}
        <input
          type="file"
          name={name}
          className="image-field_input"
          {...props}
        />
      </label>
    </div>
  );
};
