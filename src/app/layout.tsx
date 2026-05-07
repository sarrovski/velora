import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Standard | Trusted Gaming Tool Rankings", description: "Find the best gaming tools and the safest way to buy them." };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
