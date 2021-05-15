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
  const getEmptyText = emptyText ? emptyText : t("emptyList");
  const isEmpty = count === 0;

  if (isLoading) {
    return <Loader />;
  }

  return <ul className={listClass}>{isEmpty ? getEmptyText : children}</ul>;
};
