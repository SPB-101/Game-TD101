import React, { useState } from "react";
import { connect } from "react-redux";

import { State } from "@reducers/index";

import { resetLike, setLike } from "@thunks/widgets/messages";
import { getUserInfo } from "@selectors/collections/currentView";
import { getLikesCollection } from "@selectors/widgets/currentView";
import { getMessage } from "@selectors/collections/messages";

import type { IdProps, Props } from "./types";

import "./style.css";

import LikeIcon from "@assets/images/icons/pixelheart.svg";
import classNames from "classnames";

export const LikeBlock = ({
  comment,
  currentUser,
  setLikeThunk,
  resetLikeThunk,
  currentUserLikes,
}: Props) => {
  const { id, likes } = comment;
  const [commentLikes, setCommentLikes] = useState(likes.length);

  const classLikeIcon = classNames("like", {
    ["like_fill"]: currentUserLikes.includes(id),
    ["like_empty"]: !currentUserLikes.includes(id),
  });

  const classLikeCounter = classNames("like__counter", {
    ["like__counter_hide"]: commentLikes === 0,
  });

  const handleLikeClick = () => {
    const isSetLike = likes.filter((like) => like.userId === currentUser.id);
    if (isSetLike.length === 0 && !currentUserLikes.includes(id)) {
      setLikeThunk(id).then(() => setCommentLikes(commentLikes + 1));
    } else {
      resetLikeThunk(id).then(() => setCommentLikes(commentLikes - 1));
    }
  };

  return (
    <div className="item__likes" onClick={handleLikeClick}>
      <LikeIcon className={classLikeIcon} />
      <div className={classLikeCounter}>{commentLikes}</div>
    </div>
  );
};

const mapStateToProps = (state: State, { id }: IdProps) => ({
  comment: getMessage(state, id),
  currentUser: getUserInfo(state),
  currentUserLikes: getLikesCollection(state),
});

const mapDispatchToProps = {
  setLikeThunk: setLike,
  resetLikeThunk: resetLike,
};

export const Like = connect(mapStateToProps, mapDispatchToProps)(LikeBlock);
