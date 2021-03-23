import React from "react";

import "./Button.scss";

import { Props } from "./types";

export const Button = ({ className, ...props }: Props): JSX.Element => {
  return <button className={`${className} button`} {...props}></button>;
};
