import { Outlet } from "@tanstack/react-router";
import { ResizableMenuWrapper } from "../menu";

function Layout() {
  return (
    <main className="flex h-svh overflow-hidden">
      <ResizableMenuWrapper>
        <section>
          <Outlet />
        </section>
      </ResizableMenuWrapper>
    </main>
  );
}

export default Layout;
