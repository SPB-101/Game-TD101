import React from "react";
interface OwnProps {
  children?: React.ReactNode;
  className?: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export type Props = OwnProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
