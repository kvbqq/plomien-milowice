import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { Nav } from "./navbar/Nav";
import { ContactFooter } from "./contactFooter/ContactFooter";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Płomień Milowice",
  description: "Płomień Milowice",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Nav />
        {children}
        <ContactFooter />
      </body>
    </html>
  );
}
