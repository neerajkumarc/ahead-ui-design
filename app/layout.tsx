import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const EuclidB = localFont({ src: '../public/fonts/EuclidBLight.ttf'})

export const metadata: Metadata = {
  title: "Ahead app",
  description: "UI of Ahead app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={EuclidB.className}>
        <SiteHeader/>
        {children}
        <SiteFooter/>
        </body>
    </html>
  );
}
