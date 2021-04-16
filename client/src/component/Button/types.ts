import React from "react";
interface OwnProps {
  children?: JSX.Element | string;
  primary?: boolean;
  id?: string;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export type Props = OwnProps;
