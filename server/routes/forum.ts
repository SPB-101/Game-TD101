import { Router as createRouter } from "express";
import { topicsController } from "../controllers/topics";
import { messagesController } from "../controllers/messages";
import { protectedAuth } from "../middleware/auth";

import type { Router } from "express";

export const forumRouter: Router = createRouter();

forumRouter.get("/topics/all", protectedAuth, topicsController.getTopics);
forumRouter.post("/topics", protectedAuth, topicsController.createTopic);

forumRouter.get(
  "/topics/:id/all",
  protectedAuth,
  messagesController.getMessages
);
forumRouter.post(
  "/topics/:id",
  protectedAuth,
  messagesController.createMessage
);
