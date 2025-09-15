import { ipcRenderer, contextBridge } from "electron";

// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld("ipcRenderer", {
  on(...args: Parameters<typeof ipcRenderer.on>) {
    const [channel, listener] = args;
    return ipcRenderer.on(channel, (event, ...args) =>
      listener(event, ...args)
    );
  },
  off(...args: Parameters<typeof ipcRenderer.off>) {
    const [channel, ...omit] = args;
    return ipcRenderer.off(channel, ...omit);
  },
  send(...args: Parameters<typeof ipcRenderer.send>) {
    const [channel, ...omit] = args;
    return ipcRenderer.send(channel, ...omit);
  },
  invoke(...args: Parameters<typeof ipcRenderer.invoke>) {
    const [channel, ...omit] = args;
    return ipcRenderer.invoke(channel, ...omit);
  },

  // You can expose other APTs you need here.
  // ...
});

// --------- Expose window control API ---------
contextBridge.exposeInMainWorld("windowAPI", {
  minimize: () => ipcRenderer.invoke("window-minimize"),
  maximize: () => ipcRenderer.invoke("window-maximize"),
  close: () => ipcRenderer.invoke("window-close"),
  isMaximized: () => ipcRenderer.invoke("window-is-maximized"),
});

// --------- Expose domain API (safe IPC wrappers) ---------
contextBridge.exposeInMainWorld("db", {
  tasks: {
    create: (data: unknown) => ipcRenderer.invoke("tasks:create", data),
    update: (id: string, data: unknown) =>
      ipcRenderer.invoke("tasks:update", id, data),
    delete: (id: string) => ipcRenderer.invoke("tasks:delete", id),
    get: (id: string) => ipcRenderer.invoke("tasks:get", id),
    list: (filters?: unknown) => ipcRenderer.invoke("tasks:list", filters),
    convertToProject: (taskId: string) =>
      ipcRenderer.invoke("tasks:convertToProject", taskId),
    addTag: (taskId: string, tagId: string) =>
      ipcRenderer.invoke("tasks:addTag", taskId, tagId),
    removeTag: (taskId: string, tagId: string) =>
      ipcRenderer.invoke("tasks:removeTag", taskId, tagId),
    checklist: {
      add: (taskId: string, item: unknown) =>
        ipcRenderer.invoke("tasks:checklist:add", taskId, item),
      update: (itemId: string, item: unknown) =>
        ipcRenderer.invoke("tasks:checklist:update", itemId, item),
      delete: (itemId: string) =>
        ipcRenderer.invoke("tasks:checklist:delete", itemId),
    },
  },
  projects: {
    create: (data: unknown) => ipcRenderer.invoke("projects:create", data),
    update: (data: unknown) => ipcRenderer.invoke("projects:update", data),
    delete: (id: string) => ipcRenderer.invoke("projects:delete", id),
    get: (id: string) => ipcRenderer.invoke("projects:get", id),
    list: (filters?: unknown) => ipcRenderer.invoke("projects:list", filters),
  },
  areas: {
    create: (data: unknown) => ipcRenderer.invoke("areas:create", data),
    update: (id: string, data: unknown) =>
      ipcRenderer.invoke("areas:update", id, data),
    delete: (id: string) => ipcRenderer.invoke("areas:delete", id),
    get: (id: string) => ipcRenderer.invoke("areas:get", id),
    list: (userId: string, filters?: unknown) =>
      ipcRenderer.invoke("areas:list", userId, filters),
  },
});
