export const getIdFromPath = () => {
  return Number(location.pathname.replace(/\D/g, ""));
};
