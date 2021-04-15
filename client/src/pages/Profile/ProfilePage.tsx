import React from "react";
import { useTranslation } from "react-i18next";
import { Wrapper } from "../../component/Wrapper";
import { Field, Form } from "react-final-form";
import { Loader } from "../../component/Loader";
import { TextField } from "../../component/TextField";
import { Button } from "../../component/Button";
// import { State } from "../../store/reducers";
// import {
//   getErrorMessage,
//   getIsLoading,
// } from "../../store/selectors/widgets/profilePage";
// import { fetchProfile } from "../../store/thunks/widgets/profile";
import { connect } from "react-redux";
import classNames from "classnames";
import "./ProfilePage.scss";

export type Props = {
  isLoading: boolean;
  errorMessage: string;
  fetchProfileThunk: (userId: number) => void;
};

export const ProfilePageBlock = ({
  errorMessage,
  fetchProfileThunk,
  isLoading,
}: Props): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Wrapper className="profile-page" size="m">
      <h1 className="profile-page__title">{t("nameProfile")}</h1>
      <Form
        onSubmit={() => console.log("hello")}
        render={({ handleSubmit }) => (
          <form
            className={classNames("profile-page__form", {
              ["profile-page__form_error"]: errorMessage,
            })}
            onSubmit={handleSubmit}
          >
            {isLoading && <Loader />}
            {errorMessage && (
              <div className="profile-page__error-text">
                <span>{errorMessage}</span>
              </div>
            )}

            <Field name="first_name">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  error={meta.error && meta.touched ? meta.error : ""}
                  name="first_name"
                  label="First name"
                  placeholder=""
                />
              )}
            </Field>

            <Field name="second_name">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  error={meta.error && meta.touched ? meta.error : ""}
                  name="second_name"
                  label="Second name"
                  placeholder=""
                />
              )}
            </Field>

            <Field name="display_name">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  error={meta.error && meta.touched ? meta.error : ""}
                  name="display_name"
                  label="Display name"
                  placeholder=""
                />
              )}
            </Field>

            <Field name="email">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  error={meta.error && meta.touched ? meta.error : ""}
                  name="email"
                  label="Email"
                  placeholder=""
                />
              )}
            </Field>

            <Field name="Phone">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  error={meta.error && meta.touched ? meta.error : ""}
                  name="phone"
                  label={t("Phone")}
                  placeholder=""
                />
              )}
            </Field>
            <div className=""></div>
            <Button type="submit" disabled={isLoading}>
              {t("logout")}
            </Button>

            <Button disabled={true}>{t("save")}</Button>
          </form>
        )}
      />
    </Wrapper>
  );
};

// const mapStateToProps = (state: State) => ({
//   errorMessage: getErrorMessage(state),
//   isLoading: getIsLoading(state),
// });
//
// const mapDispatchToProps = { fetchProfileThunk: fetchProfile };

export const ProfilePage = connect()(ProfilePageBlock);
