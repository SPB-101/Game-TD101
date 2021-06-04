import type { Topic, TopicId } from "@entities/forum/types";

export type ForumFilter = {
  offset: number;
  limit?: number;
};

export type ResolveForumResult = {
  entities: {
    [id: string]: Topic;
  };
  result: TopicId[];
  total: number;
};

export type ForumAddTopic = {
  title: string;
};

export type NewTopicResult = {
  id: number;
};

export type TopicInfo = {
  id: number;
  title: string;
};
