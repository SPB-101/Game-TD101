import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Request, Response } from "express";

import { App } from "../../client/src/app";
import { history } from "../../client/src/store";

import type { StaticRouterContext } from "react-router";

export default (req: Request, res: Response) => {
  const location = req.url;
  const context: StaticRouterContext = {};

  const jsx = (
    <StaticRouter context={context} location={location}>
      <App history={history} />
    </StaticRouter>
  );
  const reactHtml = renderToString(jsx);

  res.send(getHtml(reactHtml));
};

function getHtml(reactHtml: string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>TD101</title>
      <link rel="shortcut icon" href="/assets/images/favicon.ico" type="image/x-icon" />
      <link href="/style.css" rel="stylesheet">
    </head>
    <body>
    <div class="root" id="root">${reactHtml}</div>
    <script defer src="/runtime.js"></script>
    <script defer src="/main.js"></script>
    <script defer src="/sw.js"></script>
    </body>
    </html>
    `;
}
