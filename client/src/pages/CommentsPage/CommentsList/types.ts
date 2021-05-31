import type { CommentId } from "@entities/comments/types";
import type { CommentsFilter } from "@resolvers/comments/types";
import type {
  FailedCommentAction,
  FulfilledCommentAction,
} from "@actions/comments";
import type { TopicId } from "@entities/forum/types";
import type { SelectTopicAction } from "@actions/forum";

export interface Props {
  className?: string;
  isLoading: boolean;
  isNewComment: boolean;
  offset: number;
  topicId: number;
  idsComments: CommentId[];
  fetchCommentsThunk: (
    filter: CommentsFilter
  ) => Promise<FulfilledCommentAction | FailedCommentAction>;
  getCurrentTopicThunk: (id: TopicId) => Promise<SelectTopicAction>;
}
