const MILLISECOND = 1000;

export const getLocalDate = (date: number, locales = "en") =>
  new Date(date * MILLISECOND).toLocaleDateString(locales);
