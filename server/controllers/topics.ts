import { TopicsTable } from "../models/topics";

import type { Request, Response } from "express";
import {
  ERROR_TOPIC_ALREADY_EXIST,
  ERROR_INVALID_TOPIC_TITLE,
} from "../../constants";
import { isTitleValid } from "../utils/topic";

class TopicsController {
  async getTopics(req: Request, res: Response) {
    TopicsTable.findAll()
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
        reason: ERROR_INVALID_TOPIC_TITLE,
      });
    }

    TopicsTable.findOrCreate({
      where: {
        title,
      },
      defaults: {
        title,
      },
    })
      .then(([data, created]) => {
        if (!created) {
          res.status(400).send({
            reason: ERROR_TOPIC_ALREADY_EXIST,
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
