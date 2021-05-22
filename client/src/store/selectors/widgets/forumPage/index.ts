import type { State } from "@reducers/index";

export const getForumPageWidget = (state: State) =>
  state.widgets.forumPage.list;
export const getNewTopicPageWidget = (state: State) =>
  state.widgets.forumPage.newTopic;

export const getOffset = (state: State) => getForumPageWidget(state).offset;

export const getIds = (state: State) => getForumPageWidget(state).ids;

export const getIsForumLoading = (state: State) =>
  getForumPageWidget(state).isLoading;

export const getTotal = (state: State) => getForumPageWidget(state).total;

export const getIsNewTopicLoading = (state: State) =>
  getNewTopicPageWidget(state).isLoading;

export const getNewTopicId = (state: State) => getNewTopicPageWidget(state).id;
export const getNewTopicError = (state: State) =>
  getNewTopicPageWidget(state).errorMessage;

export const getCurrentPageForum = (state: State) => getIds(state);
