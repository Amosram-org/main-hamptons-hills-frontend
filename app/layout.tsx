import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin',],
  display: "swap",
})


export const metadata: Metadata = {
  title: "Hamptons Hills | Premium Tombstones & Gravestones in Nairobi",
  description:
    "Hamptons Hills is a trusted manufacturer and supplier of high-quality tombstones and gravestones in Nairobi, offering custom memorial designs crafted with care and durability.",
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
