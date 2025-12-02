
export function LocationSection() {
  return (
    <section id="ubicacion" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Nuestra Ubicación</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Encuéntranos en La Falda, Córdoba. Av Ferrarini al 1100.
          </p>
        </div>

        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.329911659574!2d-64.4724555!3d-31.1005613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d825a05fd37ad%3A0x9407684a1ea4063f!2sCaba%C3%B1as%20La%20Granja!5e0!3m2!1ses!2sar!4v1764698715617!5m2!1ses!2sar"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-96"
          />
        </div>
      </div>
    </section>
  )
}