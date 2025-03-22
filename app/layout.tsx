import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Thereza Oliveira | Neuroarquitetura",
  description:
    "Transformando espaços através da neuroarquitetura - criando ambientes que elevam o bem-estar, a produtividade e as emoções através de soluções arquitetônicas baseadas em evidências.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} ${cormorant.variable} font-sans`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
