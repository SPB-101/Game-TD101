import React from "react";
import { Avatar } from "../../../component/Avatar";

import "./LeaderBoardItem.scss";
import FirstRanked from "../../../assets/images/icons/winner-icon.svg";
import TopRanked from "../../../assets/images/icons/leader-icon.svg";

import { Props } from "./types";

export const LeaderBoardItem = ({
  rankingPosition = 1,
  playerImage = "",
  playerName = "player",
  score = "0",
}: Props): JSX.Element | null => {
  return (
    <li className="leader-board__item">
      <div className="item__ranking">
        {rankingPosition === 1 ? (
          <>
            <FirstRanked width="50px" height="50px" />
            <span className="item_color--grey item_position--absolute item_z-index-low">
              {rankingPosition}
            </span>
          </>
        ) : rankingPosition === 2 ? (
          <>
            <TopRanked fill="#f2f2f2" width="50px" height="50px" />
            <span className="item_color--grey item_position--absolute">
              {rankingPosition}
            </span>
          </>
        ) : rankingPosition === 3 ? (
          <>
            <TopRanked fill="#f2994a" width="50px" height="50px" />
            <span className="item_color--grey item_position--absolute">
              {rankingPosition}
            </span>
          </>
        ) : (
          <span className="item__ranking-number">{rankingPosition}</span>
        )}
      </div>
      <div className="item__player">
        <Avatar
          className={"item__player-image"}
          src={playerImage}
          alt={`${playerName}'s photo`}
        />
        <span className="item__player-name">{playerName}</span>
      </div>
      <span className="item__score">{score}</span>
    </li>
  );
};
