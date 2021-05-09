import React, { SyntheticEvent } from "react";
import classNames from "classnames";

import { Props } from "./types";

import "./style.scss";
import ImageErrorIcon from "@assets/images/icons/attachment-error-icon.png";
import ProfileDefaultIcon from "@assets/images/icons/profile-icon.svg";

export const Avatar = ({
  className,
  src,
  alt,
  width = 100,
  height = 100,
}: Props) => {
  const errorHandler = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = ImageErrorIcon;
  };

  const avatarClasses = classNames("avatar", className);

  const w = `${width}px`;
  const h = `${height}px`;

  if (!src) {
    return (
      <ProfileDefaultIcon className={avatarClasses} width={w} height={h} />
    );
  }

  return (
    <img
      className={avatarClasses}
      src={src}
      alt={alt}
      width={w}
      height={h}
      onError={(e) => errorHandler(e)}
    />
  );
};
