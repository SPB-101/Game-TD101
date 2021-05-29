import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Field, Form } from "react-final-form";
import { connect } from "react-redux";

import { useTranslation } from "react-i18next";
import { Pagination } from "@component/Pagination";
import { Wrapper } from "@component/Wrapper";
import { TextField } from "@component/TextField";
import { Button } from "@component/Button";
import { CommentsList } from "./CommentsList";

import { required } from "@utils/validation/rules";
import { validate } from "@utils/validation/validate";

import { State } from "@reducers/index";
import {
  getIsNewMessageLoading,
  getNewMessageError,
  getTotal,
} from "@selectors/widgets/messagesPage";
import { createMessage, newCurrentPage } from "@thunks/widgets/messages";

import "./style.scss";
import IconSendButton from "@assets/images/icons/send-icon.svg";
import type { Props } from "./types";
import { COMMENTS_PAGE_LIMIT, COMMENTS_RECORD_LIMIT } from "@constants/index";
import { getCurrentTopicTitle } from "@selectors/widgets/forumPage";

const sendComment = (value: Record<string, string>) => {
  console.log(`submit form with ${value}`);
};

export const CommentsBlock = ({
  total,
  title,
  createMessageThunk,
  newCurrentPageThunk,
  newMessageErrorMessage,
  isNewMessageLoading,
}: Props) => {
  const { t } = useTranslation();

  // сделать отправку сообщений - текущий топик + текущий юзер
  // добавить эмоции к сообщениям

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

        <Form
          onSubmit={sendComment}
          validate={validate({ comments: [required] })}
          render={({ handleSubmit, submitting, submitError }) => (
            <form
              className={classNames("comments__form", {
                ["comments__form_error"]: submitError,
              })}
              onSubmit={handleSubmit}
            >
              {submitError && (
                <div className="login-page__error-text">
                  <span>{submitError}</span>
                </div>
              )}
              <Field name="comment">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    error={meta.error && meta.touched ? meta.error : ""}
                    name="comment"
                    className="comments__text-field"
                    label={t("newComment")}
                    placeholder={t("enterComment")}
                  />
                )}
              </Field>
              <Button
                type="submit"
                disabled={submitting}
                className="comments__send-button"
              >
                <IconSendButton
                  width="50"
                  height="50"
                  className="comments__send-button_icon"
                />
              </Button>
            </form>
          )}
        />
      </Wrapper>
    </>
  );
};

const mapStateToProps = (state: State) => ({
  total: getTotal(state),
  title: getCurrentTopicTitle(state),
  isNewMessageLoading: getIsNewMessageLoading(state),
  newMessageErrorMessage: getNewMessageError(state),
});

const mapDispatchToProps = {
  newCurrentPageThunk: newCurrentPage,
  createMessageThunk: createMessage,
};

export const Comments = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsBlock);
