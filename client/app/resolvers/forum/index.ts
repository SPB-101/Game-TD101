import axios from "axios";
import { normalize } from "normalizr";

import { forumListEntity } from "@entities/forum";
import { formatForum } from "@utils-entity/forum";

import { API_HOST, FORUM_RECORD_LIMIT } from "@constants/index";

import type { Resolver } from "@resolvers/types";
import type {
  ForumFilter,
  ForumAddTopic,
  ResolveForumResult,
  NewTopicResult,
} from "./types";

export const resolveForum: Resolver<ForumFilter, ResolveForumResult> = ({
  limit = FORUM_RECORD_LIMIT,
  offset,
}) =>
  axios
    .get(`${API_HOST}/forum/topics/all?limit=${limit}&offset=${offset}`, {
      withCredentials: true,
    })
    .then(({ data }) => formatForum(data))
    .then(({ total, rows }) => {
      return { ...normalize(rows, forumListEntity), ...{ total: total } };
    });

export const resolveAddTopic: Resolver<ForumAddTopic, NewTopicResult> = (
  title
) =>
  axios.post(`${API_HOST}/forum/topics`, title, {
    withCredentials: true,
  });
