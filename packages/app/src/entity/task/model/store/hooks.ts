import { useTasksStoreApi } from "./provider";

export function useTasksStore<T>(selector: (s: any) => T): T {
  const store = useTasksStoreApi();
  return store(selector);
}

export function useTasksActions() {
  return useTasksStore((s) => ({
    fetch: s.fetch,
    create: s.create,
    update: s.update,
    remove: s.remove,
    setFilters: s.setFilters,
    addTag: s.addTag,
    removeTag: s.removeTag,
    convertToProject: s.convertToProject,
    checklist: s.checklist,
  }));
}
