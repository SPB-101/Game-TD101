import { Router as createRouter } from "express";
import type { Router } from "express";
import { topicsController } from "../controllers/topics";
import { messagesController } from "../controllers/messages";

export const forumRouter = (apiRouter: Router) => {
  const router: Router = createRouter();
  router.post("/topics/all", topicsController.getTopics);
  router.post("/topics", topicsController.createTopic);

  router.post("/topics/:id/all", messagesController.getMessages);
  router.post("/topics/:id/", messagesController.createMessage);

  router.get("/test", (req, res) =>
    res.status(200).send(JSON.stringify({ body: req.body, param: req.params }))
  );

  apiRouter.use("/forum", router);
};
