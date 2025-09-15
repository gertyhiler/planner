import { app, BrowserWindow, ipcMain } from "electron";
import {
  createPrismaClient,
  createDatabaseContext,
  createServices,
} from "@planner/database";
import { fileURLToPath } from "node:url";
import path from "node:path";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.mjs
// │
process.env.APP_ROOT = path.join(__dirname, "..");

// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
export const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
export const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
export const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
  ? path.join(process.env.APP_ROOT, "public")
  : RENDERER_DIST;

let win: BrowserWindow | null;
let services: ReturnType<typeof createServices> | null = null;

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    title: "Planner",
    ...(process.platform === "darwin"
      ? {
          // macOS - оставляем нативные кнопки управления окном
          titleBarStyle: "hiddenInset",
          frame: false,
        }
      : {
          // Windows/Linux - полностью безрамочное окно
          frame: false,
        }),
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // Test active push message to Renderer-process.
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(RENDERER_DIST, "index.html"));
  }
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Обработчики для управления окном
ipcMain.handle("window-minimize", () => {
  if (win) {
    win.minimize();
  }
});

ipcMain.handle("window-maximize", () => {
  if (win) {
    if (win.isMaximized()) {
      win.unmaximize();
    } else {
      win.maximize();
    }
  }
});

ipcMain.handle("window-close", () => {
  if (win) {
    win.close();
  }
});

ipcMain.handle("window-is-maximized", () => {
  return win?.isMaximized() ?? false;
});

app.whenReady().then(createWindow);

// Инициализация БД и сервисов после готовности приложения
app.whenReady().then(async () => {
  const userDataPath = app.getPath("userData");
  const prisma = createPrismaClient(`file:${userDataPath}/planner.db`);
  await prisma.$connect();
  const context = createDatabaseContext(prisma);
  services = createServices(context);

  // IPC: задачи
  ipcMain.handle("tasks:create", (_e, data) =>
    services!.taskService.createTask(data)
  );
  ipcMain.handle("tasks:update", (_e, id, data) =>
    services!.taskService.updateTask(id, data)
  );
  ipcMain.handle("tasks:delete", (_e, id) =>
    services!.taskService.deleteTask(id)
  );
  ipcMain.handle("tasks:get", (_e, id) => services!.taskService.getTask(id));
  ipcMain.handle("tasks:list", (_e, filters) =>
    services!.taskService.getTasks(filters)
  );
  ipcMain.handle("tasks:convertToProject", (_e, taskId: string) =>
    services!.taskService.convertTaskToProject(taskId)
  );
  ipcMain.handle("tasks:addTag", (_e, taskId: string, tagId: string) =>
    services!.taskService.addTagToTask(taskId, tagId)
  );
  ipcMain.handle("tasks:removeTag", (_e, taskId: string, tagId: string) =>
    services!.taskService.removeTagFromTask(taskId, tagId)
  );
  ipcMain.handle(
    "tasks:checklist:add",
    (_e, taskId: string, itemData: unknown) =>
      services!.taskService.addChecklistItem(taskId, itemData)
  );
  ipcMain.handle(
    "tasks:checklist:update",
    (_e, itemId: string, itemData: unknown) =>
      services!.taskService.updateChecklistItem(itemId, itemData)
  );
  ipcMain.handle("tasks:checklist:delete", (_e, itemId: string) =>
    services!.taskService.deleteChecklistItem(itemId)
  );

  // IPC: проекты
  ipcMain.handle("projects:create", (_e, data) =>
    services!.projectService.createProject(data)
  );
  ipcMain.handle("projects:update", (_e, data) =>
    services!.projectService.updateProject(data)
  );
  ipcMain.handle("projects:delete", (_e, id) =>
    services!.projectService.deleteProject(id)
  );
  ipcMain.handle("projects:get", (_e, id) =>
    services!.projectService.getProject(id)
  );
  ipcMain.handle("projects:list", (_e, filters) =>
    services!.projectService.getProjects(filters)
  );

  // IPC: области
  ipcMain.handle("areas:create", (_e, data) =>
    services!.areaService.createArea(data)
  );
  ipcMain.handle("areas:update", (_e, id, data) =>
    services!.areaService.updateArea(id, data)
  );
  ipcMain.handle("areas:delete", (_e, id) =>
    services!.areaService.deleteArea(id)
  );
  ipcMain.handle("areas:get", (_e, id) => services!.areaService.getById(id));
  ipcMain.handle("areas:list", (_e, userId, filters) =>
    services!.areaService.getByUser(userId, filters)
  );
});
