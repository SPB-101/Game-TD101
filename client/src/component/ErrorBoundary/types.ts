import { ReactNode } from "react";

interface OwnProps {
  children: ReactNode;
}

export interface State {
  hasError: boolean;
}

export type Props = OwnProps;
