import { CommentsTable } from "../models/comments";
import { LikesTable } from "../models/likes";

class CommentsRepo {
  async getAllById(id: string, offset: number, limit: number) {
    const data = await CommentsTable.findAll({
      where: {
        id_topic: id,
      },
      limit,
      offset,
      order: [["created_at", "DESC"]],
      include: LikesTable,
    });

    const commentsCount = await CommentsTable.count({
      where: {
        id_topic: id,
      },
    });

    return Promise.resolve({
      count: commentsCount,
      rows: data,
    });
  }

  create(idTopic: string, message: string, idUser: number) {
    return CommentsTable.create({
      id_topic: idTopic,
      message,
      id_user: idUser,
    });
  }
}

export const commentsRepo = new CommentsRepo();
