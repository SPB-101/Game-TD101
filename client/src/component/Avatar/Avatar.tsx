import React, { SyntheticEvent } from "react";
import classNames from "classnames";

import "./Avatar.scss";
import ProfileDefaultIcon from "../../assets/images/icons/profile-icon.svg";
import ImageErrorIcon from "../../assets/images/icons/attachment-error-icon.png";

import { Props } from "./types";

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
      <ProfileDefaultIcon width={w} height={h} className={avatarClasses} />
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
