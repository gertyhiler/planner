# @planner/sdk

TypeScript API клиент для Planner с TanStack Query хуками, генерируемый с помощью Orval.

## Особенности

- 🚀 **TanStack Query хуки** для всех API операций
- 📝 **Структура sdk.tag.method** для удобного использования
- ✅ **Zod валидация** входящих и исходящих данных
- 🌐 **Кастомный fetch** с автоматическим определением Content-Type
- 📁 **Поддержка FormData** для загрузки файлов
- 🎯 **TypeScript** с полной типизацией
- 🔄 **Автоматическая генерация** из OpenAPI схемы
- 🛡️ **Встроенная обработка ошибок** и авторизации

## Установка и генерация

```bash
# Установка зависимостей
npm install

# Генерация всего SDK
npm run build:all

# Только генерация Orval
npm run generate

# Только типы
npm run generate:types

# Только SDK структура
npm run build:sdk-structure
```

## Использование

### Базовое использование

```typescript
import { sdk } from '@planner/sdk';

// В React компоненте
function TaskList() {
  // Получение списка задач
  const { data: tasks, isLoading, error } = sdk.tasks.getTasks();

  // Создание новой задачи
  const createTaskMutation = sdk.tasks.createTask();

  const handleCreateTask = () => {
    createTaskMutation.mutate({
      name: 'Новая задача',
      description: 'Описание задачи'
    });
  };

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;

  return (
    <div>
      {tasks?.map(task => (
        <div key={task.id}>{task.name}</div>
      ))}
      <button onClick={handleCreateTask}>
        Создать задачу
      </button>
    </div>
  );
}
```

### Доступные SDK методы

```typescript
// Авторизация
sdk.auth.auth(); // POST /auth

// Пользователи
sdk.users.getMe(); // GET /api/users/me

// Задачи
sdk.tasks.getTasks(); // GET /api/tasks
sdk.tasks.getTask(); // GET /api/tasks/{id}
sdk.tasks.createTask(); // POST /api/tasks
sdk.tasks.updateTask(); // PUT /api/tasks/{id}
sdk.tasks.deleteTask(); // DELETE /api/tasks/{id}

// Проекты
sdk.projects.getProjects(); // GET /api/projects
sdk.projects.getProject(); // GET /api/projects/{id}
sdk.projects.createProject(); // POST /api/projects
sdk.projects.updateProject(); // PUT /api/projects/{id}
sdk.projects.deleteProject(); // DELETE /api/projects/{id}

// Области
sdk.areas.getAreas(); // GET /api/areas
sdk.areas.getArea(); // GET /api/areas/{id}
sdk.areas.createArea(); // POST /api/areas
sdk.areas.updateArea(); // PUT /api/areas/{id}
sdk.areas.deleteArea(); // DELETE /api/areas/{id}

// Синхронизация
sdk.sync.uploadChanges(); // POST /api/sync/upload
sdk.sync.downloadChanges(); // GET /api/sync/download
sdk.sync.getSyncStatus(); // GET /api/sync/status
```

### Валидация данных

```typescript
import {
  validateCreateTaskRequest,
  isTaskResponse,
  TaskResponseSchema,
} from "@planner/sdk";

// Валидация входящих данных
try {
  const validData = validateCreateTaskRequest({
    name: "Test task",
    description: "Test description",
  });
  console.log("Данные валидны:", validData);
} catch (error) {
  console.error("Ошибка валидации:", error);
}

// Проверка типов
if (isTaskResponse(someData)) {
  // someData теперь имеет тип TaskResponse
  console.log(someData.name);
}

// Прямое использование Zod схем
const result = TaskResponseSchema.safeParse(data);
if (result.success) {
  console.log("Валидные данные:", result.data);
}
```

### Настройка

Вы можете настроить базовый URL и другие параметры через переменные окружения:

```env
NEXT_PUBLIC_API_URL=https://api.myapp.com
```

Или использовать FetchInstance напрямую для кастомных запросов:

```typescript
import { fetchInstance } from "@planner/sdk";

// Использование готового экземпляра FetchInstance
const response = await fetchInstance.get("/api/custom", { page: "1" });

// POST с данными
const createResponse = await fetchInstance.post("/api/users", {
  name: "John",
  email: "john@example.com",
});

// Отправка файлов через FormData
const formData = new FormData();
formData.append("file", file);
const uploadResponse = await fetchInstance.postFD("/upload", formData);

// Или просто передать объект - он автоматически станет FormData
const uploadResponse2 = await fetchInstance.postFD("/upload", { file });
```

### Особенности кастомного фетчера

SDK использует ваш кастомный fetch с расширенными возможностями:

#### 🔄 Автоматическое определение Content-Type

- **JSON**: `application/json` → автоматический `response.json()`
- **PDF**: `application/pdf` → автоматический `response.blob()`
- **Остальное**: автоматический `response.text()`

#### 🌍 Умное управление URL

- Автоматическое определение базового URL по окружению
- Поддержка query параметров
- Правильная обработка относительных путей

#### 🔐 Встроенная авторизация

- Автоматическое добавление токена из `localStorage`
- Обработка 401 ошибок с редиректом
- Настраиваемые заголовки

### Возможности FetchInstance

FetchInstance предоставляет дополнительный API для сложных случаев:

```typescript
import { fetchInstance } from "@planner/sdk";

// GET запросы
const users = await fetchInstance.get("/users");
const user = await fetchInstance.get("/users/1", { include: "profile" });

// POST запросы
const newUser = await fetchInstance.post("/users", {
  name: "John",
  email: "john@example.com",
});

// PUT запросы
const updatedUser = await fetchInstance.put("/users/1", {
  name: "John Updated",
});

// PATCH запросы
const patchedUser = await fetchInstance.patch("/users/1", {
  name: "John Patched",
});

// DELETE запросы
await fetchInstance.delete("/users/1");

// Загрузка файлов с FormData
const formData = new FormData();
formData.append("avatar", avatarFile);
const uploadResult = await fetchInstance.postFD("/users/1/avatar", formData);

// PUT с FormData
const updateResult = await fetchInstance.putFD("/users/1/avatar", {
  avatar: avatarFile,
});
```

### Обработка ошибок

```typescript
import { ErrorInstance, ServerErrorImpl } from "@planner/sdk";

try {
  const result = await fetchInstance.get("/users/999");

  if (ErrorInstance.isServerError(result)) {
    // Обработка ошибки сервера
    const error = result as ServerErrorImpl;
    console.error("Server error:", error.getMessage());
    console.error("Status code:", error.getStatusCode());
  } else {
    // Успешный результат
    console.log("Data:", result.data);
  }
} catch (error) {
  console.error("Network or unexpected error:", error);
}
```

### Авторизация

SDK автоматически добавляет токен авторизации из `localStorage` ключа `auth_token` к каждому запросу. При получении 401 ошибки, токен удаляется и происходит редирект на страницу входа.

### Структура проекта

```
packages/sdk/
├── src/
│   ├── fetch/
│   │   ├── instance.ts       # FetchInstance класс (дополнительный API)
│   │   └── error.ts          # Обработка ошибок сервера
│   ├── mutator/
│   │   └── fetch.ts          # Кастомный фетчер + Orval адаптер
│   ├── index.ts              # Главный экспорт
│   ├── sdk.ts                # SDK структура (генерируется)
│   └── types.ts              # Типы и валидация
├── scripts/
│   ├── transform-operations.ts   # Трансформер для Orval
│   ├── generate-types.ts         # Генератор типов
│   └── build-sdk-structure.ts    # Построение SDK структуры
├── generated/                    # Сгенерированные файлы (не править вручную)
├── orval.config.ts              # Конфигурация Orval
└── package.json
```

### Архитектура SDK

1. **Основа**: Ваш кастомный fetch с умным определением Content-Type
2. **Orval адаптер**: Фасад между кастомным fetch и Orval API
3. **TanStack Query**: Генерируемые хуки для React приложений
4. **SDK структура**: Удобный `sdk.tag.method` интерфейс
5. **FetchInstance**: Дополнительный API для сложных случаев

## Разработка

После изменения OpenAPI схемы в `@planner/api-schema`, запустите:

```bash
npm run build:all
```

Это выполнит:

1. Генерацию Orval файлов
2. Создание типов с валидацией
3. Построение SDK структуры
4. Компиляцию TypeScript
