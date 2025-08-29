import { Task } from "@/shared/ui/task";

function TaskEntity() {
  return (
    <Task
      title="Пример задачи с описанием и тегами и датой и статусом и приоритетом и комментариями и прикрепленными файлами и ссылками с описанием и тегами и датой и статусом и приоритетом и комментариями и прикрепленными файлами и ссылками"
      description="Описание задачи с описанием и тегами и датой"
      tags={[
        { id: "1", name: "tag1", color: "red" },
        { id: "2", name: "tag2", color: "blue" },
      ]}
      dueDate={new Date().toISOString()}
    />
  );
}

export default TaskEntity;
