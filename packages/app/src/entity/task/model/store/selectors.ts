import type { Task } from "@planner/database";

export const selectAll = (s: {
  order: string[];
  items: Record<string, Task>;
}) => s.order.map((id) => s.items[id]).filter(Boolean);

export const selectById =
  (id: string) => (s: { items: Record<string, Task> }) =>
    s.items[id];

export const selectLoading = (s: { loading: boolean }) => s.loading;
export const selectError = (s: { error?: string }) => s.error;
