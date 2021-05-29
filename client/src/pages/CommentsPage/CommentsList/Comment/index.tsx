import React, { useEffect } from "react";
import { connect } from "react-redux";

import { State } from "@reducers/index";
import { ListItem } from "@component/List/ListItem";
import { Avatar } from "@component/Avatar";

import type { IdProps, Props } from "./types";
import { getMessage } from "@selectors/collections/messages";
import { fetchUserInfoById } from "@thunks/collections/userInfo";

export const CommentBlock = ({ comment }: Props) => {
  const { id, createdAt, message, userId } = comment;

  useEffect(() => {
    fetchUserInfoById({ id: userId });
  }, [userId]);

  return (
    <ListItem>
      <Avatar className="item__avatar" width="60" height="60" src="" />
      <div className="item__container">
        <span className="item__name">Name</span>
        <p className="item__message">{message}</p>
      </div>
      <div className="item__date">{createdAt}</div>
    </ListItem>
  );
};

const mapStateToProps = (state: State, { id }: IdProps) => ({
  comment: getMessage(state, id),
});

const mapDispatchToProps = {};

export const Comment = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentBlock);
