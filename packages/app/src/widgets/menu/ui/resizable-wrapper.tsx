import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@planner/ui-kit/components/resizable";

import Menu from "./menu";

interface ResizableMenuWrapperProps {
  defaultLayout?: [number, number];
  children: React.ReactNode;
}

function ResizableMenuWrapper({
  defaultLayout = [15.7126385362, 84.2873614638],
  children,
}: ResizableMenuWrapperProps) {
  return (
    <ResizablePanelGroup direction={"horizontal"}>
      <ResizablePanel defaultSize={defaultLayout[0]} maxSize={25}>
        <Menu />
      </ResizablePanel>
      <ResizableHandle className="bg-primary/90 shadow-accent shadow-md w-[2px]" />

      <ResizablePanel defaultSize={defaultLayout[1]}>{children}</ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default ResizableMenuWrapper;
