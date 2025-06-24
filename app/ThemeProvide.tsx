"use client";

import { ThemeProvider } from "next-themes";

interface ProviderProps {
 children: React.ReactNode;
}

export default function ProviderTheme({ children }: ProviderProps) {
 return <ThemeProvider attribute='class'>{children}</ThemeProvider>;
}