import axios from "axios";

import { API_HOST } from "../../../src/constants";

import { formatUser } from "../../utils/user";

import type { LoginAndPass } from "./types";
import type { User } from "../../entities/user/types";

type Resolver<P, R> = (params: P) => Promise<R>;

export const resolveLogin: Resolver<LoginAndPass, void> = (user) =>
  axios.post(`${API_HOST}/auth/signin`, user);

export const resolveUserInfo: Resolver<void, User> = () =>
  axios.get(`${API_HOST}/auth/user`).then(({ data }) => formatUser(data));

export const resolveLogout: Resolver<void, void> = () =>
  axios.post(`${API_HOST}/auth/logout`);
