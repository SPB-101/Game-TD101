import { topicsRepo } from "../repositories/topics";
import { isTitleValid } from "../utils/topic";
import { FORUM_RECORD_LIMIT } from "../../constants";

import type { Request, Response } from "express";

class TopicsController {
  async getTopics(req: Request, res: Response) {
    const { offset = 0, limit = FORUM_RECORD_LIMIT } = req.query;

    topicsRepo
      .getAll(Number(offset), Number(limit))
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }

  async createTopic(req: Request, res: Response) {
    const title = req.body.title.trim();

    if (!isTitleValid(title)) {
      res.status(400).send({
        reason: "incorrect title parameter",
      });
    }

    topicsRepo
      .create(title)
      .then(({ id }) => {
        res.status(200).send({ id });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
}

export const topicsController = new TopicsController();
