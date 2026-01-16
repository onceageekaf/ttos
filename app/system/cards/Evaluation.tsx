"use client"
import * as React from "react"
import { FileText, CheckCircle2, Circle, Play, FilePlus, Link, AlertTriangle, Search, TrendingUp, DollarSign, BarChart, Users } from "lucide-react"

const CARD_WIDTH = 240

// Helper component for static text with checkmark
function TextWithCheckmark({ 
  text, 
  checkmark
}: { 
  text: string
  checkmark: React.ReactNode
}) {
  return (
    <div className="flex items-center justify-between w-full">
      <span className="truncate">{text}</span>
      <span className="text-green-600">{checkmark}</span>
    </div>
  )
}

// Helper component for static text with icon
function TextWithIcon({ 
  text, 
  icon,
  iconPosition = "right",
  className = ""
}: { 
  text: string
  icon: React.ReactNode
  iconPosition?: "left" | "right"
  className?: string
}) {
  if (iconPosition === "left") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {icon}
        <span>{text}</span>
      </div>
    )
  }

  return (
    <div className={`flex items-center justify-between w-full ${className}`}>
      <span className="truncate">{text}</span>
      {icon}
    </div>
  )
}

// Helper component for text with icon (always shown)
function TextWithIconHeader({ 
  text, 
  icon
}: { 
  text: string
  icon: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <div className="text-[11px] font-medium text-black/60">
        {text}
      </div>
    </div>
  )
}

// Helper component for border with icon (always shown)
function TextWithBorderAndIcon({ 
  text, 
  icon,
  children
}: { 
  text: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="mt-2 pt-2 border-t border-black/10">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <div className="text-[11px] font-medium text-black/60">
          {text}
        </div>
      </div>
      {children}
    </div>
  )
}

// Helper component for dot with text (always shown)
function DotWithText({ 
  text, 
  dot
}: { 
  text: string
  dot: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-2">
      {dot}
      <span className="text-black/60">{text}</span>
    </div>
  )
}

// Helper component for text with dollar amount (always shown)
function TextWithAmount({ 
  text, 
  amount
}: { 
  text: string
  amount: string
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-black/60">{text}</span>
      <span className="text-black/85 font-medium">{amount}</span>
    </div>
  )
}

// E1: Evaluation Bot (from evaluationDeck)
export function E1({ stageKey, isActive }: { stageKey?: string | number; isActive?: boolean }) {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex flex-col" style={{ width: CARD_WIDTH, height: "100%" }}>
      <div className="mb-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-black/85">
            Evaluation Bot
          </div>
          <div className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-1.5 py-0.5 text-[10px] font-medium text-black/60 shadow-sm">
            Case # 512
          </div>
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-black/10 bg-black/[0.02] p-3">
        <div className="space-y-1.5 text-[11px] text-black/60">
          <TextWithCheckmark
            text="Invention Disclosure"
            checkmark={<CheckCircle2 className="h-3 w-3 text-green-600" />}
          />
          <TextWithCheckmark
            text="Funding details"
            checkmark={<CheckCircle2 className="h-3 w-3 text-green-600" />}
          />
          <TextWithCheckmark
            text="Sponsored Research"
            checkmark={<CheckCircle2 className="h-3 w-3 text-green-600" />}
          />
          <TextWithCheckmark
            text="Outside university?"
            checkmark={<CheckCircle2 className="h-3 w-3 text-amber-500" />}
          />
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-black/10 bg-black/[0.02] p-3">
        <div className="text-[11px] font-medium text-black/60 mb-1.5">
          Attachments
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] text-black/60">
            <span className="text-black/35">
              NIH_45789
            </span>
            <Link className="h-3 w-3 text-black/40" />
          </div>
          <div className="flex items-center justify-between text-[11px] text-black/60">
            <span className="text-black/35">
              SRA 12345
            </span>
            <Link className="h-3 w-3 text-black/40" />
          </div>
          <div className="text-[11px] text-black/45 pt-0.5">
            +4 items
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-black/10 bg-black/[0.02] px-2 py-1.5 text-[10px] font-medium text-black/70 hover:bg-black/5 transition-colors"
        >
          <Play className="h-3 w-3" />
          Start
        </button>
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-black/10 bg-black/[0.02] px-2 py-1.5 text-[10px] font-medium text-black/70 hover:bg-black/5 transition-colors"
        >
          <FilePlus className="h-3 w-3" />
          Add info
        </button>
      </div>
    </div>
  )
}

// E2: Due Diligence (from evaluationDeck)
export function E2({ stageKey, isActive }: { stageKey?: string | number; isActive?: boolean }) {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex flex-col" style={{ width: CARD_WIDTH, height: "100%" }}>
      <div className="mb-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-black/85">
            Due Diligence
          </div>
          <div className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-1.5 py-0.5 text-[10px] font-medium text-black/60 shadow-sm">
            Case # 512
          </div>
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-black/10 bg-black/[0.02] p-3">
        <div className="text-[11px] font-medium text-black/60 mb-2">
          Funding Agreement
        </div>
        <div className="space-y-2 text-[11px]">
          <TextWithIcon
            text="NIH 45789"
            icon={<AlertTriangle className="h-3 w-3 text-amber-500" />}
          />
          <div className="text-black/45 pl-0">
            March in rights
          </div>
          <div className="pt-1">
            <TextWithIcon
              text="SRA 12345"
              icon={<AlertTriangle className="h-3 w-3 text-amber-500" />}
            />
          </div>
          <TextWithIcon
            text="Background IP clarification"
            icon={<CheckCircle2 className="h-3 w-3 text-amber-500" />}
          />
        </div>

        <div className="mt-3">
          <div className="text-[11px] font-medium text-black/60 mb-2">
            Joint Inventors
          </div>
          <div className="space-y-1.5 text-[11px]">
            <div className="flex items-center justify-between">
              <span className="text-black/35">
                Institution:
              </span>
              <span className="text-black/60">Uni of France</span>
            </div>
            <TextWithIcon
              text="Interinstitutional"
              icon={<CheckCircle2 className="h-3 w-3 text-green-600" />}
            />
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-black/10 bg-black/[0.02] px-2 py-1.5 text-[10px] font-medium text-black/70 hover:bg-black/5 transition-colors"
        >
          <Play className="h-3 w-3" />
          Start
        </button>
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-black/10 bg-black/[0.02] px-2 py-1.5 text-[10px] font-medium text-black/70 hover:bg-black/5 transition-colors"
        >
          <FilePlus className="h-3 w-3" />
          Add info
        </button>
      </div>
    </div>
  )
}

// E3: Prior Art analysis (from evaluationDeck)
export function E3({ stageKey, isActive }: { stageKey?: string | number; isActive?: boolean }) {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex flex-col" style={{ width: CARD_WIDTH, height: "100%" }}>
      <div className="mb-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-black/85">
            Prior Art analysis
          </div>
          <div className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-1.5 py-0.5 text-[10px] font-medium text-black/60 shadow-sm">
            Case # 512
          </div>
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-black/10 bg-black/[0.02] p-3">
        <div className="mb-2">
          <TextWithIconHeader
            text="Patent Documents"
            icon={<FileText className="h-3.5 w-3.5 text-red-500" />}
          />
        </div>
        <div className="space-y-1.5 text-[11px]">
          <TextWithIcon
            text="US 8,234,567"
            icon={<FileText className="h-3 w-3 text-red-500" />}
          />
          <TextWithIcon
            text="US 7,891,234"
            icon={<FileText className="h-3 w-3 text-red-500" />}
          />
          <div className="text-black/45 pt-0.5">
            +6 more
          </div>
        </div>

        <TextWithBorderAndIcon
          text="Analysis Status"
          icon={<Search className="h-3.5 w-3.5 text-blue-500" />}
        >
          <div className="space-y-1.5 text-[11px]">
            <DotWithText
              text="Prior art search completed"
              dot={<Circle className="h-2 w-2 text-green-600 fill-green-600" />}
            />
            <DotWithText
              text="Freedom to operate analysis"
              dot={<Circle className="h-2 w-2 text-green-600 fill-green-600" />}
            />
            <DotWithText
              text="Novelty assessment in progress"
              dot={<Circle className="h-2 w-2 text-amber-500 fill-amber-500" />}
            />
          </div>
        </TextWithBorderAndIcon>
      </div>

      <div className="mt-3">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-1 rounded-lg border border-black/10 bg-black/[0.02] px-2 py-1.5 text-[10px] font-medium text-black/70 hover:bg-black/5 transition-colors"
        >
          Generate Report
        </button>
      </div>
    </div>
  )
}

// P1: Prior Art analysis (from protectionDeck - same as E3 but with different content)
export function P1({ stageKey, isActive }: { stageKey?: string | number; isActive?: boolean }) {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex flex-col" style={{ width: CARD_WIDTH, height: "100%" }}>
      <div className="mb-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-black/85">
            Prior Art analysis
          </div>
          <div className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-1.5 py-0.5 text-[10px] font-medium text-black/60 shadow-sm">
            Case # 512
          </div>
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-black/10 bg-black/[0.02] p-3">
        <div className="mb-2">
          <TextWithIconHeader
            text="Literature Review"
            icon={<FileText className="h-3.5 w-3.5 text-green-600" />}
          />
        </div>
        <div className="space-y-1.5 text-[11px]">
          <TextWithIcon
            text="Science Journal"
            icon={<FileText className="h-3 w-3 text-green-600" />}
          />
          <TextWithIcon
            text="Cell Biology Review"
            icon={<FileText className="h-3 w-3 text-green-600" />}
          />
          <div className="text-black/45 pt-0.5">
            +5 more
          </div>
        </div>

        <TextWithBorderAndIcon
          text="Key Findings"
          icon={<Search className="h-3.5 w-3.5 text-blue-500" />}
        >
          <div className="space-y-1.5 text-[11px]">
            <DotWithText
              text="Strong novelty indicators"
              dot={<Circle className="h-2 w-2 text-green-600 fill-green-600" />}
            />
            <DotWithText
              text="Clear inventive step"
              dot={<Circle className="h-2 w-2 text-green-600 fill-green-600" />}
            />
            <DotWithText
              text="Broad claim scope potential"
              dot={<Circle className="h-2 w-2 text-green-600 fill-green-600" />}
            />
            <DotWithText
              text="Commercial viability confirmed"
              dot={<Circle className="h-2 w-2 text-green-600 fill-green-600" />}
            />
          </div>
        </TextWithBorderAndIcon>
      </div>

      <div className="mt-3">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-1 rounded-lg border border-black/10 bg-black/[0.02] px-2 py-1.5 text-[10px] font-medium text-black/70 hover:bg-black/5 transition-colors"
        >
          Generate Report
        </button>
      </div>
    </div>
  )
}

// P2: Market Analysis (from protectionDeck)
export function P2({ stageKey, isActive }: { stageKey?: string | number; isActive?: boolean }) {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex flex-col" style={{ width: CARD_WIDTH, height: "100%" }}>
      <div className="mb-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-black/85">
            Market Analysis
          </div>
          <div className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-1.5 py-0.5 text-[10px] font-medium text-black/60 shadow-sm">
            Case # 512
          </div>
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-black/10 bg-black/[0.02] p-3">
        <div className="space-y-3 text-[11px]">
          <div>
            <TextWithIcon
              text="Comparable deals:"
              icon={<TrendingUp className="h-3.5 w-3.5 text-blue-500" />}
              iconPosition="left"
              className="mb-1.5 font-semibold text-black/85"
            />
            <div className="text-black/60 pl-6">
              Vaccine Technology Sector
            </div>
          </div>

          <div>
            <div className="font-semibold text-black/85 mb-1.5">
              Deal structure:
            </div>
            <div className="space-y-1.5 pl-0">
              <TextWithIcon
                text="Royalty Range: 1% to 3%"
                icon={<DollarSign className="h-3 w-3 text-green-600" />}
                iconPosition="left"
              />
              <TextWithIcon
                text="Average Deal Size: $45M"
                icon={<BarChart className="h-3 w-3 text-green-600" />}
                iconPosition="left"
              />
            </div>
          </div>

          <div>
            <div className="font-semibold text-black/85 mb-1.5">
              Milestone Payments:
            </div>
            <div className="space-y-1.5 pl-0">
              <TextWithAmount
                text="Animal model validation:"
                amount="$150,000"
              />
              <TextWithAmount
                text="Human clinical trials:"
                amount="$250,000"
              />
              <TextWithAmount
                text="Phase III completion:"
                amount="$500,000"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-1 rounded-lg border border-black/10 bg-black/[0.02] px-2 py-1.5 text-[10px] font-medium text-black/70 hover:bg-black/5 transition-colors"
        >
          Generate Report
        </button>
      </div>
    </div>
  )
}

// P3: Prior Art analysis (from protectionDeck)
export function P3({ stageKey, isActive }: { stageKey?: string | number; isActive?: boolean }) {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex flex-col" style={{ width: CARD_WIDTH, height: "100%" }}>
      <div className="mb-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-black/85">
            Prior Art analysis
          </div>
          <div className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-1.5 py-0.5 text-[10px] font-medium text-black/60 shadow-sm">
            Case # 512
          </div>
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-black/10 bg-black/[0.02] p-3">
        <div className="space-y-3 text-[11px]">
          <div>
            <div className="mb-1.5">
              <TextWithIconHeader
                text="Data Sources"
                icon={<FileText className="h-3.5 w-3.5 text-purple-500" />}
              />
            </div>
            <div className="space-y-1.5 text-[11px] mt-1.5">
              <TextWithIcon
                text="Royalty Range Database"
                icon={<FileText className="h-3 w-3 text-purple-500" />}
                iconPosition="left"
              />
              <TextWithIcon
                text="SEC 10Q Reports"
                icon={<FileText className="h-3 w-3 text-purple-500" />}
                iconPosition="left"
              />
              <div className="text-black/45 pt-0.5">
                +2 more
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-black/10">
            <div className="mb-1.5">
              <TextWithIconHeader
                text="Market Intelligence"
                icon={<Users className="h-3.5 w-3.5 text-orange-500" />}
              />
            </div>
            <div className="space-y-1.5 text-[11px] mt-1.5">
              <TextWithIcon
                text="Competitive landscape"
                icon={<Circle className="h-2 w-2 text-green-600 fill-green-600" />}
                iconPosition="left"
              />
              <TextWithIcon
                text="Key player analysis complete"
                icon={<Circle className="h-2 w-2 text-green-600 fill-green-600" />}
                iconPosition="left"
              />
              <TextWithIcon
                text="Market trends identified"
                icon={<Circle className="h-2 w-2 text-green-600 fill-green-600" />}
                iconPosition="left"
              />
              <TextWithIcon
                text="Pricing benchmarks"
                icon={<Circle className="h-2 w-2 text-green-600 fill-green-600" />}
                iconPosition="left"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-1 rounded-lg border border-black/10 bg-black/[0.02] px-2 py-1.5 text-[10px] font-medium text-black/70 hover:bg-black/5 transition-colors"
        >
          Generate Report
        </button>
      </div>
    </div>
  )
}
