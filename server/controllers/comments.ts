/* eslint camelcase: "off" */
// Правило отключено потому что используется underscore в полях для бд

import { commentsRepo } from "../repositories/comments";
import { getUserInfo } from "../utils/user";
import { isCommentValid } from "../utils/comment";

import { TOPIC_COMMENTS_RECORD_LIMIT } from "../../constants";

import type { Request, Response } from "express";

class CommentsController {
  async getComments(req: Request, res: Response) {
    const { offset = 0, limit = TOPIC_COMMENTS_RECORD_LIMIT } = req.query;
    const { id } = req.params;

    commentsRepo
      .getAllById(id, Number(offset), Number(limit))
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }

  createComment(req: Request, res: Response) {
    const { id: id_user } = getUserInfo(res);
    const id_topic = req.body.topicId;
    const message = req.body.message.trim();

    if (!isCommentValid(message)) {
      res.status(400).send({
        reason: "incorrect comment parameter",
      });
      return;
    }

    commentsRepo
      .create(id_topic, message, Number(id_user))
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
}

export const commentsController = new CommentsController();
