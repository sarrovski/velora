import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Standard | Trusted Gaming Tool Rankings",
  description: "Compare gaming tools by features, reviews, tool status, seller trust, and rankings.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
