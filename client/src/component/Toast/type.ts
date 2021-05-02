import type { Toast } from "@reducers/widgets/currentView/types";

export type Props = {
  toastList: Toast[];
  removeToast: (id: string) => void;
};
