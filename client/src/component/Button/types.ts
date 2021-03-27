import React from "react";
interface OwnProps {
  children?: JSX.Element;
  primary?: boolean;
  className?: string;
}

export type Props = OwnProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
