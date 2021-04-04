import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { ImageField } from "../ImageField";
import { Button } from "../Button";

import "./AvatarField.scss";

import type { Props } from "./types";

export const AvatarField = ({
  className,
  title,
  name,
  label,
  ...props
}: Props): JSX.Element => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [preview, setPreview] = useState<string>();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  // TODO ЧТО С ТИПАМИ
  const onSelectFile = (e: any) => {
    const target = e.target as HTMLInputElement;
    const files = target.files;

    if (!files) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(files[0]);
  };

  const avatarClass = classNames("avatar-field", className);

  // TODO компонент аватара
  return (
    <>
      <div {...props} className={avatarClass}>
        <div>{title}</div>
        <img src={preview} className="avatar-field_image" />
      </div>
      <ImageField name={name} label={label} onChange={onSelectFile} />
    </>
  );
};
