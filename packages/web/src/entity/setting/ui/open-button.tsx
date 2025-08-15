import { Button } from "@planner/ui-kit/components/button";
import { cn } from "@planner/ui-kit/utils";

import { SettingsIcon } from "lucide-react";

function OpenSettingButton({
  className,
  onClick,
  ...props
}: React.ComponentPropsWithoutRef<typeof Button>) {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event);
  };
  return (
    <Button
      className={cn("h-8 w-8", className)}
      onClick={handleClick}
      variant={"secondary"}
      size={"icon"}
      {...props}>
      <SettingsIcon className="h-4 w-4" />
    </Button>
  );
}

export default OpenSettingButton;
