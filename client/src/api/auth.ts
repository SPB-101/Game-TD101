import axios from "axios";

import { API_HOST } from "../constants";

import { responseHandler } from "../utils/responseHandler";

import type { TypeLoginAndPass, TypeUserRegistration } from "./types";

export const signin = (user: TypeLoginAndPass) => {
  return axios
    .post(`${API_HOST}/auth/signin`, user, {
      validateStatus: () => true,
    })
    .then(responseHandler);
};

export const signup = (user: TypeUserRegistration) => {
  return axios
    .post(`${API_HOST}/auth/signup`, user, {
      validateStatus: () => true,
    })
    .then(responseHandler);
};
