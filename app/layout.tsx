import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HyIsNoob | Portfolio",
  description: "Computer Science Student, Content Creator, Video Editor & Developer. Specializing in Electron apps, web development, and creative content.",
  keywords: ["HyIsNoob", "Portfolio", "Web Developer", "Video Editor", "Content Creator", "Computer Science", "UIT"],
  authors: [{ name: "Nguyễn Khang Hy", url: "https://github.com/HyIsNoob" }],
  openGraph: {
    title: "HyIsNoob | Portfolio",
    description: "Computer Science Student, Content Creator, Video Editor & Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
