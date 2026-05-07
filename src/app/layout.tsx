import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Standard | Real Gaming Tool References",
  description:
    "A trusted discovery layer for gaming tool references, seller claims, payment methods, and marketplace trust.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
