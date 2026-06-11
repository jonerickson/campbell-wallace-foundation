import { ThemeProvider } from "@/components/theme-provider";

import type React from "react";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://thecwf.org"),
  title: {
    default: "Campbell-Wallace Foundation",
    template: "%s | Campbell-Wallace Foundation",
  },
  description:
    "The Campbell-Wallace Foundation is a 501(c)(3) non-profit established in 1997, improving lives through education, community support, and charitable initiatives.",
  keywords: [
    "Campbell-Wallace Foundation",
    "501(c)(3)",
    "non-profit",
    "charity",
    "Oregon",
    "philanthropy",
    "grants",
  ],
  openGraph: {
    title: "Campbell-Wallace Foundation",
    description:
      "A 501(c)(3) non-profit improving lives through education, community support, and charitable initiatives.",
    url: "https://thecwf.org",
    siteName: "Campbell-Wallace Foundation",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campbell-Wallace Foundation",
    description:
      "A 501(c)(3) non-profit improving lives through education, community support, and charitable initiatives.",
  },
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
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
