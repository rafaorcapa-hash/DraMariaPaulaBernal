import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WHATSAPP_NUMERO } from "@/constants" // Declare the variable before using it

export const metadata = {
  title: "Política de Privacidade | Dra. Maria Paula Bernal",
  description: "Política de privacidade e proteção de dados da Dra. Maria Paula Bernal",
}

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto max-w-4xl py-16 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Política de Privacidade</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          <p className="text-muted-foreground mb-6">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

          <h3 className="text-lg font-semibold mb-3">1. Coleta de Informações</h3>
          <p className="mb-4">
            Coletamos informações que você nos fornece diretamente, como nome, telefone e e-mail quando você preenche
            nossos formulários de contato ou agenda consultas.
          </p>

          <h3 className="text-lg font-semibold mb-3">2. Uso das Informações</h3>
          <p className="mb-4">Utilizamos suas informações para:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Entrar em contato para agendamento de consultas</li>
            <li>Enviar informações sobre nossos serviços</li>
            <li>Melhorar nossos serviços e atendimento</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3">3. Compartilhamento de Informações</h3>
          <p className="mb-4">
            Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário
            para prestação de nossos serviços ou quando exigido por lei.
          </p>

          <h3 className="text-lg font-semibold mb-3">4. Seus Direitos</h3>
          <p className="mb-4">
            Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Para exercer esses direitos,
            entre em contato conosco através do WhatsApp {WHATSAPP_NUMERO}.
          </p>

          <h3 className="text-lg font-semibold mb-3">5. Contato</h3>
          <p>
            Para dúvidas sobre esta política, entre em contato:
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
