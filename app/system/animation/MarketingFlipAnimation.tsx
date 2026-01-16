"use client"
import * as React from "react"
import { gsap } from "gsap"
// @ts-ignore - GSAP type definition case sensitivity issue (Flip.d.ts vs flip.d.ts)
import { Flip } from "gsap/Flip"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { M1, M2, M3, M4, M5 } from "../cards/Marketing"
import { useFlipAnimation } from "@/hooks/useFlipAnimation"
import { useAnimationCoordinator } from "@/hooks/useAnimationCoordinator"

gsap.registerPlugin(Flip, ScrollTrigger)

export default function MarketingFlipAnimation() {
  const [stage, setStage] = React.useState<1 | 2 | 3 | 4 | 5>(1)
  const [isManual, setIsManual] = React.useState(false)
  const [hasStarted, setHasStarted] = React.useState(false)
  const autoPlayTimerRef = React.useRef<NodeJS.Timeout | null>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { requestStart, notifyComplete } = useAnimationCoordinator("marketing")
  const card1Ref = React.useRef<HTMLDivElement>(null)
  const card2Ref = React.useRef<HTMLDivElement>(null)
  const card3Ref = React.useRef<HTMLDivElement>(null)
  const card4Ref = React.useRef<HTMLDivElement>(null)
  const card5Ref = React.useRef<HTMLDivElement>(null)

  const { animateFlip } = useFlipAnimation()

  const clearAutoPlay = React.useCallback(() => {
    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current)
      autoPlayTimerRef.current = null
    }
  }, [])

  const handleStepForward = React.useCallback(() => {
    if (stage >= 5) return
    
    setIsManual(true)
    clearAutoPlay()
    
    const nextStage = stage + 1
    const transitions: Record<number, [HTMLElement | null, HTMLElement | null]> = {
      1: [card1Ref.current, card2Ref.current],
      2: [card2Ref.current, card3Ref.current],
      4: [card4Ref.current, card5Ref.current],
    }

    const transition = transitions[stage]
    if (transition) {
      const [fromCard, toCard] = transition
      animateFlip(fromCard, toCard, {
        duration: 1.0,
        ease: "power2.inOut",
        onComplete: () => setStage(nextStage as typeof stage),
      })
    } else {
      setStage(nextStage as typeof stage)
    }
  }, [stage, animateFlip, clearAutoPlay])

  const handleStepBackward = React.useCallback(() => {
    if (stage <= 1) return
    
    setIsManual(true)
    clearAutoPlay()
    
    const prevStage = stage - 1
    const transitions: Record<number, [HTMLElement | null, HTMLElement | null]> = {
      2: [card2Ref.current, card1Ref.current],
      3: [card3Ref.current, card2Ref.current],
      5: [card5Ref.current, card4Ref.current],
    }

    const transition = transitions[stage]
    if (transition) {
      const [fromCard, toCard] = transition
      animateFlip(fromCard, toCard, {
        duration: 1.0,
        ease: "power2.inOut",
        onComplete: () => setStage(prevStage as typeof stage),
      })
    } else {
      setStage(prevStage as typeof stage)
    }
  }, [stage, animateFlip, clearAutoPlay])

  React.useEffect(() => {
    if (!containerRef.current || hasStarted || isManual) return

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        requestStart(() => {
          setHasStarted(true)
          autoPlayTimerRef.current = setTimeout(() => {
            setStage(2)
          }, 2000)
        })
      },
    })

    return () => {
      scrollTrigger.kill()
    }
  }, [hasStarted, isManual, requestStart])

  React.useEffect(() => {
    if (isManual || !hasStarted) return

    clearAutoPlay()

    if (stage === 1) {
      autoPlayTimerRef.current = setTimeout(() => {
        setStage(2)
      }, 2000)
    } else if (stage === 2) {
      animateFlip(card1Ref.current, card2Ref.current, {
        duration: 1.0,
        ease: "power2.inOut",
        onComplete: () => {
          autoPlayTimerRef.current = setTimeout(() => {
            setStage(3)
          }, 1000)
        },
      })
    } else if (stage === 3) {
      animateFlip(card2Ref.current, card3Ref.current, {
        duration: 1.0,
        ease: "power2.inOut",
        onComplete: () => {
          autoPlayTimerRef.current = setTimeout(() => {
            setStage(4)
          }, 1000)
        },
      })
    } else if (stage === 4) {
      autoPlayTimerRef.current = setTimeout(() => {
        animateFlip(card4Ref.current, card5Ref.current, {
          duration: 1.0,
          ease: "power2.inOut",
          onComplete: () => {
            setStage(5)
            setTimeout(() => {
              notifyComplete()
            }, 500)
          },
        })
      }, 1000)
    } else if (stage === 5) {
      // Animation complete
    }

    return () => {
      clearAutoPlay()
    }
  }, [stage, isManual, hasStarted, animateFlip, clearAutoPlay, notifyComplete])

  return (
    <div ref={containerRef} className="relative">
      <div className="mb-4 flex items-center gap-2">
        <button
          onClick={handleStepBackward}
          disabled={stage <= 1}
          className="flex h-8 w-8 items-center justify-center rounded border border-black/10 bg-white hover:bg-black/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Step backward"
        >
          <ChevronLeft className="h-4 w-4 text-black/70" />
        </button>
        <button
          onClick={handleStepForward}
          disabled={stage >= 5}
          className="flex h-8 w-8 items-center justify-center rounded border border-black/10 bg-white hover:bg-black/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Step forward"
        >
          <ChevronRight className="h-4 w-4 text-black/70" />
        </button>
        <span className="ml-2 text-xs text-black/50">
          Stage {stage}/5
        </span>
      </div>

      {stage < 4 && (
        <div className="relative">
          <div
            ref={card1Ref}
            data-flip-id="card-1"
            style={{
              display: stage === 1 ? "block" : "none",
            }}
          >
            <M1 stageKey={stage === 1 ? "m1-init" : undefined} isActive={!isManual && stage === 1} />
          </div>
          <div
            ref={card2Ref}
            data-flip-id="card-2"
            style={{
              display: stage === 2 ? "block" : "none",
            }}
          >
            <M2 stageKey={stage === 2 ? "m2-init" : undefined} isActive={!isManual && stage === 2} />
          </div>
          <div
            ref={card3Ref}
            data-flip-id="card-3"
            style={{
              display: stage === 3 ? "block" : "none",
            }}
          >
            <M3 stageKey={stage === 3 ? "m3-init" : undefined} isActive={!isManual && stage === 3} />
          </div>
        </div>
      )}

      {stage >= 4 && (
        <div className="flex flex-col lg:flex-row items-start gap-[5px]">
          <div
            ref={card3Ref}
            data-flip-id="card-3"
          >
            <M3 stageKey="m3-static-completed" isActive={false} />
          </div>

          <div className="relative flex items-stretch">
            <div
              ref={card4Ref}
              data-flip-id="card-4"
              className="flex items-stretch"
              style={{
                display: stage === 4 ? "flex" : "none",
              }}
            >
              <M4 stageKey={stage === 4 ? "m4-init" : undefined} isActive={!isManual && stage === 4} />
            </div>
            <div
              ref={card5Ref}
              data-flip-id="card-5"
              className="flex items-stretch"
              style={{
                display: stage === 5 ? "flex" : "none",
              }}
            >
              <M5 stageKey={stage === 5 ? "m5-init" : undefined} isActive={!isManual && stage === 5} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
