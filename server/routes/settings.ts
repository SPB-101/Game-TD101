import { Router as createRouter } from "express";
import type { Router } from "express";

import { protectedAuth } from "../middleware/auth";
import { themeController } from "../controllers/theme";

export const settingsRouter: Router = createRouter();

settingsRouter.get("/theme", protectedAuth, themeController.getUserTheme);
settingsRouter.post("/theme", protectedAuth, themeController.setUserTheme);
