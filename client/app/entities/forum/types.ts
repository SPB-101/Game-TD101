/* eslint-disable */

export type RawMessage = {
  createdAt: string;
  id_message: number;
  id_topic: number;
  id_user: number;
  message: string;
  updatedAt: string;
};

export type RawMessages = RawMessage[];

export type RawTopic = {
  created_at: string;
  id: number;
  message_count: number;
  title: string;
};

/* eslint-enable */

export type RawTopics = RawTopic[];

export type RawForum = {
  count: number;
  rows: RawTopics;
};

export type TopicId = number;

export type Topic = {
  id: number;
  messages: number;
  title: string;
  createdAt: string;
};

export type Forum = {
  total: number;
  rows: Topic[];
};
