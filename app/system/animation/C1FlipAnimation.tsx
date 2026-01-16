"use client"
import * as React from "react"
import { gsap } from "gsap"
// @ts-ignore - GSAP type definition case sensitivity issue (Flip.d.ts vs flip.d.ts)
import { Flip } from "gsap/Flip"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { C1S1, C1S2, C1S3, C2S1, C2S2, C3S1, C3S2 } from "../cards/Disclosure"
import { useFlipAnimation } from "@/hooks/useFlipAnimation"
import { useAnimationCoordinator } from "@/hooks/useAnimationCoordinator"

gsap.registerPlugin(Flip, ScrollTrigger)

export default function C1FlipAnimation() {
  const [stage, setStage] = React.useState<1 | 2 | 3 | 4 | 5 | 6 | 7>(1)
  const [isManual, setIsManual] = React.useState(false)
  const [hasStarted, setHasStarted] = React.useState(false)
  const autoPlayTimerRef = React.useRef<NodeJS.Timeout | null>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { requestStart, notifyComplete } = useAnimationCoordinator("disclosure")
  const card1Ref = React.useRef<HTMLDivElement>(null)
  const card2Ref = React.useRef<HTMLDivElement>(null)
  const card3Ref = React.useRef<HTMLDivElement>(null)
  const card4Ref = React.useRef<HTMLDivElement>(null)
  const card5Ref = React.useRef<HTMLDivElement>(null)
  const card6Ref = React.useRef<HTMLDivElement>(null)
  const card7Ref = React.useRef<HTMLDivElement>(null)

  const { animateFlip } = useFlipAnimation()

  // Clear auto-play timers
  const clearAutoPlay = React.useCallback(() => {
    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current)
      autoPlayTimerRef.current = null
    }
  }, [])

  // Transition to next stage with Flip animation
  const transitionToStage = React.useCallback((
    fromStage: number,
    toStage: number,
    fromCard: HTMLElement | null,
    toCard: HTMLElement | null,
    delay: number = 0
  ) => {
    if (!fromCard || !toCard) {
      setTimeout(() => setStage(toStage as typeof stage), delay)
      return
    }

    animateFlip(fromCard, toCard, {
      duration: 1.0,
      ease: "power2.inOut",
      onComplete: () => {
        setStage(toStage as typeof stage)
      },
    })
  }, [animateFlip])

  // Step forward handler
  const handleStepForward = React.useCallback(() => {
    if (stage >= 7) return
    
    setIsManual(true)
    clearAutoPlay()
    
    const nextStage = stage + 1
    
    // Map transitions to card refs
    const transitions: Record<number, [HTMLElement | null, HTMLElement | null]> = {
      1: [card1Ref.current, card2Ref.current],
      2: [card2Ref.current, card3Ref.current],
      4: [card4Ref.current, card5Ref.current],
      6: [card6Ref.current, card7Ref.current],
    }

    const transition = transitions[stage]
    if (transition) {
      const [fromCard, toCard] = transition
      transitionToStage(stage, nextStage, fromCard, toCard)
    } else {
      // Stages that don't need animation (4, 6)
      setStage(nextStage as typeof stage)
    }
  }, [stage, transitionToStage, clearAutoPlay])

  // Step backward handler
  const handleStepBackward = React.useCallback(() => {
    if (stage <= 1) return
    
    setIsManual(true)
    clearAutoPlay()
    
    const prevStage = stage - 1
    
    // Map reverse transitions
    const transitions: Record<number, [HTMLElement | null, HTMLElement | null]> = {
      2: [card2Ref.current, card1Ref.current],
      3: [card3Ref.current, card2Ref.current],
      5: [card5Ref.current, card4Ref.current],
      7: [card7Ref.current, card6Ref.current],
    }

    const transition = transitions[stage]
    if (transition) {
      const [fromCard, toCard] = transition
      transitionToStage(stage, prevStage, fromCard, toCard)
    } else {
      setStage(prevStage as typeof stage)
    }
  }, [stage, transitionToStage, clearAutoPlay])

  // Start animation when component enters viewport using ScrollTrigger
  React.useEffect(() => {
    if (!containerRef.current || hasStarted || isManual) return

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        // Request permission to start from coordinator
        requestStart(() => {
          setHasStarted(true)
          autoPlayTimerRef.current = setTimeout(() => {
            setStage(2)
          }, 1000)
        })
      },
    })

    return () => {
      scrollTrigger.kill()
    }
  }, [hasStarted, isManual, requestStart])

  // Auto-play logic
  React.useEffect(() => {
    if (isManual || !hasStarted) return

    clearAutoPlay()

    if (stage === 1) {
      autoPlayTimerRef.current = setTimeout(() => {
        setStage(2)
      }, 1000)
    } else if (stage === 2) {
      animateFlip(card1Ref.current, card2Ref.current, {
        duration: 1.0,
        ease: "power2.inOut",
        onComplete: () => {
          autoPlayTimerRef.current = setTimeout(() => {
            animateFlip(card2Ref.current, card3Ref.current, {
              duration: 1.0,
              ease: "power2.inOut",
              onComplete: () => {
                setStage(3)
                autoPlayTimerRef.current = setTimeout(() => {
                  setStage(4)
                }, 100)
              },
            })
          }, 100)
        },
      })
    } else if (stage === 3) {
      autoPlayTimerRef.current = setTimeout(() => {
        setStage(4)
      }, 100)
    } else if (stage === 4) {
      autoPlayTimerRef.current = setTimeout(() => {
        animateFlip(card4Ref.current, card5Ref.current, {
          duration: 1.0,
          ease: "power2.inOut",
          onComplete: () => {
            setStage(5)
            autoPlayTimerRef.current = setTimeout(() => {
              setStage(6)
            }, 2000)
          },
        })
      }, 1000)
    } else if (stage === 5) {
      autoPlayTimerRef.current = setTimeout(() => {
        setStage(6)
      }, 2000)
    } else if (stage === 6) {
      autoPlayTimerRef.current = setTimeout(() => {
        animateFlip(card6Ref.current, card7Ref.current, {
          duration: 1.0,
          ease: "power2.inOut",
          onComplete: () => {
            setStage(7)
            // Notify coordinator that this animation is complete
            setTimeout(() => {
              notifyComplete()
            }, 500) // Small delay to ensure final stage is visible
          },
        })
      }, 1000)
    } else if (stage === 7) {
      // Animation complete - already notified in stage 6 completion
    }

    return () => {
      clearAutoPlay()
    }
  }, [stage, isManual, hasStarted, animateFlip, clearAutoPlay, notifyComplete])

  return (
    <div ref={containerRef} className="relative">
      {/* Control Buttons */}
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
          disabled={stage >= 7}
          className="flex h-8 w-8 items-center justify-center rounded border border-black/10 bg-white hover:bg-black/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Step forward"
        >
          <ChevronRight className="h-4 w-4 text-black/70" />
        </button>
        <span className="ml-2 text-xs text-black/50">
          Stage {stage}/7
        </span>
      </div>

      {/* Stages 1-3: C1 cards animate in place */}
      {stage < 4 && (
        <div className="relative">
          <div
            ref={card1Ref}
            data-flip-id="card-1"
            style={{
              display: stage === 1 ? "block" : "none",
            }}
          >
            <C1S1 />
          </div>
          <div
            ref={card2Ref}
            data-flip-id="card-2"
            style={{
              display: stage === 2 ? "block" : "none",
            }}
          >
            <C1S2 />
          </div>
          <div
            ref={card3Ref}
            data-flip-id="card-3"
            style={{
              display: stage === 3 ? "block" : "none",
            }}
          >
            <C1S3 />
          </div>
        </div>
      )}

      {/* Stages 4-7: C1S3 stays, C2 and C3 cards appear next to it */}
      {stage >= 4 && (
        <div className="flex flex-col lg:flex-row items-start gap-[5px]">
          <div
            ref={card3Ref}
            data-flip-id="card-3"
          >
            <C1S3 />
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
              <C2S1 isActive={!isManual && stage === 4} />
            </div>
            <div
              ref={card5Ref}
              data-flip-id="card-5"
              className="flex items-stretch"
              style={{
                display: stage >= 5 ? "flex" : "none",
              }}
            >
              <C2S2 stageKey={stage === 5 ? "c2s2-init" : undefined} isActive={!isManual && stage === 5} />
            </div>
          </div>

          {stage >= 6 && (
            <div className="relative flex items-stretch">
              <div
                ref={card6Ref}
                data-flip-id="card-6"
                className="flex items-stretch"
                style={{
                  display: stage === 6 ? "flex" : "none",
                }}
              >
                <C3S1 isActive={!isManual && stage === 6} />
              </div>
              <div
                ref={card7Ref}
                data-flip-id="card-7"
                className="flex items-stretch"
                style={{
                  display: stage === 7 ? "flex" : "none",
                }}
              >
                <C3S2 isActive={!isManual && stage === 7} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
