import type { TopicId } from "@entities/forum/types";
import type { ForumAddTopic } from "@resolvers/forum/types";

export interface Props {
  newTopicId: TopicId;
  fetchNewTopicThunk: (data: ForumAddTopic) => Promise<void>;
  isNewTopicLoading: boolean;
  newTopicErrorMessage: string;
}
