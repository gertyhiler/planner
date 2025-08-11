import { dbClient } from "../client";
import type { Project, Prisma } from "../../generated/client";

export interface CreateProjectData {
  name: string;
  description?: string;
  color?: string;
  userId: string;
}

export interface UpdateProjectData extends Partial<CreateProjectData> {
  id: string;
}

export interface ProjectFilters {
  userId?: string;
  search?: string;
}

export class ProjectService {
  async createProject(data: CreateProjectData): Promise<Project> {
    const project = await dbClient.client.project.create({
      data: {
        ...data,
        version: 1,
        lastSync: new Date(),
      },
      include: {
        user: true,
        tasks: true,
        sections: true,
      },
    });

    // Логируем операцию для синхронизации
    await dbClient.logSyncOperation(project.id, "Project", "CREATE", project);

    return project;
  }

  async updateProject(data: UpdateProjectData): Promise<Project> {
    const existingProject = await dbClient.client.project.findUnique({
      where: { id: data.id },
    });

    if (!existingProject) {
      throw new Error(`Project with id ${data.id} not found`);
    }

    const project = await dbClient.client.project.update({
      where: { id: data.id },
      data: {
        ...data,
        version: { increment: 1 },
        lastSync: new Date(),
      },
      include: {
        user: true,
        tasks: true,
        sections: true,
      },
    });

    // Логируем операцию для синхронизации
    await dbClient.logSyncOperation(project.id, "Project", "UPDATE", project);

    return project;
  }

  async deleteProject(id: string): Promise<void> {
    const project = await dbClient.client.project.findUnique({
      where: { id },
    });

    if (!project) {
      throw new Error(`Project with id ${id} not found`);
    }

    // Soft delete
    await dbClient.client.project.update({
      where: { id },
      data: {
        isDeleted: true,
        version: { increment: 1 },
        lastSync: new Date(),
      },
    });

    // Логируем операцию для синхронизации
    await dbClient.logSyncOperation(id, "Project", "DELETE", {
      id,
      isDeleted: true,
    });
  }

  async getProject(id: string): Promise<Project | null> {
    return dbClient.client.project.findFirst({
      where: {
        id,
        isDeleted: false,
      },
      include: {
        user: true,
        tasks: true,
        sections: true,
      },
    });
  }

  async getProjects(filters: ProjectFilters = {}): Promise<Project[]> {
    const where: Prisma.ProjectWhereInput = {
      isDeleted: false,
      ...filters,
    };

    if (filters.search) {
      where.OR = [
        { name: { contains: filters.search } },
        { description: { contains: filters.search } },
      ];
    }

    return dbClient.client.project.findMany({
      where,
      include: {
        user: true,
        tasks: true,
        sections: true,
      },
      orderBy: [{ createdAt: "desc" }],
    });
  }

  async getProjectsByUser(
    userId: string,
    filters: Omit<ProjectFilters, "userId"> = {}
  ): Promise<Project[]> {
    return this.getProjects({ ...filters, userId });
  }
}

// Экспорт синглтона
export const projectService = new ProjectService();
