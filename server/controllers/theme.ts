import { UserSettingsTable } from "../models/userSettings";
import { getUserInfo } from "../utils/user";
import { pick } from "../utils/pick";

import type { Request, Response } from "express";

class ThemeController {
  async getUserTheme(req: Request, res: Response) {
    const { id } = getUserInfo(res);

    UserSettingsTable.findOne({
      where: { id_user: id },
      raw: true,
    })
      .then((data) => {
        console.log(data);

        res.status(200).json(pick(data, ["theme"]));
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }

  async setUserTheme(req: Request, res: Response) {
    const { id } = getUserInfo(res);
    const { theme } = req.body;

    UserSettingsTable.findOrCreate({
      where: { id_user: id },
      defaults: {
        theme,
      },
    })
      .then((user) => {
        if (user) {
          // что бы не вызывать обновление руками можно было бы в базе
          // сделать INSERT EXCEPTION WHEN unique_constraint UPDATE
          UserSettingsTable.update(
            {
              theme,
            },
            { where: { id_user: id } }
          );
        }
        res.status(200).send("OK");
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
}

export const themeController = new ThemeController();
