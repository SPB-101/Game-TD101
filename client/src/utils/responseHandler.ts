import { FORM_ERROR } from "final-form";
import i18next from "i18next";

/**
 * Правило отключене потому что необходимо вернуть объект в ошибке для формы
 * https://eslint.org/docs/rules/prefer-promise-reject-errors
 */

/* eslint prefer-promise-reject-errors: "off" */

export const responseHandler = (response: any) => {
  if (!response || !response.data) {
    return Promise.reject({
      [FORM_ERROR]: i18next.t("unknownError"),
    });
  } else {
    const { data } = response;
    const errorText = data.reason;

    if (errorText) {
      return Promise.reject({
        [FORM_ERROR]: i18next.t(errorText) || errorText,
      });
    } else {
      return Promise.resolve(data);
    }
  }
};
