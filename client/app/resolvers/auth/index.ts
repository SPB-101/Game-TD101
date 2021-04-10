import axios from "axios";

import { API_HOST } from "../../../src/constants";

type Resolver<P, R> = (params: P) => Promise<R>;

export type TypeLoginAndPass = {
  login: string;
  password: string;
};

export type TypeErrorLogin = string;

export const resolveLogin: Resolver<TypeLoginAndPass, void> = (user) =>
  axios.post(`${API_HOST}/auth/signin`, user);
