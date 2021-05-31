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
import { CommentsTable } from "./comments";

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
  @Unique("uniqueCommentAndUser")
  @Column(DataType.INTEGER)
  id_user: number;

  @AllowNull(false)
  @Unique("uniqueCommentAndUser")
  @ForeignKey(() => CommentsTable)
  @Column(DataType.INTEGER)
  id_comment: number;

  @BelongsTo(() => CommentsTable, {
    as: "comments",
    foreignKey: "id_comment",
    targetKey: "id",
  })
  comment;
}
