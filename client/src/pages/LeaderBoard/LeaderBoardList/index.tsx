import React, { useEffect } from "react";
import { connect } from "react-redux";

import { useTranslation } from "react-i18next";

import { List } from "@component/List";
import { LeaderBoardItem } from "./LeaderBoardItem";

import { getIsLoading } from "@selectors/widgets/leaderboardPage";
import {
  getCurrentPageLeaderboard,
  getIdsLeaderboardCount,
} from "@selectors/widgets/leaderboardPage";
import { fetchLeaderboard } from "@thunks/collections/leaderboard";

import { LEADERBOARD_TAG, LEADERBOARD_RECORD_LIMIT } from "@constants/index";

import type { State } from "@reducers/index";
import type { Props } from "./types";

import "./style.css";

export const LeaderBoardListBlock = ({
  className,
  isLoading,
  idsLeaderboard,
  fetchLeaderboardThunk,
}: Props) => {
  const { t } = useTranslation();
  useEffect(() => {
    fetchLeaderboardThunk({
      ratingFieldName: LEADERBOARD_TAG,
      cursor: 0,
      limit: LEADERBOARD_RECORD_LIMIT * 20,
    });
  }, []);

  return (
    <List
      className={className}
      isLoading={isLoading}
      count={idsLeaderboard.length}
      emptyText={t("emptyLeaderboard")}
    >
      {idsLeaderboard.map((id, i) => {
        return <LeaderBoardItem key={id} id={id} index={i} />;
      })}
    </List>
  );
};

const mapStateToProps = (state: State) => ({
  isLoading: getIsLoading(state),
  idsLeaderboard: getCurrentPageLeaderboard(state),
  idsLeaderboardCount: getIdsLeaderboardCount(state),
});

const mapDispatchToProps = {
  fetchLeaderboardThunk: fetchLeaderboard,
};

export const LeaderBoardList = connect(
  mapStateToProps,
  mapDispatchToProps
)(LeaderBoardListBlock);
