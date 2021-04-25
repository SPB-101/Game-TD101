import React, { useCallback } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { Form, Field } from "react-final-form";
import classNames from "classnames";

import { Loader } from "@component/Loader";
import { TextField } from "@component/TextField";
import { Button } from "@component/Button";

import { validate } from "@utils/validation/validate";
import { required, range, email, phone } from "@utils/validation/rules";
import { omit } from "@utils/omit";

import { getUserInfo } from "@selectors/collections/currentView";
import { getFormProfile } from "@selectors/widgets/profilePage";
import { fetchProfileData } from "@thunks/widgets/profile";

import type { State } from "@reducers/index";
import type { Props } from "./types";

import "./ProfileForm.scss";

const rulesFieldsProfile = {
  firstName: [required, (v: string) => range(v, 4)],
  secondName: [required, (v: string) => range(v, 4)],
  displayName: [required, (v: string) => range(v, 4)],
  login: [required],
  email: [required, email],
  phone: [required, phone],
};

export const ProfileFormBlock = ({
  userInfo,
  formProfile,
  fetchProfileThunk,
}: Props) => {
  const { t } = useTranslation();

  const onSubmitProfile = useCallback((values: Record<string, string>) => {
    return fetchProfileThunk({
      first_name: values.firstName,
      second_name: values.secondName,
      display_name: values.displayName,
      login: values.login,
      email: values.email,
      phone: values.phone,
    });
  }, []);

  return (
    <Form
      onSubmit={onSubmitProfile}
      validate={validate(rulesFieldsProfile)}
      initialValues={omit(userInfo, ["id", "avatar"])}
      render={({ handleSubmit }) => (
        <form
          id="profile-form"
          className={classNames("form", {
            ["form--error"]: formProfile.errorMessage,
          })}
          onSubmit={handleSubmit}
        >
          <h3>{t("profile")}</h3>
          {formProfile.isLoading && <Loader />}
          {formProfile.errorMessage && (
            <div className="form__error-text">
              <span>{formProfile.errorMessage}</span>
            </div>
          )}

          <Field name="firstName">
            {({ input, meta }) => (
              <TextField
                {...input}
                error={meta.error && meta.touched ? meta.error : ""}
                name="firstName"
                label={t("firstName")}
              />
            )}
          </Field>
          <Field name="secondName">
            {({ input, meta }) => (
              <TextField
                {...input}
                error={meta.error && meta.touched ? meta.error : ""}
                name="secondName"
                label={t("secondName")}
              />
            )}
          </Field>
          <Field name="displayName">
            {({ input, meta }) => (
              <TextField
                {...input}
                error={meta.error && meta.touched ? meta.error : ""}
                name="displayName"
                label={t("displayName")}
              />
            )}
          </Field>
          <Field name="login">
            {({ input, meta }) => (
              <TextField
                {...input}
                error={meta.error && meta.touched ? meta.error : ""}
                name="login"
                label={t("login")}
              />
            )}
          </Field>
          <Field name="email">
            {({ input, meta }) => (
              <TextField
                {...input}
                error={meta.error && meta.touched ? meta.error : ""}
                name="email"
                label={t("email")}
              />
            )}
          </Field>
          <Field name="phone">
            {({ input, meta }) => (
              <TextField
                {...input}
                error={meta.error && meta.touched ? meta.error : ""}
                name="phone"
                label={t("phone")}
              />
            )}
          </Field>

          <Button
            form="profile-form"
            type="submit"
            disabled={formProfile.isLoading}
          >
            {t("save")}
          </Button>
        </form>
      )}
    />
  );
};

const mapStateToProps = (state: State) => ({
  userInfo: getUserInfo(state),
  formProfile: getFormProfile(state),
});

const mapDispatchToProps = {
  fetchProfileThunk: fetchProfileData,
};

export const ProfileForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileFormBlock);
