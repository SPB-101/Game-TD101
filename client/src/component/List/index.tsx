import React from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import { Loader } from "@component/Loader";

import type { Props } from "./types";

import "./style.scss";

export const List = ({
  className,
  isLoading,
  count,
  emptyText,
  children,
}: Props) => {
  const { t } = useTranslation();
  const listClass = classNames("list", { [`${className}`]: className });

  if (isLoading) {
    return <Loader />;
  }

  if (count === 0) {
    return count === 0 ? emptyText : t("emptyList");
  }

  return <ul className={listClass}>{children}</ul>;
};
