import type { Topic, TopicId } from "@entities/forum/types";

export type ForumFilter = {
  offset: number;
};

export type ResolveForumResult = {
  entities: {
    [id: string]: Topic;
  };
  result: TopicId[];
} & { total: number };

export type ForumAddTopic = {
  title: string;
};
