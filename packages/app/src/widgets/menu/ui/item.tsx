import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";

interface MenuItemProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  wrapperColor: string;
  href: string;
  matchPattern: string;
}

function MenuItem({
  title,
  count,
  icon,
  wrapperColor,
  matchPattern,
  href,
}: MenuItemProps) {
  const [isCurrentRoute, setIsCurrentRoute] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Простая проверка для соответствия пути
    const isMatch =
      location.pathname === matchPattern ||
      (matchPattern === "/" && location.pathname === "/");
    setIsCurrentRoute(isMatch);
  }, [matchPattern, location.pathname]);

  return (
    <Link
      to={href}
      className={`flex hover:text-accent-foreground hover:bg-sidebar-accent items-center gap-2 text-card-foreground px-3 py-2 rounded-md transition-colors ${
        isCurrentRoute ? "bg-muted" : ""
      }`}
    >
      <div
        className={`flex items-center justify-center bg-primary/90 rounded ${wrapperColor} [&>svg]:size-5`}
      >
        {icon}
      </div>

      <span className="text-body font-medium leading-3">{title}</span>

      {Boolean(count) && (
        <span className="ml-auto text-xs font-bold text-card-foreground bg-card px-1.5 py-0.5 rounded">
          {count}
        </span>
      )}
    </Link>
  );
}

export default MenuItem;
