import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";

import { Avatar } from "@component/Avatar";
import { ListItem } from "@component/List/ListItem";

import { getCursor } from "@selectors/widgets/leaderboardPage";
import { getLeaderboardItem } from "@selectors/collections/leaderboard";

import { formatNumber } from "@utils/formatNumber";
import { LEADERBOARD_TAG } from "@constants/index";

import type { State } from "@reducers/index";
import type { Props, IdProps } from "./types";

import "./style.scss";
import FirstRanked from "@assets/images/icons/winner-icon.svg";
import TopRanked from "@assets/images/icons/leader-icon.svg";

export const LeaderBoardItemBlock = ({
  leaderboardItem,
  index,
  offset,
}: Props) => {
  const { displayName, avatar } = leaderboardItem;
  const score = formatNumber(leaderboardItem[LEADERBOARD_TAG]);
  const position = offset + index + 1;

  const rankingNumberClass = classnames("item__ranking-number", {
    item_shield: position > 1 && position < 4,
  });

  return (
    <ListItem className="leader-board__item">
      <div className="item__ranking">
        {position === 1 ? (
          <FirstRanked width="50px" height="50px" />
        ) : position === 2 ? (
          <TopRanked width="50px" height="50px" fill="#f2f2f2" />
        ) : position === 3 ? (
          <TopRanked width="50px" height="50px" fill="#f2994a" />
        ) : null}
      </div>
      <div className={rankingNumberClass}>{position}</div>
      <Avatar src={avatar || ""} alt={`${displayName}'s avatar`} />
      <div className="item__name">{displayName}</div>
      <div className="item__score">{score}</div>
    </ListItem>
  );
};

const mapStateToProps = (state: State, { id }: IdProps) => ({
  offset: getCursor(state),
  leaderboardItem: getLeaderboardItem(state, id),
});

const mapDispatchToProps = {};

export const LeaderBoardItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(LeaderBoardItemBlock);
