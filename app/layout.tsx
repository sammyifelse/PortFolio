// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Samarjit Thakuria | Full Stack Developer",
  description: "Portfolio of Samarjit Thakuria, a passionate Full Stack Developer and Engineer specializing in React.js, Node.js, and modern web technologies.",
  // THE FIX: Added the icon property for the favicon
  icons: {
    icon: '/favicon.png', // Make sure you have favicon.png in your /public folder
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${roboto.variable} scroll-smooth`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>

        <Script 
          src="https://unpkg.com/shuffle-text@1.0.0/build/shuffle-text.min.js" 
          strategy="lazyOnload" 
        />
      </body>
    </html>
  );
}
