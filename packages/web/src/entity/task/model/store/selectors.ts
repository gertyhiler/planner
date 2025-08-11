import { Store } from "./type";

export const selectTitle = (state: Store) => state.title;
export const selectDescription = (state: Store) => state.description;
