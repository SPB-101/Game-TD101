import React, { useCallback } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Form, Field } from "react-final-form";
import classNames from "classnames";

import { Wrapper } from "../../component/Wrapper";
import { Loader } from "../../component/Loader";
import { AvatarField } from "../../component/AvatarField";

import { TextField } from "../../component/TextField";
import { Button } from "../../component/Button";

import type { ValidateFunction } from "../../utils/validation/validate";
import { validate } from "../../utils/validation/validate";
import { required, range, equalPasswords } from "../../utils/validation/rules";

import { getUserInfo } from "../../store/selectors/collections/currentView";
import {
  getFormAvatar,
  getFormPassword,
} from "../../store/selectors/widgets/profilePage";

import {
  fetchProfileAvatar,
  fetchProfilePassword,
} from "../../store/thunks/widgets/profile";

import type { State } from "../../store/reducers";
import type { Props } from "./types";

import "./ProfilePage.scss";

const rulesFieldsPassword = {
  oldPassword: [required, (v: string | number) => range(v, 4)],
  newPassword: [required, (v: string | number) => range(v, 4)],
  newPasswordAgain: [required, (v: string | number) => range(v, 4)],
};

const customValidationPassword: ValidateFunction = ({ values, errors }) => {
  const eqlPass = equalPasswords(values.newPassword, values.newPasswordAgain);
  if (eqlPass) errors.newPasswordAgain = eqlPass;
};

export const ProfileBlock = ({
  userInfo,
  formAvatar,
  formPassword,
  fetchAvatarThunk,
  fetchPasswordThunk,
}: Props): JSX.Element => {
  const { t } = useTranslation();

  const onSubmitAvatar = useCallback((file: File) => {
    const avaData = new FormData();
    avaData.append("avatar", file);
    return fetchAvatarThunk(avaData);
  }, []);

  const onSubmitNewPassword = useCallback((values: Record<string, string>) => {
    return fetchPasswordThunk({
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
    });
  }, []);

  return (
    <>
      <Link to="/menu" className="button button_back profile-page_button-back">
        {t("backToMenu")}
      </Link>
      <Wrapper className="profile-page" size="l">
        <h1 className="profile-page__title">{t("profile")}</h1>
        <div className="wrapper-forms">
          <div className="wrapper-forms_left">
            {/* <Form
              onSubmit={onSubmit}
              render={({ handleSubmit, submitting, submitError }) => (
                <form
                  className={classNames("profile-page_form", {
                    ["profile-page_form--error"]: submitError,
                  })}
                  onSubmit={handleSubmit}
                >
                  <h3>Profile</h3>
                  {submitError && (
                    <div className="profile-page__error-text">
                      <span>{submitError}</span>
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
                    classType="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    {t("save")}
                  </Button>
                </form>
              )}
            /> */}
          </div>
          <div className="wrapper-forms_center">
            <Form
              onSubmit={onSubmitNewPassword}
              validate={validate(rulesFieldsPassword, customValidationPassword)}
              render={({ handleSubmit }) => (
                <form
                  id="password-form"
                  className={classNames("profile-form", {
                    ["profile-form--error"]: formPassword.errorMessage,
                  })}
                  onSubmit={handleSubmit}
                >
                  <h3>{t("password")}</h3>
                  {formPassword.isLoading && <Loader />}
                  {formPassword.errorMessage && (
                    <div className="profile-form__error-text">
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
                    {t("change password")}
                  </Button>
                </form>
              )}
            />
          </div>
          <div className="wrapper-forms_right">
            <form
              className={classNames("profile-form", {
                ["profile-form--error"]: formAvatar.errorMessage,
              })}
            >
              <h3>{t("avatar")}</h3>
              {formAvatar.isLoading && <Loader />}
              {formAvatar.errorMessage && (
                <div className="profile-form__error-text">
                  <span>{formAvatar.errorMessage}</span>
                </div>
              )}

              <AvatarField
                initValue={userInfo.avatar}
                name="avatar"
                disabled={formAvatar.isLoading}
                label={t("uploadAvatar")}
                onSelectFile={onSubmitAvatar}
              />
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const mapStateToProps = (state: State) => ({
  userInfo: getUserInfo(state),
  formAvatar: getFormAvatar(state),
  formPassword: getFormPassword(state),
});

const mapDispatchToProps = {
  fetchAvatarThunk: fetchProfileAvatar,
  fetchPasswordThunk: fetchProfilePassword,
};

export const ProfilePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileBlock);
