import React, { useEffect } from "react";
import { State } from "@reducers/index";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  getCurrentPageMessages,
  getIsMessagesLoading,
  getOffset,
} from "@selectors/widgets/messagesPage";
import { getCurrentTopicId } from "@selectors/widgets/forumPage";
import { fetchMessages } from "@thunks/collections/messages";

import { List } from "@component/List";
import { Comment } from "./Comment";

import type { Props } from "./types";

import "./style.scss";

export const CommentsListBlock = ({
  className,
  isLoading,
  idsComments,
  fetchMessagesThunk,
  offset,
  topicId,
}: Props) => {
  const { t } = useTranslation();

  useEffect(() => {
    fetchMessagesThunk({
      offset,
      topicId,
    });
  }, [0]);

  return (
    <List
      className={className}
      isLoading={isLoading}
      count={idsComments.length}
      emptyText={t("emptyComments")}
    >
      {idsComments.map((id: number) => {
        return <Comment key={id} id={id} />;
      })}
    </List>
  );
};

const mapStateToProps = (state: State) => ({
  offset: getOffset(state),
  topicId: getCurrentTopicId(state),
  isLoading: getIsMessagesLoading(state),
  idsComments: getCurrentPageMessages(state),
});

const mapDispatchToProps = {
  fetchMessagesThunk: fetchMessages,
};

export const CommentsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsListBlock);
