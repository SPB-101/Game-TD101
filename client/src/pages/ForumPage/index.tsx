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
import { Loader } from "@component/Loader";
import { ForumList } from "./ForumList";

import { range, required } from "@utils/validation/rules";
import { validate } from "@utils/validation/validate";
import { State } from "@reducers/index";
import { fetchNewTopicForum, newCurrentPage } from "@thunks/widgets/forum";
import {
  getIsNewTopicLoading,
  getNewTopicError,
  getNewTopicId,
  getTotal,
} from "@selectors/widgets/forumPage";

import "./style.scss";
import { FORUM_RECORD_LIMIT } from "@constants/index";
import { Props } from "./types";

const rulesFieldsProfile = {
  title: [required, (v: string) => range(v, 3)],
};

export const ForumBlock = ({
  total,
  newCurrentPageThunk,
  fetchNewTopicThunk,
  isNewTopicLoading,
  newTopicErrorMessage,
}: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { t } = useTranslation();

  const createTheme = useCallback((values: Record<string, string>) => {
    console.log(values);
    return fetchNewTopicThunk({
      title: values.title,
    });
  }, []);

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
          <li className="forum-list__item forum-list__header forum-list__theme forum-list__item_center">
            {t("theme")}
          </li>
          <li className="forum-list__item forum-list__header forum-list__updated">
            {t("lastUpdate")}
          </li>
          <li className="forum-list__item forum-list__header forum-list__comments">
            {t("comments")}
          </li>
        </ul>
        <ForumList className="forum__list forum-list__header forum__list_column" />
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
          validate={validate(rulesFieldsProfile)}
          render={({ handleSubmit }) => (
            <form
              id="new-topic-form"
              className={classNames("forum__new-theme-form", {
                ["forum__new-theme-form_error"]: newTopicErrorMessage,
              })}
              onSubmit={handleSubmit}
            >
              <h1 className="forum__title">{t("newTheme")}</h1>

              {isNewTopicLoading && <Loader />}

              {newTopicErrorMessage && (
                <div className="login-page__error-text">
                  <span>{newTopicErrorMessage}</span>
                </div>
              )}

              <Field name="theme">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    error={meta.error && meta.touched ? meta.error : ""}
                    name="title"
                    label={t("themeTitle")}
                    placeholder={t("themeTitle")}
                  />
                )}
              </Field>
              <Button
                type="submit"
                form="new-topic-form"
                disabled={isNewTopicLoading}
                className="forum__button_create"
              >
                {t("createTheme")}
              </Button>
            </form>
          )}
        />
      </Modal>
    </>
  );
};

const mapStateToProps = (state: State) => ({
  total: getTotal(state),
  newTopicId: getNewTopicId(state),
  isNewTopicLoading: getIsNewTopicLoading(state),
  newTopicErrorMessage: getNewTopicError(state),
});

const mapDispatchToProps = {
  newCurrentPageThunk: newCurrentPage,
  fetchNewTopicThunk: fetchNewTopicForum,
};

export const ForumPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForumBlock);
