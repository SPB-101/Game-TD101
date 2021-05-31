import type { Action } from "@actions/index";
import {
  NewComment,
  CommentsFilter,
  NewCommentResult,
  ResolveCommentsResult,
} from "@resolvers/comments/types";
import { CommentId } from "@entities/comments/types";

export const FETCH_COMMENTS = "comments/FETCH_COMMENTS";
export const FETCH_COMMENTS_FULFILLED = "comments/FETCH_COMMENTS_FULFILLED";
export const FETCH_COMMENTS_FAILED = "comments/FETCH_COMMENTS_FAILED";

export const FETCH_NEW_COMMENT = "comments/FETCH_NEW_COMMENT";
export const FETCH_NEW_COMMENT_FULFILLED =
  "comments/FETCH_NEW_COMMENT_FULFILLED";
export const FETCH_NEW_COMMENT_FAILED = "comments/FETCH_NEW_COMMENT_FAILED";

export const UPDATE_CURRENT_PAGE = "comments/UPDATE_CURRENT_PAGE";
export const SET_LIKE = "comments/SET_LIKE";
export const SET_LIKE_FULFILLED = "comments/SET_LIKE_FULFILLED";
export const SET_LIKE_FAILED = "comments/SET_LIKE_FAILED";
export const RESET_CURRENT_VIEW_LIKES = "comments/RESET_CURRENT_VIEW_LIKES";
export const RESET_LIKE = "comments/RESET_LIKE";
export const RESET_LIKE_FULFILLED = "comments/RESET_LIKE_FULFILLED";
export const RESET_LIKE_FAILED = "comments/RESET_LIKE_FAILED";

export type FetchCommentAction = Action<typeof FETCH_COMMENTS, CommentsFilter>;
export type FulfilledCommentAction = Action<
  typeof FETCH_COMMENTS_FULFILLED,
  ResolveCommentsResult
>;
export type FailedCommentAction = Action<typeof FETCH_COMMENTS_FAILED, string>;

export type FetchNewCommentAction = Action<
  typeof FETCH_NEW_COMMENT,
  NewComment
>;
export type FulfilledNewCommentAction = Action<
  typeof FETCH_NEW_COMMENT_FULFILLED,
  NewCommentResult
>;
export type FailedNewCommentAction = Action<
  typeof FETCH_NEW_COMMENT_FAILED,
  string
>;

export type UpdateCurrentPageAction = Action<
  typeof UPDATE_CURRENT_PAGE,
  number
>;

export type SetLikeAction = Action<typeof SET_LIKE>;
export type SetLikeFulfilledAction = Action<
  typeof SET_LIKE_FULFILLED,
  CommentId
>;
export type SetLikeFailedAction = Action<typeof SET_LIKE_FAILED, string>;
export type ResetLikeAction = Action<typeof RESET_LIKE>;
export type ResetLikeFulfilledAction = Action<
  typeof RESET_LIKE_FULFILLED,
  CommentId
>;
export type ResetLikeFailedAction = Action<typeof RESET_LIKE_FAILED, string>;

export type ResetCurrentViewLikesAction = Action<
  typeof RESET_CURRENT_VIEW_LIKES
>;

export type Actions =
  | FetchCommentAction
  | FulfilledCommentAction
  | FailedCommentAction
  | FetchNewCommentAction
  | FulfilledNewCommentAction
  | FailedNewCommentAction
  | UpdateCurrentPageAction
  | SetLikeAction
  | SetLikeFulfilledAction
  | SetLikeFailedAction
  | ResetLikeAction
  | ResetLikeFulfilledAction
  | ResetLikeFailedAction
  | ResetCurrentViewLikesAction;

export const fetch = (payload: CommentsFilter) =>
  ({
    type: FETCH_COMMENTS,
    payload,
  } as FetchCommentAction);

export const fetchFulfilled = (payload: ResolveCommentsResult) =>
  ({
    type: FETCH_COMMENTS_FULFILLED,
    payload,
  } as FulfilledCommentAction);

export const fetchFailed = (payload: string) =>
  ({
    type: FETCH_COMMENTS_FAILED,
    payload,
  } as FailedCommentAction);

export const updateCurrentPage = (payload: number) =>
  ({
    type: UPDATE_CURRENT_PAGE,
    payload,
  } as UpdateCurrentPageAction);

export const fetchNewComment = () =>
  ({
    type: FETCH_NEW_COMMENT,
  } as FetchNewCommentAction);

export const fetchNewCommentFulfilled = (payload: NewCommentResult) =>
  ({
    type: FETCH_NEW_COMMENT_FULFILLED,
    payload,
  } as FulfilledNewCommentAction);

export const fetchNewCommentFailed = (payload: string) =>
  ({
    type: FETCH_NEW_COMMENT_FAILED,
    payload,
  } as FailedNewCommentAction);

export const fetchSettingLike = () =>
  ({
    type: SET_LIKE,
  } as SetLikeAction);

export const setLikeFulfilled = (payload: CommentId) =>
  ({
    type: SET_LIKE_FULFILLED,
    payload,
  } as SetLikeFulfilledAction);

export const setLikeFailed = (payload: string) =>
  ({
    type: SET_LIKE_FAILED,
    payload,
  } as SetLikeFailedAction);

export const fetchResettingLike = () =>
  ({
    type: RESET_LIKE,
  } as ResetLikeAction);

export const resetLikeFulfilled = (payload: CommentId) =>
  ({
    type: RESET_LIKE_FULFILLED,
    payload,
  } as ResetLikeFulfilledAction);

export const resetLikeFailed = (payload: string) =>
  ({
    type: RESET_LIKE_FAILED,
    payload,
  } as ResetLikeFailedAction);

export const resetCurrentViewLikes = () =>
  ({
    type: RESET_CURRENT_VIEW_LIKES,
  } as ResetCurrentViewLikesAction);
