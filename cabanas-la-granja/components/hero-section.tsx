"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/placeholder-yxjlk.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Descubre la serenidad en
          <span className="text-secondary block mt-2">Cabañas la Granja</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
          Ubicadas en el corazón de La Falda, Córdoba, nuestras cabañas te ofrecen el refugio perfecto para reconectar
          con la naturaleza y encontrar la paz que buscas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3"
          >
            Reserva Ahora
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.getElementById("nosotros")?.scrollIntoView({ behavior: "smooth" })}
            className="border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-3"
          >
            Conoce Más
          </Button>
        </div>
      </div>
    </section>
  )
}
