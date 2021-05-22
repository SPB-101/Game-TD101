import { settingRepo } from "../../repositories/settings";
import { getUserInfo } from "../../utils/user";
import { THEME_LIGHT } from "../../../constants/index";
import type { Response } from "express";

export const initTheme = async (res: Response) => {
  const user = getUserInfo(res);

  if (user) {
    const theme = await settingRepo.getThemeByUser(user.id);
    if (theme !== null) return theme;
  }

  return Promise.resolve({ theme: THEME_LIGHT });
};
