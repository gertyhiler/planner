import { dbClient } from "../client";

export interface SyncOperation {
  id: string;
  entityType:
    | "Task"
    | "Project"
    | "Area"
    | "User"
    | "Section"
    | "Calendar"
    | "ChecklistItem"
    | "Tag"
    | "Recurrence";
  operation: "CREATE" | "UPDATE" | "DELETE";
  data: any;
  timestamp: Date;
  version: number;
}

export interface SyncResult {
  success: boolean;
  syncedOperations: number;
  errors?: string[];
}

export interface SyncConfig {
  autoSync: boolean;
  syncInterval: number; // в миллисекундах
  retryAttempts: number;
  retryDelay: number; // в миллисекундах
  apiUrl?: string; // URL backend API
  authToken?: string; // JWT токен для аутентификации
}

export class SyncManager {
  private config: SyncConfig;
  private syncInterval?: NodeJS.Timeout;
  private isOnline: boolean = true;

  constructor(config: Partial<SyncConfig> = {}) {
    this.config = {
      autoSync: true,
      syncInterval: 30000, // 30 секунд
      retryAttempts: 3,
      retryDelay: 1000, // 1 секунда
      apiUrl: process.env.API_URL || "http://localhost:3001/api",
      ...config,
    };

    this.setupOnlineDetection();
  }

  private setupOnlineDetection() {
    // Проверяем, что мы в браузерной среде
    if (typeof globalThis !== "undefined" && "window" in globalThis) {
      const window = (globalThis as any).window;
      window.addEventListener("online", () => {
        this.isOnline = true;
        this.sync();
      });

      window.addEventListener("offline", () => {
        this.isOnline = false;
      });
    }
  }

  async sync(): Promise<SyncResult> {
    if (!this.isOnline) {
      return {
        success: false,
        syncedOperations: 0,
        errors: ["No internet connection"],
      };
    }

    if (!this.config.apiUrl || !this.config.authToken) {
      return {
        success: false,
        syncedOperations: 0,
        errors: ["API URL or auth token not configured"],
      };
    }

    try {
      // 1. Получаем локальные изменения
      const localChanges = await this.getLocalChanges();

      if (localChanges.length === 0) {
        return {
          success: true,
          syncedOperations: 0,
        };
      }

      // 2. Отправляем изменения на сервер
      const uploadResult = await this.uploadChanges(localChanges);

      // 3. Получаем изменения с сервера
      const serverChanges = await this.getServerChanges();

      // 4. Применяем серверные изменения
      const applyResult = await this.applyServerChanges(serverChanges);

      return {
        success: true,
        syncedOperations: localChanges.length + serverChanges.length,
      };
    } catch (error) {
      console.error("Sync failed:", error);
      return {
        success: false,
        syncedOperations: 0,
        errors: [error instanceof Error ? error.message : "Unknown error"],
      };
    }
  }

  private async getLocalChanges(): Promise<SyncOperation[]> {
    const syncLogs = await dbClient.getLocalChanges();

    return syncLogs.map((log) => ({
      id: log.id,
      entityType: log.entityType as any,
      operation: log.operation as any,
      data: JSON.parse(log.data),
      timestamp: log.timestamp,
      version: 1, // TODO: получить версию из данных
    }));
  }

  private async uploadChanges(changes: SyncOperation[]): Promise<void> {
    if (!this.config.apiUrl || !this.config.authToken) {
      throw new Error("API URL or auth token not configured");
    }

    const response = await fetch(`${this.config.apiUrl}/sync/upload`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.config.authToken}`,
      },
      body: JSON.stringify({ operations: changes }),
    });

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.statusText}`);
    }

    // Помечаем изменения как синхронизированные
    for (const change of changes) {
      await dbClient.markAsSynced(change.id);
    }
  }

  private async getServerChanges(): Promise<SyncOperation[]> {
    if (!this.config.apiUrl || !this.config.authToken) {
      throw new Error("API URL or auth token not configured");
    }

    // Получаем время последней синхронизации
    const lastSync = await this.getLastSyncTime();

    const response = await fetch(
      `${this.config.apiUrl}/sync/download?lastSync=${lastSync?.toISOString()}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.config.authToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Download failed: ${response.statusText}`);
    }

    const result = (await response.json()) as any;
    return result.changes || [];
  }

  private async getLastSyncTime(): Promise<Date | null> {
    // Получаем время последней синхронизации из локальной БД
    const lastSyncLog = await dbClient.client.syncLog.findFirst({
      where: { synced: true },
      orderBy: { timestamp: "desc" },
    });

    return lastSyncLog?.timestamp || null;
  }

  private async applyServerChanges(changes: SyncOperation[]): Promise<void> {
    for (const change of changes) {
      try {
        switch (change.operation) {
          case "CREATE":
            await this.applyCreate(change);
            break;
          case "UPDATE":
            await this.applyUpdate(change);
            break;
          case "DELETE":
            await this.applyDelete(change);
            break;
        }
      } catch (error) {
        console.error(
          `Failed to apply ${change.operation} for ${change.entityType}:`,
          error
        );
      }
    }
  }

  private async applyCreate(change: SyncOperation): Promise<void> {
    const { entityType, data } = change;

    switch (entityType) {
      case "Task":
        await dbClient.client.task.create({
          data: {
            ...data,
            syncId: data.id, // Сохраняем cloud ID
            lastSync: new Date(),
          },
        });
        break;
      case "Project":
        await dbClient.client.project.create({
          data: {
            ...data,
            syncId: data.id,
            lastSync: new Date(),
          },
        });
        break;
      case "Area":
        await dbClient.client.area.create({
          data: {
            ...data,
            syncId: data.id,
            lastSync: new Date(),
          },
        });
        break;
      // Добавить другие сущности
    }
  }

  private async applyUpdate(change: SyncOperation): Promise<void> {
    const { entityType, data } = change;

    switch (entityType) {
      case "Task":
        await dbClient.client.task.update({
          where: { syncId: data.id },
          data: {
            ...data,
            lastSync: new Date(),
            version: { increment: 1 },
          },
        });
        break;
      case "Project":
        await dbClient.client.project.update({
          where: { syncId: data.id },
          data: {
            ...data,
            lastSync: new Date(),
            version: { increment: 1 },
          },
        });
        break;
      case "Area":
        await dbClient.client.area.update({
          where: { syncId: data.id },
          data: {
            ...data,
            lastSync: new Date(),
            version: { increment: 1 },
          },
        });
        break;
      // Добавить другие сущности
    }
  }

  private async applyDelete(change: SyncOperation): Promise<void> {
    const { entityType, data } = change;

    switch (entityType) {
      case "Task":
        await dbClient.client.task.update({
          where: { syncId: data.id },
          data: {
            isDeleted: true,
            lastSync: new Date(),
            version: { increment: 1 },
          },
        });
        break;
      case "Project":
        await dbClient.client.project.update({
          where: { syncId: data.id },
          data: {
            isDeleted: true,
            lastSync: new Date(),
            version: { increment: 1 },
          },
        });
        break;
      case "Area":
        await dbClient.client.area.update({
          where: { syncId: data.id },
          data: {
            isDeleted: true,
            lastSync: new Date(),
            version: { increment: 1 },
          },
        });
        break;
      // Добавить другие сущности
    }
  }

  startAutoSync(): void {
    if (this.config.autoSync && !this.syncInterval) {
      this.syncInterval = setInterval(async () => {
        try {
          await this.sync();
        } catch (error) {
          console.error("Auto sync failed:", error);
        }
      }, this.config.syncInterval);
    }
  }

  stopAutoSync(): void {
    if (this.syncInterval) {
      clearInterval(this.syncInterval);
      this.syncInterval = undefined;
    }
  }

  setConfig(config: Partial<SyncConfig>): void {
    this.config = { ...this.config, ...config };

    if (this.config.autoSync) {
      this.startAutoSync();
    } else {
      this.stopAutoSync();
    }
  }

  getConfig(): SyncConfig {
    return { ...this.config };
  }

  // Методы для настройки аутентификации
  setAuthToken(token: string): void {
    this.config.authToken = token;
  }

  setApiUrl(url: string): void {
    this.config.apiUrl = url;
  }

  // Метод для получения статуса синхронизации
  async getSyncStatus(): Promise<{
    lastSync: Date | null;
    pendingChanges: number;
    isOnline: boolean;
  }> {
    if (!this.config.apiUrl || !this.config.authToken) {
      return {
        lastSync: null,
        pendingChanges: 0,
        isOnline: false,
      };
    }

    try {
      const response = await fetch(`${this.config.apiUrl}/sync/status`, {
        headers: {
          Authorization: `Bearer ${this.config.authToken}`,
        },
      });

      if (response.ok) {
        return (await response.json()) as {
          lastSync: Date | null;
          pendingChanges: number;
          isOnline: boolean;
        };
      }
    } catch (error) {
      console.error("Failed to get sync status:", error);
    }

    return {
      lastSync: null,
      pendingChanges: 0,
      isOnline: false,
    };
  }
}

// Экспорт синглтона
export const syncManager = new SyncManager();
