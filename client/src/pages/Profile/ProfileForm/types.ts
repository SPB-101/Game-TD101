import type { UserChangeData } from "../../../../app/resolvers/users/types";
import type { User } from "../../../../app/entities/user/types";

type Form = {
  errorMessage: string;
  isLoading: boolean;
};

export type Props = {
  userInfo: User;
  formProfile: Form;
  fetchProfileThunk: (userChangeData: UserChangeData) => void;
};
