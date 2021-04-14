import React, { useCallback } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Form, Field } from "react-final-form";
import classNames from "classnames";

import { Wrapper } from "../../component/Wrapper";
import { TextField } from "../../component/TextField";
import { Button } from "../../component/Button";
import { Loader } from "../../component/Loader";

import {
  getErrorMessage,
  getIsLoading,
} from "../../store/selectors/widgets/loginPage";
import { State } from "../../store/reducers";
import { fetchLogin } from "../../store/thunks/widgets/login";

import { range } from "../../utils/validation/rules";
import { validate } from "../../utils/validate";

import "./LoginPage.scss";

import type { Props } from "./types";

const ruelesFields = [
  { field: "login", callback: (v: string | number) => range(v, 3) },
  { field: "password" },
];

export const LoginPageBlock = ({
  errorMessage,
  fetchLoginThunk,
  isLoading,
}: Props): JSX.Element => {
  const { t } = useTranslation();

  const onSubmit = useCallback((values: Record<string, string>) => {
    return fetchLoginThunk({
      login: values.login,
      password: values.password,
    });
  }, []);

  return (
    <Wrapper className="login-page" size="m">
      <h1 className="login-page__title">{t("nameGame")}</h1>
      <Form
        onSubmit={onSubmit}
        validate={validate(ruelesFields)}
        render={({ handleSubmit }) => (
          <form
            className={classNames("login-page__form", {
              ["login-page__form_error"]: errorMessage,
            })}
            onSubmit={handleSubmit}
          >
            {isLoading && <Loader />}
            {errorMessage && (
              <div className="login-page__error-text">
                <span>{errorMessage}</span>
              </div>
            )}

            <Field name="login">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  error={meta.error && meta.touched ? meta.error : ""}
                  name="login"
                  label={t("login")}
                  placeholder="login"
                />
              )}
            </Field>

            <Field name="password">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  error={meta.error && meta.touched ? meta.error : ""}
                  name="password"
                  type="password"
                  label={t("password")}
                  placeholder=""
                />
              )}
            </Field>

            <Button type="submit" disabled={isLoading}>
              {t("login")}
            </Button>

            <Button disabled={true}>{t("loginYandex")}</Button>
          </form>
        )}
      />
      <Link className="login-page__link" to="/registration">
        {t("registration")}
      </Link>
    </Wrapper>
  );
};

const mapStateToProps = (state: State) => ({
  errorMessage: getErrorMessage(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = { fetchLoginThunk: fetchLogin };

export const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPageBlock);
