import axios from "axios";

import { API_HOST } from "../../../src/constants";

type Resolver<P, R> = (params: P) => Promise<R>;

export type UserResponse = {
  data: UserProfile;
};

export type UserProfile = {
  id: number;
  avatar: string;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
};

export type UserProfileError = string;

export const resolveSignIn = () =>
  axios.post(
    `${API_HOST}/auth/signin`,
    {
      login: "lehaelka",
      password: "111111",
    },
    { withCredentials: true }
  );

export const resolveLogout: Resolver<void, void> = () =>
  axios.get(`${API_HOST}/auth/logout`, { withCredentials: true });

export const resolveSaveProfile: Resolver<UserProfile, UserResponse> = (user) =>
  axios.put(`${API_HOST}/user/profile`, user, { withCredentials: true });

export const resolveAuthProfile: Resolver<void, UserResponse> = () =>
  axios.get(`${API_HOST}/auth/user`, { withCredentials: true });
