import React from "react";

import LoaderIcon from "../../assets/images/icons/loader.svg";

import "./Loader.scss";

export const Loader = (): JSX.Element => {
  return (
    <div className="loader">
      <LoaderIcon />
    </div>
  );
};
