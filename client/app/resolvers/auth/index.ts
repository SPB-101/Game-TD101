import axios from "axios";

import type { User } from "@entities/user/types";
import { formatUser, formatServiceId } from "@utils-entity/user";

import type { Resolver } from "@resolvers/types";
import type {
  LoginAndPass,
  UserRegistration,
  UserId,
  ServiceId,
  UserCode,
} from "./types";

import { API_HOST_PRAKTIKUM } from "@constants/index";

export const resolveLogin: Resolver<LoginAndPass, void> = (user) =>
  axios.post(`${API_HOST_PRAKTIKUM}/auth/signin`, user);

export const resolveUserInfo: Resolver<void, User> = () =>
  axios
    .get(`${API_HOST_PRAKTIKUM}/auth/user`, { withCredentials: true })
    .then(({ data }) => formatUser(data));

export const resolveLogout: Resolver<void, void> = () =>
  axios.post(`${API_HOST_PRAKTIKUM}/auth/logout`, { withCredentials: true });

export const resolveSignup: Resolver<UserRegistration, UserId> = (user) =>
  axios.post(`${API_HOST_PRAKTIKUM}/auth/signup`, user, {
    withCredentials: true,
  });

export const resolveOauthYandexServiceId: Resolver<void, ServiceId> = () =>
  axios
    .get(`${API_HOST_PRAKTIKUM}/oauth/yandex/service-id`)
    .then(({ data }) => formatServiceId(data));

export const resolveOauthYandexLogin: Resolver<UserCode, void> = ({ code }) =>
  axios.post(`${API_HOST_PRAKTIKUM}/oauth/yandex`, { code, redirect_uri: "" });
