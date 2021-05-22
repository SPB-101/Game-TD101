/**
 * Правило отключено потому что используется underscore в полях в API
 * https://eslint.org/docs/rules/camelcase
 */
/* eslint camelcase: "off" */

import type { RawUser, User } from "@entities/user/types";
import type { RawServiceId, ServiceId } from "@resolvers/auth/types";

import { API_PRAKTIKUM } from "@constants/index";

export const formatUrlAvatar = (avatar: string) => {
  return `${API_PRAKTIKUM}/resources${avatar}`;
};

export const formatServiceId = ({ service_id }: RawServiceId): ServiceId => {
  return { serviceId: service_id };
};

export const formatUser = ({
  first_name,
  second_name,
  display_name,
  avatar,
  login,
  ...props
}: RawUser): User => {
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
