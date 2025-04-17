import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
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

const shouldLoadTracking =
  process.env.VERCEL_ENV === "preview" ||
  process.env.VERCEL_ENV === "production";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      {shouldLoadTracking && (
        <>
          <Script id="clarity-script" strategy="afterInteractive">
            {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
          `}
          </Script>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
          `,
            }}
          />
        </>
      )}

      <body
        className={`${montserrat.variable} ${cormorant.variable} font-sans`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
