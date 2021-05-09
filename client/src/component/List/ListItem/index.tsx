import React from "react";
import classNames from "classnames";

import type { Props } from "./types";

import "./style.scss";

export const ListItem = ({ className, children }: Props) => {
  const classListItem = classNames("list__item", {
    [`${className}`]: className,
  });
  return <li className={classListItem}>{children}</li>;
};
