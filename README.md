# Planner - Планировщик задач

Монорепозиторий для планировщика задач с поддержкой web, desktop и mobile приложений.

## 🏗️ Архитектура

### Принципы архитектуры

- **Spec-First подход** - API описывается через OpenAPI схему
- **Единая бизнес-логика** - общий код для всех приложений
- **Офлайн-первый** - desktop/mobile работают без интернета
- **Автоматическая синхронизация** - данные синхронизируются между устройствами
- **Единый UI Kit** - общий интерфейс для всех платформ

### Структура проекта

```
planner/
├── packages/
│   ├── database/           # Центральная бизнес-логика
│   │   ├── BaseService     # Общая логика CRUD
│   │   ├── TaskService     # Логика задач
│   │   ├── ProjectService  # Логика проектов
│   │   ├── AreaService     # Логика областей
│   │   ├── UserService     # Логика пользователей
│   │   └── SyncManager     # Синхронизация
│   │
│   ├── backend/            # API сервер
│   │   ├── Sync API        # Синхронизация для desktop/mobile
│   │   ├── Web API         # API для web приложения
│   │   ├── Auth API        # Аутентификация
│   │   └── Database        # Работа с облачной БД
│   │
│   ├── api-schema/         # OpenAPI схема
│   │   ├── OpenAPI spec    # Описание API
│   │   ├── TypeScript types # Типы для API
│   │   └── Validation      # Валидация запросов/ответов
│   │
│   ├── api-client/         # SDK для web приложения
│   │   ├── HTTP client     # Клиент для API
│   │   ├── Auth client     # Аутентификация
│   │   └── TypeScript API  # Типизированные методы
│   │
│   ├── ui-kit/             # Общий UI Kit
│   │   ├── Components      # React компоненты
│   │   ├── Hooks          # React hooks
│   │   ├── Styles         # CSS/Tailwind стили
│   │   └── Icons          # Иконки
│   │
│   ├── web/                # Web приложение
│   │   ├── Thin client    # Только API вызовы
│   │   ├── UI Kit usage   # Использование UI Kit
│   │   └── Next.js        # React framework
│   │
│   ├── app/                # Desktop приложение
│   │   ├── Thick client   # Локальная БД + синхронизация
│   │   ├── UI Kit usage   # Использование UI Kit
│   │   └── Electron       # Desktop framework
│   │
│   └── mobile/             # Mobile приложение
│       ├── Thick client   # Локальная БД + синхронизация
│       ├── UI Kit usage   # Использование UI Kit
│       └── React Native   # Mobile framework
```

### Потоки данных

#### Web приложение (тонкий клиент)

```
Web App → API Client → Backend → Database (PostgreSQL)
```

#### Desktop/Mobile приложения (толстые клиенты)

```
Desktop/Mobile → Database SDK → Local DB (SQLite)
                ↓
            Sync Manager → Backend → Cloud DB (PostgreSQL)
```

## 🚀 Быстрый старт

### Установка

```bash
# Клонирование репозитория
git clone https://github.com/your-username/planner.git
cd planner

# Установка зависимостей
pnpm install

# Генерация Prisma клиента
pnpm --filter @planner/database db:generate

# Создание миграций
pnpm --filter @planner/database db:migrate

# Заполнение тестовыми данными
pnpm --filter @planner/database db:seed
```

### Запуск

```bash
# Backend (API сервер)
pnpm --filter @planner/backend dev

# Web приложение
pnpm --filter @planner/web dev

# Desktop приложение
pnpm --filter @planner/app dev

# Mobile приложение
pnpm --filter @planner/mobile dev
```

## 📦 Пакеты

### @planner/database

Центральная бизнес-логика для работы с базой данных.

```typescript
import { taskService, syncManager } from "@planner/database";

// Создание задачи
const task = await taskService.createTask({
  name: "Новая задача",
  userId: "user-id",
  priority: "HIGH",
});

// Автоматическая синхронизация
syncManager.startAutoSync();
```

**Особенности:**

- Единая бизнес-логика для всех приложений
- Поддержка SQLite (local) и PostgreSQL (cloud)
- Автоматическая синхронизация
- Офлайн-первый подход

### @planner/backend

API сервер для web приложения и синхронизации.

```typescript
// API эндпоинты
GET /api/tasks          # Получение задач
POST /api/tasks         # Создание задачи
POST /api/sync/upload   # Загрузка изменений
GET /api/sync/download  # Скачивание изменений
```

**Особенности:**

- Fastify framework
- JWT аутентификация
- OpenAPI документация
- Синхронизация для desktop/mobile

### @planner/api-schema

OpenAPI схема для валидации API.

```typescript
import { openApiSchema } from "@planner/api-schema";

// Схема используется для:
// - Валидации запросов/ответов
// - Генерации TypeScript типов
// - Документации API
```

### @planner/sdk

SDK для web приложения.

```typescript
import { apiClient } from "@planner/sdk";

// Аутентификация
await apiClient.auth({ email, password });

// Работа с задачами
const tasks = await apiClient.getTasks();
const newTask = await apiClient.createTask(taskData);
```

### @planner/ui-kit

Общий UI Kit для всех приложений.

```typescript
import { Button, TaskCard, ProjectList } from "@planner/ui-kit";

// Компоненты используются в web, desktop и mobile
```

### @planner/web

Web приложение (тонкий клиент).

```typescript
// Использует только API клиент
import { apiClient } from "@planner/sdk";
import { TaskList } from "@planner/ui-kit";

// Никакой локальной БД, только API вызовы
```

### @planner/app

Desktop приложение (толстый клиент).

```typescript
// Использует database пакет напрямую
import { taskService, syncManager } from "@planner/database";
import { TaskList } from "@planner/ui-kit";

// Локальная БД + синхронизация
```

### @planner/mobile

Mobile приложение (толстый клиент).

```typescript
// Аналогично desktop приложению
import { taskService, syncManager } from "@planner/database";
import { TaskList } from "@planner/ui-kit";

// Локальная БД + синхронизация
```

## 🔧 Разработка

### Добавление новой сущности

1. **Добавить модель в schema.prisma**
2. **Создать сервис в @planner/database**
3. **Добавить API эндпоинты в @planner/backend**
4. **Обновить OpenAPI схему в @planner/api-schema**
5. **Добавить методы в @planner/sdk**
6. **Создать UI компоненты в @planner/ui-kit**

### Добавление новой бизнес-логики

```typescript
// В @planner/database/src/services/task-service.ts
export class TaskService extends BaseService {
  async getTasksByPriority(priority: Priority): Promise<Task[]> {
    return this.getTasks({ priority: [priority] });
  }
}
```

### Тестирование

```bash
# Запуск всех тестов
pnpm test

# Тестирование конкретного пакета
pnpm --filter @planner/database test
pnpm --filter @planner/backend test
```

## 🗄️ База данных

### Схема

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

### Миграции

```bash
# Создание миграции
pnpm --filter @planner/database db:migrate

# Применение миграций
pnpm --filter @planner/database db:push

# Сброс БД
pnpm --filter @planner/database db:reset
```

## 🔄 Синхронизация

### Принципы

1. **Офлайн-первый** - все операции выполняются локально
2. **Автоматическая синхронизация** - при наличии интернета
3. **Конфликт-резолюшен** - последний выигрывает
4. **Версионирование** - каждое изменение увеличивает версию

### Настройка

```typescript
import { syncManager } from "@planner/database";

syncManager.setConfig({
  apiUrl: "http://localhost:3001/api",
  autoSync: true,
  syncInterval: 30000,
  retryAttempts: 3,
});

syncManager.setAuthToken("jwt-token");
syncManager.startAutoSync();
```

## 🎨 UI Kit

### Компоненты

- **Button** - кнопки
- **Input** - поля ввода
- **TaskCard** - карточка задачи
- **ProjectList** - список проектов
- **AreaSelector** - выбор области
- **PriorityBadge** - бейдж приоритета

### Использование

```typescript
import { Button, TaskCard, ProjectList } from '@planner/ui-kit';

function TaskPage() {
  return (
    <div>
      <ProjectList projects={projects} />
      <TaskCard task={task} />
      <Button variant="primary">Создать задачу</Button>
    </div>
  );
}
```

## 📱 Платформы

### Web (Next.js)

- Тонкий клиент
- Только API вызовы
- SSR/SSG поддержка
- PWA возможности

### Desktop (Electron)

- Толстый клиент
- Локальная SQLite БД
- Автоматическая синхронизация
- Нативные возможности

### Mobile (React Native)

- Толстый клиент
- Локальная SQLite БД
- Автоматическая синхронизация
- Нативные компоненты

## 🚀 Развертывание

### Backend

```bash
# Продакшн сборка
pnpm --filter @planner/backend build

# Docker
docker build -t planner-backend ./packages/backend
```

### Web

```bash
# Продакшн сборка
pnpm --filter @planner/web build

# Vercel/Netlify
pnpm --filter @planner/web deploy
```

### Desktop

```bash
# Сборка приложения
pnpm --filter @planner/app build

# Создание установщика
pnpm --filter @planner/app dist
```

### Mobile

```bash
# iOS
pnpm --filter @planner/mobile ios

# Android
pnpm --filter @planner/mobile android
```

## 🤝 Вклад в проект

1. Fork репозитория
2. Создайте feature branch
3. Внесите изменения
4. Добавьте тесты
5. Создайте Pull Request

## 📄 Лицензия

MIT License - см. файл [LICENSE](LICENSE) для деталей.
