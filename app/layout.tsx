import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin',],
  display: "swap",
})


export const metadata: Metadata = {
  title: "Hamptons Hills - Tombstones and gravestones for sale in nairobi.",
  description: "A modern kitchen products and gravestones and tombstones manufacturer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
      {children}
      </body>
    </html>
  );
}
