/**
 * Правило отключено потому что используется underscore в полях в API
 * https://eslint.org/docs/rules/camelcase
 */
/* eslint camelcase: "off" */

import type { RawUser } from "@entities/user/types";

import { API_HOST } from "@constants/index";

export const formatUrlAvatar = (avatar: string) => {
  return `${API_HOST}/resources${avatar}`;
};

export const formatUser = ({
  first_name,
  second_name,
  display_name,
  avatar,
  login,
  ...props
}: RawUser) => {
  if (avatar !== "" && avatar !== null) avatar = formatUrlAvatar(avatar);
  if (display_name === null) display_name = `${first_name} ${second_name}`;

  return {
    firstName: first_name,
    secondName: second_name,
    displayName: display_name,
    avatar,
    login,
    ...props,
  };
};
