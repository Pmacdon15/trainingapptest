import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import SiteImage from "@/components/ui/siteImage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Training App",
  description: "A signed store and track training material for Sky 360",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <SiteImage />
        <main className="min-h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
