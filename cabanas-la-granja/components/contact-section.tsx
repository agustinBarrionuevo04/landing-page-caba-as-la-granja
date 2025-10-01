"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    //email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create WhatsApp message
    const message = `Hola! Me interesa hacer una reserva en Cabañas la Granja.
    
Nombre: ${formData.name}
Consulta: ${formData.message}`

    const whatsappUrl = `https://wa.me/5493548526883?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Contacto y reservas</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            ¿Listo para vivir una experiencia única? Contáctanos para hacer tu reserva o resolver cualquier consulta que
            tengas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Envíanos tu consulta</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                {/* <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Tu email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div> */}
                <div>
                  <Textarea
                    name="message"
                    placeholder="Cuéntanos sobre tu estadía ideal: fechas, cantidad de personas, necesidades especiales..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-32"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Enviar consulta por WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Ubicación</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      La Falda, Córdoba, Argentina
                      <br />
                      En el corazón de las sierras cordobesas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Teléfono</h3>
                    <p className="text-muted-foreground">+54 9 3548 526883</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-muted-foreground">cabana-lagranja@hotmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Horarios de atención</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Lunes a Domingo: 8:00 - 22:00
                      <br />
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
