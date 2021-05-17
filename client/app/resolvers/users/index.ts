import axios from "axios";

import type { Resolver } from "@resolvers/types";
import type { RawUser } from "@entities/user/types";
import type { AvatarFile, Passwords, UserChangeData, Theme } from "./types";

import { API_HOST, API_HOST_PRAKTIKUM } from "@constants/index";

export const resolveAvatar: Resolver<AvatarFile, RawUser> = (avatarFile) =>
  axios.put(`${API_HOST_PRAKTIKUM}/user/profile/avatar`, avatarFile, {
    withCredentials: true,
  });

export const resolvePassword: Resolver<Passwords, void> = (passwords) =>
  axios.put(`${API_HOST_PRAKTIKUM}/user/password`, passwords, {
    withCredentials: true,
  });

export const resolveProfile: Resolver<UserChangeData, RawUser> = (
  userChangeData
) =>
  axios.put(`${API_HOST_PRAKTIKUM}/user/profile`, userChangeData, {
    withCredentials: true,
  });

export const resolveSetTheme: Resolver<Theme, void> = (theme) =>
  axios.post(`${API_HOST}/settings/theme`, theme, {
    withCredentials: true,
  });

export const resolveGetTheme: Resolver<void, void> = () =>
  axios.get(`${API_HOST}/settings/theme`, {
    withCredentials: true,
  });
