import React, { useCallback } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { Form, Field } from "react-final-form";
import classNames from "classnames";

import { Loader } from "@component/Loader";
import { TextField } from "@component/TextField";
import { Button } from "@component/Button";

import type { ValidateFunction } from "@utils/validation/validate";
import { validate } from "@utils/validation/validate";
import { required, range, equalPasswords } from "@utils/validation/rules";

import { getUserInfo } from "@selectors/collections/currentView";
import { getFormPassword } from "@selectors/widgets/profilePage";
import { fetchProfilePassword } from "@thunks/widgets/profile";

import type { State } from "@reducers/index";
import type { Props } from "./types";

import "./PasswordForm.scss";

const rulesFieldsPassword = {
  oldPassword: [required, (v: string | number) => range(v, 4)],
  newPassword: [required, (v: string | number) => range(v, 4)],
  newPasswordAgain: [required, (v: string | number) => range(v, 4)],
};

const customValidationPassword: ValidateFunction = ({ values, errors }) => {
  const eqlPass = equalPasswords(values.newPassword, values.newPasswordAgain);
  if (eqlPass) errors.newPasswordAgain = eqlPass;
};

export const PasswordFormBlock = ({
  formPassword,
  fetchPasswordThunk,
}: Props) => {
  const { t } = useTranslation();

  const onSubmitNewPassword = useCallback((values: Record<string, string>) => {
    return fetchPasswordThunk({
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
    });
  }, []);

  return (
    <Form
      onSubmit={onSubmitNewPassword}
      validate={validate(rulesFieldsPassword, customValidationPassword)}
      render={({ handleSubmit }) => (
        <form
          id="password-form"
          className={classNames("form", {
            ["form--error"]: formPassword.errorMessage,
          })}
          onSubmit={handleSubmit}
        >
          <h3>{t("password")}</h3>
          {formPassword.isLoading && <Loader />}
          {formPassword.errorMessage && (
            <div className="form__error-text">
              <span>{formPassword.errorMessage}</span>
            </div>
          )}

          <Field name="oldPassword">
            {({ input, meta }) => (
              <TextField
                {...input}
                error={meta.error && meta.touched ? meta.error : ""}
                name="oldPassword"
                label={t("oldPassword")}
                type="password"
              />
            )}
          </Field>
          <Field name="newPassword">
            {({ input, meta }) => (
              <TextField
                {...input}
                error={meta.error && meta.touched ? meta.error : ""}
                name="newPassword"
                label={t("newPassword")}
                type="password"
              />
            )}
          </Field>
          <Field name="newPasswordAgain">
            {({ input, meta }) => (
              <TextField
                {...input}
                error={meta.error && meta.touched ? meta.error : ""}
                name="newPasswordAgain"
                label={t("newPasswordAgain")}
                type="password"
              />
            )}
          </Field>
          <Button
            form="password-form"
            type="submit"
            disabled={formPassword.isLoading}
          >
            {t("changePassword")}
          </Button>
        </form>
      )}
    />
  );
};

const mapStateToProps = (state: State) => ({
  userInfo: getUserInfo(state),
  formPassword: getFormPassword(state),
});

const mapDispatchToProps = {
  fetchPasswordThunk: fetchProfilePassword,
};

export const PasswordForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordFormBlock);
