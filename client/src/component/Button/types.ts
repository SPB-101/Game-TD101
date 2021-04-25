import React from "react";
interface OwnProps {
  id?: string;
  form?: string;
  primary?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  children?: JSX.Element | string;
  classType?: "primary" | "secondary" | "danger";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export type Props = OwnProps;
