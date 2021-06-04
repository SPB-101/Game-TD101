export const getHtml = (
  reactHtml: string,
  reduxState = {},
  i18nState = {},
  helmet = {},
  theme: string
) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      ${helmet}
    </head>
    <style>
      body {
        background-color: ${theme === "dark-theme" ? "#333" : "white"};
      }
    </style>
    <body class="${theme}">
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
