/// <reference types="vite/client" />

import type {
  Task,
  Project,
  Area,
  ChecklistItem,
  CreateTaskData,
  UpdateTaskData,
  TaskFilters,
  CreateProjectData,
  UpdateProjectData,
  ProjectFilters,
  CreateAreaData,
  UpdateAreaData,
  AreaFilters,
} from "@planner/database";

declare global {
  interface Window {
    db: {
      tasks: {
        create(data: CreateTaskData): Promise<Task>;
        update(id: string, data: Omit<UpdateTaskData, "id">): Promise<Task>;
        delete(id: string): Promise<void>;
        get(id: string): Promise<Task | null>;
        list(filters?: TaskFilters): Promise<Task[]>;
        convertToProject(taskId: string): Promise<Project>;
        addTag(taskId: string, tagId: string): Promise<void>;
        removeTag(taskId: string, tagId: string): Promise<void>;
        checklist: {
          add(
            taskId: string,
            item: Partial<ChecklistItem>
          ): Promise<ChecklistItem>;
          update(
            itemId: string,
            item: Partial<ChecklistItem>
          ): Promise<ChecklistItem>;
          delete(itemId: string): Promise<void>;
        };
      };
      projects: {
        create(data: CreateProjectData): Promise<Project>;
        update(data: UpdateProjectData): Promise<Project>;
        delete(id: string): Promise<void>;
        get(id: string): Promise<Project | null>;
        list(filters?: ProjectFilters): Promise<Project[]>;
      };
      areas: {
        create(data: CreateAreaData): Promise<Area>;
        update(id: string, data: UpdateAreaData): Promise<Area>;
        delete(id: string): Promise<void>;
        get(id: string): Promise<Area | null>;
        list(userId: string, filters?: AreaFilters): Promise<Area[]>;
      };
    };
  }
}

export {};
