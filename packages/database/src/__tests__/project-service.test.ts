import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { createPrismaClient, createDatabaseContext } from "../client";
import { ProjectService } from "../services/project-service";
import { UserService } from "../services/user-service";

const TEST_DB_URL = process.env.DATABASE_URL || "file:./test.db";

describe("ProjectService", () => {
  const prisma = createPrismaClient(TEST_DB_URL);
  const context = createDatabaseContext(prisma);
  const projectService = new ProjectService(context);
  const userService = new UserService(context);

  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("creates and updates a project", async () => {
    const user = await userService.createUser({
      email: `p_${Date.now()}@ex.com`,
    });
    const userId = user.id;
    const project = await projectService.createProject({
      name: "Proj",
      userId,
    });
    expect(project.id).toBeDefined();

    const updated = await projectService.updateProject({
      id: project.id,
      name: "Proj 2",
    });
    expect(updated.name).toBe("Proj 2");
  });
});
