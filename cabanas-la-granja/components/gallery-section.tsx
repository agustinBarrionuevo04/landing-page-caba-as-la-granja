"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function GallerySection() {
  const images = [
    {
      src: "/placeholder-wh16b.png",
      alt: "Vista exterior de cabaña",
    },
    {
      src: "/placeholder-yy121.png",
      alt: "Sala de estar con chimenea",
    },
    {
      src: "/placeholder-g14bd.png",
      alt: "Cocina equipada",
    },
    {
      src: "/placeholder-kpige.png",
      alt: "Dormitorio confortable",
    },
    {
      src: "/placeholder-bgnav.png",
      alt: "Deck exterior con vista a las sierras",
    },
    {
      src: "/placeholder-mlumn.png",
      alt: "Entorno natural",
    },
  ]

  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id="galeria" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Galería de imágenes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Descubre la belleza de nuestras cabañas y el entorno natural que las rodea.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Image */}
          <div className="relative mb-8">
            <img
              src={images[currentImage].src || "/placeholder.svg"}
              alt={images[currentImage].alt}
              className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-lg"
            />

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                  currentImage === index
                    ? "ring-2 ring-primary scale-105"
                    : "hover:scale-105 opacity-70 hover:opacity-100"
                }`}
              >
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-20 object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
