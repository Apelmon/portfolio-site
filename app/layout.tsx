import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const inter = Inter({subsets:['latin'],variable:'--font-inter'});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Create Landing Page",
  description: "Created by Pavlo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="clean" className={cn("font-inter", inter.variable)}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`${inter.variable} antialiased`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a>
        <NavBar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
