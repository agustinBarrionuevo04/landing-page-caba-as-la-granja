"use client"

import { Button } from "@/components/ui/button"

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">CG</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Cabañas la Granja</h1>
            <p className="text-sm text-muted-foreground">La Falda, Córdoba</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("nosotros")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Nosotros
          </button>
          <button
            onClick={() => scrollToSection("servicios")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("galeria")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Galería
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contacto
          </button>
        </nav>

        <Button
          onClick={() => scrollToSection("contacto")}
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
        >
          Reservar
        </Button>
      </div>
    </header>
  )
}
