import i18n from "i18next";
import i18nextBackend from "i18next-fs-backend";
import * as i18nextMiddleware from "i18next-http-middleware";
import * as translation from "../../../client/public/locales/en/translation.json";
import { LANG_FALLBACK, LANG_PRELOAD } from "../../../constants";

i18n
  .use(i18nextBackend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    debug: false,
    lng: LANG_PRELOAD,
    preload: [LANG_PRELOAD],
    fallbackLng: LANG_FALLBACK,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `./client/public/locales/{{lng}}/{{ns}}.json`,
    },
    react: {
      useSuspense: false,
    },
  });

export const initI18n = () => {
  const i18nState = {
    initialI18nStore: {
      [LANG_PRELOAD]: { translation },
    },
    initialLanguage: LANG_PRELOAD,
  };
  return { i18n: i18n.cloneInstance(), i18nState };
};
