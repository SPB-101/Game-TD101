export const formatNumber = (n: number, locales = "en-EN"): string =>
  new Intl.NumberFormat(locales).format(n);
