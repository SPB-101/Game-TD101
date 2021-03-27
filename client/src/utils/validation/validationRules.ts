// import { t } from "../../locales/index";

// export function required(v: unknown): string {
//   if (!v) return t["ruleRequired"];
//   return "";
// }

// export function range(v: number | string, min = 0, max = Infinity): string {
//   if (typeof v === "string") v = v.length;
//   if (v < min) return `${t["ruleRangeSmall"]} ${min}`;
//   if (v > max) return `${t["ruleRangeBig"]} ${max}`;
//   return "";
// }

// export function email(v: string): string {
//   const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (!regExp.test(v)) return t["ruleEmail"];
//   return "";
// }

// export function phone(v: string): string {
//   const regExp = /^(\+7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/;
//   if (!regExp.test(v)) return t["rulePhone"];
//   return "";
// }

// export function equalPasswords(v1: string, v2: string): string {
//   if (v1 !== v2) return t["ruleEqualPasswords"];
//   return "";
// }
