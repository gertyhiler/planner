# @planner/database

Централизованный пакет для работы с базой данных и бизнес-логикой планировщика задач.

## Архитектура

### Принцип "Единой бизнес-логики"

Вся бизнес-логика работы с сущностями находится в `@planner/database` пакете. Это обеспечивает:

- **Единообразие** - одинаковая логика во всех приложениях
- **Переиспользование** - один код для web, desktop, mobile
- **Централизованную поддержку** - изменения в одном месте
- **Типобезопасность** - общие типы для всех приложений

### Структура пакета

```
packages/database/
├── prisma/
│   ├── schema.prisma      # Единая схема БД
│   └── seed.ts           # Тестовые данные
├── src/
│   ├── client.ts         # Клиент для работы с БД
│   ├── services/         # Бизнес-логика
│   │   ├── base-service.ts    # Базовый класс
│   │   ├── task-service.ts    # Логика задач
│   │   ├── project-service.ts # Логика проектов
│   │   ├── area-service.ts    # Логика областей
│   │   └── user-service.ts    # Логика пользователей
│   ├── sync/             # Синхронизация
│   │   └── sync-manager.ts
│   └── index.ts          # Экспорты
```

## Использование в приложениях

### Web приложение

```typescript
import { taskService, dbClient } from "@planner/database";

// Переключаемся на облачную БД
dbClient.setDatabaseType("cloud");

// Используем общую бизнес-логику
const tasks = await taskService.getTasksByUser("user-id");
const newTask = await taskService.createTask({
  name: "Новая задача",
  userId: "user-id",
  priority: "HIGH",
});
```

### Desktop/Mobile приложения

```typescript
import { taskService, syncManager, dbClient } from "@planner/database";

// Используем локальную БД
dbClient.setDatabaseType("local");

// Настраиваем синхронизацию
syncManager.setConfig({
  apiUrl: "http://localhost:3001/api",
  autoSync: true,
  syncInterval: 30000,
});

// Используем ту же бизнес-логику
const tasks = await taskService.getTasksByUser("user-id");
const newTask = await taskService.createTask({
  name: "Новая задача",
  userId: "user-id",
  priority: "HIGH",
});

// Автоматическая синхронизация
syncManager.startAutoSync();
```

### Backend

```typescript
import { cloudDb } from "@planner/database";

// Backend использует только облачную БД
const tasks = await cloudDb.task.findMany({
  where: { userId: "user-id" },
});
```

## Бизнес-логика

### BaseService

Базовый класс для всех сервисов с общей логикой:

- **CRUD операции** - create, update, delete, get
- **Синхронизация** - автоматическое логирование изменений
- **Валидация** - базовая валидация данных
- **Фильтрация** - поиск и фильтрация
- **Конфликт-резолюшен** - разрешение конфликтов

### TaskService

Специфичная логика для задач:

```typescript
// Создание задачи
const task = await taskService.createTask({
  name: "Новая задача",
  description: "Описание",
  priority: "HIGH",
  userId: "user-id",
  projectId: "project-id",
});

// Получение задач по статусу
const activeTasks = await taskService.getActiveTasks("user-id");
const completedTasks = await taskService.getCompletedTasks("user-id");

// Бизнес-операции
await taskService.completeTask("task-id");
await taskService.moveTask("task-id", 5);
await taskService.duplicateTask("task-id", "user-id");

// Работа с подзадачами
const subtasks = await taskService.getSubtasks("parent-task-id");
await taskService.addSubtask("parent-task-id", subtaskData);

// Работа с тегами
await taskService.addTagToTask("task-id", "tag-id");
await taskService.removeTagFromTask("task-id", "tag-id");
```

### ProjectService

Логика для проектов:

```typescript
// Создание проекта
const project = await projectService.createProject({
  name: "Новый проект",
  description: "Описание проекта",
  color: "#3B82F6",
  userId: "user-id",
});

// Получение проектов пользователя
const projects = await projectService.getProjectsByUser("user-id");
```

### AreaService

Логика для областей:

```typescript
// Создание области
const area = await areaService.createArea({
  name: "Работа",
  description: "Задачи, связанные с работой",
  color: "#10B981",
  position: 1,
  userId: "user-id",
});

// Получение областей пользователя
const areas = await areaService.getAreasByUser("user-id");
```

### UserService

Логика для пользователей:

```typescript
// Создание пользователя
const user = await userService.createUser({
  email: "user@example.com",
  name: "Имя пользователя",
});

// Получение статистики
const stats = await userService.getUserStats("user-id");
console.log(`Задач: ${stats.totalTasks}, Завершено: ${stats.completedTasks}`);
```

## Синхронизация

### Автоматическая синхронизация

```typescript
import { syncManager } from "@planner/database";

// Настройка
syncManager.setConfig({
  apiUrl: "http://localhost:3001/api",
  autoSync: true,
  syncInterval: 30000, // 30 секунд
  retryAttempts: 3,
  retryDelay: 1000,
});

// Установка токена аутентификации
syncManager.setAuthToken("jwt-token");

// Запуск
syncManager.startAutoSync();

// Ручная синхронизация
const result = await syncManager.sync();
console.log(`Синхронизировано ${result.syncedOperations} операций`);
```

### Мониторинг синхронизации

```typescript
// Получение статуса
const status = await syncManager.getSyncStatus();
console.log(`Последняя синхронизация: ${status.lastSync}`);
console.log(`Ожидающие изменения: ${status.pendingChanges}`);
console.log(`Онлайн: ${status.isOnline}`);
```

## База данных

### Поддерживаемые БД

- **SQLite** - для desktop/mobile приложений
- **PostgreSQL** - для web приложения и backend

### Схема БД

```prisma
// Основные сущности
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  // ... другие поля
}

model Task {
  id          String   @id @default(cuid())
  name        String
  description String?
  status      TaskStatus
  priority    Priority
  // ... другие поля

  // Поля для синхронизации
  syncId      String?  @unique
  lastSync    DateTime?
  isDeleted   Boolean  @default(false)
  version     Int      @default(1)
}

model Project {
  // Аналогично Task
}

model Area {
  // Аналогично Task
}

// Лог синхронизации
model SyncLog {
  id         String   @id @default(cuid())
  entityId   String
  entityType String
  operation  String
  data       String   // JSON
  timestamp  DateTime @default(now())
  synced     Boolean  @default(false)
}
```

## Разработка

### Добавление новой сущности

1. **Добавить модель в schema.prisma**
2. **Создать сервис, наследующий от BaseService**
3. **Добавить экспорт в index.ts**

```typescript
// Пример для новой сущности Tag
export class TagService extends BaseService<
  Tag,
  CreateTagData,
  UpdateTagData,
  TagFilters
> {
  protected entityName = "Tag";
  protected prismaModel = dbClient.client.tag;

  // Специфичная логика
  async getTagsByColor(color: string): Promise<Tag[]> {
    return this.getList({ color });
  }

  // Переопределение абстрактных методов
  protected getIncludeOptions() {
    return { tasks: true };
  }

  protected getOrderByOptions() {
    return [{ sort: "asc" }];
  }

  protected getSearchConditions(search: string) {
    return [{ name: { contains: search, mode: "insensitive" } }];
  }
}
```

### Добавление новой бизнес-логики

```typescript
// В TaskService
async getTasksByPriority(priority: Priority): Promise<Task[]> {
  return this.getTasks({ priority: [priority] });
}

async getTasksWithDeadline(userId: string): Promise<Task[]> {
  return this.getTasks({
    userId,
    status: ["ACTIVE"],
    endDate: { not: null }
  });
}
```

## Преимущества архитектуры

### 1. **Единообразие**

- Одинаковая логика во всех приложениях
- Общие типы и интерфейсы
- Единые правила валидации

### 2. **Переиспользование**

- Один код для всех платформ
- Общие утилиты и хелперы
- Централизованная бизнес-логика

### 3. **Поддержка**

- Изменения в одном месте
- Легкое тестирование
- Простое добавление новых функций

### 4. **Типобезопасность**

- Общие типы для всех приложений
- Автодополнение в IDE
- Проверка типов на этапе компиляции

### 5. **Синхронизация**

- Автоматическая синхронизация
- Офлайн-режим
- Разрешение конфликтов

## Миграция существующего кода

### Из web приложения

```typescript
// Было
import { prisma } from "@/lib/prisma";
const tasks = await prisma.task.findMany({ where: { userId } });

// Стало
import { taskService } from "@planner/database";
const tasks = await taskService.getTasksByUser(userId);
```

### Из других приложений

```typescript
// Было - дублирование логики
const createTask = async (data) => {
  // Логика создания задачи
};

// Стало - использование общего сервиса
import { taskService } from "@planner/database";
const task = await taskService.createTask(data);
```
