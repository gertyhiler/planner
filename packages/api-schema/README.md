# @planner/api-schema

Пакет для генерации OpenAPI спецификации на основе Zod схем из `@planner/types`.

## Назначение

Этот пакет:

- Использует Zod схемы из `@planner/types`
- Генерирует OpenAPI спецификацию
- Создает типизированную документацию API

## Архитектура

```
@planner/types (Zod схемы)
       ↓
@planner/api-schema (OpenAPI генерация)
       ↓
@planner/sdk (TypeScript SDK)
```

## Использование

### Генерация OpenAPI спецификации

```bash
pnpm --filter @planner/api-schema generate
```

Это создаст файл `generated/openapi.json` с полной OpenAPI спецификацией.

### Структура

```
src/
├── index.ts         # Основной файл генерации
└── generated/       # Сгенерированные файлы
    ├── openapi.json # OpenAPI спецификация
    └── openapi.yaml # YAML версия
```

## Зависимости

- `@planner/types` - источник Zod схем
- `@asteasolutions/zod-to-openapi` - генерация OpenAPI из Zod
- `@planner/database` - для интеграции с базой данных

## Интеграция

Этот пакет используется:

- `@planner/sdk` - для генерации TypeScript SDK
- `@planner/backend` - для валидации запросов
- Swagger UI - для документации API
