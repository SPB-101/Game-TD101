import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Field, Form } from "react-final-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Pagination } from "@component/Pagination";
import { Button } from "@component/Button";
import { Wrapper } from "@component/Wrapper";
import { Modal } from "@component/Modal";
import { TextField } from "@component/TextField";
import { ForumList } from "./ForumList";

import { required } from "@utils/validation/rules";
import { validate } from "@utils/validation/validate";
import { State } from "@reducers/index";
import { newCurrentPage } from "@thunks/widgets/forum";
import { getTotal } from "@selectors/widgets/forumPage";

import "./ForumPage.scss";
import { FORUM_RECORD_LIMIT } from "@constants/index";

const createTheme = (value: Record<string, string>) => {
  console.log(`submit form with ${value}`);
};

export const ForumBlock = ({ total, newCurrentPageThunk }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { t } = useTranslation();

  const openModal = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  return (
    <>
      <Link to="/menu" className="button button_back forum__button">
        {t("backToMenu")}
      </Link>
      <Wrapper className="forum" size={"xl"}>
        <h1 className="forum__title">{t("forum")}</h1>
        <ul className="forum__list forum__list_border">
          <li className="forum-list__item forum-list__theme list__item">
            {t("theme")}
          </li>
          <li className="forum-list__item forum-list__updated list__item">
            {t("lastUpdate")}
          </li>
          <li className="forum-list__item forum-list__comments list__item">
            {t("comments")}
          </li>
        </ul>
        <ForumList className="forum__list forum__list_column" />
        <Pagination
          totalRecords={total}
          pageLimit={FORUM_RECORD_LIMIT}
          onCurrentPage={newCurrentPageThunk}
          className="forum__pagination"
        />
        <Button onClick={openModal} className="forum__button">
          {t("createNewTheme")}
        </Button>
      </Wrapper>
      <Modal isOpen={isOpenModal} handleClose={closeModal}>
        <Form
          onSubmit={createTheme}
          validate={validate({ "new-theme": [required] })}
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

const mapStateToProps = (state: State) => ({
  total: getTotal(state),
});

const mapDispatchToProps = {
  newCurrentPageThunk: newCurrentPage,
};

export const Index = connect(mapStateToProps, mapDispatchToProps)(ForumBlock);
