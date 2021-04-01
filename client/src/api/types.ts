/**
 * Правило отключено потому что используется underscore в полях в API
 * https://eslint.org/docs/rules/camelcase
 */
/* eslint camelcase: "off" */

export type TypeLoginAndPass = {
  login: string;
  password: string;
};

export type TypeUserFullName = {
  first_name: string;
  second_name: string;
};

export type TypeUserRegistration = TypeLoginAndPass &
  TypeUserFullName & {
    email: string;
    phone: string;
  };
