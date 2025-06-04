import type { Metadata } from "next";
import { Roboto, Lobster } from "next/font/google";

import "./globals.css";

const robotoSans = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const lobsterSans = Lobster({
  variable: "--font-lobster",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Você foi convocado!",
  description: "Você foi convocado pelo UNIPAM/FEPAM para participar de uma auditoria. Sua presença é indispensável.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSans.variable} ${lobsterSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
