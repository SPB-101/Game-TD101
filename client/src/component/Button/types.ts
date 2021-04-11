import React from "react";
interface OwnProps {
  children?: JSX.Element | string;
  primary?: boolean;
  className?: string;
  id?: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export type Props = OwnProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
