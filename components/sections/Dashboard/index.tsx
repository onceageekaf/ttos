// src/components/sections/Dashboard/index.tsx
"use client"

import * as React from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { AudienceView } from "@/lib/types"
import { cn } from "@/lib/utils"
import { LAYOUT_WIDTHS } from "@/lib/layout"

import DashboardShell from "./layout/DashboardShell"
import DashboardTopTabs from "./layout/DashboardTopTabs"
import InventorDashboard from "./Inventor"
import CaseView from "./CaseView"

gsap.registerPlugin(ScrollTrigger)

const DEMO_MS = 2500

export default function DashboardSection() {
  const [view, setView] = React.useState<AudienceView>("inventor")
  const [demoRunning, setDemoRunning] = React.useState(false)
  const [hasStarted, setHasStarted] = React.useState(false)
  const timeoutRef = React.useRef<number | null>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const runDemo = React.useCallback(() => {
    // always restart from the same state
    setView("inventor")
    setDemoRunning(true)

    if (timeoutRef.current) window.clearTimeout(timeoutRef.current)

    // Start timer only when dashboard is fully in view
    timeoutRef.current = window.setTimeout(() => {
      setView("case")
      setDemoRunning(false)
      timeoutRef.current = null
    }, DEMO_MS)
  }, [])

  // cleanup any pending timeout on unmount
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [])

  // Use ScrollTrigger to detect when entire dashboard is in view
  React.useEffect(() => {
    const el = containerRef.current
    if (!el || hasStarted) return

    const scrollTrigger = ScrollTrigger.create({
      trigger: el,
      start: "bottom bottom", // When bottom of dashboard reaches bottom of viewport (fully visible)
      once: true,
      onEnter: () => {
        setHasStarted(true)
        runDemo()
      },
    })

    return () => {
      scrollTrigger.kill()
    }
  }, [hasStarted, runDemo])

  return (
    <section className="mt-12 mb-8">
      {/* Observe the whole dashboard block (tabs + shell) */}
      <div ref={containerRef}>
        <div className={cn("mx-auto w-full px-6", LAYOUT_WIDTHS.cards)}>
          <DashboardTopTabs
            value={view}
            onChange={(v) => {
              // user takes control: cancel any running demo
              if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
              timeoutRef.current = null
              setDemoRunning(false)
              setView(v)
            }}
            demoRunning={demoRunning}
            demoMs={DEMO_MS}
          />
        </div>

        <DashboardShell
          className="mt-8"
          width="cards"
          variant={view === "inventor" ? "inventor" : "case"}
        >
          {view === "inventor" ? <InventorDashboard /> : <CaseView />}
        </DashboardShell>
      </div>
    </section>
  )
}