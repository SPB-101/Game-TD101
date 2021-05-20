import { Router as createRouter } from "express";
import { forumRouter } from "./forum";
import { settingsRouter } from "./settings";

import type { Router } from "express";

export const apiRouter: Router = createRouter();

forumRouter(apiRouter);
settingsRouter(apiRouter);
apiRouter.all("/*", (req, res) => {
  res.status(404).send("API endpoint not found");
});
