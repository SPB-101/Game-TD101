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
import {
  FORUM_RECORD_LIMIT,
  TOPIC_MESSAGES_RECORD_LIMIT,
} from "@constants/index";

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

import type { Props } from "./types";

const rulesFieldsProfile = {
  title: [required, (v: string) => range(v, 4)],
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
    fetchNewTopicThunk({
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
        <ul className="forum__list forum__list_border forum-list__header">
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
        <div className="forum__list-body">
          <ForumList className="forum__list forum__list_column" />
        </div>
        <Pagination
          totalRecords={total}
          pageLimit={FORUM_RECORD_LIMIT}
          recordLimit={TOPIC_MESSAGES_RECORD_LIMIT}
          onCurrentPage={newCurrentPageThunk}
          className="forum__pagination"
        />
        <Button onClick={openModal} className="forum__button">
          {t("createNewTheme")}
        </Button>
      </Wrapper>
      <Modal isOpen={isOpenModal} handleClose={closeModal}>
        <h1 className="forum__title">{t("newTheme")}</h1>

        <Form
          onSubmit={createTheme}
          validate={validate(rulesFieldsProfile)}
          render={({ handleSubmit, form }) => (
            <form
              id="new-topic-form"
              className={classNames("forum__new-theme-form", {
                ["forum__new-theme-form_error"]: newTopicErrorMessage.length,
              })}
              onSubmit={async (event) => {
                await handleSubmit(event);
                form.restart();
              }}
            >
              {isNewTopicLoading && <Loader />}

              {newTopicErrorMessage && (
                <div className="login-page__error-text">
                  <span>{newTopicErrorMessage}</span>
                </div>
              )}

              <Field name="title">
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
