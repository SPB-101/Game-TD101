import type { State } from "@reducers/index";

export const getMessagesPageWidget = (state: State) =>
  state.widgets.messagesPage.list;
export const getNewMessagesPageWidget = (state: State) =>
  state.widgets.messagesPage.newMessage;

export const getOffset = (state: State) => getMessagesPageWidget(state).offset;

export const getIds = (state: State) => getMessagesPageWidget(state).ids;

export const getIsMessagesLoading = (state: State) =>
  getMessagesPageWidget(state).isLoading;

export const getTotal = (state: State) => getMessagesPageWidget(state).total;

export const getIsNewMessageLoading = (state: State) =>
  getNewMessagesPageWidget(state).isLoading;

export const getNewMessageError = (state: State) =>
  getNewMessagesPageWidget(state).errorMessage;

export const getCurrentPageMessages = (state: State) => getIds(state);

export const getCurrentTopicId = (state: State) =>
  getMessagesPageWidget(state).topicId;

export const getCurrentTopicTitle = (state: State) =>
  getMessagesPageWidget(state).topicTitle;
