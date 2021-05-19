import { Sequelize } from "sequelize-typescript";
import type { SequelizeOptions } from "sequelize-typescript";

import { URI_PG, IS_DEV } from "../../constants/server";

const sequelizeOptions: SequelizeOptions = {
  logging: IS_DEV ? console.log : false,
  pool: {
    max: 15,
    min: 5,
    idle: 20000,
    evict: 15000,
    acquire: 30000,
  },
};

export const sequelize = new Sequelize(URI_PG, sequelizeOptions);
