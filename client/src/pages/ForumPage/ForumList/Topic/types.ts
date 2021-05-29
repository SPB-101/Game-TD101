import { Topic, TopicId } from "@entities/forum/types";
import { SelectTopicAction } from "@actions/forum";

export type IdProps = {
  id: TopicId;
};

export type OwnProps = {
  topic: Topic;
  getCurrentTopicThunk: (id: TopicId) => Promise<SelectTopicAction>;
};

export type Props = IdProps & OwnProps;
