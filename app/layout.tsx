import { ThemeProvider } from "@/components/theme-provider";

import type React from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Update the metadata
export const metadata: Metadata = {
  title: "Campbell Wallace Foundation",
  description:
    "Improving lives through education, community support, and charitable initiatives.",
  generator: "v0.dev",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#B76766",
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
