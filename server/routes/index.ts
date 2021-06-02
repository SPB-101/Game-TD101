import { Router as createRouter } from "express";
import { forumRouter } from "./forum";
import { settingsRouter } from "./settings";

import type { Router } from "express";

export const apiRouter: Router = createRouter();

apiRouter.use("/settings", settingsRouter).use("/forum", forumRouter);
