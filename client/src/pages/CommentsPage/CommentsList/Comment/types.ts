import { MessageId, Message } from "@entities/messages/types";

export type IdProps = {
  id: MessageId;
};

export type OwnProps = {
  comment: Message;
};

export type Props = IdProps & OwnProps;
