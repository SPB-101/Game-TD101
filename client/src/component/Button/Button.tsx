import React from "react";

import "./Button.scss";

import type { Props } from "./types";

export const Button = ({ className, text, ...props }: Props): JSX.Element => {
  return (
    <button className={`${className} button`} {...props}>
      {text}
    </button>
  );
};
