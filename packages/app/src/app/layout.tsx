import { RouterProvider } from "@tanstack/react-router";
import { router } from "@/app/router";
import { ThemeProvider as NextThemeProvider } from "next-themes";

const Layout = () => {
  return (
    <NextThemeProvider
      themes={["light", "dark"]}
      defaultTheme="system"
      attribute="class"
      storageKey="theme"
      enableSystem
    >
      <RouterProvider router={router} />
    </NextThemeProvider>
  );
};

export default Layout;
