import { cn } from "lib/utils";

import React from "react";

import { Box } from "lucide-react";

import { Button } from "ui/button";
import { Typography } from "ui/typography";

function CreateProjectButton({
  className,
  onClick,
  ...props
}: React.ComponentPropsWithoutRef<typeof Button>) {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event);
  };
  return (
    <Button
      className={cn(
        "gap-1 overflow-hidden w-full items-start text-left h-auto whitespace-normal",
        "hover:bg-primary hover:text-foreground",
        className
      )}
      variant={"ghost"}
      onClick={handleClick}
      {...props}>
      <div className="inline-flex flex-col w-full gap-1">
        <Typography.body as={"span"} className="inline-flex items-center gap-1 font-bold">
          <Box className="h-4 w-4" /> <span>Создать проект</span>
        </Typography.body>
        <Typography.small as={"span"} className="ml-5 font-normal">
          Создает проект в котором все задачи служат достижению одной цели
        </Typography.small>
      </div>
    </Button>
  );
}

export default CreateProjectButton;
