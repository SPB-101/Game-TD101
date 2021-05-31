import type { CommentId, Comment } from "@entities/comments/types";
import type { User } from "@entities/user/types";
import type { UserId } from "@resolvers/users/types";
import type { FulfilledUserInfoByIdAction } from "@actions/userInfo";

export type IdProps = {
  id: CommentId;
};

export type OwnProps = {
  comment: Comment;
  user: User;
  fetchUsersThunk: (userId: UserId) => Promise<FulfilledUserInfoByIdAction>;
};

export type Props = IdProps & OwnProps;
