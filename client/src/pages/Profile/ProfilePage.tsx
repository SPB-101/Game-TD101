import React from "react";
import { useTranslation } from "react-i18next";
import { Form, Field } from "react-final-form";
import classNames from "classnames";

import { Wrapper } from "../../component/Wrapper";
import { TextField } from "../../component/TextField";
import { Button } from "../../component/Button";
import { AvatarField } from "../../component/AvatarField";

import { signin } from "../../api/auth";

import "./ProfilePage.scss";

import { validation } from "../../utils/validation";
import { required, range } from "../../utils/validation/rules";

const onSubmit = async (values: Record<string, string>) => {
  try {
    const result = await signin({
      login: values.login,
      password: values.password,
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
    password: [required],
  };

  Object.entries(fields).forEach(([k, v]) => {
    const err = validation(values[k], v);
    if (err) errors[k] = err;
  });

  return errors;
};

export const ProfilePage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Wrapper className="profile-page" size="m">
      <h1 className="profile-page__title">{t("nameGame")}</h1>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, submitting, submitError }) => (
          <form
            className={classNames("profile-page__form", {
              ["profile-page__form_error"]: submitError,
            })}
            onSubmit={handleSubmit}
          >
            {submitError && (
              <div className="profile-page__error-text">
                <span>{submitError}</span>
              </div>
            )}

            <Field name="firstName">
              {({ input }) => (
                <AvatarField
                  {...input}
                  name="firstName"
                  label={t("uploadAvatar")}
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

            <Button type="submit" disabled={submitting}>
              {t("save")}
            </Button>
            <Button>{t("logout")}</Button>
          </form>
        )}
      />
    </Wrapper>
  );
};
