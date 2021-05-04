import axios from "axios";

import type { Resolver } from "@resolvers/types";
import type { RawUser } from "@entities/user/types";
import type { AvatarFile, Passwords, UserChangeData } from "./types";

import { API_HOST } from "@constants/index";

export const resolveAvatar: Resolver<AvatarFile, RawUser> = (avatarFile) =>
  axios.put(`${API_HOST}/user/profile/avatar`, avatarFile, {
    withCredentials: true,
  });

export const resolvePassword: Resolver<Passwords, void> = (passwords) =>
  axios.put(`${API_HOST}/user/password`, passwords, { withCredentials: true });

export const resolveProfile: Resolver<UserChangeData, RawUser> = (
  userChangeData
) =>
  axios.put(`${API_HOST}/user/profile`, userChangeData, {
    withCredentials: true,
  });
