import axios from "axios";
import { normalize } from "normalizr";

import { forumListEntity } from "@entities/forum";
import { formatForum } from "@utils-entity/forum";

import { API_HOST } from "@constants/index";

import type { Resolver } from "@resolvers/types";
import type { ForumFilter, ForumAddTopic, ResolveForumResult } from "./types";

export const resolveForum: Resolver<ForumFilter, ResolveForumResult> = (
  filter
) =>
  axios
    .post(`${API_HOST}/forum/topics/all`, filter, {
      withCredentials: true,
    })
    .then(({ data }) => formatForum(data))
    .then(({ total, rows }) => {
      return { ...normalize(rows, forumListEntity), total };
    });

export const resolveAddTopic: Resolver<ForumAddTopic, void> = (title) =>
  axios.post(`${API_HOST}/forum/topics`, title, {
    withCredentials: true,
  });
