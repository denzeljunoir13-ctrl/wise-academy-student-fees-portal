import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Wise Academy | Student Fees Portal 2027", description: "Secure parent and school administration portal for Wise Academy." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
