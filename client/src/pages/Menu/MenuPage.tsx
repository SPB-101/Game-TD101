import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./MenuPage.scss";

import { Wrapper } from "../../component/Wrapper";

export const MenuPage = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Wrapper className="menu-page" size="m">
      <h1 className="menu-page__title">{t("nameGame")}</h1>
      <Link className="button" to="/game">
        {t("play")}
      </Link>
      <Link className="button" to="/liderboard">
        {t("liderboard")}
      </Link>
      <Link className="button" to="/profile">
        {t("profile")}
      </Link>
      <Link className="button" to="/forum">
        {t("forum")}
      </Link>
      <hr />
      <Link className="button" to="/registration">
        registration
      </Link>
      <Link className="button" to="/login">
        login
      </Link>
      <Link className="button" to="/sandbox">
        sandbox
      </Link>
    </Wrapper>
  );
};
