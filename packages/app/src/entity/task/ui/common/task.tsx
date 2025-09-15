"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/shared/lib/utils";
import { Checkbox } from "../../../../shared/ui/checkbox";
import { Calendar } from "lucide-react";
import clsx from "clsx";
import { Badge, badgeVariants } from "../../../../shared/ui/badge";

interface Tag {
  id: string;
  name: string;
  color: string;
}

interface TaskProps {
  id?: string;
  title: string;
  description?: string;
  completed?: boolean;
  selected?: boolean;
  dueDate?: string;
  tags?: Tag[];
  onToggleComplete?: (id?: string) => void;
  onSelectTask?: (id?: string) => void;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

const Task = ({
  id,
  title: initialTitle,
  description: initialDescription,
  completed = false,
  selected = false,
  dueDate,
  tags = [
    { id: "1", name: "tag1", color: "red" },
    { id: "2", name: "tag2", color: "blue" },
  ],
  onToggleComplete,
  onSelectTask,
  className,
  ref,
}: TaskProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [title, setTitle] = React.useState(initialTitle);
  const [description, setDescription] = React.useState(initialDescription);
  const titleTextareaRef = React.useRef<HTMLTextAreaElement>(null);
  const taskContainerRef = React.useRef<HTMLDivElement>(null);

  const adjustTextareaHeight = React.useCallback(() => {
    const textarea = titleTextareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  }, []);

  React.useEffect(() => {
    if (isExpanded && titleTextareaRef.current) {
      // Небольшая задержка, чтобы textarea успела отрендериться
      setTimeout(() => {
        adjustTextareaHeight();
        // Устанавливаем каретку в конец текста
        if (titleTextareaRef.current) {
          const textarea = titleTextareaRef.current;
          const length = textarea.value.length;
          textarea.setSelectionRange(length, length);
          textarea.focus();
        }
      }, 0);
    }
  }, [isExpanded, title, adjustTextareaHeight]);

  const handleToggleExpanded = () => {
    const wasExpanded = isExpanded;
    setIsExpanded(!isExpanded);

    // Если сворачиваем, возвращаем фокус на контейнер
    if (wasExpanded && taskContainerRef.current) {
      setTimeout(() => {
        if (taskContainerRef.current) {
          taskContainerRef.current.focus();
        }
      }, 100);
    }
  };

  const handleCheckboxChange = () => {
    onToggleComplete?.(id);
  };

  const handleSelectTask = () => {
    onSelectTask?.(id);
  };

  return (
    <motion.div
      ref={(node) => {
        taskContainerRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      }}
      tabIndex={0}
      role="button"
      aria-pressed={selected}
      aria-expanded={isExpanded}
      aria-label={`Задача: ${title}`}
      animate={{
        backgroundColor: clsx({
          "var(--card)": isExpanded,
          "var(--muted)": selected,
          transparent: !isExpanded,
        }),
        opacity: completed ? 0.6 : 1,
        padding: clsx({
          "8px 12px": isExpanded,
          "0": !isExpanded,
        }),
        margin: clsx({
          "40px 0": isExpanded,
          "0": !isExpanded,
        }),
      }}
      transition={{
        duration: 0.2,
        ease: "linear",
      }}
      className={cn(
        "w-full rounded-lg bg-transparent transition-colors",
        "cursor-pointer focus:outline-none",
        {
          "focus:!bg-muted": !isExpanded,
        },
        className
      )}
      onClick={(e) => {
        if (isExpanded) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
        handleSelectTask();
      }}
      onDoubleClick={(e) => {
        if (isExpanded) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        handleToggleExpanded();
      }}
      onKeyDown={(e) => {
        if (!isExpanded) {
          if (e.key === "Enter") {
            e.preventDefault();
            handleToggleExpanded();
          }
        } else {
          if (e.key === "Escape") {
            e.preventDefault();
            handleToggleExpanded();
          }
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleToggleExpanded();
          }
        }
      }}
    >
      <div
        className={cn(
          "absolute inset-0 -z-1 w-full h-full bg-black/20 backdrop-blur-sm opacity-0 transition-opacity duration-200",
          isExpanded && "opacity-100"
        )}
      />
      {/* Compact state header */}
      <div className="flex items-start gap-2 p-1 relative z-10 flex-nowrap overflow-hidden">
        <Checkbox
          size="xs"
          checked={completed}
          onCheckedChange={handleCheckboxChange}
          onClick={(e) => e.stopPropagation()}
          className="shrink-0 mt-1"
        />

        <div className="flex-1 min-w-0 grid grid-cols-[1fr_auto]">
          {isExpanded && (
            <textarea
              ref={titleTextareaRef}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-sm font-medium text-foreground bg-transparent outline-none border-none focus:outline-none focus:ring-0 focus:border-none focus:shadow-none w-full resize-none overflow-hidden"
              rows={1}
              style={{
                minHeight: "1.25rem",
                height: "auto",
              }}
              onInput={adjustTextareaHeight}
            />
          )}
          {!isExpanded && (
            <span
              className={cn(
                "text-sm font-medium text-foreground truncate select-none",
                completed && "line-through text-muted-foreground"
              )}
            >
              {title}
            </span>
          )}

          {!isExpanded && (dueDate || tags.length > 0) && (
            <div className="inline-flex gap-1 items-center ml-2">
              {tags.length > 0 &&
                tags.map((tag) => (
                  <Badge variant={"outline"} key={tag.id}>
                    {tag.name}
                  </Badge>
                ))}
            </div>
          )}
        </div>
      </div>

      {/* Expanded state content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pl-7.5 pb-4 space-y-3">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.stopPropagation();
                  }
                }}
                placeholder="Заметка"
                className="w-full h-24 bg-transparent text-sm text-foreground resize-none focus:outline-none focus:ring-0 focus:border-none focus:shadow-none placeholder:text-muted-foreground"
              />

              {dueDate && (
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground mb-2">
                    Срок выполнения
                  </h4>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">{dueDate}</span>
                  </div>
                </div>
              )}

              {tags.length > 0 && (
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground mb-2">
                    Теги
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {tags.map((tag, index) => (
                      <motion.span
                        key={tag.id}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        style={{
                          backgroundColor: tag.color,
                          color: "white",
                        }}
                        className={badgeVariants({
                          variant: "secondary",
                        })}
                      >
                        {tag.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export { Task };
