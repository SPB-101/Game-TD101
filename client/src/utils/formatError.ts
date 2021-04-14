import i18next from "i18next";

export const formatError = ({ response }: any) => {
  if (response.status > 300 || response.status < 200) {
    const { data } = response;
    const errorText = data.reason;

    if (errorText) {
      return i18next.t(errorText) || errorText;
    }
  }
  return i18next.t("unknownError");
};
