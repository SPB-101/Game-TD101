import React, { useCallback } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { ListItem } from "@component/List/ListItem";
import { getTopic } from "@selectors/collections/forum";
import { getCurrentTopic } from "@thunks/widgets/forum";

import type { IdProps, Props } from "./types";
import type { State } from "@reducers/index";

export const TopicBlock = ({ topic, getCurrentTopicThunk }: Props) => {
  const { id, title, createdAt, comments } = topic;
  const history = useHistory();

  const handleClick = useCallback(
    (id: number) => {
      getCurrentTopicThunk(id).then(() => {
        history.push(`/comments/${id}`);
      });
    },
    [id]
  );

  return (
    <ListItem>
      <div onClick={() => handleClick(id)} className="topic-link">
        <div className="forum-list__item forum-list__item_clamp forum-list__theme">
          {title}
        </div>
        <div className="forum-list__item forum-list__updated">{createdAt}</div>
        <div className="forum-list__item forum-list__item_center forum-list__comments ">
          {comments}
        </div>
      </div>
    </ListItem>
  );
};

const mapStateToProps = (state: State, { id }: IdProps) => ({
  topic: getTopic(state, id),
});

const mapDispatchToProps = {
  getCurrentTopicThunk: getCurrentTopic,
};

export const Topic = connect(mapStateToProps, mapDispatchToProps)(TopicBlock);
