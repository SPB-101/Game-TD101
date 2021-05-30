import { schema } from "normalizr";
import { Message } from "@entities/messages/types";

export const likesEntity = new schema.Entity(
  "userIdLikes",
  {},
  {
    idAttribute: (data) => data.userId,
  }
);

export const messageEntity = new schema.Entity(
  "messages",
  {
    likes: [likesEntity],
  },
  {
    idAttribute: (data) => data.id,
    processStrategy: (data: { data: Message }) => data,
  }
);

export const messagesEntity = new schema.Array(messageEntity);
