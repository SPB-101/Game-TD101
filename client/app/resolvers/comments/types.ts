import type { Comment, CommentId } from "@entities/comments/types";
import type { TopicId } from "@entities/forum/types";

export type CommentsFilter = {
  offset: number;
  limit?: number;
  topicId: TopicId;
};
// TODO fix type
export type ResolveCommentsResult = {
  entities: {
    [id: string]: [{ [id: number]: Comment }];
  };
  result: CommentId[];
} & { total: number };

export type NewComment = {
  message: string;
  topicId: TopicId;
};

export type NewCommentResult = {
  id: number;
};
