import {
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import { StrictMode } from "react";
import { Layout } from "@/widgets/layout";

// Импорты страниц
import { MainPage } from "@/pages/main";
import { TodayPage } from "@/pages/today";
import { CalendarPage } from "@/pages/calendar";
import { AwaitedPage } from "@/pages/awaited";
import { SomedayPage } from "@/pages/someday";
import { ArchivePage } from "@/pages/archive";
import { TrashPage } from "@/pages/trash";
import { ProjectPage } from "@/pages/project";

// Корневой роут с Layout
const rootRoute = createRootRoute({
  component: () => (
    <StrictMode>
      <Layout />
    </StrictMode>
  ),
});

// Страница "Входящие" (главная)
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: MainPage,
});

// Страница "Сегодня"
const todayRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/today",
  component: TodayPage,
});

// Страница "Календарь"
const calendarRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/calendar",
  component: CalendarPage,
});

// Страница "Ожидаемые"
const awaitedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/awaited",
  component: AwaitedPage,
});

// Страница "Когда-нибудь"
const somedayRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/someday",
  component: SomedayPage,
});

// Страница "Архив"
const archiveRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/archive",
  component: ArchivePage,
});

// Страница "Корзина"
const trashRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/trash",
  component: TrashPage,
});

// Страница проекта
const projectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/project/$slug",
  component: ProjectPage,
});

// Дерево роутов
const routeTree = rootRoute.addChildren([
  indexRoute,
  todayRoute,
  calendarRoute,
  awaitedRoute,
  somedayRoute,
  archiveRoute,
  trashRoute,
  projectRoute,
]);

// Создаем роутер для Electron с MemoryHistory
export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
});

// TypeScript типизация
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
