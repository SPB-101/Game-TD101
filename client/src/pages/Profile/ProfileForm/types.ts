import type { UserChangeData } from "@resolvers/users/types";
import type { User } from "@entities/user/types";

type Form = {
  errorMessage: string;
  isLoading: boolean;
};

export type Props = {
  userInfo: User;
  formProfile: Form;
  fetchProfileThunk: (userChangeData: UserChangeData) => void;
};
