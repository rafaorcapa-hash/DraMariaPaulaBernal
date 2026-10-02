"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Clock, Shield, Star } from "lucide-react"

export function ContactForm() {
  const handleWhatsAppClick = () => {
    // Meta Pixel Lead event
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead")
    }

    // Google Analytics tracking
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "whatsapp_click", {
        source: "contact_section",
        page_location: window.location.href,
      })
    }
  }

  return (
    <section id="contact-form" className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto max-w-2xl">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-balance">Pronta para transformar seu sorriso?</CardTitle>
            <p className="text-lg text-muted-foreground text-pretty">
              Converse diretamente com a Dra. Maria Paula Bernal pelo WhatsApp e agenda uma avaliação
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="text-center space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex flex-col items-center gap-2 p-4 bg-primary/5 rounded-lg">
                  <Clock className="h-8 w-8 text-primary" />
                  <span className="text-sm font-medium">Resposta rápida</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-primary/5 rounded-lg">
                  <Shield className="h-8 w-8 text-primary" />
                  <span className="text-sm font-medium">Atendimento personalizado</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-primary/5 rounded-lg">
                  <Star className="h-8 w-8 text-primary" />
                  <span className="text-sm font-medium">Agenda uma avaliação</span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full text-lg py-6 bg-green-600 hover:bg-green-700"
                onClick={handleWhatsAppClick}
                asChild
              >
                <a
                  href="https://api.whatsapp.com/send/?phone=5514996795245&text=Ol%C3%A1+Dra.+Maria+Paula+Bernal%2C+quero+agendar+minha+avalia%C3%A7%C3%A3o+para+facetas+de+resina%21&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Conversar no WhatsApp com Dra. Maria Paula Bernal"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Conversar no WhatsApp agora
                </a>
              </Button>

              <p className="text-sm text-muted-foreground">
                Clique no botão acima e seja direcionada diretamente para o WhatsApp da Dra. Maria Paula Bernal
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
