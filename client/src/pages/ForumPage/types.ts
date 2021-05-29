import { ForumAddTopic } from "@resolvers/forum/types";

export interface Props {
  total: number;
  offset: number;
  newCurrentPageThunk: (page: number) => Promise<void>;
  fetchNewTopicThunk: (data: ForumAddTopic) => Promise<void>;
  isNewTopicLoading: boolean;
  newTopicErrorMessage: string;
}
