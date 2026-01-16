"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Check, Loader2 } from "lucide-react"

type StageKey = "evaluation" | "protection" | "marketing" | "licensing"
type PillKey =
  | "evaluation:1" | "evaluation:2" | "evaluation:3" | "evaluation:4"
  | "protection:1" | "protection:2" | "protection:3" | "protection:4"
  | "marketing:1" | "marketing:2" | "marketing:3" | "marketing:4"
  | "licensing:1" | "licensing:2" | "licensing:3" | "licensing:4"

type PillState = "idle" | "spinning" | "done"

const STAGES: StageKey[] = ["evaluation", "protection", "marketing", "licensing"]

const PILLS: Record<StageKey, { key: PillKey; label: string }[]> = {
  evaluation: [
    { key: "evaluation:1", label: "Due diligence" },
    { key: "evaluation:2", label: "Prior art" },
    { key: "evaluation:3", label: "Market research" },
    { key: "evaluation:4", label: "Financial analysis" },
  ],
  protection: [
    { key: "protection:1", label: "Provisional patent" },
    { key: "protection:2", label: "Patent draft" },
    { key: "protection:3", label: "Inventor review" },
    { key: "protection:4", label: "Filing documents" },
  ],
  marketing: [
    { key: "marketing:1", label: "Invention webpage" },
    { key: "marketing:2", label: "Campaign" },
    { key: "marketing:3", label: "Deal room" },
    { key: "marketing:4", label: "Data room" },
  ],
  licensing: [
    { key: "licensing:1", label: "Strategy" },
    { key: "licensing:2", label: "Tech diligence" },
    { key: "licensing:3", label: "Negotiation" },
    { key: "licensing:4", label: "Execution" },
  ],
}

function initStates(): Record<PillKey, PillState> {
  const all: Record<string, PillState> = {}
  ;(Object.keys(PILLS) as StageKey[]).forEach((stage) => {
    PILLS[stage].forEach((p) => (all[p.key] = "idle"))
  })
  return all as Record<PillKey, PillState>
}

export default function PipelineProgress({
  activeStage,
  cycleKey,
  onStageSelect,
}: {
  activeStage: StageKey
  cycleKey: number
  onStageSelect?: (stage: StageKey) => void
}) {
  const [pillState, setPillState] = React.useState<Record<PillKey, PillState>>(initStates)
  const timers = React.useRef<number[]>([])

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t))
    timers.current = []
  }

  React.useEffect(() => {
    clearTimers()
    setPillState(initStates())

    const stagePills = PILLS[activeStage]

    stagePills.forEach((p, idx) => {
      timers.current.push(
        window.setTimeout(() => {
          setPillState((s) => ({ ...s, [p.key]: "spinning" }))
        }, idx * 140)
      )

      timers.current.push(
        window.setTimeout(() => {
          setPillState((s) => ({ ...s, [p.key]: "done" }))
        }, idx * 140 + 520)
      )
    })

    return () => clearTimers()
  }, [activeStage, cycleKey])

  return (
    <div className="rounded-xl border border-black/10 bg-white overflow-hidden elevation-md">
      {/* TOP TABS — UNCHANGED */}
      <div className="grid grid-cols-4">
        {STAGES.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => onStageSelect?.(s)}
            className={cn(
              "h-12 border-b border-black/10 text-[13px] font-medium",
              "transition-colors",
              s === activeStage ? "text-black bg-black/10" : "text-black/45 hover:text-black/70",
              "border-r border-black/5 last:border-r-0"
            )}
          >
            {s[0].toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>

      {/* PILLS — ONE ROW OF 4 PILLS FOR ACTIVE STAGE */}
      <div className="grid grid-cols-4 gap-3 p-3">
        {PILLS[activeStage].map((p) => {
          const state = pillState[p.key]

          return (
            <div
              key={p.key}
              className={cn(
                "h-7 rounded-full border px-2.5",
                "inline-flex items-center gap-2",
                "text-[12px] font-medium transition-colors",
                "elevation-sm",
                // BASE
                "border-black/10 bg-black/[0.02] text-black/55",
                // ACTIVE COLORS
                state === "spinning" && "bg-amber-500/10 border-black/10 text-black",
                state === "done" && "bg-emerald-500/10 border-black/10 text-black"
              )}
            >
              <span className="inline-flex h-4 w-4 items-center justify-center">
                {state === "spinning" ? (
                  <Loader2 className="h-3.5 w-3.5 text-amber-600 animate-spin" />
                ) : state === "done" ? (
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                ) : (
                  <span className="h-3.5 w-3.5 rounded-full border border-black/20" />
                )}
              </span>
              <span className="whitespace-nowrap">{p.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}