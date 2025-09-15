import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Un refugio en las sierras cordobesas</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            En Cabañas la Granja, te ofrecemos una experiencia única de hospedaje en La Falda, donde la tranquilidad de
            las sierras se combina con el confort y la calidez de un hogar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/placeholder-4p6y5.png"
              alt="Interior acogedor de cabaña"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Nuestra historia y compromiso</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desde hace más de una década, hemos sido el hogar temporal de familias, parejas y viajeros que buscan
              desconectar del ritmo acelerado de la ciudad. Nuestras cabañas están diseñadas para brindar privacidad,
              comodidad y una conexión auténtica con el entorno natural de La Falda.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cada cabaña cuenta con todas las comodidades necesarias para una estadía perfecta: cocina completamente
              equipada, calefacción, Wi-Fi, y espacios amplios tanto interiores como exteriores para disfrutar del aire
              puro de las sierras.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Años de experiencia</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Huéspedes satisfechos</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
