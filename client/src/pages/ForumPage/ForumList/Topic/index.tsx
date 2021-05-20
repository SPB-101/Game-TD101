import React, { useCallback, useEffect } from "react";
import { State } from "@reducers/index";
import { connect } from "react-redux";
import { ListItem } from "@component/List/ListItem";
import { getTopic } from "@selectors/collections/forum";
import { useHistory } from "react-router-dom";

export const TopicBlock = ({ topic }: Props) => {
  const { title, updatedAt, messages } = topic;

  const history = useHistory();

  const handleThemeClick = useCallback((id: string) => {
    history.push(`/comments/${id}`);
  }, []);
  return (
    <ListItem>
      <div className="forum-list__item forum-list__theme list__item">
        {title}
      </div>
      <div className="forum-list__item forum-list__updated list__item">
        {updatedAt}
      </div>
      <div className="forum-list__item forum-list__comments list__item">
        {messages}
      </div>
    </ListItem>
  );
};

const mapStateToProps = (state: State, { id }: IdProps) => ({
  topic: getTopic(state, id),
});

const mapDispatchToProps = {};

export const Topic = connect(mapStateToProps, mapDispatchToProps)(TopicBlock);
