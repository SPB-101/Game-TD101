import React from "react";
interface OwnProps {
  children?: React.ReactNode;
  primary?: boolean;
  className?: string;
}

export type Props = OwnProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
