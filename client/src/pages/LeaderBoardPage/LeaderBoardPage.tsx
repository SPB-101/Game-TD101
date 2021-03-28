import React from "react";
import { Link } from "react-router-dom";
import { LeaderBoardItem } from "../../component/LeaderBoardItem";
import { Pagination } from "../../component/Pagination";

import "./LeaderBoardPage.scss";

import mock from "./mockData.json";
import { useTranslation } from "react-i18next";

export const LeaderBoardPage = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <Link to="/" className="button button_back">
        {t("backToMenu")}
      </Link>
      <main className="leader-board">
        <h1 className="leader-board__title">leaderboard</h1>
        <ul className="leader-board__list">
          {mock.map((element, index) => {
            return (
              <LeaderBoardItem
                key={index}
                rankingPosition={index + 1}
                playerName={element.name}
                score={element.score}
                playerImage={element.photo ? element.photo : ""}
              />
            );
          })}
        </ul>
        <Pagination
          totalRecords={mock.length}
          pageLimit={2}
          className="leader-board__pagination"
        />
      </main>
    </>
  );
};
