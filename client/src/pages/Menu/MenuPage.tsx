import React from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { fetchLogout } from "../../../src/store/thunks/widgets/menuPage";

import "./MenuPage.scss";

import { Button } from "../../component/Button";
import { Wrapper } from "../../component/Wrapper";

import { Props } from "./types";

export const MenuPageBlock = ({ fetchLogoutThunk }: Props): JSX.Element => {
  const { t } = useTranslation();
  const history = useHistory();

  // !!! FIX
  const logout = () => {
    fetchLogoutThunk().then(() => {
      history.push("/");
    });
  };

  return (
    <Wrapper className="menu-page" size="m">
      <h1 className="menu-page__title">{t("nameGame")}</h1>
      <Link className="button" to="/game">
        {t("play")}
      </Link>
      <Link className="button" to="/leaderboard">
        {t("leaderboard")}
      </Link>
      <Link className="button" to="/profile">
        {t("profile")}
      </Link>
      <Link className="button" to="/forum">
        {t("forum")}
      </Link>
      <Button onClick={logout}>{t("logout")}</Button>
      <hr />
      <Link className="button" to="/registration">
        registration
      </Link>
      <Link className="button" to="/sandbox">
        sandbox
      </Link>
    </Wrapper>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = { fetchLogoutThunk: fetchLogout };

export const MenuPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuPageBlock);
