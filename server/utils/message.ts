export const isMessageValid = (message) =>
  typeof message === "string" && message.length > 1;
