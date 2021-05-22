/* eslint-disable */
export type RawMessage = {
  id: number;
  message: string;
  id_topic: number;
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
  message: string;
  createdAt: string;
};

export type Messages = {
  total: number;
  rows: Message[];
};
