import { settingRepo } from "../repositories/settings";
import { getUserInfo } from "../utils/user";
import { pick } from "../utils/pick";

import type { Request, Response } from "express";

class ThemeController {
  async getUserTheme(req: Request, res: Response) {
    const { id } = getUserInfo(res);

    settingRepo
      .getThemeByUser(id)
      .then((data) => {
        res.status(200).json(pick(data, ["theme"]));
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }

  async setUserTheme(req: Request, res: Response) {
    const { id } = getUserInfo(res);
    const { theme } = req.body;

    settingRepo
      .setThemeByUser(id, theme)
      .then(() => {
        res.status(200).send("OK");
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
}

export const themeController = new ThemeController();
