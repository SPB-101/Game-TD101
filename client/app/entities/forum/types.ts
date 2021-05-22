/* eslint-disable */

export type RawTopic = {
  created_at: string;
  id: number;
  message_count: number;
  title: string;
};

/* eslint-enable */

export type RawTopics = RawTopic[];

export type RawForum = {
  total: number;
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
