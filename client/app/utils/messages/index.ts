import type { RawMessages, Messages, Message } from "@entities/messages/types";
import { getLocalDate } from "@utils/getLocalDate";

export const formatMessages = (data: RawMessages): Messages => {
  const formattedData = Object.values(data.rows).map(
    // eslint-disable-next-line camelcase
    ({ id, message, id_user, createdAt }) => {
      return {
        id: Number(id),
        message,
        userId: Number(id_user),
        createdAt: getLocalDate(createdAt),
      } as Message;
    }
  );

  return { total: data.count, rows: formattedData };
};
