/**
 * Правило отключено потому что используется underscore в полях в API
 * https://eslint.org/docs/rules/camelcase
 */
/* eslint camelcase: "off" */

export type LoginAndPass = {
  login: string;
  password: string;
};

export type UserRegistration = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type UserId = {
  id: number;
};

export type Error = string;
