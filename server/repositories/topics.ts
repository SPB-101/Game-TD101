import { Sequelize } from "sequelize";
import { TopicsTable } from "../models/topics";

class TopicsRepo {
  getAll(offset: number, limit: number) {
    return TopicsTable.findAndCountAll({
      limit,
      offset,
      attributes: [
        "id",
        "title",
        "created_at",
        // [
        //   Sequelize.literal(
        //     "(SELECT COUNT(messages.id) FROM messages WHERE messages.id_topic = topics.id)"
        //   ),
        //   "messages_count",
        // ],
      ],
    });
  }

  create(title: string) {
    return TopicsTable.create({ title: title });
  }
}

export const topicsRepo = new TopicsRepo();
