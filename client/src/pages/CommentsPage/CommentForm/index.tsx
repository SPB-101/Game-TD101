import classNames from "classnames";
import { connect } from "react-redux";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Field, Form } from "react-final-form";

import { TextField } from "@component/TextField";
import { Button } from "@component/Button";

import type { State } from "@reducers/index";
import {
  getIsNewCommentLoading,
  getNewCommentError,
} from "@selectors/widgets/commentsPage";
import { createComment, newCurrentPage } from "@thunks/widgets/comments";
import { getCurrentTopicId } from "@selectors/widgets/forumPage";

import type { Props } from "./types";

55555;

const CommentFormBlock = ({
  topicId,
  createCommentThunk,
  newCurrentPageThunk,
  newCommentErrorMessage,
  isNewCommentLoading,
}: Props) => {
  const { t } = useTranslation();

  const sendComment = useCallback(
    async (value: Record<string, string>) => {
      if (
        typeof value.message === "undefined" ||
        value.message.trim().length === 0
      ) {
        return;
      }

      const firstPage = 1;
      await createCommentThunk({
        message: value.message,
        topicId: topicId,
      });
      await newCurrentPageThunk(firstPage);
    },
    [topicId]
  );
  return (
    <Form
      onSubmit={sendComment}
      render={({ handleSubmit, form }) => (
        <form
          id="new-comment-form"
          className={classNames("comments__form", {
            ["comments__form_error"]: newCommentErrorMessage,
          })}
          onSubmit={(event) => {
            const promise = handleSubmit(event);
            promise && promise.then(() => form.reset());
            return promise;
          }}
        >
          {newCommentErrorMessage && (
            <div className="login-page__error-text">
              <span>{newCommentErrorMessage}</span>
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
            form="new-comment-form"
            disabled={isNewCommentLoading}
            className="comments__send-button"
          >
            →
          </Button>
        </form>
      )}
    />
  );
};

const mapStateToProps = (state: State) => ({
  topicId: getCurrentTopicId(state),
  isNewCommentLoading: getIsNewCommentLoading(state),
  newCommentErrorMessage: getNewCommentError(state),
});

const mapDispatchToProps = {
  newCurrentPageThunk: newCurrentPage,
  createCommentThunk: createComment,
};

export const CommentForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentFormBlock);
