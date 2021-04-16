import React from "react";
interface OwnProps {
  id?: string;
  form?: string;
  primary?: boolean;
  className?: string;
  disabled?: boolean;
  children?: JSX.Element | string;
  classType?: "primary" | "secondary" | "danger";
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export type Props = OwnProps;
