import React, { useEffect } from "react";
import { connect } from "react-redux";

import { State } from "@reducers/index";
import { ListItem } from "@component/List/ListItem";
import { Avatar } from "@component/Avatar";

import type { IdProps, Props } from "./types";
import { getMessage, getUserId } from "@selectors/collections/messages";
import { fetchUsers } from "@thunks/collections/users";
import { getUser } from "@selectors/collections/users";
import { Loader } from "@component/Loader";

export const CommentBlock = ({ comment, user, fetchUsersThunk }: Props) => {
  const { createdAt, message, userId } = comment;
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
    <ListItem className="comments__item">
      <Avatar
        className="item__avatar"
        width="60"
        height="60"
        src={user?.avatar || undefined}
        alt={`${user?.displayName || "commenter"}'s avatar`}
      />
      <div className="item__container">
        <span className="item__name">{user?.displayName || "commenter"}</span>
        <p className="item__message">{message}</p>
      </div>
      <div className="item__date">{createdAt}</div>
    </ListItem>
  );
};

const mapStateToProps = (state: State, { id }: IdProps) => ({
  comment: getMessage(state, id),
  user: getUser(state, getUserId(state, id)),
});

const mapDispatchToProps = {
  fetchUsersThunk: fetchUsers,
};

export const Comment = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentBlock);
