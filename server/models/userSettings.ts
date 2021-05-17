/**
 * Правило отключено потому что используется underscore в полях для бд
 * https://eslint.org/docs/rules/camelcase
 */
/* eslint camelcase: "off" */

import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
  Unique,
} from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "settings",
})
export class UserSettingsTable extends Model {
  @AllowNull(false)
  @Unique
  @Column({
    type: DataType.INTEGER,
    field: "id_user",
  })
  id_user!: number;

  @Column(DataType.STRING)
  theme!: string;
}
