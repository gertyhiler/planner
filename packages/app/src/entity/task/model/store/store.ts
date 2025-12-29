import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { StateCreator } from "zustand";
import type { TaskStore, TasksApi } from "./types";
import type {
  Task,
  TaskFilters,
  CreateTaskData,
  UpdateTaskData,
  ChecklistItem,
} from "@planner/database";

const toMap = (list: Task[]) => Object.fromEntries(list.map((t) => [t.id, t]));

export const createTaskStore = (api: TasksApi) => {
  const creator: StateCreator<TaskStore> = (set, get) => ({
    items: {},
    order: [],
    loading: false,
    error: undefined,
    filters: undefined,

    fetch: async (filters?: TaskFilters) => {
      set({ loading: true, error: undefined, filters });
      try {
        const list = await api.list(filters);
        set({
          items: toMap(list),
          order: list.map((t) => t.id),
          loading: false,
        });
      } catch (e: unknown) {
        set({
          loading: false,
          error: e instanceof Error ? e.message : "Failed to load",
        });
      }
    },

    create: async (data: CreateTaskData) => {
      const tempId = `tmp_${Date.now()}`;
      const optimistic: Task = {
        ...(data as Task),
        id: tempId,
        status: "ACTIVE",
        priority: "MEDIUM",
        isDeleted: false,
        version: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      } as Task;
      set((s) => ({
        items: { ...s.items, [tempId]: optimistic },
        order: [tempId, ...s.order],
      }));
      try {
        const created = await api.create(data);
        set((s) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { [tempId]: _, ...rest } = s.items;
          return {
            items: { ...rest, [created.id]: created },
            order: [created.id, ...s.order.filter((i: string) => i !== tempId)],
          };
        });
        return created;
      } catch (e: unknown) {
        set((s) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { [tempId]: _, ...rest } = s.items;
          return {
            items: rest,
            order: s.order.filter((i: string) => i !== tempId),
            error: e instanceof Error ? e.message : "Failed to create",
          };
        });
        throw e;
      }
    },

    update: async (id: string, data: Omit<UpdateTaskData, "id">) => {
      const prev = get().items[id];
      if (!prev) throw new Error("Task not found");
      const patched: Task = {
        ...prev,
        ...(data as Task),
        updatedAt: new Date(),
      } as Task;
      set((s) => ({ items: { ...s.items, [id]: patched } }));
      try {
        const saved = await api.update(id, data);
        set((s) => ({ items: { ...s.items, [id]: saved } }));
        return saved;
      } catch (e: any) {
        set((s) => ({ items: { ...s.items, [id]: prev }, error: e?.message }));
        throw e;
      }
    },

    remove: async (id: string) => {
      const prev = get().items[id];
      set((s) => ({
        items: { ...s.items, [id]: { ...prev, isDeleted: true } as Task },
      }));
      try {
        await api.delete(id);
        set((s) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { [id]: _, ...rest } = s.items;
          return {
            items: rest,
            order: s.order.filter((i: string) => i !== id),
          };
        });
      } catch (e: unknown) {
        set((s) => ({
          items: { ...s.items, [id]: prev },
          error: e instanceof Error ? e.message : "Failed to delete",
        }));
        throw e;
      }
    },

    setFilters: (filters?: TaskFilters) => set({ filters }),

    addTag: async (taskId: string, tagId: string) => {
      await api.addTag(taskId, tagId);
    },
    removeTag: async (taskId: string, tagId: string) => {
      await api.removeTag(taskId, tagId);
    },
    convertToProject: async (taskId: string) => {
      await api.convertToProject(taskId);
    },

    checklist: {
      add: async (taskId: string, item: Partial<ChecklistItem>) =>
        api.checklist.add(taskId, item),
      update: async (itemId: string, item: Partial<ChecklistItem>) =>
        api.checklist.update(itemId, item),
      delete: async (itemId: string) => api.checklist.delete(itemId),
    },
  });

  return create<TaskStore>()(devtools(creator));
};

export type { TasksApi } from "./types";
