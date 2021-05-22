import { sequelize } from "./index";
import { UserSettingsTable } from "../../models/settings";
import { TopicsTable } from "../../models/topics";
import { MessagesTable } from "../../models/messages";

import { rundomText } from "../../utils/randomText";

export const initMockData = async () => {
  const t = await sequelize.transaction();
  try {
    await UserSettingsTable.bulkCreate([
      {
        id_user: 16318,
        theme: "dark-theme",
      },
    ]);

    await TopicsTable.bulkCreate(
      [
        "CSS subreddit support will change.",
        "Install guide?",
        "on ullamco laboris nisi",
        "consectetur, adipisci velit",
        "who loves or pursues",
        "voluptates repudiandae sint",
        "harum quidem rerum facilis",
        "placeat facere possimus",
      ].map((v) => ({ title: v }))
    );

    await MessagesTable.bulkCreate([
      { id_topic: 1, id_user: 16318, message: rundomText() },
      { id_topic: 1, id_user: 16318, message: rundomText() },
      { id_topic: 1, id_user: 16318, message: rundomText() },
      { id_topic: 1, id_user: 16318, message: rundomText() },
      { id_topic: 1, id_user: 16318, message: rundomText() },
      { id_topic: 2, id_user: 16318, message: rundomText() },
      { id_topic: 3, id_user: 16318, message: rundomText() },
      { id_topic: 3, id_user: 16318, message: rundomText() },
      { id_topic: 3, id_user: 16318, message: rundomText() },
      { id_topic: 4, id_user: 16318, message: rundomText() },
      { id_topic: 5, id_user: 16318, message: rundomText() },
      { id_topic: 7, id_user: 16318, message: rundomText() },
    ]);

    await t.commit();
  } catch (error) {
    console.log("Ошибка в мок данных", error);

    await t.rollback();
  }
};
