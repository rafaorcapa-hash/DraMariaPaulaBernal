"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCheckIcon, CheckCircleIcon } from "lucide-react"

export function Hero() {
  const handleWhatsAppClick = () => {
    // Meta Pixel Lead event
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead")
    }

    // Google Analytics tracking
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "whatsapp_click", {
        source: "hero_section",
        page_location: window.location.href,
      })
    }
  }

  return (
    <section className="relative bg-gradient-to-b from-background to-muted py-12 px-4 sm:py-20">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Content and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8">
          {/* Hero Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Transforme seu sorriso em{" "}
              <span className="text-accent-foreground bg-accent px-2 py-1 rounded">poucas horas</span> com facetas de
              resina
            </h1>

            <p className="text-pretty text-lg text-muted-foreground sm:text-xl">
              Recupere sua confiança, melhore sua estética e eleve sua autoestima com um procedimento rápido e seguro.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-6" onClick={handleWhatsAppClick} asChild>
                <a
                  href="https://api.whatsapp.com/send/?phone=5514996795245&text=Ol%C3%A1+Dra.+Maria+Paula+Bernal%2C+quero+agendar+minha+avalia%C3%A7%C3%A3o+para+facetas+de+resina%21&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Agendar avaliação via WhatsApp com Dra. Maria Paula Bernal"
                >
                  <CheckCheckIcon className="mr-2 h-5 w-5" />
                  Agenda uma avaliação
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-last lg:order-last">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ANTES-E-DEPOIS-LP-Cx6OOup40I800dWXpvwi3ieKx1GmoK.png"
              alt="Transformação do sorriso com facetas de resina - Antes e Depois"
              className="w-full rounded-lg shadow-lg"
              loading="eager"
            />
          </div>
        </div>

        {/* Trust Bar */}
        <Card className="mx-auto max-w-4xl p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
              <CheckCircleIcon className="h-5 w-5 text-primary" />
              Pagamento facilitado
            </div>
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
              <CheckCircleIcon className="h-5 w-5 text-primary" />
              Procedimento minimamente invasivo
            </div>
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
              <CheckCircleIcon className="h-5 w-5 text-primary" />
              Resultados imediatos
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
