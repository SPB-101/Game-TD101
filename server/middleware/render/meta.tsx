import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import type { HelmetData } from "react-helmet";

export const initHelmet = (helmet: HelmetData) =>
  renderToStaticMarkup(
    <>
      {helmet.title.toComponent()}
      {helmet.meta.toComponent()}
      {helmet.link.toComponent()}
      {helmet.script.toComponent()}
    </>
  );
