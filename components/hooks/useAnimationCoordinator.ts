import { useRef, useCallback } from "react"

/**
 * Global coordinator to ensure only one animation plays at a time
 * across all system animation components
 */
class AnimationCoordinator {
  private currentAnimation: string | null = null
  private queue: Array<{ id: string; start: () => void }> = []
  private listeners: Set<(id: string | null) => void> = new Set()

  /**
   * Register an animation and wait for its turn
   * @param id - Unique identifier for this animation
   * @param start - Callback to start the animation
   */
  requestStart(id: string, start: () => void): void {
    if (this.currentAnimation === null) {
      // No animation playing, start immediately
      this.currentAnimation = id
      this.notifyListeners(id)
      start()
    } else {
      // Add to queue - will be started when current animation completes
      this.queue.push({ id, start })
    }
  }

  /**
   * Notify that an animation has completed
   * @param id - The animation that completed
   */
  notifyComplete(id: string): void {
    if (this.currentAnimation === id) {
      this.currentAnimation = null
      this.notifyListeners(null)

      // Start next animation in queue
      const next = this.queue.shift()
      if (next) {
        this.currentAnimation = next.id
        this.notifyListeners(next.id)
        next.start()
      }
    }
  }

  /**
   * Get the current playing animation ID
   */
  getCurrentAnimation(): string | null {
    return this.currentAnimation
  }

  /**
   * Check if an animation can start
   */
  canStart(id: string): boolean {
    return this.currentAnimation === null || this.currentAnimation === id
  }

  /**
   * Subscribe to animation state changes
   */
  subscribe(listener: (id: string | null) => void): () => void {
    this.listeners.add(listener)
    return () => {
      this.listeners.delete(listener)
    }
  }

  private notifyListeners(id: string | null): void {
    this.listeners.forEach((listener) => listener(id))
  }
}

// Singleton instance
const coordinator = new AnimationCoordinator()

/**
 * Hook to coordinate animations across components
 */
export function useAnimationCoordinator(animationId: string) {
  const hasStartedRef = useRef(false)
  const isCompleteRef = useRef(false)

  /**
   * Request to start animation - will wait if another is playing
   */
  const requestStart = useCallback(
    async (startCallback: () => void): Promise<void> => {
      if (hasStartedRef.current) return

      await coordinator.requestStart(animationId, () => {
        hasStartedRef.current = true
        startCallback()
      })
    },
    [animationId]
  )

  /**
   * Notify that this animation has completed
   */
  const notifyComplete = useCallback(() => {
    if (!isCompleteRef.current) {
      isCompleteRef.current = true
      coordinator.notifyComplete(animationId)
    }
  }, [animationId])

  /**
   * Check if this animation can start now
   */
  const canStart = useCallback((): boolean => {
    return coordinator.canStart(animationId)
  }, [animationId])

  /**
   * Reset the animation state (useful for manual controls)
   */
  const reset = useCallback(() => {
    hasStartedRef.current = false
    isCompleteRef.current = false
  }, [])

  return {
    requestStart,
    notifyComplete,
    canStart,
    reset,
  }
}
