import { required } from "./validation/rules";
import { validation } from "./validation";

type ValidateObject = {
  field: string;
  callback?: (...args: unknown[]) => string;
};

export const validate = (requiredFields: ValidateObject[]) => (
  values: Record<string, string>
) => {
  const errors: Record<string, string> = {};
  const fields: Record<string, ((...args: unknown[]) => string)[]> = {};

  requiredFields.forEach(({ field, callback }) => {
    if (callback) {
      fields[`${field}`] = [required, callback];
    } else {
      fields[`${field}`] = [required];
    }
  });

  Object.entries(fields).forEach(([k, v]) => {
    const err = validation(values[k], v);
    if (err) errors[k] = err;
  });

  return errors;
};
