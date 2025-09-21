import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wifi, Car, Utensils, Flame, Dog, Mountain, WavesLadder, Dices, Trees, Martini, Beef, Volleyball, FerrisWheel, Armchair} from "lucide-react"

export function AmenitiesSection() {
  const amenities = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Cocina Completamente Equipada",
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Wi-Fi",
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Calefacción",
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Estacionamiento individual",
    },
    {
      icon: <Dices className="w-8 h-8" />,
      title: "Salon de Juegos",
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: "Vista a las Sierras",
    },
    {
      icon: <WavesLadder className="w-8 h-8" />,
      title: "Piletas",
    },
    {
      icon: <Dog className="w-8 h-8" />,
      title: "Pet Friendly",
    },
    {
      icon: <FerrisWheel className="w-8 h-8" />,
      title: "Plaza para los niños",
    },
    {
      icon: <Trees className="w-8 h-8" />,
      title: "10.000 mts de parque completamente cercado",
    },
    {
      icon: <Beef className="w-8 h-8" />,
      title: "Parrilas individuales",
    },
    {
      icon: <Volleyball className="w-8 h-8" />,
      title: "Canchas",
    },
    {
      icon: <Armchair className="w-8 h-8" />,
      title: "Solarium",
    },
    {
      icon: <Martini className="w-8 h-8" />,
      title: "Bar-proveeduría",
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Comodidades y servicios</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Disfruta de todas las comodidades que necesitas para una estadía perfecta, sin renunciar al contacto con la
            naturaleza.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full text-primary w-fit">{amenity.icon}</div>
                <CardTitle className="text-xl">{amenity.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">{amenity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
