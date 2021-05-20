import { TopicsTable } from "../models/topics";
import { MessagesTable } from "../models/messages";
import { FORUM_RECORD_LIMIT } from "../../constants";

class TopicsRepo {
  getAll(offset: number) {
    return TopicsTable.findAndCountAll({
      limit: FORUM_RECORD_LIMIT,
      offset,
      include: MessagesTable,
    });
  }

  create(title: string) {
    return TopicsTable.findOrCreate({
      where: {
        title,
      },
      defaults: {
        title,
      },
    });
  }
}

export const topicsRepo = new TopicsRepo();
