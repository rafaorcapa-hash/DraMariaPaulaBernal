"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Quanto tempo dura o procedimento de facetas de resina?",
    answer:
      "O procedimento de facetas de resina pode ser realizado em uma única sessão, durando entre 2 a 4 horas, dependendo do número de dentes a serem tratados. É um dos grandes benefícios em relação às facetas de porcelana.",
  },
  {
    question: "Qual a diferença entre facetas de resina e porcelana?",
    answer:
      "As facetas de resina são mais acessíveis, podem ser feitas em uma sessão e são reversíveis. Já as de porcelana exigem preparação sempre e as de resina em casos específicos, mas a prioridade é não desgastar.",
  },
  {
    question: "Em quantas visitas o tratamento é concluído?",
    answer:
      "Na maioria dos casos, o tratamento com facetas de resina é concluído em apenas 2 visitas: uma para avaliação e planejamento, e outra para a aplicação das facetas.",
  },
  {
    question: "Como é o cuidado e manutenção das facetas?",
    answer:
      "O cuidado é simples: escovação regular, uso de fio dental e visitas periódicas ao dentista. Evite morder objetos duros e alimentos muito pigmentados nas primeiras 48 horas. A manutenção é feita a cada 6 meses.",
  },
  {
    question: "É possível parcelar o tratamento?",
    answer:
      "Sim! Oferecemos diversas opções de pagamento e parcelamento para facilitar seu acesso ao tratamento. Consulte nossas condições especiais durante a avaliação.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-muted-foreground">Tire suas dúvidas sobre facetas de resina</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
