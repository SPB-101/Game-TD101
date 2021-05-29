import { MessagesTable } from "../models/messages";
import { LikesTable } from "../models/likes";

class MessagesRepo {
  getAllById(id: string, offset: number, limit: number) {
    return MessagesTable.findAndCountAll({
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
    return MessagesTable.create({
      id_topic: idTopic,
      message,
      id_user: idUser,
    });
  }
}

export const messagesRepo = new MessagesRepo();
