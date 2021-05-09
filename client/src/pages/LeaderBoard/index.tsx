import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Wrapper } from "@component/Wrapper";
import { LeaderBoardList } from "./LeaderBoardList";
import { Pagination } from "@component/Pagination";

import {
  LEADERBOARD_PAGE_LIMIT,
  LEADERBOARD_RECORD_LIMIT,
} from "@constants/index";

import { newCurrentPage } from "@thunks/widgets/leaderboard";
import { getIdsLeaderboardCount } from "@selectors/widgets/leaderboardPage";

import type { State } from "@reducers/index";
import type { Props } from "./types";

import "./style.scss";

export const LeaderBoardBlock = ({
  idsLeaderboardCount,
  newCurrentPageThunk,
}: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <Link to="/menu" className="button button_back leader-board__button">
        {t("backToMenu")}
      </Link>
      <Wrapper className={"leader-board"} size={"xl"}>
        <h1 className="leader-board__title">{t("leaderboard")}</h1>
        <LeaderBoardList className="leader-board__list" />
        <Pagination
          className="leader-board__pagination"
          onCurrentPage={newCurrentPageThunk}
          totalRecords={idsLeaderboardCount}
          recordLimit={LEADERBOARD_RECORD_LIMIT}
          pageLimit={LEADERBOARD_PAGE_LIMIT}
        />
      </Wrapper>
    </>
  );
};

const mapStateToProps = (state: State) => ({
  idsLeaderboardCount: getIdsLeaderboardCount(state),
});

const mapDispatchToProps = {
  newCurrentPageThunk: newCurrentPage,
};

export const LeaderBoardPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(LeaderBoardBlock);
