import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Form, Field } from "react-final-form";
import classNames from "classnames";

import { Wrapper } from "../../component/Wrapper";
import { TextField } from "../../component/TextField";
import { Button } from "../../component/Button";

import "./LoginPage.scss";

import { validation } from "../../utils/validation";
import { required, range } from "../../utils/validation/rules";

const onSubmit = async () => {
  return { ["FORM_ERROR"]: "Login Failed" };
};

const validate = (values: { [k: string]: string }) => {
  const errors: { [k: string]: string } = {};

  const fields: { [k: string]: ((...args: any) => string)[] } = {
    login: [required, (v: string | number) => range(v, 3)],
    password: [required],
  };

  Object.entries(fields).forEach(([k, v]) => {
    errors[k] = validation(values[k], v);
  });

  return errors;
};

export const LoginPage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Wrapper className="login-page" size="m">
      <h1 className="login-page__title">{t("nameGame")}</h1>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, submitting, values, submitError }) => (
          <form
            className={classNames("login-page__form", {
              ["login-page__form_error"]: submitError,
            })}
            onSubmit={handleSubmit}
          >
            {submitError && (
              <div className="login-page__error-text">{submitError}</div>
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
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      />
      <Link className="login-page__link" to="/registration">
        {t("registration")}
      </Link>
    </Wrapper>
  );
};
