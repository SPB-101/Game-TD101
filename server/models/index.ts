import { sequelize } from "../database/postgres";
import { UserSettingsTable } from "./settings";

sequelize.addModels([UserSettingsTable]);
