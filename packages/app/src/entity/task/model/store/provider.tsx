import React, { createContext, useContext } from "react";
import { createTaskStore } from "./store";
import type { TasksApi } from "./types";

type TasksStoreApi = ReturnType<typeof createTaskStore>;

const TasksStoreContext = createContext<TasksStoreApi | null>(null);

interface TasksProviderProps {
  children: React.ReactNode;
  api?: TasksApi; // для DI, по умолчанию window.db.tasks
}

function TasksProvider({ children, api }: TasksProviderProps) {
  const store = React.useRef<TasksStoreApi | null>(null);

  if (!store.current) {
    store.current = createTaskStore(api ?? window.db.tasks);
  }

  React.useEffect(() => {
    if (store.current && api) {
      store.current.setState({ ...api });
    }
  }, [api]);

  return (
    <TasksStoreContext.Provider value={store.current}>
      {children}
    </TasksStoreContext.Provider>
  );
}

function useTasksStoreApi() {
  const ctx = useContext(TasksStoreContext);
  if (!ctx) throw new Error("TasksProvider is missing");
  return ctx;
}

// eslint-disable-next-line react-refresh/only-export-components
export { useTasksStoreApi, TasksProvider };
