/**
 * Правило отключено потому что используется underscore в полях в API
 * https://eslint.org/docs/rules/camelcase
 */
/* eslint camelcase: "off" */

export type RawUser = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string | null;
};

export type User = {
  id: number;
  firstName: string;
  secondName: string;
  displayName: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
};
