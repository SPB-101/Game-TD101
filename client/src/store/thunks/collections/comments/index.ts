import { resolveComments } from "@resolvers/comments";
import {
  fetch,
  fetchFailed,
  fetchFulfilled,
  setLikeFulfilled,
} from "@actions/comments";
import { getUserInfo } from "@selectors/collections/currentView";

import type { CommentsFilter } from "@resolvers/comments/types";
import type { Dispatch } from "redux";
import type { State } from "@reducers/index";
import type { CommentId } from "@entities/comments/types";

export const fetchComments = (filter: CommentsFilter) => (
  dispatch: Dispatch,
  getState: () => State
) => {
  dispatch(fetch(filter));

  return resolveComments(filter)
    .then((res) => {
      if (res.result.length) {
        const currentUser = getUserInfo(getState());
        const comments = Object.values(res.entities.comments);
        const userLikes = comments.reduce<CommentId[]>((accum, comment) => {
          if (comment.likes.includes(currentUser.id)) {
            accum.push(comment.id);
          }
          return accum;
        }, []);
        userLikes.map((like) => dispatch(setLikeFulfilled(like)));
      }

      return dispatch(fetchFulfilled(res));
    })
    .catch((err) => dispatch(fetchFailed(err)));
};
