"use client";
import { ReactNode } from 'react';
import { usePathname } from "next/navigation";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import './globals.css';

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  const pathname = usePathname();
  const isRootPage = pathname == "/";
  return (
    <html lang="en">
      <body>
        {isRootPage && 
          <Hero />
        }
        <Header />
        {children}
      </body>
    </html>
  );
}
