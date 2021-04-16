import React from "react";
interface OwnProps {
  children?: JSX.Element | string;
  primary?: boolean;
  id?: string;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  classType?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export type Props = OwnProps;
