import { MessagesTable } from "../models/messages";
import { TOPIC_MESSAGES_RECORD_LIMIT } from "../../constants";

class MessagesRepo {
  getAllById(id: string, offset: number) {
    return MessagesTable.findAndCountAll({
      where: {
        id_topic: id,
      },
      limit: TOPIC_MESSAGES_RECORD_LIMIT,
      offset: offset,
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
