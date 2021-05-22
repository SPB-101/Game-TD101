export const getLocalDate = (date: string, locales = "en-EN") =>
  new Date(date).toLocaleDateString(locales);
