/* eslint camelcase: "off" */
// Правило отключено потому что используется underscore в полях для бд

import { messagesRepo } from "../repositories/messages";
import { getUserInfo } from "../utils/user";
import { isMessageValid } from "../utils/message";

import { TOPIC_MESSAGES_RECORD_LIMIT } from "../../constants";

import type { Request, Response } from "express";

class MessagesController {
  async getMessages(req: Request, res: Response) {
    const { offset = 0, limit = TOPIC_MESSAGES_RECORD_LIMIT } = req.query;
    const { id } = req.params;

    messagesRepo
      .getAllById(id, Number(offset), Number(limit))
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }

  createMessage(req: Request, res: Response) {
    const { id: id_user } = getUserInfo(res);
    const { id: id_topic } = req.params;
    const message = req.body.message.trim();

    if (!isMessageValid(message)) {
      res.status(400).send({
        reason: "incorrect message parameter",
      });
    }

    messagesRepo
      .create(id_topic, message, id_user)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
}

export const messagesController = new MessagesController();
