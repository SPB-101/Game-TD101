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
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from "sequelize-typescript";
import { TopicsTable } from "./topics";

@Table({
  timestamps: true,
  tableName: "messages",
})
export class MessagesTable extends Model {
  @AutoIncrement
  @PrimaryKey
  @Unique
  @Column({
    type: DataType.INTEGER,
    field: "id_message",
  })
  id_message!: number;

  @AllowNull(false)
  @Column(DataType.STRING(1000))
  message!: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  id_user!: number;

  @ForeignKey(() => TopicsTable)
  @AllowNull(false)
  @Column
  id_topic!: number;
}
