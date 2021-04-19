import React from "react";
import classNames from "classnames";
import { Wrapper } from "../Wrapper";

import "./Modal.scss";
import Close from "../../assets/images/icons/close-icon.svg";

import { Props } from "./types";

export const Modal = ({ isOpen, handleClose, children }: Props) => {
  const modalClass = classNames("modal", {
    ["display-block"]: isOpen,
    ["display-none"]: !isOpen,
  });
  return (
    <div className={modalClass}>
      <section className="modal__content">
        <Wrapper size="xs">
          {children}
          <button className="modal__button" onClick={handleClose}>
            <Close width="40px" height="40px" fill="transparent" />
          </button>
        </Wrapper>
      </section>
    </div>
  );
};
