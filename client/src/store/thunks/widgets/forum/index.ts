import type { Dispatch } from "redux";
import { push } from "connected-react-router";

import {
  fetchNewTopic,
  fetchNewTopicFailed,
  fetchNewTopicFulfilled,
  updateCurrentPage,
  selectTopic,
} from "@actions/forum";
import { resolveAddTopic, resolveGetTopic } from "@resolvers/forum";
import { TopicId } from "@entities/forum/types";
import { addToast } from "@actions/toast";
import { formatError } from "@utils/formatError";

import type { ForumAddTopic } from "@resolvers/forum/types";

export const newCurrentPage = (page: number) => (dispatch: Dispatch) => {
  dispatch(updateCurrentPage(page));
};

export const fetchNewTopicForum = (newTopicData: ForumAddTopic) => (
  dispatch: Dispatch
) => {
  dispatch(fetchNewTopic());

  return resolveAddTopic(newTopicData)
    .then((data) => {
      dispatch(fetchNewTopicFulfilled(data));
      return data;
    })
    .then((data) => {
      dispatch(push(`/comments/${data.id}`));
      dispatch(
        addToast({
          title: "createTopic",
          type: "success",
        })
      );
    })
    .catch((error) => {
      dispatch(fetchNewTopicFailed(formatError(error)));
      dispatch(
        addToast({
          title: "cannotCreateTopic",
          type: "error",
        })
      );
    });
};

export const getCurrentTopic = (id: TopicId) => (dispatch: Dispatch) => {
  return resolveGetTopic(id)
    .then((data) => dispatch(selectTopic(data)))
    .catch(() => dispatch(push("/404")));
};
