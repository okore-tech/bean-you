// layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/ui/MobileNavBar"; // Adjust this path if necessary
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata export for the Next.js app
export const metadata: Metadata = {
  title: "Bean You",
  description: "Gen-z Website",
};

// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navbar should be included here to display on all pages */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
