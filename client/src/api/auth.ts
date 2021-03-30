import axios from "axios";

import { API_HOST } from "../constants";

import { responseHandler } from "../utils/responseHandler";

import type { TypeUserAndPass } from "./types";

export const signin = (user: TypeUserAndPass) => {
  return axios
    .post(`${API_HOST}/auth/signin`, user, {
      validateStatus: () => true,
    })
    .then(responseHandler);
};
