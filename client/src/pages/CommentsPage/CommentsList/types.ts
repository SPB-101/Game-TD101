import type { MessageId } from "@entities/messages/types";
import type { MessagesFilter } from "@resolvers/messages/types";
import type {
  FailedMessageAction,
  FulfilledMessageAction,
} from "@actions/messages";

export interface Props {
  className?: string;
  isLoading: boolean;
  offset: number;
  topicId: number;
  idsComments: MessageId[];
  fetchMessagesThunk: (
    filter: MessagesFilter
  ) => Promise<FulfilledMessageAction | FailedMessageAction>;
}
