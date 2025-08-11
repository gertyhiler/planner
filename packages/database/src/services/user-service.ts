import { dbClient } from "../client";
import type { User } from "../../generated/client";
import {
  BaseService,
  type CreateEntityData,
  type UpdateEntityData,
  type EntityFilters,
} from "./base-service";

export interface CreateUserData {
  email: string;
  name?: string;
  image?: string;
}

export interface UpdateUserData {
  id: string;
  email?: string;
  name?: string;
  image?: string;
}

export interface UserFilters {
  email?: string;
  search?: string;
}

export class UserService {
  private prismaModel = dbClient.client.user;

  // Специфичные методы для пользователей
  async getUserByEmail(email: string): Promise<User | null> {
    return this.prismaModel.findUnique({
      where: { email },
    });
  }

  async createUser(data: CreateUserData): Promise<User> {
    // Проверяем, что email уникален
    const existingUser = await this.getUserByEmail(data.email);
    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    return this.create(data);
  }

  async create(data: CreateUserData): Promise<User> {
    const user = await this.prismaModel.create({
      data: {
        ...data,
      },
      include: this.getIncludeOptions(),
    });

    return user;
  }

  async update(id: string, data: Omit<UpdateUserData, "id">): Promise<User> {
    const user = await this.prismaModel.update({
      where: { id },
      data: {
        ...data,
      },
      include: this.getIncludeOptions(),
    });

    return user;
  }

  async getById(id: string): Promise<User | null> {
    return this.prismaModel.findUnique({
      where: { id },
      include: this.getIncludeOptions(),
    });
  }

  async getList(filters: UserFilters = {}): Promise<User[]> {
    const where: any = {
      ...filters,
    };

    if (filters.search) {
      where.OR = this.getSearchConditions(filters.search);
    }

    return this.prismaModel.findMany({
      where,
      include: this.getIncludeOptions(),
      orderBy: this.getOrderByOptions(),
    });
  }

  async getByUser(
    userId: string,
    filters?: Omit<UserFilters, "userId">
  ): Promise<User[]> {
    // Для пользователей getByUser просто возвращает пользователя по ID
    const user = await this.getById(userId);
    return user ? [user] : [];
  }

  async updateUser(
    id: string,
    data: Omit<UpdateUserData, "id">
  ): Promise<User> {
    // Если обновляется email, проверяем уникальность
    if (data.email) {
      const existingUser = await this.getUserByEmail(data.email);
      if (existingUser && existingUser.id !== id) {
        throw new Error("User with this email already exists");
      }
    }

    return this.update(id, data);
  }

  // Переопределяем абстрактные методы
  protected getIncludeOptions() {
    return {
      tasks: true,
      projects: true,
      areas: true,
    };
  }

  protected getOrderByOptions() {
    return [{ createdAt: "desc" as const }];
  }

  protected getSearchConditions(search: string) {
    return [{ name: { contains: search } }, { email: { contains: search } }];
  }

  // Специфичная валидация для пользователей
  private validateCreateUserData(data: CreateUserData): void {
    if (!data.email || !this.isValidEmail(data.email)) {
      throw new Error("Valid email is required");
    }

    if (data.name && data.name.trim().length === 0) {
      throw new Error("Name cannot be empty");
    }
  }

  private validateUpdateUserData(data: UpdateUserData): void {
    if (data.email !== undefined && !this.isValidEmail(data.email)) {
      throw new Error("Valid email is required");
    }

    if (data.name !== undefined && data.name.trim().length === 0) {
      throw new Error("Name cannot be empty");
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Методы для работы с профилем пользователя
  async updateProfile(
    userId: string,
    profileData: Partial<Omit<UpdateUserData, "id">>
  ): Promise<User> {
    return this.updateUser(userId, profileData);
  }

  async getUserStats(userId: string): Promise<{
    totalTasks: number;
    completedTasks: number;
    activeTasks: number;
    totalProjects: number;
    totalAreas: number;
  }> {
    const [totalTasks, completedTasks, activeTasks, totalProjects, totalAreas] =
      await Promise.all([
        dbClient.client.task.count({
          where: { userId, isDeleted: false },
        }),
        dbClient.client.task.count({
          where: { userId, status: "COMPLETED", isDeleted: false },
        }),
        dbClient.client.task.count({
          where: { userId, status: "ACTIVE", isDeleted: false },
        }),
        dbClient.client.project.count({
          where: { userId, isDeleted: false },
        }),
        dbClient.client.area.count({
          where: { userId, isDeleted: false },
        }),
      ]);

    return {
      totalTasks,
      completedTasks,
      activeTasks,
      totalProjects,
      totalAreas,
    };
  }
}

// Экспорт синглтона
export const userService = new UserService();
