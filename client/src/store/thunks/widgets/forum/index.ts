import type { Dispatch } from "redux";
import {
  fetchNewTopic,
  fetchNewTopicFailed,
  fetchNewTopicFulfilled,
  updateCurrentPage,
} from "@actions/forum";

import { addToast } from "@actions/toast";
import { formatError } from "@utils/formatError";
import { resolveAddTopic } from "@resolvers/forum";
import { ForumAddTopic } from "@resolvers/forum/types";

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
      dispatch(
        addToast({
          title: "createTopic",
          type: "success",
        })
      );
    })
    .catch((error) => {
      dispatch(fetchNewTopicFailed(formatError(error)));
    });
};
