export const pick = (obj, keys) =>
  Object.keys(obj)
    .filter((k) => keys.includes(k))
    .reduce((res, k) => Object.assign(res, { [k]: obj[k] }), {});
