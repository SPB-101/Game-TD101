import { TopicId } from "@entities/forum/types";
import { ForumFilter } from "@resolvers/forum/types";
import { FailedAction, FulfilledAction } from "@actions/forum";

export interface Props {
  className?: string;
  isLoading: boolean;
  idsTopics: TopicId[];
  fetchForumThunk: (
    filter: ForumFilter
  ) => Promise<FulfilledAction | FailedAction>;
}
