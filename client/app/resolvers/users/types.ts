/**
 * Правило отключено потому что используется underscore в полях в API
 * https://eslint.org/docs/rules/camelcase
 */
/* eslint camelcase: "off" */

import { User } from "@entities/user/types";

export type AvatarFile = FormData;

export type Passwords = {
  oldPassword: string;
  newPassword: string;
};

export type UserChangeData = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
};

export type Theme = {
  theme: string;
};

export type UserId = number;

export type ResolveUsersInfo = {
  entities: {
    [id: string]: User;
  };
  result: UserId[];
};
