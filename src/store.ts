import { create } from "zustand";

type tokenStore = {
  token: string;
};

type User = {
  email: string;
  password: string;
};

type userStore = {
  user: User | null;
  setUser: (user: User) => void;
};

type counterStore = {
  counter: number;
  incrementCounter: () => void;
};

export const useTokenStore = create<tokenStore>((set: any) => ({
  token: "",
}));

export const useUserStore = create<userStore>((set) => ({
  user: null,
  setUser: (user) => set((state) => ({ user: user })),
}));

export const useStore = create<counterStore>((set) => ({
  counter: 0,
  incrementCounter: () => set((state: any) => ({ counter: state.counter + 1 })),
}));
