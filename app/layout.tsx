import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WaFloat from "@/components/WaFloat";  // ← tambahkan ini

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ramudjitu — Herbal Alami Indonesia",
  description: "Racikan ramu pilihan dari bahan herbal terbaik. Dipercaya turun-temurun, kini hadir dalam formula modern yang praktis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@300;400;500&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <WaFloat />  {/* ← tambahkan ini, di luar {children} */}
      </body>
    </html>
  );
}