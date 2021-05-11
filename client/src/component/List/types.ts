import { ReactNode } from "react";

export type Props = {
  count?: number;
  className?: string;
  isLoading?: boolean;
  children?: ReactNode;
  emptyText?: string;
};
