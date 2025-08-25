import { ReactNode } from "react";

interface TitleBarProps {
  title?: string;
  actions?: ReactNode;
  className?: string;
}

const TitleBar = ({
  title = "Planner",
  actions,
  className = "",
}: TitleBarProps) => {
  return (
    <div
      className={`flex items-center h-10 bg-background border-b border-border select-none ${className}`}
      style={{ WebkitAppRegion: "drag" } as React.CSSProperties}
    >
      {/* Левая область - пустая для macOS (нативные кнопки управления окном) */}
      <div className="w-20"></div>

      {/* Центральная область - заголовок */}
      <div className="flex-1 flex items-center justify-center">
        <span className="text-sm font-medium text-foreground">{title}</span>
      </div>

      {/* Правая область - кастомные кнопки */}
      <div
        className="flex items-center px-4"
        style={{ WebkitAppRegion: "no-drag" } as React.CSSProperties}
      >
        {actions}
      </div>
    </div>
  );
};

export default TitleBar;
