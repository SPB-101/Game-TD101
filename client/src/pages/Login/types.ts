import { LoginAndPass } from "../../../app/resolvers/auth/types";

export type Props = {
  isLoading: boolean;
  errorMessage: string;
  fetchLoginThunk: (user: LoginAndPass) => Promise<void>;
};
