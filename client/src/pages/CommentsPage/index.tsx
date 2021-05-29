import React, { useCallback } from "react";
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

import { range, required } from "@utils/validation/rules";
import { validate } from "@utils/validation/validate";
import { COMMENTS_PAGE_LIMIT, COMMENTS_RECORD_LIMIT } from "@constants/index";
import {
  getCurrentTopicId,
  getCurrentTopicTitle,
} from "@selectors/widgets/forumPage";

import {
  getIsNewMessageLoading,
  getNewMessageError,
  getTotal,
} from "@selectors/widgets/messagesPage";
import { createMessage, newCurrentPage } from "@thunks/widgets/messages";

import "./style.scss";

import IconSendButton from "@assets/images/icons/send-icon.svg";
import type { Props } from "./types";
import type { State } from "@reducers/index";

const rulesFieldsComment = {
  message: [required, (v: string) => range(v, 4)],
};

export const CommentsBlock = ({
  total,
  title,
  topicId,
  createMessageThunk,
  newCurrentPageThunk,
  newMessageErrorMessage,
  isNewMessageLoading,
}: Props) => {
  const { t } = useTranslation();

  const sendComment = useCallback(
    async (value: Record<string, string>) => {
      const firstPage = 1;
      await createMessageThunk({
        message: value.message,
        topicId: topicId,
      });
      newCurrentPageThunk(firstPage);
    },
    [topicId]
  );

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
          validate={validate(rulesFieldsComment)}
          render={({ handleSubmit, form }) => (
            <form
              id="new-message-form"
              className={classNames("comments__form", {
                ["comments__form_error"]: newMessageErrorMessage,
              })}
              onSubmit={async (event) => {
                await handleSubmit(event);
                form.restart();
              }}
            >
              {newMessageErrorMessage && (
                <div className="login-page__error-text">
                  <span>{newMessageErrorMessage}</span>
                </div>
              )}
              <Field name="message">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    error={meta.error && meta.touched ? meta.error : ""}
                    name="message"
                    className="comments__text-field"
                    label={t("newComment")}
                    placeholder={t("enterComment")}
                  />
                )}
              </Field>
              <Button
                type="submit"
                form="new-message-form"
                disabled={isNewMessageLoading}
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
  topicId: getCurrentTopicId(state),
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
