import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Form, Field } from "react-final-form";
import classNames from "classnames";

import { useQuery } from "../../hooks/useQuery";

import { Wrapper } from "@component/Wrapper";
import { TextField } from "@component/TextField";
import { Button } from "@component/Button";
import { Loader } from "@component/Loader";

import { getErrorMessage, getIsLoading } from "@selectors/widgets/loginPage";
import {
  fetchLogin,
  fetchLoginYandexStepOne,
  fetchLoginYandexStepTwo,
} from "@thunks/widgets/login";

import { validate } from "@utils/validation/validate";
import { required, range } from "@utils/validation/rules";

import type { State } from "@reducers/index";
import type { Props } from "./types";

import "./LoginPage.scss";

const ruelesFields = {
  login: [required, (v: string | number) => range(v, 3)],
  password: [required],
};

export const LoginBlock = ({
  isLoading,
  errorMessage,
  fetchLoginThunk,
  fetchLoginYandexStepOneThunk,
  fetchLoginYandexStepTwoThunk,
}: Props) => {
  const { t } = useTranslation();
  const query = useQuery();

  useEffect(() => {
    const code = query.get("code");
    if (code !== null) {
      fetchLoginYandexStepTwoThunk(code);
    }
  }, []);

  const onSubmit = useCallback((values: Record<string, string>) => {
    return fetchLoginThunk({
      login: values.login,
      password: values.password,
    });
  }, []);

  const onOauthYandex = useCallback(() => {
    fetchLoginYandexStepOneThunk();
  }, []);

  return (
    <Wrapper className="login-page" size="m">
      <h1 className="login-page__title">{t("nameGame")}</h1>
      <Form
        onSubmit={onSubmit}
        validate={validate(ruelesFields)}
        render={({ handleSubmit }) => (
          <form
            id="classic-login"
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
                  placeholder="Abracadabra"
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

            <Button
              classType="primary"
              type="submit"
              disabled={isLoading}
              form="classic-login"
            >
              {t("login")}
            </Button>
          </form>
        )}
      />
      <div className="login-page__oauth">
        <Button onClick={onOauthYandex} disabled={isLoading}>
          <>
            {t("loginYandex")}
            {isLoading && <Loader />}
          </>
        </Button>
      </div>
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

const mapDispatchToProps = {
  fetchLoginThunk: fetchLogin,
  fetchLoginYandexStepOneThunk: fetchLoginYandexStepOne,
  fetchLoginYandexStepTwoThunk: fetchLoginYandexStepTwo,
};

export const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginBlock);
