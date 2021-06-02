import classNames from "classnames";
import { connect } from "react-redux";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Field, Form } from "react-final-form";

import { TextField } from "@component/TextField";
import { Button } from "@component/Button";
import { Loader } from "@component/Loader";

import { validate } from "@utils/validation/validate";
import { range, required } from "@utils/validation/rules";
import { fetchNewTopicForum } from "@thunks/widgets/forum";
import {
  getIsNewTopicLoading,
  getNewTopicError,
  getNewTopicId,
} from "@selectors/widgets/forumPage";

import type { State } from "@reducers/index";
import type { Props } from "./types";

const rulesFieldsProfile = {
  title: [required, (v: string) => range(v, 4)],
};

const ForumFormBlock = ({
  fetchNewTopicThunk,
  isNewTopicLoading,
  newTopicErrorMessage,
}: Props) => {
  const { t } = useTranslation();

  const createTheme = useCallback((values: Record<string, string>) => {
    fetchNewTopicThunk({
      title: values.title,
    });
  }, []);

  return (
    <Form
      onSubmit={createTheme}
      validate={validate(rulesFieldsProfile)}
      render={({ handleSubmit, form }) => (
        <form
          id="new-topic-form"
          className={classNames("forum__new-theme-form", {
            ["forum__new-theme-form_error"]: newTopicErrorMessage.length,
          })}
          onSubmit={async (event) => {
            await handleSubmit(event);
            form.restart();
          }}
        >
          {isNewTopicLoading && <Loader />}

          {newTopicErrorMessage && (
            <div className="login-page__error-text">
              <span>{newTopicErrorMessage}</span>
            </div>
          )}

          <Field name="title">
            {({ input, meta }) => (
              <TextField
                {...input}
                error={meta.error && meta.touched ? meta.error : ""}
                name="title"
                label={t("themeTitle")}
                placeholder={t("themeTitle")}
              />
            )}
          </Field>
          <Button
            type="submit"
            form="new-topic-form"
            disabled={isNewTopicLoading}
            className="forum__button_create"
          >
            {t("createTheme")}
          </Button>
        </form>
      )}
    />
  );
};

const mapStateToProps = (state: State) => ({
  newTopicId: getNewTopicId(state),
  isNewTopicLoading: getIsNewTopicLoading(state),
  newTopicErrorMessage: getNewTopicError(state),
});

const mapDispatchToProps = {
  fetchNewTopicThunk: fetchNewTopicForum,
};

export const ForumForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForumFormBlock);
