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
import {
  getCursor,
  getIdsLeaderboardCount,
} from "@selectors/widgets/leaderboardPage";

import type { State } from "@reducers/index";
import type { Props } from "./types";

import "./style.scss";

export const LeaderBoardBlock = ({
  idsLeaderboardCount,
  newCurrentPageThunk,
  offset,
}: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <Link to="/menu" className="button button_back leaderboard__button">
        {t("backToMenu")}
      </Link>
      <Wrapper className={"leaderboard"} size={"xl"}>
        <h1 className="leaderboard__title">{t("leaderboard")}</h1>
        <LeaderBoardList className="leaderboard__list" />
        <Pagination
          className="leaderboard__pagination"
          onCurrentPage={newCurrentPageThunk}
          totalRecords={idsLeaderboardCount}
          recordLimit={LEADERBOARD_RECORD_LIMIT}
          pageLimit={LEADERBOARD_PAGE_LIMIT}
          currentOffset={offset}
        />
      </Wrapper>
    </>
  );
};

const mapStateToProps = (state: State) => ({
  idsLeaderboardCount: getIdsLeaderboardCount(state),
  offset: getCursor(state),
});

const mapDispatchToProps = {
  newCurrentPageThunk: newCurrentPage,
};

export const LeaderBoardPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(LeaderBoardBlock);
