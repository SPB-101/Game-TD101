import axios from "axios";
import { normalize } from "normalizr";

import { messagesEntity } from "@entities/messages";
import { formatMessages } from "@utils-entity/messages";

import { API_HOST, TOPIC_MESSAGES_RECORD_LIMIT } from "@constants/index";

import type { Resolver } from "@resolvers/types";
import type {
  MessagesFilter,
  NewMessage,
  ResolveMessagesResult,
  NewMessageResult,
} from "./types";

export const resolveMessages: Resolver<
  MessagesFilter,
  ResolveMessagesResult
> = ({ limit = TOPIC_MESSAGES_RECORD_LIMIT, offset, topicId }) =>
  axios
    .get(`${API_HOST}/forum/topics/${topicId}/all`, {
      params: {
        limit,
        offset,
      },
      withCredentials: true,
    })
    .then(({ data }) => formatMessages(data))
    .then(({ total, rows }) => {
      return { ...normalize(rows, messagesEntity), ...{ total: total } };
    });

export const resolveAddMessage: Resolver<NewMessage, NewMessageResult> = ({
  message,
  topicId,
}) =>
  axios
    .post(`${API_HOST}/forum/topics/${topicId}`, message, {
      withCredentials: true,
    })
    .then(({ data }) => data);
