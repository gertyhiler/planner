import {
  taskService,
  projectService,
  areaService,
  userService,
} from "@planner/database";
import bcrypt from "bcryptjs";

export class PlannerService {
  // Auth handlers
  async auth(request: any, reply: any) {
    const { email, password } = request.body;

    try {
      const user = await userService.getUserByEmail(email);

      if (!user) {
        return reply.status(401).send({
          error: "Unauthorized",
          message: "Неверный email или пароль",
          statusCode: 401,
        });
      }

      // Временно используем простую проверку для демо
      // В реальном проекте нужно добавить поле password в User модель
      if (password !== "password123") {
        return reply.status(401).send({
          error: "Unauthorized",
          message: "Неверный email или пароль",
          statusCode: 401,
        });
      }

      const token = reply.server.jwt.sign({
        id: user.id,
        email: user.email,
      });

      return {
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          createdAt: user.createdAt.toISOString(),
          updatedAt: user.updatedAt.toISOString(),
        },
      };
    } catch (error) {
      reply.server.log.error(error);
      return reply.status(500).send({
        error: "Internal Server Error",
        message: "Ошибка аутентификации",
        statusCode: 500,
      });
    }
  }

  // Task handlers
  async getTasks(request: any, reply: any) {
    const userId = request.user.id;
    const { status, priority, projectId } = request.query;

    try {
      const tasks = await taskService.getByUser(userId, {
        status: status as any,
        priority: priority as any,
        projectId,
      });

      return tasks;
    } catch (error) {
      reply.server.log.error(error);
      return reply.status(500).send({
        error: "Internal Server Error",
        message: "Ошибка получения задач",
        statusCode: 500,
      });
    }
  }

  async getTask(request: any, reply: any) {
    const userId = request.user.id;
    const { id } = request.params;

    try {
      const task = await taskService.getById(id);

      if (!task || task.userId !== userId) {
        return reply.status(404).send({
          error: "Not Found",
          message: "Задача не найдена",
          statusCode: 404,
        });
      }

      return task;
    } catch (error) {
      reply.server.log.error(error);
      return reply.status(500).send({
        error: "Internal Server Error",
        message: "Ошибка получения задачи",
        statusCode: 500,
      });
    }
  }

  async createTask(request: any, reply: any) {
    const userId = request.user.id;
    const taskData = request.body;

    try {
      const task = await taskService.create({
        ...taskData,
        userId,
      });

      return reply.status(201).send(task);
    } catch (error) {
      reply.server.log.error(error);
      return reply.status(400).send({
        error: "Bad Request",
        message:
          error instanceof Error ? error.message : "Ошибка создания задачи",
        statusCode: 400,
      });
    }
  }

  async updateTask(request: any, reply: any) {
    const userId = request.user.id;
    const { id } = request.params;
    const updateData = request.body;

    try {
      const existingTask = await taskService.getById(id);

      if (!existingTask || existingTask.userId !== userId) {
        return reply.status(404).send({
          error: "Not Found",
          message: "Задача не найдена",
          statusCode: 404,
        });
      }

      const updatedTask = await taskService.update(id, updateData);
      return updatedTask;
    } catch (error) {
      reply.server.log.error(error);
      return reply.status(400).send({
        error: "Bad Request",
        message:
          error instanceof Error ? error.message : "Ошибка обновления задачи",
        statusCode: 400,
      });
    }
  }

  async deleteTask(request: any, reply: any) {
    const userId = request.user.id;
    const { id } = request.params;

    try {
      const existingTask = await taskService.getById(id);

      if (!existingTask || existingTask.userId !== userId) {
        return reply.status(404).send({
          error: "Not Found",
          message: "Задача не найдена",
          statusCode: 404,
        });
      }

      await taskService.delete(id);
      return reply.status(204).send();
    } catch (error) {
      reply.server.log.error(error);
      return reply.status(500).send({
        error: "Internal Server Error",
        message: "Ошибка удаления задачи",
        statusCode: 500,
      });
    }
  }

  // Project handlers (заглушки)
  async getProjects(request: any, reply: any) {
    const userId = request.user.id;

    try {
      // Заглушка для проектов
      return [
        {
          id: "1",
          name: "Демо проект",
          description: "Демонстрационный проект",
          color: "#3B82F6",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          userId,
          syncId: null,
          lastSync: null,
          isDeleted: false,
          version: 1,
        },
      ];
    } catch (error) {
      reply.server.log.error(error);
      return reply.status(500).send({
        error: "Internal Server Error",
        message: "Ошибка получения проектов",
        statusCode: 500,
      });
    }
  }

  async getProject(request: any, reply: any) {
    const userId = request.user.id;
    const { id } = request.params;

    try {
      // Заглушка для проекта
      return {
        id,
        name: "Демо проект",
        description: "Демонстрационный проект",
        color: "#3B82F6",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        userId,
        syncId: null,
        lastSync: null,
        isDeleted: false,
        version: 1,
      };
    } catch (error) {
      reply.server.log.error(error);
      return reply.status(500).send({
        error: "Internal Server Error",
        message: "Ошибка получения проекта",
        statusCode: 500,
      });
    }
  }

  async createProject(request: any, reply: any) {
    const userId = request.user.id;
    const projectData = request.body;

    try {
      // Заглушка для создания проекта
      const project = {
        id: Math.random().toString(36).substr(2, 9),
        ...projectData,
        userId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        syncId: null,
        lastSync: null,
        isDeleted: false,
        version: 1,
      };

      return reply.status(201).send(project);
    } catch (error) {
      reply.server.log.error(error);
      return reply.status(400).send({
        error: "Bad Request",
        message:
          error instanceof Error ? error.message : "Ошибка создания проекта",
        statusCode: 400,
      });
    }
  }

  async updateProject(request: any, reply: any) {
    const userId = request.user.id;
    const { id } = request.params;
    const updateData = request.body;

    try {
      // Заглушка для обновления проекта
      const updatedProject = {
        id,
        name: updateData.name || "Демо проект",
        description: updateData.description || "Демонстрационный проект",
        color: updateData.color || "#3B82F6",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        userId,
        syncId: null,
        lastSync: null,
        isDeleted: false,
        version: 1,
      };

      return updatedProject;
    } catch (error) {
      reply.server.log.error(error);
      return reply.status(400).send({
        error: "Bad Request",
        message:
          error instanceof Error ? error.message : "Ошибка обновления проекта",
        statusCode: 400,
      });
    }
  }

  async deleteProject(request: any, reply: any) {
    const userId = request.user.id;
    const { id } = request.params;

    try {
      // Заглушка для удаления проекта
      return reply.status(204).send();
    } catch (error) {
      reply.server.log.error(error);
      return reply.status(500).send({
        error: "Internal Server Error",
        message: "Ошибка удаления проекта",
        statusCode: 500,
      });
    }
  }

  // Area handlers (заглушки)
  async getAreas(request: any, reply: any) {
    const userId = request.user.id;

    try {
      // Заглушка для областей
      return [
        {
          id: "1",
          name: "Демо область",
          description: "Демонстрационная область",
          color: "#10B981",
          position: 1,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          userId,
          syncId: null,
          lastSync: null,
          isDeleted: false,
          version: 1,
        },
      ];
    } catch (error) {
      reply.server.log.error(error);
      return reply.status(500).send({
        error: "Internal Server Error",
        message: "Ошибка получения областей",
        statusCode: 500,
      });
    }
  }

  async getArea(request: any, reply: any) {
    const userId = request.user.id;
    const { id } = request.params;

    try {
      // Заглушка для области
      return {
        id,
        name: "Демо область",
        description: "Демонстрационная область",
        color: "#10B981",
        position: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        userId,
        syncId: null,
        lastSync: null,
        isDeleted: false,
        version: 1,
      };
    } catch (error) {
      reply.server.log.error(error);
      return reply.status(500).send({
        error: "Internal Server Error",
        message: "Ошибка получения области",
        statusCode: 500,
      });
    }
  }

  async createArea(request: any, reply: any) {
    const userId = request.user.id;
    const areaData = request.body;

    try {
      // Заглушка для создания области
      const area = {
        id: Math.random().toString(36).substr(2, 9),
        ...areaData,
        position: 1,
        userId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        syncId: null,
        lastSync: null,
        isDeleted: false,
        version: 1,
      };

      return reply.status(201).send(area);
    } catch (error) {
      reply.server.log.error(error);
      return reply.status(400).send({
        error: "Bad Request",
        message:
          error instanceof Error ? error.message : "Ошибка создания области",
        statusCode: 400,
      });
    }
  }

  async updateArea(request: any, reply: any) {
    const userId = request.user.id;
    const { id } = request.params;
    const updateData = request.body;

    try {
      // Заглушка для обновления области
      const updatedArea = {
        id,
        name: updateData.name || "Демо область",
        description: updateData.description || "Демонстрационная область",
        color: updateData.color || "#10B981",
        position: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        userId,
        syncId: null,
        lastSync: null,
        isDeleted: false,
        version: 1,
      };

      return updatedArea;
    } catch (error) {
      reply.server.log.error(error);
      return reply.status(400).send({
        error: "Bad Request",
        message:
          error instanceof Error ? error.message : "Ошибка обновления области",
        statusCode: 400,
      });
    }
  }

  async deleteArea(request: any, reply: any) {
    const userId = request.user.id;
    const { id } = request.params;

    try {
      // Заглушка для удаления области
      return reply.status(204).send();
    } catch (error) {
      reply.server.log.error(error);
      return reply.status(500).send({
        error: "Internal Server Error",
        message: "Ошибка удаления области",
        statusCode: 500,
      });
    }
  }

  // Sync handlers (заглушки)
  async uploadChanges(request: any, reply: any) {
    const { operations } = request.body;

    try {
      // Заглушка для синхронизации
      return {
        success: true,
        message: `Обработано ${operations.length} операций`,
      };
    } catch (error) {
      reply.server.log.error(error);
      return reply.status(500).send({
        error: "Internal Server Error",
        message: "Ошибка загрузки изменений",
        statusCode: 500,
      });
    }
  }

  async downloadChanges(request: any, reply: any) {
    const { lastSync } = request.query;

    try {
      // Заглушка для синхронизации
      return {
        changes: [],
        lastSync: new Date().toISOString(),
      };
    } catch (error) {
      reply.server.log.error(error);
      return reply.status(500).send({
        error: "Internal Server Error",
        message: "Ошибка загрузки изменений",
        statusCode: 500,
      });
    }
  }

  async getSyncStatus(request: any, reply: any) {
    try {
      return {
        status: "ok",
        lastSync: new Date().toISOString(),
        pendingChanges: 0,
      };
    } catch (error) {
      reply.server.log.error(error);
      return reply.status(500).send({
        error: "Internal Server Error",
        message: "Ошибка получения статуса синхронизации",
        statusCode: 500,
      });
    }
  }
}
