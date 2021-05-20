import { topicsRepo } from "../repositories/topics";
import { isTitleValid } from "../utils/topic";

import type { Request, Response } from "express";

class TopicsController {
  async getTopics(req: Request, res: Response) {
    const { offset } = req.body;

    topicsRepo
      .getAll(offset)
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
      .then(([data, created]) => {
        if (!created) {
          res.status(400).send({
            reason: "title has already exist",
          });
        }
        res.status(200).send({ id: data.id_topic });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
}

export const topicsController = new TopicsController();
