"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Instagram } from "lucide-react"

export function FloatingButtons() {
  const openWhatsApp = () => {
    const message = "Hola! Me interesa conocer más sobre las cabañas y hacer una reserva."
    const whatsappUrl = `https://wa.me/5493548526883?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const openInstagram = () => {
    window.open("https://www.instagram.com/cabanas_lagranja/", "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <Button
        onClick={openWhatsApp}
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      <Button
        onClick={openInstagram}
        size="lg"
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title="Seguinos en Instagram"
      >
        <Instagram className="w-6 h-6" />
      </Button>
    </div>
  )
}
