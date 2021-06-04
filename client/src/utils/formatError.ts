import i18next from "i18next";

export const formatError = (data: any) => {
  if (data instanceof Error) {
    if (data.message === "Network Error") {
      return i18next.t("imageTooLarge");
    }
    return i18next.t("ooops");
  }

  const { response } = data;
  if (response) {
    if (response.status > 300 || response.status < 200) {
      const { data } = response;
      const errorText = data.reason;

      if (errorText) {
        return i18next.t(errorText) || errorText;
      }
    }
  }
  return i18next.t("unknownError");
};
