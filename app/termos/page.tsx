import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WHATSAPP_NUMERO } from "@/constants"

export const metadata = {
  title: "Termos de Uso | Dra. Maria Paula Bernal",
  description: "Termos de uso do site da Dra. Maria Paula Bernal",
}

export default function Terms() {
  return (
    <div className="container mx-auto max-w-4xl py-16 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Termos de Uso</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          <p className="text-muted-foreground mb-6">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

          <h3 className="text-lg font-semibold mb-3">1. Aceitação dos Termos</h3>
          <p className="mb-4">
            Ao acessar e usar este site, você aceita e concorda em ficar vinculado aos termos e condições deste acordo.
          </p>

          <h3 className="text-lg font-semibold mb-3">2. Uso do Site</h3>
          <p className="mb-4">
            Este site destina-se a fornecer informações sobre nossos serviços odontológicos e facilitar o agendamento de
            consultas.
          </p>

          <h3 className="text-lg font-semibold mb-3">3. Informações Médicas</h3>
          <p className="mb-4">
            As informações contidas neste site são apenas para fins informativos e não substituem o aconselhamento
            médico profissional.
          </p>

          <h3 className="text-lg font-semibold mb-3">4. Propriedade Intelectual</h3>
          <p className="mb-4">
            Todo o conteúdo deste site, incluindo textos, imagens e design, é propriedade da Dra. Maria Paula Bernal e
            está protegido por direitos autorais.
          </p>

          <h3 className="text-lg font-semibold mb-3">5. Contato</h3>
          <p>
            Para dúvidas sobre estes termos, entre em contato:
            <br />
            WhatsApp: {WHATSAPP_NUMERO}
            <br />
            E-mail: contato@clinica.com.br
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
