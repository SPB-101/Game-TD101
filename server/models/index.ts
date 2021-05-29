import { sequelize } from "../database/postgres";
import { UserSettingsTable } from "./settings";
import { TopicsTable } from "./topics";
import { MessagesTable } from "./messages";
import { LikesTable } from "./likes";

sequelize.addModels([
  UserSettingsTable,
  TopicsTable,
  MessagesTable,
  LikesTable,
]);
