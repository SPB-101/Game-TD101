import type { Message, MessageId } from "@entities/messages/types";
import type { TopicId } from "@entities/forum/types";

export type MessagesFilter = {
  offset: number;
  limit?: number;
  topicId: TopicId;
};

export type ResolveMessagesResult = {
  entities: {
    [id: string]: Message;
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

export type TopicInfo = {
  id: number;
  title: string;
};
