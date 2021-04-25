import { UserRegistration } from "@resolvers/auth/types";

export type Props = {
  isLoading: boolean;
  errorMessage: string;
  fetchRegistrationThunk: (user: UserRegistration) => Promise<void>;
};
