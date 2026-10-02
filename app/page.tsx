import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { SocialProof } from "@/components/social-proof"
import { About } from "@/components/about"
import { Process } from "@/components/process"
import { ContactForm } from "@/components/contact-form"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { StickyButton } from "@/components/sticky-button"
import Script from "next/script"

export default function Home() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Quanto tempo dura o procedimento de facetas de resina?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "O procedimento de facetas de resina pode ser realizado em uma única sessão, durando entre 2 a 4 horas, dependendo do número de dentes a serem tratados.",
                },
              },
              {
                "@type": "Question",
                name: "Qual a diferença entre facetas de resina e porcelana?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "As facetas de resina são mais acessíveis, podem ser feitas em uma sessão e são reversíveis. Já as de porcelana exigem desgaste sempre e as de resina em casos específicos.",
                },
              },
              {
                "@type": "Question",
                name: "Como é o cuidado e manutenção das facetas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "O cuidado é simples: escovação regular, uso de fio dental e visitas periódicas ao dentista. Evite morder objetos duros e alimentos muito pigmentados nas primeiras 48 horas. A manutenção é feita a cada 6 meses.",
                },
              },
            ],
          }),
        }}
      />

      <main className="min-h-screen">
        <Hero />
        <Benefits />
        <SocialProof />
        <About />
        <Process />
        <ContactForm />
        <FAQ />
        <Footer />
        <StickyButton />
      </main>
    </>
  )
}
