import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { GallerySection } from "@/components/gallery-section"

const VIDEO_ALT = "Recorrido en video por Cabañas la Granja"

describe("GallerySection", () => {
  it("muestra una imagen por defecto", () => {
    render(<GallerySection />)

    const firstImages = screen.getAllByAltText("Vista exterior de cabaña")
    expect(firstImages.length).toBeGreaterThan(0)
    expect(screen.queryByTitle(VIDEO_ALT)).not.toBeInTheDocument()
  })

  it("permite ver el video al seleccionar su miniatura", () => {
    render(<GallerySection />)

    const videoButton = screen.getByRole("button", { name: VIDEO_ALT })
    fireEvent.click(videoButton)

    expect(screen.getByTitle(VIDEO_ALT)).toBeInTheDocument()
  })
})
