/* eslint camelcase: "off" */
// Правило отключено потому что используется underscore в полях для бд

import { likesRepo } from "../repositories/likes";
import { getUserInfo } from "../utils/user";

import type { Request, Response } from "express";

class LikesController {
  createLike(req: Request, res: Response) {
    const { id: id_user } = getUserInfo(res);
    console.log(JSON.stringify(req.body));
    const idMessage = req.body.idMessage;
    // if (idMessage == undefined) {
    //   throw new Error("Like should be attached to message");
    // }

    likesRepo
      .create(Number(id_user), idMessage)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
}

export const likesController = new LikesController();
