import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
})
 
export const metadata: Metadata = {
  title: "Mattias Sikmar's Portfolio",
  description: "Modern & Minmialist Portfolio for Mattias Sikmar",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
