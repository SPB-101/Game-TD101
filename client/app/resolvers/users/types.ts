/**
 * Правило отключено потому что используется underscore в полях в API
 * https://eslint.org/docs/rules/camelcase
 */
/* eslint camelcase: "off" */

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
