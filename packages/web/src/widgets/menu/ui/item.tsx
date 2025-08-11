"use client";

import { pathToRegexp } from "path-to-regexp";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

function MenuItem({
  title,
  count,
  icon,
  wrapperColor,
  matchPattern,
  href,
}: {
  title: string;
  count: number;
  icon: React.ReactNode;
  wrapperColor: string;
  href: string;
  matchPattern: string;
}) {
  const [isCurrentRoute, setIsCurrentRoute] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    const isMatch = pathToRegexp(matchPattern).regexp.test(pathName);

    setIsCurrentRoute(isMatch);
  }, [matchPattern, pathName]);

  return (
    <Link
      href={href}
      prefetch
      className={`flex items-center gap-2 text-card-foreground px-3 py-2 rounded-md ${isCurrentRoute ? "bg-muted" : ""}`}>
      <div
        className={`flex items-center justify-center w-8 h-5 bg-primary/90 rounded ${wrapperColor} [&>svg]:size-4`}>
        {icon}
      </div>

      <span className="text-body font-medium leading-3">{title}</span>

      {Boolean(count) && (
        <span className="ml-auto text-xs font-bold text-gray-300 bg-gray-700 px-1.5 py-0.5 rounded">
          {count}
        </span>
      )}
    </Link>
  );
}

export default MenuItem;
