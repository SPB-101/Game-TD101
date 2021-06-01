import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  getCurrentPageComments,
  getIsCommentsLoading,
  getIsNewComment,
  getOffset,
} from "@selectors/widgets/commentsPage";
import { getCurrentTopicId } from "@selectors/widgets/forumPage";
import { fetchComments } from "@thunks/collections/comments";
import { getCurrentTopic } from "@thunks/widgets/forum";
import { getIdFromPath } from "@utils/getIdFromPath";

import { Loader } from "@component/Loader";
import { List } from "@component/List";
import { Comment } from "./Comment";

import type { State } from "@reducers/index";
import type { Props } from "./types";

import "./style.scss";

export const CommentsListBlock = ({
  offset,
  topicId,
  className,
  isLoading,
  isNewComment,
  idsComments,
  fetchCommentsThunk,
  getCurrentTopicThunk,
}: Props) => {
  const { t } = useTranslation();

  useEffect(() => {
    topicId === null
      ? getCurrentTopicThunk(getIdFromPath())
      : fetchCommentsThunk({
          offset,
          topicId,
        });
  }, [topicId, offset, isNewComment]);

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
  isNewComment: getIsNewComment(state),
  topicId: getCurrentTopicId(state),
  isLoading: getIsCommentsLoading(state),
  idsComments: getCurrentPageComments(state),
});

const mapDispatchToProps = {
  fetchCommentsThunk: fetchComments,
  getCurrentTopicThunk: getCurrentTopic,
};

export const CommentsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsListBlock);
