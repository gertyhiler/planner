import type {
  Task,
  ChecklistItem,
  CreateTaskData,
  UpdateTaskData,
  TaskFilters,
  Project,
} from "@planner/database";

// API, которое мы внедряем в стор (DI). По умолчанию это window.db.tasks
export interface TasksApi {
  create(data: CreateTaskData): Promise<Task>;
  update(id: string, data: Omit<UpdateTaskData, "id">): Promise<Task>;
  delete(id: string): Promise<void>;
  get(id: string): Promise<Task | null>;
  list(filters?: TaskFilters): Promise<Task[]>;
  convertToProject(taskId: string): Promise<Project>;
  addTag(taskId: string, tagId: string): Promise<void>;
  removeTag(taskId: string, tagId: string): Promise<void>;
  checklist: {
    add(taskId: string, item: Partial<ChecklistItem>): Promise<ChecklistItem>;
    update(
      itemId: string,
      item: Partial<ChecklistItem>
    ): Promise<ChecklistItem>;
    delete(itemId: string): Promise<void>;
  };
}

export type TaskId = string;

export interface TaskStoreState {
  items: Record<TaskId, Task>;
  order: TaskId[]; // произвольный порядок для отображения списков
  loading: boolean;
  error?: string;
  filters?: TaskFilters;
}

export interface TaskStoreActions {
  fetch: (filters?: TaskFilters) => Promise<void>;
  create: (data: CreateTaskData) => Promise<Task>;
  update: (id: string, data: Omit<UpdateTaskData, "id">) => Promise<Task>;
  remove: (id: string) => Promise<void>;
  setFilters: (filters?: TaskFilters) => void;
  addTag: (taskId: string, tagId: string) => Promise<void>;
  removeTag: (taskId: string, tagId: string) => Promise<void>;
  convertToProject: (taskId: string) => Promise<void>;
  checklist: {
    add: (
      taskId: string,
      item: Partial<ChecklistItem>
    ) => Promise<ChecklistItem>;
    update: (
      itemId: string,
      item: Partial<ChecklistItem>
    ) => Promise<ChecklistItem>;
    delete: (itemId: string) => Promise<void>;
  };
}

export type TaskStore = TaskStoreState & TaskStoreActions;
