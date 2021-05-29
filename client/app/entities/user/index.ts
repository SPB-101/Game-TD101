import { schema } from "normalizr";
import { User } from "@entities/user/types";

export const userEntity = new schema.Entity(
  "users",
  {},
  {
    idAttribute: (data) => data.id,
    processStrategy: (data: { data: User }) => data,
  }
);

export const usersEntity = new schema.Array(userEntity);
