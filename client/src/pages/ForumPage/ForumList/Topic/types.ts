import { Topic, TopicId } from "@entities/forum/types";

export type IdProps = {
  id: TopicId;
};

export type OwnProps = {
  topic: Topic;
};

export type Props = IdProps & OwnProps;
