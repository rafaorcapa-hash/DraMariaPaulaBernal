"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { useEffect, useState } from "react"

export function StickyButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const handleWhatsAppClick = () => {
    // Meta Pixel Lead event
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead")
    }

    // Google Analytics tracking
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "whatsapp_click", {
        source: "sticky_button",
        page_location: window.location.href,
      })
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <Button
        size="lg"
        className="w-full shadow-lg bg-green-600 hover:bg-green-700"
        onClick={handleWhatsAppClick}
        asChild
      >
        <a
          href="https://api.whatsapp.com/send/?phone=5514996795245&text=Ol%C3%A1+Dra.+Maria+Paula+Bernal%2C+quero+agendar+meu+atendimento+humanizado+para+facetas+de+resina%21&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer noopener"
          role="button"
          aria-label="Agendar no WhatsApp com Dra. Maria Paula Bernal"
        >
          <Phone className="mr-2 h-5 w-5" />
          Agendar no WhatsApp
        </a>
      </Button>
    </div>
  )
}
