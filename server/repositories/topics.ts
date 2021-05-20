import { sequelize } from "../database/postgres";
import { TopicsTable } from "../models/topics";

class TopicsRepo {
  getAll(offset: number, limit: number) {
    return sequelize.query(
      `
        SELECT
          topics.id AS "id",
          "title",
          topics.created_at AS "created_at",
          COUNT(*) AS "message_count"
        FROM "messages"
        INNER JOIN "topics"
        ON messages.id_topic = topics.id
        GROUP BY topics.id
        LIMIT ${limit}
        OFFSET ${offset}
      `
    );
  }

  create(title: string) {
    return TopicsTable.create({ title: title });
  }
}

export const topicsRepo = new TopicsRepo();
