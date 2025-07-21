import { ThemeProvider } from "@/components/theme-provider";

import type React from "react";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Campbell Wallace Foundation",
  description:
    "Improving lives through education, community support, and charitable initiatives.",
};

export const viewport: Viewport = {
  themeColor: "#9F3433",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
        ></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
