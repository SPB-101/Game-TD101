import React from "react";
import { connect, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import classname from "classnames";

import { removeToast } from "@actions/toast";
import { getToastList } from "@selectors/widgets/currentView";

import type { State } from "@reducers/index";
import type { Props } from "./type";

import "./style.scss";
import Close from "@assets/images/icons/close-icon.svg";

export const ToastBlock = ({ toastList }: Props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className={`notification-container`}>
      {toastList?.map((toast, i) => (
        <div
          key={i}
          className={`notification ${classname("toast", {
            [`toast--${toast.type}`]: toast.type,
          })}`}
        >
          <div>
            <p className="notification__title">{t(toast.title)}</p>
            <p className="notification__message">
              {t(toast.description || "")}
            </p>
          </div>
          <button
            className="notification__button"
            onClick={() => {
              console.log(toast.id);
              if (removeToast) {
                dispatch(removeToast(toast.id!));
              }
            }}
          >
            <Close width="50px" height="50px" fill="transparent" />
          </button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  toastList: getToastList(state),
});

const mapDispatchToProps = null;

export const Toast = connect(mapStateToProps, mapDispatchToProps)(ToastBlock);
