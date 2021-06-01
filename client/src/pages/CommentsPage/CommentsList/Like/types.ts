import type { CommentId, Comment } from "@entities/comments/types";
import type {
  ResetLikeFailedAction,
  ResetLikeFulfilledAction,
  SetLikeFailedAction,
  SetLikeFulfilledAction,
} from "@actions/comments";

export type IdProps = {
  id: CommentId;
};

export type OwnProps = {
  comment: Comment;
  currentUserLikes: CommentId[];
  setLikeThunk: (
    commentId: CommentId
  ) => Promise<SetLikeFulfilledAction | SetLikeFailedAction>;
  resetLikeThunk: (
    commentId: CommentId
  ) => Promise<ResetLikeFulfilledAction | ResetLikeFailedAction>;
};

export type Props = IdProps & OwnProps;
