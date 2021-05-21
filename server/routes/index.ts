import { Router as createRouter } from "express";
import type { Router } from "express";
import { forumRouter } from "./forum";
import { settingsRouter } from "./settings";

export const apiRouter: Router = createRouter();

apiRouter
  .use("/settings", settingsRouter)
  .use("/forum", forumRouter);
