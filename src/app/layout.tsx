import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Tess & Saundra Keeler | Fantasy Authors",
  description: "Official website of fantasy authors Tess & Saundra Keeler. Explore their magical world through enchanting stories of love, friendship, and self-discovery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={`${playfair.variable} ${lato.variable}`}>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
