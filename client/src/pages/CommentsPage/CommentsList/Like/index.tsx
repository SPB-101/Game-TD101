import React, { useState } from "react";
import { connect } from "react-redux";

import { State } from "@reducers/index";

import { setLike } from "@thunks/widgets/messages";
import { getUserInfo } from "@selectors/collections/currentView";
import { getLikesCollection } from "@selectors/widgets/currentView";
import { getMessage } from "@selectors/collections/messages";

import type { IdProps, Props } from "./types";

export const LikeBlock = ({
  comment,
  currentUser,
  setLikeThunk,
  currentUserLikes,
}: Props) => {
  const { id, likes } = comment;
  const [commentLikes, setCommentLikes] = useState(likes.length);

  const setLike = () => {
    const isSetLike = likes.filter((like) => like.userId === currentUser.id);
    console.log("isSetLike ", isSetLike);
    console.log("currentUserLikes ", currentUserLikes);
    console.log("commentLikes ", commentLikes);

    if (isSetLike.length === 0 && !currentUserLikes.includes(id)) {
      setLikeThunk(id).then(() => setCommentLikes(commentLikes + 1));
    }
  };

  return (
    <div className="item__likes" onClick={setLike}>
      <div className="item__like">{`Likes: ${commentLikes}`}</div>
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
};

export const Like = connect(mapStateToProps, mapDispatchToProps)(LikeBlock);
