import { sequelize } from "../database/postgres";
import { UserSettingsTable } from "./settings";
import { TopicsTable } from "./topics";
import { CommentsTable } from "./comments";
import { LikesTable } from "./likes";

sequelize.addModels([
  UserSettingsTable,
  TopicsTable,
  CommentsTable,
  LikesTable,
]);
