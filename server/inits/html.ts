export const getHtml = (reactHtml: string, reduxState = {}, i18nState) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>TD101</title>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <link href="/style.css" rel="stylesheet">
    </head>
    <body>
      <div class="root" id="root">${reactHtml}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)};
        window.__INITIAL_I18N_STATE__ = ${JSON.stringify(i18nState)};
      </script>
      <script defer src="/main.js"></script>
      <script defer src="/sw.js"></script>
    </body>
    </html>
  `;
};
