import { LikesTable } from "../models/likes";

class LikesRepo {
  create(idUser: number, idMessge: number) {
    return LikesTable.create({
      id_message: idMessge,
      id_user: idUser,
    });
  }
  delete(idUser: number, idMessage: number) {
    return LikesTable.destroy({
      where: {
        id_user: idUser,
        id_message: idMessage,
      },
    });
  }
}

export const likesRepo = new LikesRepo();
