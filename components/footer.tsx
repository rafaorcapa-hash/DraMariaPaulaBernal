import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone, Star } from "lucide-react"
import { NOME_DA_CLÍNICA, WHATSAPP_NUMERO } from "@/constants"

export function Footer() {
  return (
    <footer className="py-16 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Localização
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>{NOME_DA_CLÍNICA}</p>
                <p>Av. Rui Barbosa, 1868 - Lagoa Nova, Natal - RN</p>
                <p>59075-050</p>
                <a
                  href={`https://maps.google.com/?q=${NOME_DA_CLÍNICA}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-block mt-2"
                >
                  Ver no Google Maps
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Hours */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Horários
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Contato
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>WhatsApp: {WHATSAPP_NUMERO}</p>
                <p>Email: contato@clinica.com.br</p>
                <div className="flex items-center gap-1 mt-3">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs ml-1">5.0 (200+ avaliações)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-sm">
              <a href="/termos" className="text-muted-foreground hover:text-primary">
                Termos de Uso
              </a>
              <a href="/politica-privacidade" className="text-muted-foreground hover:text-primary">
                Política de Privacidade
              </a>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 {NOME_DA_CLÍNICA}. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
