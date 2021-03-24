import React from "react";

import "./LeaderBoardItem.scss";

import { Props } from "./types";

// TODO: добавить аватар пользователя как компонент

export const LeaderBoardItem = ({
  rankingPosition = 1,
  playerImage = "https://miro.medium.com/max/405/1*W35QUSvGpcLuxPo3SRTH4w.png",
  playerName = "player",
  score = "0",
}: Props): JSX.Element | null => {
  return (
    <>
      <li className="leader-board__item">
        <span className="item__ranking-position">{rankingPosition}</span>
        <div className="item__player">
          <img
            className="item__player-image"
            src={playerImage}
            alt={`${playerName}'s photo`}
            width="50"
            height="50"
          />
          <span className="item__player-name">{playerName}</span>
        </div>
        <span className="item__score">{score}</span>
      </li>
    </>
  );
};
