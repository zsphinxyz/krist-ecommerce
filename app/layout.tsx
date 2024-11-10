import type { Metadata } from "next";
import {Gantari} from 'next/font/google'
import "./globals.css";
import Nav from "@/components/Nav";


const gantari = Gantari({weight: ['100', '200', '400', '500', '700', '900'], subsets: ['latin'], variable: '--gantari'})

export const metadata: Metadata = {
  title: "Krist",
  description: "Krist Online Shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gantari.variable} max-w-screen-2xl container mx-auto antialiased`}
      >
        <Nav />
        <main className="mt-14">
          {children}
        </main>
      </body>
    </html>
  );
}
