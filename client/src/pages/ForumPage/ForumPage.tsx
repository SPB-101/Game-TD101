import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Field, Form } from "react-final-form";
import { useHistory, Link } from "react-router-dom";

import { Pagination } from "../../component/Pagination";
import { Button } from "../../component/Button";
import { Wrapper } from "../../component/Wrapper";
import { Modal } from "../../component/Modal";
import { TextField } from "../../component/TextField";

import { validate } from "../../utils/validate";
import { getLocalDate } from "../../utils/getLocalDate";

import "./ForumPage.scss";

import mock from "./mockData.json";

const createTheme = (value: Record<string, string>) => {
  console.log(`submit form with ${value}`);
};

export const ForumPage = (): JSX.Element => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { t } = useTranslation();
  const history = useHistory();

  const openModal = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  const handleThemeClick = useCallback((id: string) => {
    history.push(`/comments/${id}`);
  }, []);

  return (
    <>
      <Link to="/menu" className="button button_back forum__button">
        {t("backToMenu")}
      </Link>
      <Wrapper className="forum" size={"l"}>
        <h1 className="forum__title">{t("forum")}</h1>
        <table className="forum__table">
          <thead className="table__head">
            <tr>
              <th className="table__head_theme table__cell">{t("theme")}</th>
              <th className="table__head_updated table__cell">
                {t("lastUpdate")}
              </th>
              <th className="table__head_comments table__cell">
                {t("comments")}
              </th>
            </tr>
          </thead>
          <tbody className="table__body">
            {mock.map((elem) => {
              return (
                <tr
                  className={"table__row"}
                  key={elem.id}
                  onClick={useCallback(() => handleThemeClick(elem.id), [])}
                >
                  <td className="table__cell table__cell_left">{elem.theme}</td>
                  <td className="table__cell">
                    {getLocalDate(elem.updatedAt)}
                  </td>
                  <td className="table__cell">{elem.comments}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          totalRecords={mock.length}
          pageLimit={2}
          className="forum__pagination"
        />
        <Button handleClick={openModal} className="forum__button">
          {t("createNewTheme")}
        </Button>
      </Wrapper>
      <Modal isOpen={isOpenModal} handleClose={closeModal}>
        <Form
          onSubmit={createTheme}
          validate={validate([{ field: "new-theme" }])}
          render={({ handleSubmit, submitting, submitError }) => (
            // TODO вынести форму в отдельный компонент
            // TODO сделать общим стилем ошибки сервера login-page__error-text
            <>
              <h1 className="forum__title">{t("newTheme")}</h1>
              <form
                className={classNames("forum__new-theme-form", {
                  ["forum__new-theme-form_error"]: submitError,
                })}
                onSubmit={handleSubmit}
              >
                {submitError && (
                  <div className="login-page__error-text">
                    <span>{submitError}</span>
                  </div>
                )}
                <Field name="new-theme">
                  {({ input, meta }) => (
                    <TextField
                      {...input}
                      error={meta.error && meta.touched ? meta.error : ""}
                      name="new-theme"
                      label={t("themeTitle")}
                      placeholder={t("themeTitle")}
                    />
                  )}
                </Field>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="forum__button_create"
                >
                  {t("createTheme")}
                </Button>
              </form>
            </>
          )}
        />
      </Modal>
    </>
  );
};
