import { LikesTable } from "../models/likes";

class LikesRepo {
  create(idUser: number, idMessge: number) {
    return LikesTable.create({
      id_message: idMessge,
      id_user: idUser,
    });
  }
}

export const likesRepo = new LikesRepo();
