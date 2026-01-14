"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import posthog from "posthog-js"
import { getStableRef, nowMs, PITCH_REF_KEY } from "./_analytics"
import { SlideCounter } from "./SlideCounter"
import { useSlideNavigation } from "./useSlideNavigation"

// Slides
import Slide01Vision from "./sections/Slide01Vision"
import Slide02Reality from "./sections/Slide02Reality"
import Slide03Scale from "./sections/Slide03Scale"
import Slide04RootCause from "./sections/Slide04RootCause"
import Slide05PerfectTTO from "./sections/Slide05PerfectTTO"
import Slide06Solution from "./sections/Slide06Solution"
import Slide07System from "./sections/Slide07System"
import Slide08Different from "./sections/Slide08Different"
import Slide09ForWhom from "./sections/Slide09ForWhom"
import Slide10Value from "./sections/Slide10Value"
import Slide11WhyNow from "./sections/Slide11WhyNow"
import Slide12Ask from "./sections/Slide12Ask"

const TOTAL_SLIDES = 12

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

export default function PitchPage() {
  const sp = useSearchParams()
  const pathname = usePathname()

  const printMode = sp.get("print") === "1"
  const incomingRef = useMemo(() => sp.get("ref"), [sp])

  const [refId, setRefId] = useState("unknown")
  const [currentSlide, setCurrentSlide] = useState(1)

  const sessionStart = useRef<number>(0)
  const lastSlide = useRef<number>(1)
  const maxSlide = useRef<number>(1)
  const engaged = useRef<boolean>(false)
  const engagementTimer = useRef<number | null>(null)

  // Navigate to slide
  const goToSlide = (slide: number) => {
    const targetSlide = clamp(slide, 1, TOTAL_SLIDES)
    setCurrentSlide(targetSlide)
  }

  // Prevent scrolling with mouse wheel, allow navigation
  useEffect(() => {
    if (printMode) return
    
    // Prevent body scroll
    document.body.style.overflow = "hidden"
    
    let wheelTimeout: number | null = null
    let isNavigating = false
    
    const preventScroll = (e: WheelEvent) => {
      e.preventDefault()
      
      // Debounce: only allow navigation if not already navigating
      if (isNavigating) return
      
      // Allow navigation with wheel
      if (e.deltaY > 0 && currentSlide < TOTAL_SLIDES) {
        isNavigating = true
        goToSlide(currentSlide + 1)
        // Prevent further navigation for 500ms
        if (wheelTimeout) clearTimeout(wheelTimeout)
        wheelTimeout = window.setTimeout(() => {
          isNavigating = false
        }, 500)
      } else if (e.deltaY < 0 && currentSlide > 1) {
        isNavigating = true
        goToSlide(currentSlide - 1)
        // Prevent further navigation for 500ms
        if (wheelTimeout) clearTimeout(wheelTimeout)
        wheelTimeout = window.setTimeout(() => {
          isNavigating = false
        }, 500)
      }
    }
    
    window.addEventListener("wheel", preventScroll, { passive: false })
    return () => {
      document.body.style.overflow = ""
      if (wheelTimeout) clearTimeout(wheelTimeout)
      window.removeEventListener("wheel", preventScroll)
    }
  }, [printMode, currentSlide])

  // Keyboard navigation
  useSlideNavigation(!printMode, currentSlide, TOTAL_SLIDES, goToSlide)

  // Identify viewer + initial page view
  useEffect(() => {
    const ref = getStableRef(incomingRef)
    setRefId(ref)

    posthog.identify(ref)
    posthog.setPersonProperties({ last_ref: ref, last_path: pathname })

    sessionStart.current = nowMs()

    if (!printMode && ref !== "unknown") {
      posthog.capture("pitch_view", { ref, path: pathname, total_slides: TOTAL_SLIDES })
    }

    if (!printMode) {
      lastSlide.current = currentSlide
      maxSlide.current = currentSlide
      if (ref !== "unknown") posthog.capture("pitch_slide_view", { ref, slide: currentSlide })
    }

    // Engagement after 8s
    if (!printMode) {
      engagementTimer.current = window.setTimeout(() => {
        engaged.current = true
        if (ref !== "unknown") posthog.capture("pitch_engaged", { ref })
      }, 8000)
    }

    return () => {
      if (engagementTimer.current) window.clearTimeout(engagementTimer.current)
    }
  }, [incomingRef, pathname, printMode])

  // Slide tracking
  useEffect(() => {
    if (printMode) return

    if (currentSlide !== lastSlide.current) {
      lastSlide.current = currentSlide
      maxSlide.current = Math.max(maxSlide.current, currentSlide)
      const ref = window.localStorage.getItem(PITCH_REF_KEY) || refId
      if (ref !== "unknown") posthog.capture("pitch_slide_view", { ref, slide: currentSlide })
    }
  }, [currentSlide, refId, printMode])

  // Exit tracking
  useEffect(() => {
    if (printMode) return

    const onUnload = () => {
      const ref = window.localStorage.getItem(PITCH_REF_KEY) || refId
      const durationMs = Math.max(0, Math.round(nowMs() - sessionStart.current))
      if (ref !== "unknown") {
        posthog.capture("pitch_exit", {
          ref,
          duration_ms: durationMs,
          max_slide: maxSlide.current,
          engaged: engaged.current,
        })
      }
    }

    window.addEventListener("beforeunload", onUnload)
    return () => window.removeEventListener("beforeunload", onUnload)
  }, [refId, printMode])

  const trackClick = (name: string, props?: Record<string, any>) => {
    const ref = typeof window !== "undefined"
      ? window.localStorage.getItem(PITCH_REF_KEY) || refId
      : refId
    if (printMode) return
    if (ref === "unknown") return
    posthog.capture(name, { ref, ...props })
  }

  const goToNext = () => {
    goToSlide(currentSlide + 1)
  }

  const goToPrevious = () => {
    goToSlide(currentSlide - 1)
  }

  const slides = [
    <Slide01Vision key="1" />,
    <Slide02Reality key="2" />,
    <Slide03Scale key="3" />,
    <Slide04RootCause key="4" />,
    <Slide05PerfectTTO key="5" />,
    <Slide06Solution key="6" />,
    <Slide07System key="7" />,
    <Slide08Different key="8" />,
    <Slide09ForWhom key="9" />,
    <Slide10Value key="10" />,
    <Slide11WhyNow key="11" />,
    <Slide12Ask key="12" />,
  ]

  return (
    <>
      {!printMode && <SlideCounter total={TOTAL_SLIDES} currentSlide={currentSlide} />}

      {!printMode && (
        <div className="no-print fixed top-6 right-6 flex gap-3 z-50 text-sm">
          <a
            href={`/pitch/features?ref=${encodeURIComponent(refId)}`}
            onClick={() => trackClick("pitch_click_features")}
            className="underline text-muted-foreground"
          >
            Features
          </a>
          <button
            onClick={() => {
              trackClick("pitch_click_print")
              window.open(`${window.location.pathname}?print=1`, "_blank")
            }}
            className="underline text-muted-foreground"
          >
            Print/PDF
          </button>
        </div>
      )}

      <main className="overflow-hidden h-screen">
        <div className="relative h-full">
          {slides.map((slide, index) => (
            <div
              key={index + 1}
              id={`slide-${index + 1}`}
              className={`absolute inset-0 transition-opacity duration-300 cursor-pointer ${
                currentSlide === index + 1 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
              onClick={(e) => {
                // Don't advance if clicking on interactive elements
                const target = e.target as HTMLElement
                if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a, button')) {
                  return
                }
                if (currentSlide < TOTAL_SLIDES) {
                  goToNext()
                }
              }}
            >
              {slide}
              {currentSlide === index + 1 && !printMode && (
                <div className="absolute top-[calc(50vh-360px-42px)] left-1/2 -translate-x-1/2 z-50 flex gap-2">
                  <button
                    onClick={goToPrevious}
                    disabled={currentSlide === 1}
                    className="w-8 h-8 flex items-center justify-center bg-background border border-border rounded-md hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
                    aria-label="Previous slide"
                  >
                    ←
                  </button>
                  <button
                    onClick={goToNext}
                    disabled={currentSlide === TOTAL_SLIDES}
                    className="w-8 h-8 flex items-center justify-center bg-background border border-border rounded-md hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
                    aria-label="Next slide"
                  >
                    →
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
