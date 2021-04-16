/**
 * Правило отключено потому что используется underscore в полях в API
 * https://eslint.org/docs/rules/camelcase
 */
/* eslint camelcase: "off" */

import type { RawUser } from "../../user/types";

export const formatUser = ({
  first_name,
  second_name,
  display_name,
  ...props
}: RawUser) => ({
  firstName: first_name,
  secondName: second_name,
  displayName: display_name,
  ...props,
});
