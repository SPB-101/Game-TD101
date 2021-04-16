import type { Passwords } from "../../../../app/resolvers/users/types";

type form = {
  errorMessage: string;
  isLoading: boolean;
};

export type Props = {
  formPassword: form;
  fetchPasswordThunk: (passwords: Passwords) => void;
};
