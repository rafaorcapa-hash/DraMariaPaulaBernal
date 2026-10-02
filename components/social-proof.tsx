import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria S.",
    text: "Procedimento rápido e resultado incrível! Meu sorriso ficou perfeito.",
    rating: 5,
  },
  {
    name: "João P.",
    text: "Profissional excelente, me senti muito seguro durante todo o processo.",
    rating: 5,
  },
  {
    name: "Ana C.",
    text: "Superou minhas expectativas! Recomendo para todos que querem um sorriso novo.",
    rating: 5,
  },
]

export function SocialProof() {
  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">O que nossos pacientes dizem</h2>
          <p className="text-lg text-muted-foreground">Depoimentos reais de quem transformou o sorriso conosco</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Before and After Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">Antes e Depois</h3>
          <div className="max-w-2xl mx-auto mb-6">
            <img
              src="/paciente-modelo-antes-depois.jpg"
              alt="Transformação do sorriso - Paciente real"
              className="rounded-lg shadow-md w-full"
              loading="lazy"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-4 italic">
            *Imagens meramente ilustrativas, resultados variam por paciente
          </p>
        </div>
      </div>
    </section>
  )
}
