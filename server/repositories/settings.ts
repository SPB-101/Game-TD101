import { UserSettingsTable } from "../models/settings";

class SettingRepo {
  getThemeByUser(idUser: number) {
    return UserSettingsTable.findOne({
      where: { id_user: idUser },
      raw: true,
    });
  }

  setThemeByUser(idUser: number, theme: string) {
    return UserSettingsTable.findOrCreate({
      where: { id_user: idUser },
      defaults: {
        theme,
      },
    }).then((user) => {
      if (user) {
        // что бы не вызывать обновление руками можно было бы в базе
        // сделать INSERT EXCEPTION WHEN unique_constraint UPDATE
        UserSettingsTable.update(
          {
            theme,
          },
          { where: { id_user: idUser } }
        );
      }
    });
  }
}

export const settingRepo = new SettingRepo();
