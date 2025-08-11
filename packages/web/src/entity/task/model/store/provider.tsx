"use client";

import { useStore } from "zustand";
import { useShallow } from "zustand/react/shallow";

import type { FC, PropsWithChildren } from "react";
import { createContext, useContext, useRef } from "react";

import { createStore } from "./store";
import type { State, Store } from "./type";

type StoreAPI = ReturnType<typeof createStore>;

const StoreContext = createContext<StoreAPI | null>(null);

export interface TaskStoreProviderProps extends PropsWithChildren {
  init: Partial<State>;
}

export const TaskStoreProvider: FC<TaskStoreProviderProps> = ({ children, init }) => {
  const store = useRef<StoreAPI>();
  if (!store.current) {
    store.current = createStore(init);
  }

  return <StoreContext.Provider value={store.current}>{children}</StoreContext.Provider>;
};

export const useTaskStore = <T,>(selector: (store: Store) => T) => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useTaskStore must be used within <TaskStoreProvider>");
  }
  return useStore(context, useShallow(selector));
};
