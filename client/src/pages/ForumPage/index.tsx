import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Pagination } from "@component/Pagination";
import { Button } from "@component/Button";
import { Wrapper } from "@component/Wrapper";
import { Modal } from "@component/Modal";
import { ForumList } from "./ForumList";
import { ForumForm } from "./ForumForm";

import {
  FORUM_RECORD_LIMIT,
  TOPIC_COMMENTS_RECORD_LIMIT,
} from "@constants/index";

import { newCurrentPage } from "@thunks/widgets/forum";
import { getOffset, getTotal } from "@selectors/widgets/forumPage";

import "./style.scss";

import type { Props } from "./types";
import type { State } from "@reducers/index";

export const ForumBlock = ({ total, offset, newCurrentPageThunk }: Props) => {
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
          currentOffset={offset}
          totalRecords={total}
          pageLimit={FORUM_RECORD_LIMIT}
          recordLimit={TOPIC_COMMENTS_RECORD_LIMIT}
          onCurrentPage={newCurrentPageThunk}
          className="forum__pagination"
        />
        <Button onClick={openModal} className="forum__button">
          {t("createNewTheme")}
        </Button>
      </Wrapper>
      <Modal isOpen={isOpenModal} handleClose={closeModal}>
        <h1 className="forum__title">{t("newTheme")}</h1>

        <ForumForm />
      </Modal>
    </>
  );
};

const mapStateToProps = (state: State) => ({
  offset: getOffset(state),
  total: getTotal(state),
});

const mapDispatchToProps = {
  newCurrentPageThunk: newCurrentPage,
};

export const ForumPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForumBlock);
