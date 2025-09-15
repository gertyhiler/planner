import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { createPrismaClient, createDatabaseContext } from "../client";
import { UserService } from "../services/user-service";

const TEST_DB_URL = process.env.DATABASE_URL || "file:./test.db";

describe("UserService", () => {
  const prisma = createPrismaClient(TEST_DB_URL);
  const context = createDatabaseContext(prisma);
  const userService = new UserService(context);

  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("creates and fetches user by email", async () => {
    const email = `user_${Date.now()}@example.com`;
    const user = await userService.createUser({ email, name: "Test" });
    expect(user.id).toBeDefined();
    const fetched = await userService.getUserByEmail(email);
    expect(fetched?.id).toBe(user.id);
  });
});


