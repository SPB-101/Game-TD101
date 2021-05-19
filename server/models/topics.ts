/**
 * Правило отключено потому что используется underscore в полях для бд
 * https://eslint.org/docs/rules/camelcase
 */
/* eslint camelcase: "off" */

import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from "sequelize-typescript";
import { MessagesTable } from "./messages";

@Table({
  timestamps: true,
  tableName: "topics",
})
export class TopicsTable extends Model {
  @AutoIncrement
  @PrimaryKey
  @Unique
  @Column({
    type: DataType.INTEGER,
    field: "id_topic",
  })
  id_topic!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  title!: string;

  @HasMany(() => MessagesTable)
  messages;
}
