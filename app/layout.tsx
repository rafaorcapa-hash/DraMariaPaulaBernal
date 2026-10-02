import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import Script from "next/script"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Facetas de Resina em Natal | Dra. Maria Paula Bernal",
  description:
    "Transforme seu sorriso com facetas de resina. Procedimento rápido, minimamente invasivo e resultados imediatos. Agenda uma avaliação com Dra. Maria Paula Bernal.",
  keywords: "facetas de resina, dentista, Natal, sorriso, estética dental",
  openGraph: {
    title: "Facetas de Resina em Natal | Dra. Maria Paula Bernal",
    description:
      "Transforme seu sorriso com facetas de resina. Procedimento rápido, minimamente invasivo e resultados imediatos.",
    type: "website",
    locale: "pt_BR",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1757279174903777');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-X3A5U43ExcsV8chcad4PoRhG1SALvZ.png"
            alt=""
          />
        </noscript>

        <Script src={`https://www.googletagmanager.com/gtag/js?id={{GA_MEASUREMENT_ID}}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '{{GA_MEASUREMENT_ID}}');
          `}
        </Script>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "Dra. Maria Paula Bernal",
              name: "Dra. Maria Paula Bernal",
              description: "Clínica odontológica especializada em facetas de resina",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Rui Barbosa, 1868",
                addressLocality: "Natal",
                addressRegion: "RN",
                addressCountry: "BR",
              },
              telephone: "5514996795245",
              url: "https://dra-maria-paula-bernal.com.br",
              priceRange: "$$",
              openingHours: "Mo-Fr 08:00-18:00",
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
