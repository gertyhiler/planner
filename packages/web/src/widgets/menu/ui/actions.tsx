import { CreateAreaButton } from "entity/area";
import { CreateProjectButton } from "entity/project";
import { OpenSettingButton } from "entity/setting";

import { PlusIcon } from "lucide-react";

import { Button } from "ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "ui/popover";
import { Separator } from "ui/separator";

function Actions() {
  return (
    <div className="flex justify-between min-h-9 border-t border-t-border px-2 py-1">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary" size={"sm"}>
            <PlusIcon className="mr-2 h-4 w-4" /> <span>Новый проект</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-2">
          <CreateProjectButton />
          <Separator className="my-2" />
          <CreateAreaButton />
        </PopoverContent>
      </Popover>
      <OpenSettingButton />
    </div>
  );
}

export default Actions;
