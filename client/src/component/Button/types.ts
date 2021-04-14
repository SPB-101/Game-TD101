import React from "react";
interface OwnProps {
  children?: JSX.Element | string;
  primary?: boolean;
  type?: string;
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export type Props = OwnProps;
