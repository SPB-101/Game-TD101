import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Field, Form } from "react-final-form";

import { useTranslation } from "react-i18next";
import { Pagination } from "../../component/Pagination";
import { Wrapper } from "../../component/Wrapper";
import { TextField } from "../../component/TextField";
import { Button } from "../../component/Button";
import { Avatar } from "../../component/Avatar";

import { getLocalDate } from "../../utils/getLocalDate";
import { required } from "../../utils/validation/rules";
import { validate } from "../../utils/validation/validate";

import "./CommentsPage.scss";
import IconSendButton from "../../assets/images/icons/send-icon.svg";

import mock from "./mockData.json";

const sendComment = (value: Record<string, string>) => {
  console.log(`submit form with ${value}`);
};

export const CommentsPage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Link to="/forum" className="button button_back forum__button">
        {t("backToForum")}
      </Link>
      <Wrapper className="comments" size={"l"}>
        <h1 className="comments__title">I want new towers!</h1>
        <ul className="comments__list">
          {mock.map((element) => {
            return (
              <li className="comments__item item" key={element.id}>
                <Avatar
                  className="item__avatar"
                  width="60"
                  height="60"
                  src={element.photo}
                />
                <div className="item__container">
                  <span className="item__name">{element.name}</span>
                  <p className="item__message">{element.message}</p>
                </div>
                <div className="item__date">
                  {getLocalDate(element.createdAt)}
                </div>
              </li>
            );
          })}
        </ul>

        <Pagination
          totalRecords={mock.length}
          pageLimit={2}
          className="comments__pagination"
        />

        <Form
          onSubmit={sendComment}
          validate={validate({ comments: [required] })}
          render={({ handleSubmit, submitting, submitError }) => (
            <form
              className={classNames("comments__form", {
                ["comments__form_error"]: submitError,
              })}
              onSubmit={handleSubmit}
            >
              {submitError && (
                <div className="login-page__error-text">
                  <span>{submitError}</span>
                </div>
              )}
              <Field name="comment">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    error={meta.error && meta.touched ? meta.error : ""}
                    name="comment"
                    className="comments__text-field"
                    label={t("newComment")}
                    placeholder={t("enterComment")}
                  />
                )}
              </Field>
              <Button
                type="submit"
                disabled={submitting}
                className="comments__send-button"
              >
                <IconSendButton
                  width="50"
                  height="50"
                  className="comments__send-button_icon"
                />
              </Button>
            </form>
          )}
        />
      </Wrapper>
    </>
  );
};
