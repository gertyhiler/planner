# @planner/api-client

TypeScript API клиент для Planner, автоматически генерируемый на основе OpenAPI спецификации.

## Назначение

Этот пакет:

- Генерирует типизированный TypeScript SDK
- Использует OpenAPI спецификацию из `@planner/api-schema`
- Предоставляет типы из `@planner/types`
- Обеспечивает типобезопасное взаимодействие с API

## Архитектура

```
@planner/types (Zod схемы)
       ↓
@planner/api-schema (OpenAPI спецификация)
       ↓
@planner/api-client (TypeScript SDK)
       ↓
@planner/web, @planner/app, @planner/mobile
```

## Использование

### Генерация клиента

```bash
pnpm --filter @planner/api-client generate
```

### В приложениях

```typescript
import { TasksService, ProjectsService } from "@planner/api-client";
import type { Task, Project } from "@planner/types";

// Типизированные API вызовы
const tasks = await TasksService.getTasks();
const newTask = await TasksService.createTask({
  title: "Новая задача",
  description: "Описание задачи",
});
```

## Структура

```
generated/
├── index.ts         # Основной экспорт
├── models/          # TypeScript типы
├── schemas/         # Zod схемы валидации
├── services/        # API сервисы
│   ├── AuthService.ts
│   ├── TasksService.ts
│   ├── ProjectsService.ts
│   ├── AreasService.ts
│   └── SyncService.ts
└── core/            # Базовые классы
```

## Зависимости

- `@planner/api-schema` - источник OpenAPI спецификации
- `@planner/types` - типы и схемы валидации
- `openapi-typescript-codegen` - генерация TypeScript кода

## Интеграция

Этот пакет используется:

- `@planner/web` - веб-приложение
- `@planner/app` - десктопное приложение
- `@planner/mobile` - мобильное приложение
