/**
 * Правило отключено потому что используется underscore в полях в API
 * https://eslint.org/docs/rules/camelcase
 */
/* eslint camelcase: "off" */

import type { RawUser } from "../../entities/user/types";

import { API_HOST } from "../../../src/constants";

export const formatUrlAvatar = (avatar: string) => {
  return `${API_HOST}/resources${avatar}`;
};

export const formatUser = ({
  first_name,
  second_name,
  display_name,
  avatar,
  ...props
}: RawUser) => {
  if (avatar === null) avatar = "";
  if (avatar) avatar = formatUrlAvatar(avatar);

  return {
    firstName: first_name,
    secondName: second_name,
    displayName: display_name,
    avatar,
    ...props,
  };
};
