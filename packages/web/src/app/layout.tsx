import type { Metadata } from "next";
import { cookies } from "next/headers";

import { ResizableMenuWrapper } from "widgets/menu";

import { ibm_font } from "app/fonts/fonts";

import "./globals.css";
import Providers from "./providers";
import Secure from "./providers/secure";

export const metadata: Metadata = {
  title: "Think 4.0",
  description: "A new way to think",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookiesCollection = await cookies();
  const layout = cookiesCollection.get("react-resizable-panels:layout")?.value;
  const layoutSizes = layout ? JSON.parse(layout) : undefined;
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${ibm_font.variable} ${ibm_font.variable} antialiased`}>
        <Providers>
          <Secure>
            <main className="flex h-svh overflow-hidden">
              <ResizableMenuWrapper defaultLayout={layoutSizes}>
                <section>{children}</section>
              </ResizableMenuWrapper>
            </main>
          </Secure>
        </Providers>
      </body>
    </html>
  );
}
