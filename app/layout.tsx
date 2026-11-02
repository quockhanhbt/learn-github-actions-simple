import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learn GitHub Actions",
  description: "A simple static guideline for getting started with GitHub Actions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
