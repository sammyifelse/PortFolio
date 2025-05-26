import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${roboto.variable} scroll-smooth`}>
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}