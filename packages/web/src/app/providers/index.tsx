"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

import React from "react";

import { Toaster } from "shared/ui/sonner";

const queryClient = new QueryClient();

function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
function Providers({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange>
      <ReactQueryProvider>
        <SessionProvider refetchInterval={4 * 60}>{children}</SessionProvider>
        <Toaster className="[&>li]:bg-transparent" />
        <ReactQueryDevtools initialIsOpen={false} />
      </ReactQueryProvider>
    </ThemeProvider>
  );
}

export default Providers;
