import React from "react";
import { Avatar } from "../../../component/Avatar";

import { Props } from "./types";

import "./LeaderBoardItem.scss";
import FirstRanked from "@assets/images/icons/winner-icon.svg";
import TopRanked from "@assets/images/icons/leader-icon.svg";

export const LeaderBoardItem = ({
  rankingPosition = 1,
  playerImage = "",
  playerName = "player",
  score = 0,
}: Props) => {
  return (
    <li className="leader-board__item">
      <div className="item__ranking">
        {rankingPosition === 1 ? (
          <>
            <FirstRanked width="50px" height="50px" />
            <div className="item_color--grey item_position--absolute item_z-index-low">
              {rankingPosition}
            </div>
          </>
        ) : rankingPosition === 2 ? (
          <>
            <TopRanked fill="#f2f2f2" width="50px" height="50px" />
            <div className="item_color--grey item_position--absolute">
              {rankingPosition}
            </div>
          </>
        ) : rankingPosition === 3 ? (
          <>
            <TopRanked fill="#f2994a" width="50px" height="50px" />
            <div className="item_color--grey item_position--absolute">
              {rankingPosition}
            </div>
          </>
        ) : (
          <div className="item__ranking-number">{rankingPosition}</div>
        )}
      </div>
      <Avatar
        className={"item__player-image"}
        src={playerImage}
        alt={`${playerName}'s photo`}
      />
      <div className="item__player-name">{playerName}</div>
      <div className="item__score">{score}</div>
    </li>
  );
};
