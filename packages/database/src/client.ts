import { PrismaClient } from "../generated/client";

export type DatabaseType = "demo";

export class DatabaseClient {
  private prismaClient: PrismaClient;

  constructor(databaseUrl?: string) {
    this.prismaClient = new PrismaClient({
      datasources: {
        db: {
          url: databaseUrl || process.env.DATABASE_URL || "file:./demo.db",
        },
      },
    });
  }

  get client(): PrismaClient {
    return this.prismaClient;
  }

  async connect(): Promise<void> {
    await this.prismaClient.$connect();
  }

  async disconnect(): Promise<void> {
    await this.prismaClient.$disconnect();
  }

  // Методы для работы с синхронизацией
  async getLocalChanges() {
    return this.prismaClient.syncLog.findMany({
      where: { synced: false },
      orderBy: { timestamp: "asc" },
    });
  }

  async markAsSynced(syncLogId: string) {
    return this.prismaClient.syncLog.update({
      where: { id: syncLogId },
      data: { synced: true },
    });
  }

  async logSyncOperation(
    entityId: string,
    entityType: string,
    operation: string,
    data: any
  ) {
    return this.prismaClient.syncLog.create({
      data: {
        entityId,
        entityType,
        operation,
        data: JSON.stringify(data),
      },
    });
  }
}

// Экспорт синглтона
export const dbClient = new DatabaseClient();
