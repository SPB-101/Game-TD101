import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { Pagination } from "@component/Pagination";
import { Wrapper } from "@component/Wrapper";
import { CommentsList } from "./CommentsList";
import { CommentForm } from "./CommentForm";

import { COMMENTS_PAGE_LIMIT, COMMENTS_RECORD_LIMIT } from "@constants/index";
import { getCurrentTopicTitle } from "@selectors/widgets/forumPage";
import { getTotal } from "@selectors/widgets/messagesPage";
import { newCurrentPage } from "@thunks/widgets/messages";

import "./style.scss";

import type { Props } from "./types";
import type { State } from "@reducers/index";

export const CommentsBlock = ({ total, title, newCurrentPageThunk }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <Link to="/forum" className="button button_back forum__button">
        {t("backToForum")}
      </Link>
      <Wrapper className="comments" size={"xl"}>
        <h1 className="comments__title">{title}</h1>
        <div className="comments__list-container">
          <CommentsList className="comments__list" />
        </div>

        <Pagination
          totalRecords={total}
          pageLimit={COMMENTS_PAGE_LIMIT}
          recordLimit={COMMENTS_RECORD_LIMIT}
          onCurrentPage={newCurrentPageThunk}
          className="comments__pagination"
        />

        <CommentForm />
      </Wrapper>
    </>
  );
};

const mapStateToProps = (state: State) => ({
  total: getTotal(state),
  title: getCurrentTopicTitle(state),
});

const mapDispatchToProps = {
  newCurrentPageThunk: newCurrentPage,
};

export const Comments = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsBlock);
