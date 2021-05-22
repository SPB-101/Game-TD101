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
  Model,
  PrimaryKey,
  Table,
  Unique,
  BelongsTo,
} from "sequelize-typescript";
import { TopicsTable } from "./topics";

@Table({
  tableName: "messages",
  timestamps: true,
  underscored: true,
})
export class MessagesTable extends Model {
  @AutoIncrement
  @PrimaryKey
  @Unique
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING(1000))
  message: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  id_user: number;

  @BelongsTo(() => TopicsTable, {
    as: "topics",
    foreignKey: "id_topic",
    targetKey: "id",
  })
  topic;
}
