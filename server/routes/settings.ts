import { Router as createRouter } from "express";
import type { Router } from "express";

import { protectedAuth } from "../middleware/auth";
import { themeController } from "../controllers/theme";

export const settingsRouter = (apiRouter: Router) => {
  const router: Router = createRouter();

  router.get("/theme", protectedAuth, themeController.getUserTheme);
  router.post("/theme", protectedAuth, themeController.setUserTheme);

  apiRouter.use("/settings", router);
};
