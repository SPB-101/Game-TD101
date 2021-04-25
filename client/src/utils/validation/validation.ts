import type { Rule } from "./index";

export function validation(value: string | number, rules: Rule[]): string {
  const arr = rules.map((rule) => rule(value));
  if (!arr.some((v) => v !== "")) {
    return "";
  }
  return arr.filter(Boolean)[0];
}
