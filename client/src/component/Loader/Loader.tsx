import React, { useEffect, useState } from "react";
import classNames from "classnames";

import LoaderIcon from "../../assets/images/icons/loader.svg";

import type { Props } from "./types";

import "./Loader.scss";

export const Loader = ({ delay = 200 }: Props): JSX.Element => {
  const [view, setView] = useState(true);

  const loaderClass = classNames("loader", {
    "loader--hide": view,
  });

  useEffect(() => {
    const timer = setTimeout(() => setView(false), delay);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={loaderClass}>
      <LoaderIcon />
    </div>
  );
};
