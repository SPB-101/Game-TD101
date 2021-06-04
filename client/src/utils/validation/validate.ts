import { validation } from ".";
import i18n from "i18next";
import type { Rule } from ".";
import type { TypeReturnRule } from "./rules";

type ValidateObject = {
  [k: string]: Rule[];
};
type Errors = Record<string, TypeReturnRule>;
type Values = Record<string, string>;

export type ValidateFunction = (param: {
  values: Values;
  errors: Errors;
}) => Errors;

export const validate = (
  fields: ValidateObject,
  customValidationForm?: ValidateFunction
) => (values: Values) => {
  const errors: Errors = {};

  Object.entries(fields).forEach(([k, v]) => {
    const err = validation(values[k], v);
    if (err) {
      errors[k] = i18n.t(err[0], err[1] || {});
    }
  });

  if (customValidationForm !== undefined) {
    const resultCustomValidation = customValidationForm({ values, errors });
    Object.entries(resultCustomValidation).forEach(([k, v]) => {
      if (v) {
        errors[k] = i18n.t(v[0], v[1] || {});
      }
    });
  }

  return errors;
};
