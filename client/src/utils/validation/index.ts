import type { TypeReturnRule } from "./rules";

export { validation } from "./validation";
export type Rule = (...args: unknown[]) => TypeReturnRule;
