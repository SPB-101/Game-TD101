import { Router as createRouter } from "express";
import { topicsController } from "../controllers/topics";
import { commentsController } from "../controllers/comments";
import { likesController } from "../controllers/likes";
import { protectedAuth } from "../middleware/auth";

import type { Router } from "express";

export const forumRouter: Router = createRouter();

forumRouter.get("/topics/all", protectedAuth, topicsController.getTopics);
forumRouter.get("/topics/:id", protectedAuth, topicsController.getTopic);
forumRouter.post("/topics", protectedAuth, topicsController.createTopic);
forumRouter.post("/like", protectedAuth, likesController.createLike);
forumRouter.delete("/like", protectedAuth, likesController.removeLike);

forumRouter.get(
  "/topics/:id/all",
  protectedAuth,
  commentsController.getComments
);
forumRouter.post(
  "/topics/:id",
  protectedAuth,
  commentsController.createComment
);
