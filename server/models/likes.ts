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
  ForeignKey,
} from "sequelize-typescript";
import { MessagesTable } from "./messages";

@Table({
  tableName: "likes",
  underscored: true,
})
export class LikesTable extends Model {
  @AutoIncrement
  @PrimaryKey
  @Unique
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Unique("uniqueMessageAndUser")
  @Column(DataType.INTEGER)
  id_user: number;

  @AllowNull(false)
  @Unique("uniqueMessageAndUser")
  @ForeignKey(() => MessagesTable)
  @Column(DataType.INTEGER)
  id_message: number;

  @BelongsTo(() => MessagesTable, {
    as: "messages",
    foreignKey: "id_message",
    targetKey: "id",
  })
  message;
}
