import type { Message, MessageId } from "@entities/messages/types";
import type { TopicId } from "@entities/forum/types";

export type MessagesFilter = {
  offset: number;
  limit?: number;
  topicId: TopicId;
};
// TODO fix type
export type ResolveMessagesResult = {
  entities: {
    [id: string]: [{ [id: number]: Message }];
  };
  result: MessageId[];
} & { total: number };

export type NewMessage = {
  message: string;
  topicId: TopicId;
};

export type NewMessageResult = {
  id: number;
};
