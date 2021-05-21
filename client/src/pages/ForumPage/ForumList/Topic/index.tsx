import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { State } from "@reducers/index";
import { ListItem } from "@component/List/ListItem";
import { getTopic } from "@selectors/collections/forum";

import type { IdProps, Props } from "./types";

export const TopicBlock = ({ topic }: Props) => {
  const { id, title, createdAt, messages } = topic;

  return (
    <ListItem>
      <Link to={`/comments/${id}`} className="topic-link">
        <div className="forum-list__item forum-list__item_clamp forum-list__theme">
          {title}
        </div>
        <div className="forum-list__item forum-list__updated">{createdAt}</div>
        <div className="forum-list__item forum-list__item_center forum-list__comments ">
          {messages}
        </div>
      </Link>
    </ListItem>
  );
};

const mapStateToProps = (state: State, { id }: IdProps) => ({
  topic: getTopic(state, id),
});

const mapDispatchToProps = {};

export const Topic = connect(mapStateToProps, mapDispatchToProps)(TopicBlock);
