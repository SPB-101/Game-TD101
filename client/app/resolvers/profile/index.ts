import axios from "axios";

import { API_HOST } from "../../../src/constants";

type Resolver<P, R> = (params: P) => Promise<R>;

export type UserProfile = {
  firstName: string;
  secondName: string;
  displayName: string;
  login: string;
  email: string;
  phone: string;
};

export type UserProfileError = string;

export const saveProfile: Resolver<UserProfile, void> = (user) =>
  axios.put(`${API_HOST}/user/profile`, user);

export const resolveUserProfile: Resolver<number, UserProfile> = (id: number) =>
  axios.get(`${API_HOST}/user/${id}`);
