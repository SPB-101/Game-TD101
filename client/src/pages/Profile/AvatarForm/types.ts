import { User } from "../../../../app/entities/user/types";
import type { AvatarFile } from "../../../../app/resolvers/users/types";

type form = {
  errorMessage: string;
  isLoading: boolean;
};

export type Props = {
  userInfo: User;
  formAvatar: form;
  fetchAvatarThunk: (avatar: AvatarFile) => void;
};
