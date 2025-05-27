"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useEffect } from "react"

type ThemeProviderProps = {
  children: React.ReactNode;
  [key: string]: any;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  useEffect(() => {
    // Force dark mode on initial load
    document.documentElement.classList.add('dark');
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
