import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { Avatar } from "../Avatar";
import { ImageField } from "../ImageField";

import "./AvatarField.scss";

import type { Props } from "./types";

export function useStateFromProp(initialValue: string) {
  const [preview, setPreview] = useState<string>(initialValue);
  useEffect(() => {
    if (preview !== initialValue) {
      setPreview(initialValue);
    }
  }, [initialValue]);
  return { preview, setPreview };
}

export const AvatarField = ({
  className,
  title,
  name,
  label,
  disabled,
  initValue = "",
  onSelectFile,
}: Props) => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const { preview, setPreview } = useStateFromProp(initValue);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(initValue);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onChange = (e: any) => {
    const target = e.target as HTMLInputElement;
    const files = target.files;

    if (!files) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(files[0]);
    if (onSelectFile) {
      onSelectFile(files[0]);
    }
  };

  const avatarClass = classNames("avatar-field", className);

  return (
    <>
      <div className={avatarClass}>
        <div>{title}</div>
        <Avatar
          src={preview}
          width={80}
          height={80}
          className="avatar-field_image"
        />
      </div>
      <ImageField
        name={name}
        label={label}
        onChange={onChange}
        disabled={disabled}
      />
    </>
  );
};
