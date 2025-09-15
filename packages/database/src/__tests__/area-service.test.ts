import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { createPrismaClient, createDatabaseContext } from "../client";
import { AreaService } from "../services/area-service";
import { UserService } from "../services/user-service";

const TEST_DB_URL = process.env.DATABASE_URL || "file:./test.db";

describe("AreaService", () => {
  const prisma = createPrismaClient(TEST_DB_URL);
  const context = createDatabaseContext(prisma);
  const areaService = new AreaService(context);
  const userService = new UserService(context);

  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("creates and soft-deletes area", async () => {
    const user = await userService.createUser({
      email: `a_${Date.now()}@ex.com`,
    });
    const area = await areaService.createArea({
      name: "Work",
      userId: user.id,
    });
    expect(area.id).toBeDefined();
    await areaService.deleteArea(area.id);
    const fetched = await areaService.getById(area.id);
    expect(fetched).toBeNull();
  });
});
