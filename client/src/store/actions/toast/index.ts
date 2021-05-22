import type { Action } from "@actions/index";
import type { Toast } from "@reducers/widgets/currentView/types";

export const ADD_TOAST = "toast/ADD_TOAST";
export const REMOVE_TOAST = "toast/REMOVE_TOAST";

export type AddToastAction = Action<typeof ADD_TOAST, Toast>;
export type RemoveToastAction = Action<typeof REMOVE_TOAST, string>;
export type ToastActions = AddToastAction | RemoveToastAction;

export const addToast = (payload: Toast) =>
  ({
    type: ADD_TOAST,
    payload,
  } as AddToastAction);

export const removeToast = (payload: string) =>
  ({
    type: REMOVE_TOAST,
    payload,
  } as RemoveToastAction);
