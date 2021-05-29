import type { State } from "@reducers/index";
import { UserId } from "@resolvers/users/types";

export const getUsersCollection = (state: State) => state.collections.users;

export const getUser = (state: State, id: UserId) =>
  getUsersCollection(state)[id];
