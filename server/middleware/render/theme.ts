import { settingRepo } from "../../repositories/settings";
import { getUserInfo } from "../../utils/user";
import type { Response } from "express";

export const initTheme = async (res: Response) => {
  const { id } = getUserInfo(res);
  return settingRepo.getThemeByUser(id);
};
