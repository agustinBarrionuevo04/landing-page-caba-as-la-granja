"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

type MediaItem =
  | {
      type: "image"
      src: string
      alt: string
    }
  | {
      type: "video"
      src: string
      alt: string
      thumbnail: string
    }

export function GallerySection() {
  const mediaItems: MediaItem[] = [
     {
      type: "video",
      src: "https://www.youtube.com/embed/ahLPonA5rww?start=61",
      thumbnail: "https://img.youtube.com/vi/ahLPonA5rww/hqdefault.jpg",
      alt: "Recorrido en video por Cabañas la Granja",
    },
    {
      type: "image",
      src: "/patio_v1.jpeg",
      alt: "Vista exterior de cabaña",
    },
    {
      type: "image",
      src: "/sala_de_juegos.jpeg",
      alt: "Sala de estar con chimenea",
    },
    {
      type: "image",
      src: "/cochera+asador.jpeg",
      alt: "Cocina equipada",
    },
    {
      type: "image",
      src: "/interior_v1.jpeg",
      alt: "Dormitorio confortable",
    },
    {
      type: "image",
      src: "/interior_v2.jpeg",
      alt: "Deck exterior con vista a las sierras",
    },
    {
      type: "image",
      src: "/patio_v2.jpeg",
      alt: "Entorno natural",
    },
    {
      type: "image",
      src: "/pileta_v4.jpeg",
      alt: "Entorno natural",
    },
    {
      type: "image",
      src: "/plaza_v1.jpeg",
      alt: "Entorno natural",
    },
    {
      type: "image",
      src: "/cochera_v1.jpeg",
      alt: "Entorno natural",
    },
    {
      type: "image",
      src: "/pileta_v6.jpeg",
      alt: "Entorno natural",
    },
    {
      type: "image",
      src: "/cabaña_v6.jpeg",
      alt: "Entorno natural",
    },
    {
      type: "image",
      src: "/cabaña_v5.jpeg",
      alt: "Entorno natural",
    },
    {
      type: "image",
      src: "/cabaña_v7.jpeg",
      alt: "Entorno natural",
    },
    {
      type: "image",
      src: "/cabaña_v8.jpeg",
      alt: "Entorno natural",
    },
    {
      type: "image",
      src: "/canchas.jpeg",
      alt: "Entorno natural",
    },
    {
      type: "image",
      src: "/pileta_v7.jpeg",
      alt: "Entorno natural",
    },
    {
      type: "image",
      src: "/patio_v3.jpeg",
      alt: "Entorno natural",
    },
    {
      type: "image",
      src: "/cabaña_v9.jpeg",
      alt: "Entorno natural",
    },
  ]

  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)

  const nextImage = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length)
  }

  const prevImage = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)
  }

  return (
    <section id="galeria" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Galería</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Descubre la belleza de nuestras cabañas y el entorno natural que las rodea.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Media */}
          <div className="relative mb-8">
            {mediaItems[currentMediaIndex].type === "image" ? (
              <img
                src={mediaItems[currentMediaIndex].src || "/placeholder.svg"}
                alt={mediaItems[currentMediaIndex].alt}
                className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-lg"
              />
            ) : (
              <div className="w-full h-96 md:h-[500px] rounded-lg shadow-lg overflow-hidden bg-black">
                <iframe
                  src={mediaItems[currentMediaIndex].src}
                  title={mediaItems[currentMediaIndex].alt}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            )}

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
            {mediaItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrentMediaIndex(index)}
                className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                  currentMediaIndex === index
                    ? "ring-2 ring-primary scale-105"
                    : "hover:scale-105 opacity-70 hover:opacity-100"
                }`}
              >
                {item.type === "image" ? (
                  <img src={item.src || "/placeholder.svg"} alt={item.alt} className="w-full h-20 object-cover" />
                ) : (
                  <img
                    src={item.thumbnail}
                    alt={item.alt}
                    className="w-full h-20 object-cover"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
