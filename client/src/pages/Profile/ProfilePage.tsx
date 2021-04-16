import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import { Form, Field } from "react-final-form";
import classNames from "classnames";

import { Wrapper } from "../../component/Wrapper";
import { Loader } from "../../component/Loader";
import { AvatarField } from "../../component/AvatarField";

// import { TextField } from "../../component/TextField";
// import { Button } from "../../component/Button";

// import { validation } from "../../utils/validation";
// import { required, range } from "../../utils/validation/rules";

import { getUserInfo } from "../../store/selectors/collections/currentView";
import { getFormAvatar } from "../../store/selectors/widgets/profilePage";

import { fetchProfileAvatar } from "../../store/thunks/widgets/profile";

import type { State } from "../../store/reducers";
import type { Props } from "./types";

import "./ProfilePage.scss";

export const ProfileBlock = ({
  userInfo,
  formAvatar,
  fetchAvatarThunk,
}: Props): JSX.Element => {
  const { t } = useTranslation();

  const onSubmitAvatar = async (file: File) => {
    const avaData = new FormData();
    avaData.append("avatar", file);

    fetchAvatarThunk(avaData);
  };

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
            {/* <Form
              onSubmit={onSubmit}
              render={({ handleSubmit, submitting, submitError }) => (
                <form
                  className={classNames("profile-page_form", {
                    ["profile-page_form--error"]: submitError,
                  })}
                  onSubmit={handleSubmit}
                >
                  <h3>Password</h3>
                  {submitError && (
                    <div className="profile-page__error-text">
                      <span>{submitError}</span>
                    </div>
                  )}

                  <Field name="oldPassword">
                    {({ input, meta }) => (
                      <TextField
                        {...input}
                        error={meta.error && meta.touched ? meta.error : ""}
                        name="oldPassword"
                        label={t("oldPassword")}
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
                      />
                    )}
                  </Field>
                  <Button
                    classType="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    {t("change password")}
                  </Button>
                </form>
              )}
            /> */}
          </div>
          <div className="wrapper-forms_right">
            <form
              className={classNames("profile-form", {
                ["profile-form--error"]: formAvatar.errorMessage,
              })}
            >
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
});

const mapDispatchToProps = { fetchAvatarThunk: fetchProfileAvatar };

export const ProfilePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileBlock);
