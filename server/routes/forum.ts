import { Router as createRouter } from "express";
import type { Router } from "express";

export const forumRouter: Router = createRouter();

forumRouter.post("/test", (req, res) =>
  res.status(200).send(JSON.stringify({ body: req.body, param: req.params }))
);
