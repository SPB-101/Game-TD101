import { LikesTable } from "../models/likes";

class LikesRepo {
  create(idUser: number, idComment: number) {
    return LikesTable.create({
      id_comment: idComment,
      id_user: idUser,
    });
  }
  delete(idUser: number, idComment: number) {
    return LikesTable.destroy({
      where: {
        id_comment: idComment,
        id_user: idUser,
      },
    });
  }
}

export const likesRepo = new LikesRepo();
