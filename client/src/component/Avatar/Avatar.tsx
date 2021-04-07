import React from "react";

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
  if (!src) {
    const w = `${width}px`;
    const h = `${height}px`;
    return <ProfileDefaultIcon width={w} height={h} className={className} />;
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};
