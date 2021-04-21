import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { LeaderBoardItem } from "../../component/LeaderBoardItem";
import { Pagination } from "../../component/Pagination";
import { Wrapper } from "../../component/Wrapper";
import { Loader } from "../../component/Loader";

import { getIsLoading } from "../../store/selectors/widgets/leaderboardPage";
import { getLeaderboard } from "../../store/selectors/collections/leaderboard";
import { fetchLeaderboard } from "../../store/thunks/collections/leaderboard";

import { LEADERBOARD_TAG } from "../../constants";
import type { State } from "../../store/reducers";
import type { Props } from "./types";

import "./LeaderBoardPage.scss";

export const LeaderBoardBlock = ({
  isLoading,
  leaderboard,
  fetchLeaderboardThunk,
}: Props): JSX.Element => {
  const { t } = useTranslation();
  useEffect(() => {
    fetchLeaderboardThunk({
      ratingFieldName: LEADERBOARD_TAG,
      cursor: 0,
      limit: 5,
    });
  }, []);

  return (
    <>
      <Link to="/menu" className="button button_back leader-board__button">
        {t("backToMenu")}
      </Link>
      <Wrapper className={"leader-board"} size={"xl"}>
        {isLoading ? <Loader /> : null}
        <h1 className="leader-board__title">{t("leaderboard")}</h1>
        <ul className="leader-board__list">
          {leaderboard.length === 0 && !isLoading
            ? t("emptyLeaderboard")
            : leaderboard.map((item, index) => {
                return (
                  <LeaderBoardItem
                    key={index}
                    rankingPosition={index + 1}
                    playerName={item.displayName}
                    score={item[LEADERBOARD_TAG]}
                    playerImage={item.avatar ? item.avatar : ""}
                  />
                );
              })}
        </ul>
        <Pagination totalRecords={leaderboard.length} pageLimit={5} />
      </Wrapper>
    </>
  );
};

const mapStateToProps = (state: State) => ({
  isLoading: getIsLoading(state),
  leaderboard: getLeaderboard(state),
});

export const LeaderBoardPage = connect(mapStateToProps, {
  fetchLeaderboardThunk: fetchLeaderboard,
})(LeaderBoardBlock);
