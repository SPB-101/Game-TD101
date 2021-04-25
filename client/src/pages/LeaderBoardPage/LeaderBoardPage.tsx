import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { LeaderBoardItem } from "./LeaderBoardItem";
import { Pagination } from "../../component/Pagination";
import { Wrapper } from "../../component/Wrapper";

import "./LeaderBoardPage.scss";

import { useTranslation } from "react-i18next";
import { State } from "../../store/reducers";
import { getLeaderboard } from "../../store/selectors/collections/leaderboard";
import { connect } from "react-redux";
import { fetchLeaderboard } from "../../store/thunks/collections/leaderboard";
import type { Props } from "./types";

export const LeaderBoardBlock = ({
  leaderboard,
  fetchLeaderboardThunk,
}: Props): JSX.Element => {
  const { t } = useTranslation();
  useEffect(() => {
    fetchLeaderboardThunk({
      ratingFieldName: "TD101Score",
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
        <h1 className="leader-board__title">{t("leaderboard")}</h1>
        <ul className="leader-board__list">
          {leaderboard.map((element, index) => {
            return (
              <LeaderBoardItem
                key={index}
                rankingPosition={index + 1}
                playerName={element.displayName}
                score={element["TD101Score"]}
                playerImage={element.avatar ? element.avatar : ""}
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
  leaderboard: getLeaderboard(state),
});

export const LeaderBoardPage = connect(mapStateToProps, {
  fetchLeaderboardThunk: fetchLeaderboard,
})(LeaderBoardBlock);
