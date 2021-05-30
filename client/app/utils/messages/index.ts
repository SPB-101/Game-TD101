import type {
  RawMessages,
  Messages,
  Message,
  RawLike,
  Like,
} from "@entities/messages/types";
import { getLocalDate } from "@utils/getLocalDate";

export const formatMessages = (data: RawMessages): Messages => {
  const formattedData = Object.values(data.rows).map(
    // eslint-disable-next-line camelcase
    ({ id, message, id_user, createdAt, likes }) => {
      return {
        id: Number(id),
        message,
        likes: formatLikes(likes),
        userId: Number(id_user),
        createdAt: getLocalDate(createdAt),
      } as Message;
    }
  );

  return { total: data.count, rows: formattedData };
};

export const formatLikes = (data: RawLike[]): Like[] => {
  // eslint-disable-next-line camelcase
  return data.map(({ id, id_message, id_user }) => {
    return {
      id,
      messageId: id_message,
      userId: id_user,
    };
  });
};
