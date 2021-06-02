import type {
  RawComments,
  Comments,
  Comment,
  RawLike,
  Like,
} from "@entities/comments/types";
import { getLocalDate } from "@utils/getLocalDate";

export const formatComments = (data: RawComments): Comments => {
  const formattedData = Object.values(data.rows).map(
    // eslint-disable-next-line camelcase
    ({ id, message, id_user, createdAt, likes }) => {
      return {
        id: Number(id),
        message,
        likes: formatLikes(likes),
        userId: Number(id_user),
        createdAt: getLocalDate(createdAt),
      } as Comment;
    }
  );

  return { total: data.count, rows: formattedData };
};

export const formatLikes = (data: RawLike[]): Like[] => {
  // eslint-disable-next-line camelcase
  return data.map(({ id, id_comment, id_user }) => {
    return {
      id,
      commentId: id_comment,
      userId: id_user,
    };
  });
};
