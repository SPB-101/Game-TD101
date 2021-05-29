import React, { useEffect } from "react";
import { State } from "@reducers/index";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  getCurrentPageMessages,
  getIsMessagesLoading,
  getIsNewMessage,
  getOffset,
} from "@selectors/widgets/messagesPage";
import { getCurrentTopicId } from "@selectors/widgets/forumPage";
import { fetchMessages } from "@thunks/collections/messages";

import { List } from "@component/List";
import { Comment } from "./Comment";

import type { Props } from "./types";

import "./style.scss";
import { getIdFromPath } from "@utils/getIdFromPath";
import { getCurrentTopic } from "@thunks/widgets/forum";
import { Loader } from "@component/Loader";

export const CommentsListBlock = ({
  offset,
  topicId,
  className,
  isLoading,
  isNewMessage,
  idsComments,
  fetchMessagesThunk,
  getCurrentTopicThunk,
}: Props) => {
  const { t } = useTranslation();

  useEffect(() => {
    topicId === null
      ? getCurrentTopicThunk(getIdFromPath())
      : fetchMessagesThunk({
          offset,
          topicId,
        });
  }, [topicId, offset, isNewMessage]);

  if (isLoading) {
    return <Loader />;
  }

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
  isNewMessage: getIsNewMessage(state),
  topicId: getCurrentTopicId(state),
  isLoading: getIsMessagesLoading(state),
  idsComments: getCurrentPageMessages(state),
});

const mapDispatchToProps = {
  fetchMessagesThunk: fetchMessages,
  getCurrentTopicThunk: getCurrentTopic,
};

export const CommentsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsListBlock);
