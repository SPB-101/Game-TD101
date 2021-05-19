import { MessagesTable } from "../models/messages";
import { getUserInfo } from "../utils/user";
import {
  ERROR_INVALID_MESSAGE,
  TOPIC_MESSAGES_RECORD_LIMIT,
} from "../../constants";
import { isMessageValid } from "../utils/message";

import type { Request, Response } from "express";

class MessagesController {
  async getMessages(req: Request, res: Response) {
    const { id } = req.params;
    const { offset } = req.body;
    MessagesTable.findAndCountAll({
      where: {
        id_topic: id,
      },
      limit: TOPIC_MESSAGES_RECORD_LIMIT,
      offset: offset,
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }

  createMessage(req: Request, res: Response) {
    // eslint-disable-next-line camelcase
    const { id: id_user } = getUserInfo(res);
    const message = req.body.message.trim();

    if (!isMessageValid(message)) {
      res.status(400).send({
        reason: ERROR_INVALID_MESSAGE,
      });
    }

    MessagesTable.create({
      id_topic: req.params.id,
      message,
      id_user,
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
}

export const messagesController = new MessagesController();
