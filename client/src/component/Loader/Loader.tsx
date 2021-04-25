import React, { useEffect, useState } from "react";
import classNames from "classnames";

import type { Props } from "./types";

import "./Loader.scss";
import LoaderIcon from "../../assets/images/icons/loader.svg";

export const Loader = ({ delay = 200 }: Props) => {
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
