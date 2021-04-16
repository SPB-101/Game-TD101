import axios from "axios";
import { API_HOST } from "../../../src/constants";

import type { Resolver } from "../types";
import type { AvatarFile, Passwords, UserChangeData } from "./types";
import type { RawUser } from "../../entities/user/types";

export const resolveAvatar: Resolver<AvatarFile, RawUser> = (avatarFile) =>
  axios.put(`${API_HOST}/user/profile/avatar`, avatarFile);

export const resolvePassword: Resolver<Passwords, void> = (passwords) =>
  axios.put(`${API_HOST}/user/password`, passwords);

export const resolveProfile: Resolver<UserChangeData, RawUser> = (
  userChangeData
) => axios.put(`${API_HOST}/user/profile`, userChangeData);
