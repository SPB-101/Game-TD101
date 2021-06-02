import type { Dispatch } from "redux";

import {
  fetchNewComment,
  fetchNewCommentFailed,
  fetchNewCommentFulfilled,
  fetchResettingLike,
  fetchSettingLike,
  resetLikeFailed,
  resetLikeFulfilled,
  setLikeFailed,
  setLikeFulfilled,
  updateCurrentPage,
} from "@actions/comments";
import { addToast } from "@actions/toast";
import { formatError } from "@utils/formatError";
import {
  resolveAddComment,
  resolveResetLike,
  resolveSetLike,
} from "@resolvers/comments";

import type { NewComment } from "@resolvers/comments/types";
import type { CommentId } from "@entities/comments/types";

export const newCurrentPage = (page: number) => (dispatch: Dispatch) => {
  dispatch(updateCurrentPage(page));
};

export const createComment = (newCommentData: NewComment) => (
  dispatch: Dispatch
) => {
  dispatch(fetchNewComment());

  return resolveAddComment(newCommentData)
    .then((data) => {
      dispatch(fetchNewCommentFulfilled(data));
      return data;
    })
    .catch((error) => {
      dispatch(fetchNewCommentFailed(formatError(error)));
      dispatch(
        addToast({
          title: "cannotPostComment",
          type: "error",
        })
      );
    });
};

export const setLike = (messageId: CommentId) => (dispatch: Dispatch) => {
  dispatch(fetchSettingLike());

  return resolveSetLike(messageId)
    .then(() => dispatch(setLikeFulfilled(messageId)))
    .catch((error) => dispatch(setLikeFailed(formatError(error))));
};

export const resetLike = (messageId: CommentId) => (dispatch: Dispatch) => {
  dispatch(fetchResettingLike());

  return resolveResetLike(messageId)
    .then(() => dispatch(resetLikeFulfilled(messageId)))
    .catch((error) => dispatch(resetLikeFailed(formatError(error))));
};
