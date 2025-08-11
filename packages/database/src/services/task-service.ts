import { dbClient } from "../client";
import type { Task, Prisma } from "../../generated/client";
import {
  BaseService,
  type CreateEntityData,
  type UpdateEntityData,
  type EntityFilters,
} from "./base-service";

export interface CreateTaskData extends CreateEntityData {
  name: string;
  description?: string | null;
  type?: string | null;
  status?: "ACTIVE" | "COMPLETED" | "ARCHIVED" | "CANCELLED";
  priority?: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
  startDate?: Date | null;
  endDate?: Date | null;
  position?: number | null;
  sort?: number | null;
  userId: string;
  projectId?: string | null;
  areaId?: string | null;
  sectionId?: string | null;
  parentTaskId?: string | null;
}

export interface UpdateTaskData extends UpdateEntityData {
  name?: string;
  description?: string;
  type?: string;
  status?: "ACTIVE" | "COMPLETED" | "ARCHIVED" | "CANCELLED";
  priority?: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
  startDate?: Date;
  endDate?: Date;
  position?: number;
  sort?: number;
  projectId?: string;
  areaId?: string;
  sectionId?: string;
  parentTaskId?: string;
}

export interface TaskFilters extends EntityFilters {
  status?: string[];
  priority?: string[];
  projectId?: string;
  areaId?: string;
  sectionId?: string;
  parentTaskId?: string;
  startDate?: Date;
  endDate?: Date;
  completed?: boolean;
}

export class TaskService extends BaseService<
  Task,
  CreateTaskData,
  UpdateTaskData,
  TaskFilters
> {
  protected entityName = "Task";
  protected prismaModel = dbClient.client.task;

  // Переопределяем базовые методы для специфичной логики задач
  async createTask(data: CreateTaskData): Promise<Task> {
    // Специфичная валидация для задач
    this.validateCreateTaskData(data);

    return this.create(data);
  }

  async updateTask(id: string, data: Omit<UpdateTaskData, "id">): Promise<Task> {
    // Специфичная валидация для задач
    this.validateUpdateTaskData({ id, ...data });

    return this.update(id, data);
  }

  async deleteTask(id: string): Promise<void> {
    return this.delete(id);
  }

  async getTask(id: string): Promise<Task | null> {
    return this.getById(id);
  }

  async getTasks(filters: TaskFilters = {}): Promise<Task[]> {
    return this.getList(filters);
  }

  // Специфичные методы для задач
  async getTasksByUser(
    userId: string,
    filters: Omit<TaskFilters, "userId"> = {}
  ): Promise<Task[]> {
    return this.getByUser(userId, filters);
  }

  async getTasksByProject(
    projectId: string,
    filters: Omit<TaskFilters, "projectId"> = {}
  ): Promise<Task[]> {
    return this.getTasks({ ...filters, projectId });
  }

  async getTasksByArea(
    areaId: string,
    filters: Omit<TaskFilters, "areaId"> = {}
  ): Promise<Task[]> {
    return this.getTasks({ ...filters, areaId });
  }

  async getTasksByStatus(
    status: string,
    filters: Omit<TaskFilters, "status"> = {}
  ): Promise<Task[]> {
    return this.getTasks({ ...filters, status: [status] });
  }

  async getTasksByDateRange(
    startDate: Date,
    endDate: Date,
    filters: Omit<TaskFilters, "startDate" | "endDate"> = {}
  ): Promise<Task[]> {
    return this.getTasks({ ...filters, startDate, endDate });
  }

  async getCompletedTasks(
    userId: string,
    filters: Omit<TaskFilters, "userId" | "completed"> = {}
  ): Promise<Task[]> {
    return this.getTasks({ ...filters, userId, status: ["COMPLETED"] });
  }

  async getActiveTasks(
    userId: string,
    filters: Omit<TaskFilters, "userId" | "status"> = {}
  ): Promise<Task[]> {
    return this.getTasks({ ...filters, userId, status: ["ACTIVE"] });
  }

  async getOverdueTasks(userId: string): Promise<Task[]> {
    const now = new Date();
    return this.getTasks({
      userId,
      status: ["ACTIVE"],
      endDate: { lt: now } as any,
    });
  }

  async getTodayTasks(userId: string): Promise<Task[]> {
    const today = new Date();
    const startOfDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    const endOfDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      23,
      59,
      59
    );

    return this.getTasks({
      userId,
      status: ["ACTIVE"],
      OR: [
        { startDate: { gte: startOfDay, lte: endOfDay } },
        { endDate: { gte: startOfDay, lte: endOfDay } },
      ],
    });
  }

  async getUpcomingTasks(userId: string, days: number = 7): Promise<Task[]> {
    const now = new Date();
    const futureDate = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);

    return this.getTasks({
      userId,
      status: ["ACTIVE"],
      startDate: { gte: now, lte: futureDate } as any,
    });
  }

  // Переопределяем абстрактные методы
  protected getIncludeOptions() {
    return {
      user: true,
      project: true,
      area: true,
      section: true,
      parentTask: true,
      subtasks: true,
      checklistItems: true,
      tags: true,
    };
  }

  protected getOrderByOptions() {
    return [{ sort: "asc" }, { position: "asc" }, { createdAt: "desc" }];
  }

  protected getSearchConditions(search: string) {
    return [
      { name: { contains: search, mode: "insensitive" } },
      { description: { contains: search, mode: "insensitive" } },
    ];
  }

  // Специфичная валидация для задач
  private validateCreateTaskData(data: CreateTaskData): void {
    if (!data.name || data.name.trim().length === 0) {
      throw new Error("Task name is required");
    }

    if (!data.userId) {
      throw new Error("User ID is required");
    }

    if (data.startDate && data.endDate && data.startDate > data.endDate) {
      throw new Error("Start date cannot be after end date");
    }
  }

  private validateUpdateTaskData(data: UpdateTaskData): void {
    if (data.name !== undefined && data.name.trim().length === 0) {
      throw new Error("Task name cannot be empty");
    }

    if (data.startDate && data.endDate && data.startDate > data.endDate) {
      throw new Error("Start date cannot be after end date");
    }
  }

  // Специфичные методы для бизнес-логики задач
  async completeTask(id: string): Promise<Task> {
    return this.updateTask(id, {
      status: "COMPLETED",
    });
  }

  async activateTask(id: string): Promise<Task> {
    return this.updateTask(id, {
      status: "ACTIVE",
    });
  }

  async archiveTask(id: string): Promise<Task> {
    return this.updateTask(id, {
      status: "ARCHIVED",
    });
  }

  async moveTask(id: string, newPosition: number): Promise<Task> {
    return this.updateTask(id, {
      position: newPosition,
    });
  }

  async duplicateTask(id: string, userId: string): Promise<Task> {
    const originalTask = await this.getTask(id);
    if (!originalTask) {
      throw new Error("Task not found");
    }

    const { id: originalId, createdAt, updatedAt, ...taskData } = originalTask;

    return this.createTask({
      ...taskData,
      name: `${taskData.name} (копия)`,
      userId,
      status: "ACTIVE",
      priority: taskData.priority as "LOW" | "MEDIUM" | "HIGH" | "URGENT",
    });
  }

  // Методы для работы с подзадачами
  async getSubtasks(parentTaskId: string): Promise<Task[]> {
    return this.getTasks({ parentTaskId });
  }

  async addSubtask(
    parentTaskId: string,
    subtaskData: CreateTaskData
  ): Promise<Task> {
    const parentTask = await this.getTask(parentTaskId);
    if (!parentTask) {
      throw new Error("Parent task not found");
    }

    return this.createTask({
      ...subtaskData,
      parentTaskId,
      projectId: parentTask.projectId,
      areaId: parentTask.areaId,
    });
  }

  // Методы для работы с тегами
  async addTagToTask(taskId: string, tagId: string): Promise<void> {
    await dbClient.client.task.update({
      where: { id: taskId },
      data: {
        tags: {
          connect: { id: tagId },
        },
      },
    });
  }

  async removeTagFromTask(taskId: string, tagId: string): Promise<void> {
    await dbClient.client.task.update({
      where: { id: taskId },
      data: {
        tags: {
          disconnect: { id: tagId },
        },
      },
    });
  }

  // Методы для работы с чеклистами
  async addChecklistItem(taskId: string, itemData: any): Promise<any> {
    return dbClient.client.checklistItem.create({
      data: {
        ...itemData,
        taskId,
      },
    });
  }

  async updateChecklistItem(itemId: string, itemData: any): Promise<any> {
    return dbClient.client.checklistItem.update({
      where: { id: itemId },
      data: itemData,
    });
  }

  async deleteChecklistItem(itemId: string): Promise<void> {
    await dbClient.client.checklistItem.delete({
      where: { id: itemId },
    });
  }
}

// Экспорт синглтона
export const taskService = new TaskService();
