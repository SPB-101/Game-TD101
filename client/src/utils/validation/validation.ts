import type { Rule } from "./index";
import type { TypeReturnRule } from "./rules";

export function validation(
  value: string | number,
  rules: Rule[]
): TypeReturnRule {
  const arr = rules.map((rule) => rule(value));
  if (!arr.some((v) => v !== null)) {
    return null;
  }
  return arr.filter(Boolean)[0];
}
