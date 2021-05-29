import { MessageId, Message } from "@entities/messages/types";
import { User } from "@entities/user/types";
import { UserId } from "@resolvers/users/types";
import { FulfilledUserInfoByIdAction } from "@actions/userInfo";

export type IdProps = {
  id: MessageId;
};

export type OwnProps = {
  comment: Message;
  user: User;
  fetchUsersThunk: (userId: UserId) => Promise<FulfilledUserInfoByIdAction>;
};

export type Props = IdProps & OwnProps;
