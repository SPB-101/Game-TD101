import React from "react";

interface OwnProps {
  className?: string;
  size: "xl" | "l" | "m" | "s" | "xs";
}

interface defaultProps {
  children: React.ReactNode | JSX.Element;
}

export type Props = OwnProps & defaultProps;
