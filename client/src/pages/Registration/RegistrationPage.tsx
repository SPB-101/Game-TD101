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
} from "../../store/selectors/widgets/registrationPage";
import { State } from "../../store/reducers";
import { fetchRegistration } from "../../store/thunks/widgets/registration";

import type { ValidateFunction } from "../../utils/validation/validate";
import { validate } from "../../utils/validation/validate";
import {
  required,
  range,
  phone,
  email,
  equalPasswords,
} from "../../utils/validation/rules";

import type { Props } from "./types";

import "./RegistrationPage.scss";

const rulesFields = {
  login: [required, (v: string | number) => range(v, 3)],
  password: [required],
  passwordAgain: [required],
  firstName: [required],
  secondName: [required],
  phone: [required, phone],
  email: [required, email],
};

const customValidationForm: ValidateFunction = ({ values, errors }) => {
  const eqlPass = equalPasswords(values.password, values.passwordAgain);
  if (eqlPass) errors.passwordAgain = eqlPass;
};

export const RegistrationBlock = ({
  isLoading,
  errorMessage,
  fetchRegistrationThunk,
}: Props) => {
  const { t } = useTranslation();

  const onSubmit = useCallback((values: Record<string, string>) => {
    fetchRegistrationThunk({
      login: values.login,
      password: values.password,
      first_name: values.firstName,
      second_name: values.secondName,
      phone: values.phone,
      email: values.email,
    });
  }, []);

  return (
    <Wrapper className="registration-page" size="m">
      <h1 className="registration-page__title"> {t("registrationTitle")}</h1>
      <Form
        onSubmit={onSubmit}
        validate={validate(rulesFields, customValidationForm)}
        render={({ handleSubmit }) => (
          <form
            className={classNames("registration-page__form", {
              ["registration-page__form_error"]: errorMessage,
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

            <Button classType="primary" type="submit" disabled={isLoading}>
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

const mapStateToProps = (state: State) => ({
  errorMessage: getErrorMessage(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = { fetchRegistrationThunk: fetchRegistration };

export const RegistrationPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationBlock);
