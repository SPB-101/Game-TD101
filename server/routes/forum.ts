import { Router as createRouter } from "express";
import { topicsController } from "../controllers/topics";
import { messagesController } from "../controllers/messages";

import type { Router } from "express";

export const forumRouter = (apiRouter: Router) => {
  const router: Router = createRouter();
  router.post("/topics/all", topicsController.getTopics);
  router.post("/topics", topicsController.createTopic);

  router.post("/topics/:id/all", messagesController.getMessages);
  router.post("/topics/:id/", messagesController.createMessage);

  apiRouter.use("/forum", router);
};
