import { create } from "zustand";

type User = {
  email: string;
  password: string;
};

type State = {
  user: User | null;
};

type Actions = {
  setUser: (user: User) => void;
};

export const useUserStore = create<State & Actions>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
