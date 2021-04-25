import type { Passwords } from "@resolvers/users/types";

type form = {
  errorMessage: string;
  isLoading: boolean;
};

export type Props = {
  formPassword: form;
  fetchPasswordThunk: (passwords: Passwords) => void;
};
