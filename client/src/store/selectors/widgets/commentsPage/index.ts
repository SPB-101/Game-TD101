import type { State } from "@reducers/index";

export const getCommentsPageWidget = (state: State) =>
  state.widgets.commentsPage.list;
export const getNewCommentsPageWidget = (state: State) =>
  state.widgets.commentsPage.newComment;
export const getLikesWidget = (state: State) =>
  state.widgets.commentsPage.likes;

export const getOffset = (state: State) => getCommentsPageWidget(state).offset;

export const getIds = (state: State) => getCommentsPageWidget(state).ids;

export const getIsCommentsLoading = (state: State) =>
  getCommentsPageWidget(state).isLoading;

export const getTotal = (state: State) => getCommentsPageWidget(state).total;

export const getIsNewCommentLoading = (state: State) =>
  getNewCommentsPageWidget(state).isLoading;

export const getNewCommentError = (state: State) =>
  getNewCommentsPageWidget(state).errorMessage;

export const getCurrentPageComments = (state: State) => getIds(state);

export const getIsNewComment = (state: State) =>
  getNewCommentsPageWidget(state).isNewComment;

export const getIsLikesLoading = (state: State) =>
  getLikesWidget(state).isLoading;

export const getLikesErrorCommentLoading = (state: State) =>
  getLikesWidget(state).errorMessage;
