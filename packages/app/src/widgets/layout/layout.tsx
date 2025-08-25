import { Outlet } from "@tanstack/react-router";
import { ResizableMenuWrapper } from "../menu";
import { TitleBar, TitleBarActions } from "../title-bar";

function Layout() {
  return (
    <div className="flex flex-col h-svh overflow-hidden">
      <TitleBar actions={<TitleBarActions />} />
      <main className="flex flex-1 overflow-hidden">
        <ResizableMenuWrapper>
          <section className="flex-1 h-full p-2">
            <Outlet />
          </section>
        </ResizableMenuWrapper>
      </main>
    </div>
  );
}

export default Layout;
