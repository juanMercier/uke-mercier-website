import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Wrapper from "./Wrapper";
import { Analytics } from "@vercel/analytics/react"

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

export const metadata: Metadata = {
  title: "UkeMercier - Aulas de Ukulele Lisboa",
  description: "UkeMercier - Aulas de Ukulele Lisboa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Wrapper>
        {children}
        </Wrapper>
        <Analytics />
      </body>
    </html>
  );
}
