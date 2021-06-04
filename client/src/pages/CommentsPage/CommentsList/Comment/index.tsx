import React, { useEffect } from "react";
import { connect } from "react-redux";

import { ListItem } from "@component/List/ListItem";
import { Avatar } from "@component/Avatar";
import { Loader } from "@component/Loader";
import { Like } from "../Like";
import { fetchUsers } from "@thunks/collections/users";

import { getUser } from "@selectors/collections/users";
import { getComment, getUserId } from "@selectors/collections/comments";

import type { State } from "@reducers/index";
import type { IdProps, Props } from "./types";

import "./style.scss";

export const CommentBlock = ({ comment, user, fetchUsersThunk }: Props) => {
  const { id, createdAt, message, userId } = comment;
  useEffect(() => {
    if (user) {
      return;
    }
    fetchUsersThunk(userId);
  }, []);

  if (!user) {
    return <Loader />;
  }

  return (
    <ListItem className="comment">
      <Avatar
        className="comment__avatar"
        src={user.avatar || ""}
        alt={`${user?.displayName || "commenter"}'s avatar`}
      />
      <div className="comment__container">
        <span className="comment__name">
          {user?.displayName || "commenter"}
        </span>
        <p className="comment__message">{message}</p>
      </div>
      <div className="comment__container">
        <div className="comment__date">{createdAt}</div>
        <Like className="comment__like" id={id} />
      </div>
    </ListItem>
  );
};

const mapStateToProps = (state: State, { id }: IdProps) => ({
  comment: getComment(state, id),
  user: getUser(state, getUserId(state, id)),
});

const mapDispatchToProps = {
  fetchUsersThunk: fetchUsers,
};

export const Comment = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentBlock);
