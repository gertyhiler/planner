import { execSync } from "node:child_process";
import { existsSync } from "node:fs";

// Ensure DATABASE_URL points to the test SQLite file
if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = "file:./test.db";
}

// Apply schema to test DB before running tests
try {
  const dbPath = (process.env.DATABASE_URL || "file:./test.db").replace(
    "file:",
    ""
  );
  if (!existsSync(dbPath)) {
    execSync("pnpm prisma db push", {
      stdio: "inherit",
      cwd: process.cwd(),
    });
  }
} catch (e) {
  console.error("Failed to apply schema via prisma db push", e);
}
