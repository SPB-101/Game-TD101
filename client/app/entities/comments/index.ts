import { schema } from "normalizr";
import { Comment } from "@entities/comments/types";

export const likesEntity = new schema.Entity(
  "userIdLikes",
  {},
  {
    idAttribute: (data) => data.userId,
  }
);

export const commentEntity = new schema.Entity(
  "comments",
  {
    likes: [likesEntity],
  },
  {
    idAttribute: (data) => data.id,
    processStrategy: (data: { data: Comment }) => data,
  }
);

export const commentsEntity = new schema.Array(commentEntity);
