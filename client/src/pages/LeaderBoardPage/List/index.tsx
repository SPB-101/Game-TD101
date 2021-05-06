import React, { useEffect } from "react";
import { connect } from "react-redux";

import { useTranslation } from "react-i18next";

import { Loader } from "@component/Loader";
import { Pagination } from "@component/Pagination";
import { Item } from "../Item";

import { getIsLoading } from "@selectors/widgets/leaderboardPage";
import {
  getCurrentPageLeaderboard,
  getIdsLeaderboardCount,
} from "@selectors/widgets/leaderboardPage";
import { fetchLeaderboard } from "@thunks/collections/leaderboard";
import { newCurrentPage } from "@thunks/widgets/leaderboard";

import {
  LEADERBOARD_TAG,
  LEADERBOARD_PAGE_LIMIT,
  LEADERBOARD_RECORD_LIMIT,
} from "@constants/index";

import type { State } from "@reducers/index";
import type { Props } from "./types";

import "./style.css";

export const ListBlock = ({
  className,
  isLoading,
  idsLeaderboard,
  idsLeaderboardCount,
  fetchLeaderboardThunk,
  newCurrentPageThunk,
}: Props): JSX.Element => {
  const { t } = useTranslation();
  useEffect(() => {
    fetchLeaderboardThunk({
      ratingFieldName: LEADERBOARD_TAG,
      cursor: 0,
      limit: LEADERBOARD_RECORD_LIMIT * 20,
    });
  }, []);

  return (
    <>
      <ul className={className}>
        {isLoading ? (
          <Loader />
        ) : idsLeaderboard.length ? (
          idsLeaderboard.map((id, i) => {
            return <Item key={id} id={id} index={i} />;
          })
        ) : (
          t("emptyLeaderboard")
        )}
      </ul>
      <Pagination
        onCurrentPage={newCurrentPageThunk}
        totalRecords={idsLeaderboardCount}
        recordLimit={LEADERBOARD_RECORD_LIMIT}
        pageLimit={LEADERBOARD_PAGE_LIMIT}
      />
    </>
  );
};

const mapStateToProps = (state: State) => ({
  isLoading: getIsLoading(state),
  idsLeaderboard: getCurrentPageLeaderboard(state),
  idsLeaderboardCount: getIdsLeaderboardCount(state),
});

const mapDispatchToProps = {
  fetchLeaderboardThunk: fetchLeaderboard,
  newCurrentPageThunk: newCurrentPage,
};

export const List = connect(mapStateToProps, mapDispatchToProps)(ListBlock);
