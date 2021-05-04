import axios from "axios";

import type { User } from "@entities/user/types";
import { formatUser } from "@utils-entity/user";

import type { Resolver } from "@resolvers/types";
import type { LoginAndPass, UserRegistration, UserId } from "./types";

import { API_HOST } from "@constants/index";

export const resolveLogin: Resolver<LoginAndPass, void> = (user) =>
  axios.post(`${API_HOST}/auth/signin`, user);

export const resolveUserInfo: Resolver<void, User> = () =>
  axios
    .get(`${API_HOST}/auth/user`, { withCredentials: true })
    .then(({ data }) => formatUser(data));

export const resolveLogout: Resolver<void, void> = () =>
  axios.post(`${API_HOST}/auth/logout`, { withCredentials: true });

export const resolveSignup: Resolver<UserRegistration, UserId> = (user) =>
  axios.post(`${API_HOST}/auth/signup`, user, { withCredentials: true });
