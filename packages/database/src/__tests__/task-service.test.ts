import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { createPrismaClient, createDatabaseContext } from "../client";
import { TaskService } from "../services/task-service";
import { UserService } from "../services/user-service";

const TEST_DB_URL = process.env.DATABASE_URL || "file:./test.db";

describe("TaskService", () => {
  const prisma = createPrismaClient(TEST_DB_URL);
  const context = createDatabaseContext(prisma);
  const taskService = new TaskService(context);
  const userService = new UserService(context);

  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("creates and fetches a task", async () => {
    const user = await userService.createUser({
      email: `u_${Date.now()}@ex.com`,
    });
    const userId = user.id;
    const task = await taskService.createTask({
      name: "Test task",
      userId,
    });

    expect(task.id).toBeDefined();

    const fetched = await taskService.getTask(task.id);
    expect(fetched?.name).toBe("Test task");
  });
});
