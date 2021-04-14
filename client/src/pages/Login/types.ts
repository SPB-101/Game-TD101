import { TypeLoginAndPass } from "../../../app/resolvers/auth";

export type Props = {
  isLoading: boolean;
  errorMessage: string;
  fetchLoginThunk: (user: TypeLoginAndPass) => void;
};
