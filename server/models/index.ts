import { sequelize } from "../database/postgres";
import { UserSettingsTable } from "./settings";
import { TopicsTable } from "./topics";
import { MessagesTable } from "./messages";

sequelize.addModels([UserSettingsTable, TopicsTable, MessagesTable]);
