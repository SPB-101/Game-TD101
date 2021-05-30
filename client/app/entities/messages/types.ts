/* eslint-disable */
export type RawMessage = {
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
  id_message: number;
  id_user: number;
  createdAt: string;
  updatedAt: string;
};
/* eslint-enable */

export type RawMessages = {
  count: number;
  rows: RawMessage[];
};

export type MessageId = number;

export type Message = {
  id: MessageId;
  userId: number;
  likes: Like[];
  message: string;
  createdAt: string;
};

export type Messages = {
  total: number;
  rows: Message[];
};

export type LikeId = number;

export type Like = {
  id: number;
  messageId: MessageId;
  userId: number;
};
