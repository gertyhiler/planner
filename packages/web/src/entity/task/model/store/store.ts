import { devtools } from "zustand/middleware";
import { createStore as createZustandStore } from "zustand/vanilla";

import type { State, Store } from "./type";

const initialState: State = {
  title: "Make a task",
  description: undefined,
  state: "close",
  status: "active",
};

export const createStore = (init: Partial<State>) =>
  createZustandStore<Store>()(
    devtools(
      (set) => ({
        ...initialState,
        ...init,
        actions: {
          setTitle: (title) => set({ title }),
          setDescription: (description) => set({ description }),
          setState: (state) => set({ state }),
          setStatus: (status) => set({ status }),
        },
      }),
      {
        name: "task",
      }
    )
  );
