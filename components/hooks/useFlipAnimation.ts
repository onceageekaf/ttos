import { useCallback, useRef } from "react"
// @ts-ignore - GSAP type definition case sensitivity issue (Flip.d.ts vs flip.d.ts)
import { Flip } from "gsap/Flip"

/**
 * Hook for managing GSAP Flip animations between card states
 */
export function useFlipAnimation() {
  const flipStateRef = useRef<ReturnType<typeof Flip.getState> | null>(null)

  /**
   * Animate transition between two elements using Flip
   * @param fromElement - Element to animate from
   * @param toElement - Element to animate to
   * @param options - Flip animation options
   */
  const animateFlip = useCallback((
    fromElement: HTMLElement | null,
    toElement: HTMLElement | null,
    options?: {
      duration?: number
      ease?: string
      onComplete?: () => void
      absolute?: boolean
    }
  ) => {
    if (!fromElement || !toElement) {
      options?.onComplete?.()
      return
    }

    const {
      duration = 1.0,
      ease = "power2.inOut",
      onComplete,
      absolute = false,
    } = options || {}

    // Get current state of both elements
    const state = Flip.getState([fromElement, toElement], {
      props: "borderRadius,backgroundColor",
      simple: true,
    })

    // Use requestAnimationFrame to ensure DOM updates happen before Flip
    requestAnimationFrame(() => {
      // Hide from element, show to element
      fromElement.style.display = "none"
      toElement.style.display = "block"

      // If absolute positioning is needed, set it
      if (absolute) {
        fromElement.style.position = "absolute"
        toElement.style.position = "absolute"
      }

      // Animate the flip
      Flip.from(state, {
        duration,
        ease,
        absolute,
        onComplete,
      })
    })
  }, [])

  /**
   * Batch animate multiple elements using Flip
   * Useful for complex transitions involving multiple cards
   */
  const animateBatchFlip = useCallback((
    elements: HTMLElement[],
    options?: {
      duration?: number
      ease?: string
      onComplete?: () => void
      absolute?: boolean
    }
  ) => {
    if (elements.length === 0) {
      options?.onComplete?.()
      return
    }

    const {
      duration = 1.0,
      ease = "power2.inOut",
      onComplete,
      absolute = false,
    } = options || {}

    const state = Flip.getState(elements, {
      props: "borderRadius,backgroundColor",
      simple: true,
    })

    requestAnimationFrame(() => {
      Flip.from(state, {
        duration,
        ease,
        absolute,
        onComplete,
      })
    })
  }, [])

  return {
    animateFlip,
    animateBatchFlip,
  }
}
