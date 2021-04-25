import React from "react";

export type OwnProps = {
  small?: true;
};
export type Props = OwnProps & React.InputHTMLAttributes<HTMLInputElement>;
