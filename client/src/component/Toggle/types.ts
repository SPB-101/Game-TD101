import React from "react";

export type OwnProps = {
  theme: string;
  small?: true;
  setThemeThunk: (theme: string) => Promise<void>;
};
export type Props = OwnProps & React.InputHTMLAttributes<HTMLInputElement>;
