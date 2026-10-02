import { Card, CardContent } from "@/components/ui/card"
import { Search, Wrench, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "1",
    title: "Avaliação",
    description: "Consulta completa para avaliar sua saúde bucal e definir o melhor plano de tratamento",
  },
  {
    icon: Wrench,
    number: "2",
    title: "Procedimento",
    description: "Aplicação das facetas de resina com técnica minimamente invasiva",
  },
  {
    icon: CheckCircle,
    number: "3",
    title: "Resultado imediato",
    description: "Seu novo sorriso está pronto! Orientações de cuidado para manter o resultado",
  },
]

export function Process() {
  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Como funciona o procedimento</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um processo simples e eficiente para transformar seu sorriso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="relative">
                    <div className="rounded-full bg-primary p-4">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
