import type { NewMessage } from "@resolvers/messages/types";
import type { TopicId } from "@entities/forum/types";

export interface Props {
  topicId: TopicId;
  isNewMessageLoading: boolean;
  newMessageErrorMessage: string;
  createMessageThunk: (data: NewMessage) => Promise<void>;
  newCurrentPageThunk: (page: number) => Promise<void>;
}
