import type { RawForum, Forum, Topic } from "@entities/forum/types";
import { getLocalDate } from "@utils/getLocalDate";

export const formatForum = (data: RawForum): Forum => {
  const formattedData = Object.values(data.rows).map(
    ({ id_topic: id, messages, title, updatedAt }) => {
      return {
        id: Number(id),
        messages: messages.length,
        title,
        updatedAt: getLocalDate(updatedAt),
      } as Topic;
    }
  );

  return { total: data.count, rows: formattedData };
};
