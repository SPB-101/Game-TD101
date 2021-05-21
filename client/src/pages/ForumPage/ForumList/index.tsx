import React, { useEffect } from "react";
import { State } from "@reducers/index";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  getCurrentPageForum,
  getIsLoading,
} from "@selectors/widgets/forumPage";
import { fetchForum } from "@thunks/collections/forum";
import { List } from "@component/List";
import { Topic } from "./Topic";

import type { Props } from "./types";

import "./style.scss";

export const ForumListBlock = ({
  className,
  isLoading,
  idsTopics,
  fetchForumThunk,
}: Props) => {
  const { t } = useTranslation();

  useEffect(() => {
    fetchForumThunk({
      offset: 0,
    });
  }, []);

  return (
    <List
      className={className}
      isLoading={isLoading}
      count={idsTopics.length}
      emptyText={t("emptyForum")}
    >
      {idsTopics.map((id: number) => {
        return <Topic key={id} id={id} />;
      })}
    </List>
  );
};

const mapStateToProps = (state: State) => ({
  isLoading: getIsLoading(state),
  idsTopics: getCurrentPageForum(state),
});

const mapDispatchToProps = {
  fetchForumThunk: fetchForum,
};

export const ForumList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForumListBlock);
