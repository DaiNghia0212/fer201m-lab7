import { ReactNode } from "react";

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  name: string;
  avatar: string;
};

type AuthContextType = {
  user: User | null;
  accessToken: string;
  login: () => void;
  logout: () => void;
};

export type { AuthProviderProps, AuthContextType, User };
