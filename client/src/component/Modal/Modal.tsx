import React from "react";
import classNames from "classnames";
import { Wrapper } from "@component/Wrapper";

import { Props } from "./types";

import "./Modal.scss";
import Close from "@assets/images/icons/close-icon.svg";

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
            <span>WTF</span>
            {/* <Close width="50px" height="50px" fill="transparent" /> */}
          </button>
        </Wrapper>
      </section>
    </div>
  );
};
