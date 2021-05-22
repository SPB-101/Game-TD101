import { schema } from "normalizr";
import { Message } from "@entities/messages/types";

export const messageEntity = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: (data) => data.id,
    processStrategy: (data: { data: Message }) => data,
  }
);

export const messagesEntity = new schema.Array(messageEntity);
