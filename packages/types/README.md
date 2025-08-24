# @planner/types

Пакет с общими TypeScript типами и Zod схемами для всего проекта Planner.

## Назначение

Этот пакет содержит:

- **Zod схемы** для валидации данных
- **TypeScript типы** для всех сущностей проекта
- **Общие интерфейсы** и типы

## Использование

### В других пакетах

```typescript
// Импорт типов
import type { Task, Project, Area } from "@planner/types";

// Импорт Zod схем
import { TaskSchema, ProjectSchema, AreaSchema } from "@planner/types";

// Использование для валидации
const taskData = TaskSchema.parse(rawData);
```

### Структура

```
src/
├── schemas/          # Zod схемы для валидации
│   ├── auth.ts      # Аутентификация
│   ├── tasks.ts     # Задачи
│   ├── projects.ts  # Проекты
│   ├── areas.ts     # Области
│   ├── sync.ts      # Синхронизация
│   └── common.ts    # Общие типы
└── index.ts         # Основной экспорт
```

## Зависимости

Этот пакет используется всеми другими пакетами:

- `@planner/api-schema` - для генерации OpenAPI спецификации
- `@planner/sdk` - для типизации API клиента
- `@planner/backend` - для типизации серверных сервисов
- `@planner/database` - для типизации работы с БД
- `@planner/web` - для типизации веб-приложения
- `@planner/app` - для типизации десктопного приложения
- `@planner/mobile` - для типизации мобильного приложения
