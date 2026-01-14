"use client"

export function SlideCounter({ total, currentSlide }: { total: number; currentSlide: number }) {
  return (
    <div className="no-print fixed bottom-6 right-6 text-sm text-muted-foreground">
      {currentSlide} / {total}
    </div>
  )
}
