import fs from "node:fs";
import path from "node:path";
import { cwd } from "node:process";

if (process.argv.length !== 4) {
  console.error("Usage: node create-store.mjs <folder> <store-name>");
  process.exit(1);
}

const folder = process.argv[2];
const storeName = process.argv[3];
const camelCaseName = storeName
  .split("-")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join("");

const tmpIndex = `export * from "./selectors";
export * from "./provider";
export * from "./type";

`;
const tmpSelectors = `

`;
const tmpType = `export interface State {

}

export interface Actions {
  actions: {

  };
}

export type Store = State & Actions;
`;
const tmpStore = `import { devtools } from "zustand/middleware";
import { createStore as createZustandStore } from "zustand/vanilla";

import type { State, Store } from "./type";

const initialState: State = {};

export const createStore = (init: State) =>
  createZustandStore<Store>()(
    devtools(
      (set) => ({
        ...initialState,
        ...init,
        actions: {},
      }),
      {
        name: "${storeName}",
      }
    )
  );
`;
const tmpProvider = `"use client";

import { useStore } from "zustand";
import { useShallow } from "zustand/react/shallow";

import type { FC, PropsWithChildren } from "react";
import { createContext, useContext, useRef } from "react";

import { createStore } from "./store";
import type { State, Store } from "./type";

type StoreAPI = ReturnType<typeof createStore>;

const StoreContext = createContext<StoreAPI | null>(null);

export interface ${camelCaseName}StoreProviderProps extends PropsWithChildren {
  init: State;
}

export const ${camelCaseName}StoreProvider: FC<${camelCaseName}StoreProviderProps> = ({ children, init }) => {
  const store = useRef<StoreAPI>();
  if (!store.current) {
    store.current = createStore(init);
  }

  return <StoreContext.Provider value={store.current}>{children}</StoreContext.Provider>;
};

export const use${camelCaseName}Store = <T,>(selector: (store: Store) => T) => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("use${camelCaseName}Store must be used within <${camelCaseName}StoreProvider>");
  }
  return useStore(context, useShallow(selector));
};
`;

fs.mkdirSync(path.resolve(cwd(), path.normalize(folder + `/${storeName}`)), {
  recursive: true,
});
fs.writeFileSync(
  path.resolve(cwd(), path.normalize(folder + `/${storeName}/index.ts`)),
  tmpIndex
);
fs.writeFileSync(
  path.resolve(cwd(), path.normalize(folder + `/${storeName}/selectors.ts`)),
  tmpSelectors
);
fs.writeFileSync(
  path.resolve(cwd(), path.normalize(folder + `/${storeName}/type.ts`)),
  tmpType
);
fs.writeFileSync(
  path.resolve(cwd(), path.normalize(folder + `/${storeName}/store.ts`)),
  tmpStore
);
fs.writeFileSync(
  path.resolve(cwd(), path.normalize(folder + `/${storeName}/provider.tsx`)),
  tmpProvider
);
