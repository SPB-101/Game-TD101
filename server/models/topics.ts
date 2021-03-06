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
  HasMany,
  Unique,
} from "sequelize-typescript";

import { CommentsTable } from "./comments";
@Table({
  tableName: "topics",
  timestamps: true,
  underscored: true,
})
export class TopicsTable extends Model {
  @AutoIncrement
  @PrimaryKey
  @Unique
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  title: string;

  @HasMany(() => CommentsTable, "id_topic")
  comments;
}
