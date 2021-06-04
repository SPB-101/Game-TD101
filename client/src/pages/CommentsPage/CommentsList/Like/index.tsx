import React, { useState } from "react";
import classNames from "classnames";
import { connect } from "react-redux";

import { getComment } from "@selectors/collections/comments";
import { resetLike, setLike } from "@thunks/widgets/comments";
import { getLikesCollection } from "@selectors/widgets/currentView";

import type { IdProps, Props } from "./types";
import type { State } from "@reducers/index";

import "./style.css";
import LikeIcon from "@assets/images/icons/pixelheart.svg";

export const LikeBlock = ({
  comment,
  setLikeThunk,
  resetLikeThunk,
  currentUserLikes,
  className,
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
    if (currentUserLikes.includes(id)) {
      resetLikeThunk(id).then(() => setCommentLikes(commentLikes - 1));
    } else {
      setLikeThunk(id).then(() => setCommentLikes(commentLikes + 1));
    }
  };

  return (
    <div className={`${className} like-wrapper`} onClick={handleLikeClick}>
      <LikeIcon className={classLikeIcon} />
      <div className={classLikeCounter}>{commentLikes}</div>
    </div>
  );
};

const mapStateToProps = (state: State, { id }: IdProps) => ({
  comment: getComment(state, id),
  currentUserLikes: getLikesCollection(state),
});

const mapDispatchToProps = {
  setLikeThunk: setLike,
  resetLikeThunk: resetLike,
};

export const Like = connect(mapStateToProps, mapDispatchToProps)(LikeBlock);
