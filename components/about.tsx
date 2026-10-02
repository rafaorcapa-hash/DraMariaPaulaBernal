import { Award, Shield } from "lucide-react"

export function About() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Doctor Photo Section */}
        <div className="text-center mb-12">
          <div className="mb-8">
            <img
              src="/foto-dra-maria-paula-bernal.jpg"
              alt="Dra. Maria Paula Bernal"
              className="mx-auto w-48 h-48 rounded-full object-cover shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Dra. Maria Paula Bernal</h2>
            <p className="text-lg text-muted-foreground">
              Cirurgiã Dentista em Natal RN com foco em Facetas em resina e Harmonização facial.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
                
                +1000 sorrisos transformados
              </div>
              <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
                <Shield className="h-5 w-5 text-primary" />
                CRO RN: 07845   
              </div>
              <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
                
                Materiais premium
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
              
              Garantia de qualidade
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
