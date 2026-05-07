import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Velora | Trusted Gaming Tool Rankings",
  description: "Discover, compare, rank, and promote trusted gaming tools.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
