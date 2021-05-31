export const isCommentValid = (message) =>
  typeof message === "string" && message.length > 0;
