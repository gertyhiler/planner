import { Outlet } from "@tanstack/react-router";
import { ResizableMenuWrapper } from "../menu";
import { TitleBar, TitleBarActions } from "../title-bar";

function Layout() {
  return (
    <div className="flex flex-col h-svh overflow-hidden relative">
      <TitleBar actions={<TitleBarActions />} />
      <main className="flex flex-1 overflow-hidden">
        <ResizableMenuWrapper>
          <section className="flex-1 h-full p-2 pt-10">
            <Outlet />
          </section>
        </ResizableMenuWrapper>
      </main>
    </div>
  );
}

export default Layout;
