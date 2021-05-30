import type { MessageId, Message } from "@entities/messages/types";
import type { User } from "@entities/user/types";
import type {
  SetLikeFailedAction,
  SetLikeFulfilledAction,
} from "@actions/messages";

export type IdProps = {
  id: MessageId;
};

export type OwnProps = {
  comment: Message;
  currentUser: User;
  currentUserLikes: MessageId[];
  setLikeThunk: (
    messageId: MessageId
  ) => Promise<SetLikeFulfilledAction | SetLikeFailedAction>;
};

export type Props = IdProps & OwnProps;
