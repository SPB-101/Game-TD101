import type { NewComment } from "@resolvers/comments/types";
import type { TopicId } from "@entities/forum/types";

export interface Props {
  topicId: TopicId;
  isNewCommentLoading: boolean;
  newCommentErrorMessage: string;
  createCommentThunk: (data: NewComment) => Promise<void>;
  newCurrentPageThunk: (page: number) => Promise<void>;
}
