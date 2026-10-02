import { Card, CardContent } from "@/components/ui/card"
import { Smile, Clock, DollarSign, Palette } from "lucide-react"

const benefits = [
  {
    icon: Smile,
    title: "Melhora da estética e autoestima",
    description: "Transforme seu sorriso e recupere a confiança para sorrir sem receios",
  },
  {
    icon: Clock,
    title: "Procedimento rápido e minimamente invasivo",
    description: "Resultados incríveis em poucas horas, com técnica minimamente invasiva",
  },
  {
    icon: DollarSign,
    title: "Durabilidade e ótimo custo-benefício",
    description: "Investimento acessível com resultados duradouros e de alta qualidade",
  },
  {
    icon: Palette,
    title: "Personalização completa",
    description: "Cor e formato personalizados para harmonia perfeita com seu rosto",
  },
]

export function Benefits() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Por que escolher facetas de resina?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra os benefícios que fazem das facetas de resina a escolha ideal para transformar seu sorriso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
