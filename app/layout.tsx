import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Save Together",
  description: "Helps you save money together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased overscroll-none",
          fontSans.variable
        )}
      >
        <div className="flex bg-lime-200 ">
          <div className="mx-auto h-screen lg:w-1/4 md:w-1/2 w-full bg-lime-50">
            {children}
            <Toaster />
          </div>
        </div>
      </body>
    </html>
  );
}
