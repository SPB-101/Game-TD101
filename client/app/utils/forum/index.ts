import type { RawForum, Forum, Topic } from "@entities/forum/types";
import { getLocalDate } from "@utils/getLocalDate";

export const formatForum = (data: RawForum): Forum => {
  const formattedData = Object.values(data.rows).map(
    // eslint-disable-next-line camelcase
    ({ id, comments_count, title, created_at }) => {
      return {
        id: Number(id),
        comments: comments_count,
        title,
        createdAt: getLocalDate(created_at),
      } as Topic;
    }
  );

  return { total: data.total, rows: formattedData };
};
