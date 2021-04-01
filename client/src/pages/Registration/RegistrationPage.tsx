import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./RegistrationPage.scss";

import { Wrapper } from "../../component/Wrapper";

export const RegistrationPage = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Wrapper className="registration-page" size="m">
      {t("registrationTitle")}
      <Link to="/">{t("login")}</Link>
    </Wrapper>
  );
};
