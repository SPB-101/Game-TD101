import React, { useCallback } from "react";
import { push } from "connected-react-router";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { fetchLogout } from "../../store/thunks/widgets/logout";

import { Button } from "@component/Button";
import { Wrapper } from "@component/Wrapper";
import { Toggle } from "@component/Toggle";

import { Props } from "./types";

import "./MenuPage.scss";

export const MenuPageBlock = ({ fetchLogoutThunk }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const logout = useCallback(() => {
    fetchLogoutThunk();
  }, []);

  const play = useCallback(() => {
    dispatch(push("/game"));
  }, []);

  return (
    <Wrapper className="menu-page" size="m">
      <h1 className="menu-page__title">{t("nameGame")}</h1>
      <Button classType="primary" onClick={play}>
        {t("play")}
      </Button>
      <Link className="button" to="/leaderboard">
        {t("leaderboard")}
      </Link>
      <Link className="button" to="/profile">
        {t("profile")}
      </Link>
      <Link className="button" to="/forum">
        {t("forum")}
      </Link>
      <Button classType="danger" onClick={logout}>
        {t("logout")}
      </Button>
      {NODE_ENV === "development" ? (
        <>
          <hr />
          <Link className="button" to="/registration">
            registration
          </Link>
          <Link className="button" to="/sandbox">
            sandbox
          </Link>
        </>
      ) : null}
      <Toggle />
    </Wrapper>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = { fetchLogoutThunk: fetchLogout };

export const MenuPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuPageBlock);
