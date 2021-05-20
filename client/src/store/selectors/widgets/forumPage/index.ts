import type { State } from "@reducers/index";

export const getForumPageWidget = (state: State) => state.widgets.forumPage;

export const getOffset = (state: State) => getForumPageWidget(state).offset;

export const getIds = (state: State) => getForumPageWidget(state).ids;

export const getIsLoading = (state: State) =>
  getForumPageWidget(state).isLoading;

export const getTotal = (state: State) => getForumPageWidget(state).total;

export const getCurrentPageForum = (state: State) => getIds(state);
