import { PrismaClient } from "../generated/client";
import type { SyncLog } from "../generated/client";

export type DatabaseType = "demo";

// DI-friendly factory for creating a PrismaClient without a singleton
export function createPrismaClient(databaseUrl?: string): PrismaClient {
  return new PrismaClient({
    datasources: {
      db: {
        url: databaseUrl || process.env.DATABASE_URL || "file:./demo.db",
      },
    },
  });
}

// Context passed into services for DI
export interface DatabaseContext {
  prisma: PrismaClient;
  getLocalChanges: () => Promise<SyncLog[]>;
  markAsSynced: (syncLogId: string) => Promise<SyncLog>;
  logSyncOperation: (
    entityId: string,
    entityType: string,
    operation: string,
    data: any
  ) => Promise<SyncLog>;
}

export function createDatabaseContext(prisma: PrismaClient): DatabaseContext {
  return {
    prisma,
    async getLocalChanges() {
      return prisma.syncLog.findMany({
        where: { synced: false },
        orderBy: { timestamp: "asc" },
      });
    },
    async markAsSynced(syncLogId: string) {
      return prisma.syncLog.update({
        where: { id: syncLogId },
        data: { synced: true },
      });
    },
    async logSyncOperation(
      entityId: string,
      entityType: string,
      operation: string,
      data: any
    ) {
      return prisma.syncLog.create({
        data: {
          entityId,
          entityType,
          operation,
          data: JSON.stringify(data),
        },
      });
    },
  };
}

// Синглтоны удалены. Используйте DI-фабрики ниже.
