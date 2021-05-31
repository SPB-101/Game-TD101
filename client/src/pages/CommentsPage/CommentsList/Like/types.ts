import type { MessageId, Message } from "@entities/messages/types";
import type { User } from "@entities/user/types";
import type {
  ResetLikeFailedAction,
  ResetLikeFulfilledAction,
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
  resetLikeThunk: (
    messageId: MessageId
  ) => Promise<ResetLikeFulfilledAction | ResetLikeFailedAction>;
};

export type Props = IdProps & OwnProps;
