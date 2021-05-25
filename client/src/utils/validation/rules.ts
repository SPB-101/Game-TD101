export type TypeReturnRule =
  | null
  | [string]
  | [string, Record<string, string | number>];

export function required(v: unknown): TypeReturnRule {
  if (!v) return ["ruleRequired"];
  return null;
}

export function range(
  v: number | string,
  min = 0,
  max = Infinity
): TypeReturnRule {
  if (typeof v === "string") v = v.length;
  if (v < min) return ["ruleRangeSmall", { min }];
  if (v > max) return ["ruleRangeBig", { max }];
  return null;
}

export function email(v: string): TypeReturnRule {
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regExp.test(v)) return ["ruleEmail"];
  return null;
}

export function phone(v: string): TypeReturnRule {
  const regExp = /^(\+7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/;
  if (!regExp.test(v)) return ["rulePhone"];
  return null;
}

export function equalPasswords(v1: string, v2: string): TypeReturnRule {
  if (v1 !== v2) return ["ruleEqualPasswords"];
  return null;
}
