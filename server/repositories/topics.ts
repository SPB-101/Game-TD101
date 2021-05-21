import { sequelize } from "../database/postgres";
import { TopicsTable } from "../models/topics";

class TopicsRepo {
  async getAll(offset: number, limit: number) {
    const data = await sequelize.query(
      `
        SELECT
          topics.id AS "id",
          "title",
          topics.created_at AS "created_at",
          COUNT(*) AS "message_count"
        FROM "messages"
        FULL JOIN "topics"
        ON messages.id_topic = topics.id
        GROUP BY topics.id
        ORDER BY topics.created_at DESC
        LIMIT ${limit}
        OFFSET ${offset}
      `,
      {
        raw: true,
      }
    );
    const topicsCount = await TopicsTable.count();

    return Promise.resolve({
      total: topicsCount,
      rows: data[0],
    });
  }

  create(title: string) {
    return TopicsTable.create({ title: title });
  }
}

export const topicsRepo = new TopicsRepo();
