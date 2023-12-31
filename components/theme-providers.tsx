// app/providers.jsx

"use client";

// import { ThemeProvider } from "next-themes";

// export function Providers({ children }) {
//   return <ThemeProvider>{children}</ThemeProvider>;
// }

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
