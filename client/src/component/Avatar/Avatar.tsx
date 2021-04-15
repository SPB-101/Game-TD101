import React from "react";
import classNames from "classnames";

import "./Avatar.scss";
import ProfileDefaultIcon from "../../assets/images/icons/profile-icon.svg";

import { Props } from "./types";

export const Avatar = ({
  className,
  src,
  alt,
  width = 50,
  height = 50,
}: Props): JSX.Element => {
  const avatarClasses = classNames("avatar", className);

  if (!src) {
    const w = `${width}px`;
    const h = `${height}px`;
    return (
      <ProfileDefaultIcon width={w} height={h} className={avatarClasses} />
    );
  }

  return (
    <img
      className={avatarClasses}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};
