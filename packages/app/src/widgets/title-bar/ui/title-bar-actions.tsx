import { Moon, Sun, Settings } from "lucide-react";
import { useTheme } from "next-themes";

const TitleBarActions = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleSettings = () => {
    // Здесь можно добавить логику открытия настроек
    console.log("Открыть настройки");
  };

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={toggleTheme}
        className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
        aria-label="Переключить тему"
        title="Переключить тему"
      >
        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </button>

      <button
        onClick={handleSettings}
        className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
        aria-label="Настройки"
        title="Настройки"
      >
        <Settings size={16} />
      </button>
    </div>
  );
};

export default TitleBarActions;
