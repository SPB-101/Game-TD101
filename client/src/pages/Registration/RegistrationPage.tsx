import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Form, Field } from "react-final-form";
import classNames from "classnames";

import { Wrapper } from "../../component/Wrapper";
import { TextField } from "../../component/TextField";
import { Button } from "../../component/Button";

import { signup } from "../../api/auth";

import "./RegistrationPage.scss";

import { validation } from "../../utils/validation";
import {
  required,
  range,
  phone,
  email,
  equalPasswords,
} from "../../utils/validation/rules";

const onSubmit = async (values: Record<string, string>) => {
  try {
    const result = await signup({
      login: values.login,
      password: values.password,
      first_name: values.firstName,
      second_name: values.secondName,
      phone: values.phone,
      email: values.email,
    });

    window.location.hash = "#menu";
    return result;
  } catch (error) {
    return error;
  }
};

const validate = (values: Record<string, string>) => {
  const errors: Record<string, string> = {};

  const fields: Record<string, ((...args: any) => string)[]> = {
    login: [required, (v: string | number) => range(v, 3)],
    password: [required, (v: string | number) => range(v, 4)],
    passwordAgain: [required, (v: string | number) => range(v, 4)],
    firstName: [required],
    secondName: [required],
    phone: [required, phone],
    email: [required, email],
  };

  Object.entries(fields).forEach(([k, v]) => {
    const err = validation(values[k], v);
    if (err) errors[k] = err;
  });

  const eqlPass = equalPasswords(values.password, values.passwordAgain);
  if (eqlPass) errors.passwordAgain = eqlPass;

  return errors;
};

export const RegistrationPage = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Wrapper className="registration-page" size="m">
      <h1 className="registration-page__title"> {t("registrationTitle")}</h1>
      <Form
        onSubmit={onSubmit}
        validate={validate}
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
                  placeholder="Abracadabra"
                />
              )}
            </Field>
            <Field name="firstName">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  error={meta.error && meta.touched ? meta.error : ""}
                  name="firstName"
                  label={t("firstName")}
                  placeholder="Ivan"
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
                  placeholder="Markov"
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
                  placeholder="ivan@example.com"
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
                  placeholder="+7 944 487 62 35"
                />
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  error={meta.error && meta.touched ? meta.error : ""}
                  name="password"
                  label={t("password")}
                  type="password"
                />
              )}
            </Field>
            <Field name="passwordAgain">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  error={meta.error && meta.touched ? meta.error : ""}
                  name="passwordAgain"
                  label={t("passwordAgain")}
                  type="password"
                />
              )}
            </Field>

            <Button type="submit" disabled={submitting}>
              {t("registration")}
            </Button>
          </form>
        )}
      />
      <Link className="registration-page__link" to="/">
        {t("login")}
      </Link>
    </Wrapper>
  );
};
