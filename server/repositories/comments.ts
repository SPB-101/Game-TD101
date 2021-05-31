import { CommentsTable } from "../models/comments";
import { LikesTable } from "../models/likes";

class CommentsRepo {
  getAllById(id: string, offset: number, limit: number) {
    return CommentsTable.findAndCountAll({
      where: {
        id_topic: id,
      },
      limit,
      offset,
      order: [["created_at", "DESC"]],
      include: LikesTable,
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
