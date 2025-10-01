"use client"

import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <img
                  src="/logo_80x80.png"
                  alt="Logo Cabañas la Granja"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Cabañas la Granja</h3>
                <p className="text-sm opacity-80">La Falda, Córdoba</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Tu refugio perfecto en las sierras cordobesas. Donde la tranquilidad y el confort se encuentran en armonía
              con la naturaleza.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Información de contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 opacity-80" />
                <span className="text-sm">La Falda, Córdoba, Argentina</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 opacity-80" />
                <span className="text-sm">+54 9 3548 526883</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 opacity-80" />
                <span className="text-sm">cabana-lagranja@hotmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <div className="space-y-2">
              <button
                onClick={() => document.getElementById("nosotros")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Sobre nosotros
              </button>
              <button
                onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Servicios
              </button>
              <button
                onClick={() => document.getElementById("galeria")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Galería
              </button>
              <button
                onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Contacto
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">© 2025 Cabañas la Granja. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
