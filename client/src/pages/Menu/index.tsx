import React from "react";
import { push } from "connected-react-router";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { fetchLogout } from "../../store/thunks/widgets/logout";

import { Button } from "@component/Button";
import { Wrapper } from "@component/Wrapper";
import { Toggle } from "@component/Toggle";

import { IS_DEV } from "@constants/index";

import type { Props } from "./types";

import "./style.scss";

export const MenuPageBlock = ({ fetchLogoutThunk }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const logout = () => fetchLogoutThunk();
  const play = () => dispatch(push("/game"));
  const forum = () => dispatch(push("/forum"));
  const profile = () => dispatch(push("/profile"));
  const leaderboard = () => dispatch(push("/leaderboard"));

  return (
    <Wrapper className="menu-page" size="m">
      <h1 className="menu-page__title">{t("nameGame")}</h1>
      <Button onClick={play} classType="primary">
        {t("play")}
      </Button>
      <Button onClick={leaderboard}>{t("leaderboard")}</Button>
      <Button onClick={forum}>{t("forum")}</Button>
      <Button onClick={profile}>{t("profile")}</Button>
      <Button onClick={logout} classType="danger">
        {t("logout")}
      </Button>
      <Toggle />
      {IS_DEV && (
        <>
          <hr />
          <Link className="button" to="/registration">
            registration
          </Link>
          <Link className="button" to="/sandbox">
            sandbox
          </Link>
        </>
      )}
    </Wrapper>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = { fetchLogoutThunk: fetchLogout };

export const MenuPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuPageBlock);
