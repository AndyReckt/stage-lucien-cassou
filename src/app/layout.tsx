import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/global.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucien Cassou",
  description: "Site de Lucien Cassou",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        {children}
        </body>
    </html>
  );
}
