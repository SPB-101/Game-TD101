import { TopicId } from "@entities/forum/types";
import { ForumFilter } from "@resolvers/forum/types";
import { FailedForumAction, FulfilledForumAction } from "@actions/forum";

export interface Props {
  className?: string;
  isLoading: boolean;
  offset: number;
  idsTopics: TopicId[];
  fetchForumThunk: (
    filter: ForumFilter
  ) => Promise<FulfilledForumAction | FailedForumAction>;
}
