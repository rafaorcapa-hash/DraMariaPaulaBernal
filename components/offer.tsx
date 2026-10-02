"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Gift, Phone } from "lucide-react"
import { CLINIC_INFO } from "@/constants"

export function Offer() {
  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "whatsapp_click", {
        source: "offer_section",
        page_location: window.location.href,
      })
    }
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <Gift className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Oferta Especial</h2>
              <p className="text-xl mb-2">Avaliação Gratuita + Planejamento Digital</p>
            </div>

            <div className="bg-accent/20 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">Vagas limitadas para este mês</span>
              </div>
              <p className="text-sm opacity-90">
                Apenas 20 vagas disponíveis para avaliação gratuita. Garante já a sua e descubra como transformar seu
                sorriso!
              </p>
            </div>

            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" onClick={handleWhatsAppClick} asChild>
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Olá%20Dra.%20${CLINIC_INFO.doctorName},%20quero%20garantir%20minha%20vaga%20para%20avaliação%20gratuita%20de%20facetas!`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 h-5 w-5" />
                Quero garantir minha vaga
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
