import type { NewMessage } from "@resolvers/messages/types";

export interface Props {
  total: number;
  title: string;
  isNewMessageLoading: boolean;
  newMessageErrorMessage: string;
  createMessageThunk: (data: NewMessage) => Promise<void>;
  newCurrentPageThunk: (page: number) => Promise<void>;
}
