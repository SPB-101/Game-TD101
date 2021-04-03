import React from "react";

interface OwnProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  handleClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export type Props = OwnProps;
