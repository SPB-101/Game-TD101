import classNames from "classnames";
import { connect } from "react-redux";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Field, Form } from "react-final-form";

import { TextField } from "@component/TextField";
import { Button } from "@component/Button";

import { State } from "@reducers/index";
import {
  getIsNewMessageLoading,
  getNewMessageError,
} from "@selectors/widgets/messagesPage";
import { createMessage, newCurrentPage } from "@thunks/widgets/messages";
import { getCurrentTopicId } from "@selectors/widgets/forumPage";
import { validate } from "@utils/validation/validate";
import { range, required } from "@utils/validation/rules";

import type { Props } from "./types";

import IconSendButton from "@assets/images/icons/send-icon.svg";

const rulesFieldsComment = {
  message: [required, (v: string) => range(v, 4)],
};

const CommentFormBlock = ({
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
      await newCurrentPageThunk(firstPage);
    },
    [topicId]
  );
  return (
    <Form
      onSubmit={sendComment}
      validate={validate(rulesFieldsComment)}
      render={({ handleSubmit, form }) => (
        <form
          id="new-message-form"
          className={classNames("comments__form", {
            ["comments__form_error"]: newMessageErrorMessage,
          })}
          onSubmit={(event) => {
            const promise = handleSubmit(event);
            promise && promise.then(() => form.reset());
            return promise;
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
  );
};

const mapStateToProps = (state: State) => ({
  topicId: getCurrentTopicId(state),
  isNewMessageLoading: getIsNewMessageLoading(state),
  newMessageErrorMessage: getNewMessageError(state),
});

const mapDispatchToProps = {
  newCurrentPageThunk: newCurrentPage,
  createMessageThunk: createMessage,
};

export const CommentForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentFormBlock);
