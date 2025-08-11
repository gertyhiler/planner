# @planner/backend

Backend сервер для планировщика задач с поддержкой синхронизации.

## Особенности

- **Fastify** - быстрый и современный веб-фреймворк
- **Синхронизация** - API для синхронизации между приложениями
- **Аутентификация** - JWT-based аутентификация
- **OpenAPI** - автоматическая документация API
- **PostgreSQL** - облачная база данных

## Архитектура

```
packages/backend/
├── src/
│   ├── database/           # Работа с облачной БД
│   │   └── client.ts       # Prisma клиент для PostgreSQL
│   ├── sync/               # API для синхронизации
│   │   ├── routes/         # Роуты синхронизации
│   │   └── handlers/       # Обработчики синхронизации
│   ├── routes/             # Обычные API роуты
│   │   ├── auth.ts         # Аутентификация
│   │   ├── tasks.ts        # Задачи
│   │   ├── projects.ts     # Проекты
│   │   └── areas.ts        # Области
│   ├── middleware/         # Middleware
│   └── index.ts            # Главный файл
```

## Установка и запуск

### 1. Установка зависимостей

```bash
pnpm install
```

### 2. Настройка переменных окружения

Создайте `.env` файл:

```env
# Server
PORT=3001
NODE_ENV=development

# Database
CLOUD_DATABASE_URL="postgresql://user:password@localhost:5432/planner_cloud"

# JWT
JWT_SECRET="your-secret-key"
```

### 3. Запуск

```bash
# Разработка
pnpm dev

# Продакшн
pnpm build
pnpm start
```

## API Endpoints

### Аутентификация

- `POST /api/auth` - Вход в систему

### Задачи

- `GET /api/tasks` - Получить список задач
- `POST /api/tasks` - Создать задачу
- `GET /api/tasks/:id` - Получить задачу
- `PUT /api/tasks/:id` - Обновить задачу
- `DELETE /api/tasks/:id` - Удалить задачу

### Проекты

- `GET /api/projects` - Получить список проектов
- `POST /api/projects` - Создать проект

### Области

- `GET /api/areas` - Получить список областей
- `POST /api/areas` - Создать область

### Синхронизация

- `POST /api/sync/upload` - Загрузить изменения с клиента
- `GET /api/sync/download` - Скачать изменения с сервера
- `GET /api/sync/status` - Статус синхронизации

## Синхронизация

### Принцип работы

1. **Клиент** (desktop/mobile) работает с локальной SQLite БД
2. **Изменения** логируются в таблице `SyncLog`
3. **Синхронизация** происходит через API endpoints
4. **Backend** обрабатывает изменения и сохраняет в PostgreSQL

### API для синхронизации

#### Загрузка изменений

```http
POST /api/sync/upload
Authorization: Bearer <token>
Content-Type: application/json

{
  "operations": [
    {
      "id": "sync-log-id",
      "entityType": "Task",
      "operation": "CREATE",
      "data": { ... },
      "timestamp": "2024-01-01T00:00:00Z",
      "version": 1
    }
  ]
}
```

#### Скачивание изменений

```http
GET /api/sync/download?lastSync=2024-01-01T00:00:00Z
Authorization: Bearer <token>
```

Ответ:

```json
{
  "changes": [
    {
      "id": "task-id",
      "entityType": "Task",
      "operation": "UPDATE",
      "data": { ... },
      "timestamp": "2024-01-01T00:00:00Z",
      "version": 2
    }
  ],
  "lastSync": "2024-01-01T00:00:00Z"
}
```

#### Статус синхронизации

```http
GET /api/sync/status
Authorization: Bearer <token>
```

Ответ:

```json
{
  "lastSync": "2024-01-01T00:00:00Z",
  "pendingChanges": 5,
  "isOnline": true
}
```

## Интеграция с клиентами

### Desktop/Mobile приложения

```typescript
import { syncManager } from "@planner/database";

// Настройка синхронизации
syncManager.setConfig({
  apiUrl: "http://localhost:3001/api",
  autoSync: true,
  syncInterval: 30000,
});

// Установка токена аутентификации
syncManager.setAuthToken("jwt-token");

// Запуск автоматической синхронизации
syncManager.startAutoSync();

// Ручная синхронизация
const result = await syncManager.sync();
console.log(`Синхронизировано ${result.syncedOperations} операций`);
```

### Web приложение

Web приложение может работать напрямую с backend API или использовать database пакет в режиме cloud:

```typescript
import { dbClient } from "@planner/database";

// Переключение на облачную БД
dbClient.setDatabaseType("cloud");

// Работа с задачами через облачную БД
const tasks = await taskService.getTasksByUser("user-id");
```

## Разработка

### Структура проекта

- **routes/** - API роуты
- **sync/** - Логика синхронизации
- **middleware/** - Middleware (аутентификация, валидация)
- **database/** - Работа с базой данных

### Добавление нового endpoint

1. Создайте роут в `routes/`
2. Добавьте схему валидации
3. Зарегистрируйте роут в `index.ts`

### Добавление новой сущности для синхронизации

1. Добавьте модель в `@planner/database/prisma/schema.prisma`
2. Создайте обработчик в `sync/handlers/sync-handler.ts`
3. Добавьте роуты в `sync/routes/sync-routes.ts`

## Мониторинг

### Health Check

```http
GET /health
```

Ответ:

```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00Z",
  "services": {
    "database": "connected",
    "sync": "enabled"
  }
}
```

### Логирование

Backend использует встроенное логирование Fastify. Логи включают:

- HTTP запросы
- Ошибки синхронизации
- Время выполнения операций

## Безопасность

- **JWT аутентификация** для всех защищенных endpoints
- **CORS** настройки для web приложений
- **Helmet** для защиты заголовков
- **Валидация** всех входящих данных

## Производительность

- **Fastify** - один из самых быстрых Node.js фреймворков
- **Connection pooling** для PostgreSQL
- **Кэширование** JWT токенов
- **Оптимизированные запросы** к базе данных

## Развертывание

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3001
CMD ["npm", "start"]
```

### Environment Variables

- `PORT` - порт сервера (по умолчанию 3001)
- `CLOUD_DATABASE_URL` - URL PostgreSQL БД
- `JWT_SECRET` - секрет для JWT токенов
- `NODE_ENV` - окружение (development/production)
