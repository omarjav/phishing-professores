import type { Metadata } from "next";
import { Open_Sans, Nunito } from "next/font/google";

import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Confraternização UNIPAM 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR">
      <body
        className={`${openSans.variable} ${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
