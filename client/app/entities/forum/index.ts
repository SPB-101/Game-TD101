import { schema } from "normalizr";
import { Topic } from "@entities/forum/types";

export const forumEntity = new schema.Entity(
  "forum",
  {},
  {
    idAttribute: (data) => data.id,
    processStrategy: (data: { data: Topic }) => data,
  }
);

export const forumListEntity = new schema.Array(forumEntity);
