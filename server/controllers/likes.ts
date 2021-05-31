/* eslint camelcase: "off" */
// Правило отключено потому что используется underscore в полях для бд

import { likesRepo } from "../repositories/likes";
import { getUserInfo } from "../utils/user";

import type { Request, Response } from "express";

class LikesController {
  createLike(req: Request, res: Response) {
    const { id: id_user } = getUserInfo(res);
    const idMessage = req.body.messageId;

    if (typeof idMessage === "undefined") {
      res.status(400).send({
        reason: "Like should be attached to message",
      });
      return;
    }

    likesRepo
      .create(Number(id_user), idMessage)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }

  removeLike(req: Request, res: Response) {
    const { id: id_user } = getUserInfo(res);
    const idMessage = req.body.messageId;

    if (typeof idMessage === "undefined") {
      res.status(400).send({
        reason: "Like should be attached to message",
      });
      return;
    }

    likesRepo
      .delete(id_user, idMessage)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
}

export const likesController = new LikesController();
