import { OutputData } from "@editorjs/editorjs";

export interface State {
  title: string;
  description?: OutputData;
  status: "active" | "complied" | "someday" | "archive" | "trash";
  state: "close" | "closing" | "opening" | "open" | "focused";
}

export interface Actions {
  actions: {
    setTitle: (title: string) => void;
    setDescription: (description: OutputData) => void;
    setStatus: (status: State["status"]) => void;
    setState: (state: State["state"]) => void;
  };
}

export type Store = State & Actions;
