import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Form, Field } from "react-final-form";
import classNames from "classnames";

import { Wrapper } from "../../component/Wrapper";
import { TextField } from "../../component/TextField";
import { Button } from "../../component/Button";

import { signin } from "../../api/auth";

import "./LoginPage.scss";

import { range } from "../../utils/validation/rules";
import { validate } from "../../utils/validate";

const onSubmit = async (values: Record<string, string>) => {
  try {
    const result = await signin({
      login: values.login,
      password: values.password,
    });
    return result;
  } catch (error) {
    return error;
  }
};

const requiredFields = [
  { field: "login", callback: (v: string | number) => range(v, 3) },
  { field: "password" },
];

export const LoginPage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Wrapper className="login-page" size="m">
      <h1 className="login-page__title">{t("nameGame")}</h1>
      <Form
        onSubmit={onSubmit}
        validate={validate(requiredFields)}
        render={({ handleSubmit, submitting, submitError }) => (
          <form
            className={classNames("login-page__form", {
              ["login-page__form_error"]: submitError,
            })}
            onSubmit={handleSubmit}
          >
            {submitError && (
              <div className="login-page__error-text">
                <span>{submitError}</span>
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
            <Button type="submit" disabled={submitting}>
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
