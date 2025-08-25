"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@planner/ui-kit/components/resizable";

import Menu from "./menu";

function ResizableMenuWrapper({
  defaultLayout = [15.7126385362, 84.2873614638],
  children,
}: {
  defaultLayout?: [number, number];
  children: React.ReactNode;
}) {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  return (
    <ResizablePanelGroup direction={"horizontal"} onLayout={onLayout}>
      <ResizablePanel defaultSize={defaultLayout[0]} maxSize={25}>
        <Menu />
      </ResizablePanel>
      <ResizableHandle />

      <ResizablePanel defaultSize={defaultLayout[1]}>{children}</ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default ResizableMenuWrapper;
