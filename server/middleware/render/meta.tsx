import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { data } from "../../../client/src/component/Meta/seo";

import type { HelmetData } from "react-helmet";
export const initHelmet = (helmet: HelmetData) =>
  renderToStaticMarkup(
    <>
      {helmet.title.toComponent()}
      {helmet.meta.toComponent()}
      {helmet.link.toComponent()}
      {helmet.noscript.toComponent()}
      {helmet.base.toComponent()}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:image" content={data.image} />
      <meta property="og:site_name" content="Game TD101" />

      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <link href="/style.css" rel="stylesheet"></link>
    </>
  );
