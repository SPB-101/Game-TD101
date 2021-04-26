import React from "react";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Wrapper } from "@component/Wrapper";
import { List } from "./List";

import "./LeaderBoardPage.scss";

export const LeaderBoardPage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Link to="/menu" className="button button_back leader-board__button">
        {t("backToMenu")}
      </Link>
      <Wrapper className={"leader-board"} size={"xl"}>
        <h1 className="leader-board__title">{t("leaderboard")}</h1>
        <List className="leader-board__list" />
      </Wrapper>
    </>
  );
};
