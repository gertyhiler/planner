import { cn } from "lib/utils";

import { SettingsIcon } from "lucide-react";

import { Button } from "ui/button";

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
