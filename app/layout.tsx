import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "SeFoCHa",
  description:
    "Community Based NGO.",
  openGraph: {
    images: [
      {
        url: "https://res.cloudinary.com/dvuazircp/image/upload/v1716459487/dekut-hack2_lkunrk.webp",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950">{children}</body>
    </html>
  );
}
