import { Router as createRouter } from "express";
import { topicsController } from "../controllers/topics";
import { messagesController } from "../controllers/messages";
import { protectedAuth } from "../middleware/auth";

import type { Router } from "express";

export const forumRouter = (apiRouter: Router) => {
  const router: Router = createRouter();

  router.get("/topics/all", protectedAuth, topicsController.getTopics);
  router.post("/topics", protectedAuth, topicsController.createTopic);

  router.get("/topics/:id/all", protectedAuth, messagesController.getMessages);
  router.post("/topics/:id", protectedAuth, messagesController.createMessage);

  apiRouter.use("/forum", router);
};
