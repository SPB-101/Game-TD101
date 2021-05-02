import { LoginAndPass } from "@resolvers/auth/types";

export type Props = {
  isLoading: boolean;
  errorMessage: string;
  fetchLoginThunk: (user: LoginAndPass) => Promise<void>;
  fetchLoginYandexStepOneThunk: () => Promise<void>;
  fetchLoginYandexStepTwoThunk: (code: string) => Promise<void>;
};
