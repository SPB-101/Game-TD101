import axios from "axios";

import { API_HOST } from "../../../src/constants";

import { formatUser } from "../../utils/user";

import type { TypeLoginAndPass } from "./types";
import type { TypeUser } from "../../entities/user/types";

type Resolver<P, R> = (params: P) => Promise<R>;

export const resolveLogin: Resolver<TypeLoginAndPass, void> = (user) =>
  axios.post(`${API_HOST}/auth/signin`, user).then(() => {
    setTimeout(() => {
      resolveUser();
    }, 500);
  });

export const resolveUser: Resolver<void, TypeUser> = () =>
  axios.get(`${API_HOST}/auth/user`).then(({ data }) => formatUser(data));

export const resolveLogout: Resolver<void, void> = () =>
  axios.post(`${API_HOST}/auth/logout`);
