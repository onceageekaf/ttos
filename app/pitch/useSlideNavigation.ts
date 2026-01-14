"use client"

import { useEffect } from "react"

export function useSlideNavigation(
  enabled: boolean,
  currentSlide: number,
  totalSlides: number,
  onSlideChange: (slide: number) => void
) {
  useEffect(() => {
    if (!enabled) return
    const handler = (e: KeyboardEvent) => {
      if (["ArrowDown", "ArrowRight", "PageDown", " "].includes(e.key)) {
        e.preventDefault()
        if (currentSlide < totalSlides) {
          onSlideChange(currentSlide + 1)
        }
      }
      if (["ArrowUp", "ArrowLeft", "PageUp"].includes(e.key)) {
        e.preventDefault()
        if (currentSlide > 1) {
          onSlideChange(currentSlide - 1)
        }
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [enabled, currentSlide, totalSlides, onSlideChange])
}
