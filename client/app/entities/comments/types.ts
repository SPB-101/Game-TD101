/* eslint-disable */
export type RawComment = {
  id: number;
  message: string;
  id_topic: number;
  id_user: number;
  likes: RawLike[];
  createdAt: string;
  updatedAt: string;
};

export type RawLike = {
  id: number;
  id_comment: number;
  id_user: number;
  createdAt: string;
  updatedAt: string;
};
/* eslint-enable */

export type RawComments = {
  count: number;
  rows: RawComment[];
};

export type CommentId = number;

export type Comment = {
  id: CommentId;
  userId: number;
  likes: Like[];
  message: string;
  createdAt: string;
};

export type Comments = {
  total: number;
  rows: Comment[];
};

export type LikeId = number;

export type Like = {
  id: number;
  commentId: CommentId;
  userId: number;
};
