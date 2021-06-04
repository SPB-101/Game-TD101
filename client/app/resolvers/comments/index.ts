import axios from "axios";
import { normalize } from "normalizr";

import { commentsEntity } from "@entities/comments";
import { formatComments } from "@utils-entity/comments";

import { API_HOST, TOPIC_COMMENTS_RECORD_LIMIT } from "@constants/index";

import type { Resolver } from "@resolvers/types";
import type {
  CommentsFilter,
  NewComment,
  ResolveCommentsResult,
  NewCommentResult,
} from "./types";
import type { CommentId } from "@entities/comments/types";

export const resolveComments: Resolver<
  CommentsFilter,
  ResolveCommentsResult
> = ({ limit = TOPIC_COMMENTS_RECORD_LIMIT, offset, topicId }) =>
  axios
    .get(`${API_HOST}/forum/topics/${topicId}/all`, {
      params: {
        limit,
        offset,
      },
      withCredentials: true,
    })
    .then(({ data }) => formatComments(data))
    .then(({ total, rows }) => {
      return { ...normalize(rows, commentsEntity), ...{ total: total } };
    });

export const resolveAddComment: Resolver<NewComment, NewCommentResult> = ({
  message,
  topicId,
}) =>
  axios
    .post(
      `${API_HOST}/forum/topics/${topicId}`,
      { message },
      {
        withCredentials: true,
      }
    )
    .then(({ data }) => data);

export const resolveSetLike: Resolver<CommentId, void> = (commentId) =>
  axios
    .post(
      `${API_HOST}/forum/comments/${commentId}/like`,
      {},
      {
        withCredentials: true,
      }
    )
    .then(({ data }) => data);

export const resolveResetLike: Resolver<CommentId, void> = (commentId) =>
  axios
    .delete(`${API_HOST}/forum/comments/${commentId}/like`, {
      withCredentials: true,
    })
    .then(({ data }) => data);
