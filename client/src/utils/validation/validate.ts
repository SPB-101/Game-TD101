import { validation } from ".";
import type { Rule } from ".";

type ValidateObject = {
  [k: string]: Rule[];
};
type Errors = Record<string, string>;
type Values = Record<string, string>;

export type ValidateFunction = (param: {
  values: Values;
  errors: Errors;
}) => void;

export const validate = (
  fields: ValidateObject,
  customValidationForm?: ValidateFunction
) => (values: Values) => {
  const errors: Errors = {};

  Object.entries(fields).forEach(([k, v]) => {
    const err = validation(values[k], v);
    if (err) errors[k] = err;
  });

  if (customValidationForm !== undefined) {
    customValidationForm({ values, errors });
  }

  return errors;
};
