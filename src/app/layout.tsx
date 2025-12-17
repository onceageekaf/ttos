import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Inter Display is not available as a separate font in next/font/google
// Using Inter with display variant as fallback
const interDisplay = Inter({
  variable: "--font-inter-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ttOS",
  description: "tech transfer operating system, ttOS, helps translate your research faster and automates the manual work of tech transfer",
  keywords: ["tech transfer", "operating system", "ttOS", "research", "translation", "automation", "manual work", "tech transfer operating system", "tech transfer automation", "tech transfer translation", "tech transfer manual work"],
  authors: [{ name: "ttOS", url: "https://ttos.ai" }],
  creator: "ttOS",
  publisher: "ttOS",
  openGraph: {
    title: "ttOS",
    description: "tech transfer operating system, ttOS, helps translate your research faster and automates the manual work of tech transfer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${interDisplay.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
