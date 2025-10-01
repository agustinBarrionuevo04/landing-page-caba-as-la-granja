import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Donde las sierras cordobesas te esperan</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            En Cabañas la Granja, te ofrecemos una experiencia única de hospedaje en La Falda, donde la tranquilidad de
            las sierras se combina con el confort y la calidez de un hogar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/cabaña_v3.jpeg"
              alt="cabaña la granja"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Nuestra historia y compromiso</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hace mas de 20 años que abrimos  nuestras puertas para recibir a quienes buscan desconectarse y 
              disfrutar de la tranquilidad de las sierras. Nuestro complejo es un espacio donde familias, parejas y 
              grupos encuentran el lugar perfecto para compartir momentos únicos, rodeados de naturaleza y  paz.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Contamos con amplios parques y un ambiente ideal para celebraciones, encuentros deportivos y culturales. 
              Ideal para relajarse en buena compañía, ademas junto a la magia de La Falda, cada estadía se transforma en una experiencia 
              única que siempre invita a volver
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">+20</div>
                  <div className="text-sm text-muted-foreground">Años de experiencia</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">+50k</div>
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
