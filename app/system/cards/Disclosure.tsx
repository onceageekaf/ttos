"use client"
import * as React from "react"
import { FileText, Plus, Paperclip, Loader2, Bot, Check, Mic, ArrowUp, CheckCircle2, Edit, RefreshCw, Circle, ChevronLeft, ChevronRight } from "lucide-react"

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

// Helper component for pills (always shown)
function Pills() {
  return (
    <div className="flex flex-wrap gap-2">
      <div className="rounded-lg border border-black/10 bg-white px-3 py-1.5 text-[11px] text-black/70">
        funding grant number for NIH
      </div>
      <div className="flex flex-col">
        <div className="rounded-lg border border-black/10 bg-white px-3 py-1.5 text-[11px] text-black/70">
          Email of Prof. Joe at Uni USA
        </div>
        <div className="mt-1 text-[10px] text-black/50 text-center">
          + 5 more
        </div>
      </div>
    </div>
  )
}

// C1 Stage 1: Initial upload state
export function C1S1() {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm" style={{ width: CARD_WIDTH }}>
      <div className="mb-3">
        <div className="text-sm font-semibold text-black/85">
          Disclosure Bot
        </div>
        <div className="mt-1 text-xs text-black/55">
          I will help you fill the invention disclosure form.
        </div>
      </div>

      <div className="mb-3 rounded-lg border-2 border-dashed border-black/20 bg-black/[0.01] p-4 text-center">
        <div className="relative mx-auto mb-2 flex h-10 w-10 items-center justify-center">
          <FileText className="h-8 w-8 text-black/40" />
          <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500">
            <Plus className="h-2.5 w-2.5 text-white" />
          </div>
        </div>
        <div className="text-xs font-medium text-blue-600">
          Upload manuscripts, presentations and other information
        </div>
        <div className="mt-0.5 text-[10px] text-black/45">
          or drag and drop it here
        </div>
      </div>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-2 rounded-lg border border-black/10 bg-black/[0.02] px-4 py-2 text-sm font-medium text-black/70 hover:bg-black/5 transition-colors"
      >
        <Paperclip className="h-4 w-4" />
        Upload
      </button>
    </div>
  )
}

// C1 Stage 2: Uploading state
export function C1S2() {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex flex-col h-full" style={{ width: CARD_WIDTH }}>
      <div className="mb-3">
        <div className="text-sm font-semibold text-black/85">
          2 files uploading
        </div>
      </div>

      <div className="mb-3 space-y-2 flex-1">
        <div className="flex items-center gap-2 rounded-lg border border-black/10 bg-white p-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-purple-500/10">
            <FileText className="h-4 w-4 text-purple-600" />
          </div>
          <div className="min-w-0 flex-1 text-xs text-black/70 truncate">
            Nature_draft
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-black/10 bg-white p-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-purple-500/10">
            <FileText className="h-4 w-4 text-purple-600" />
          </div>
          <div className="min-w-0 flex-1 text-xs text-black/70 truncate">
            Presentation
          </div>
        </div>
      </div>

      <button
        type="button"
        disabled
        className="flex w-full items-center justify-center gap-2 rounded-lg border border-black/10 bg-black/[0.02] px-4 py-2 text-sm font-medium text-black/70 mt-auto"
      >
        <Loader2 className="h-4 w-4 animate-spin" />
        Parsing
      </button>
    </div>
  )
}

// C1 Stage 3: Completed state
export function C1S3() {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex items-center justify-center min-h-full" style={{ width: CARD_WIDTH }}>
      <div className="flex flex-col items-center justify-center">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-600 mb-2">
          <Check className="h-4 w-4 text-white" />
        </div>
        <div className="text-sm font-semibold text-black/85 text-center">
          Completed
        </div>
      </div>
    </div>
  )
}

// C2 Stage 1: Auto-filled Disclosure form
export function C2S1({ isActive }: { isActive?: boolean }) {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex flex-col" style={{ width: CARD_WIDTH, height: "100%" }}>
      <div className="text-sm font-semibold text-black/85">
        Auto-filled Disclosure form
      </div>
      <div className="mt-1 text-sm text-black/55">
        fields extracted click to review
      </div>

      <div className="mt-4 rounded-xl border border-black/10 bg-black/[0.02] p-3">
        <div className="space-y-2 text-[11px] text-black/60">
          <TextWithCheckmark text="Title" checkmark="✓" />
          <TextWithCheckmark text="Inventors" checkmark="✓" />
          <TextWithCheckmark text="Funding + grants" checkmark="✓" />
          <TextWithCheckmark text="Keywords" checkmark="✓" />
          <TextWithCheckmark text="Attachments" checkmark="2" />
        </div>

        <div className="mt-3 border-t border-black/10 pt-3 text-[11px] text-black/45">
          Missing information
        </div>
        <div className="mt-2 flex items-center gap-2 text-[11px] text-black/45">
          <Bot className="h-3.5 w-3.5 text-black/60" />
          <span>Chatbot initialising...</span>
        </div>
      </div>
    </div>
  )
}

// C2 Stage 2: Chat Bot with pills
export function C2S2({ stageKey, isActive }: { stageKey?: string | number; isActive?: boolean }) {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex flex-col" style={{ width: CARD_WIDTH, height: "100%" }}>
      <div className="mb-3 flex items-center gap-2">
        <Bot className="h-4 w-4 text-black/60" />
        <div className="text-sm font-semibold text-black/85">
          Chat Bot
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-black/10 bg-black/[0.02] p-3 flex flex-col h-full min-h-[200px]">
        <div className="text-xs text-black/60 mb-3">
          I can help you fill the following missing information
        </div>

        <div className="mb-3 flex-1">
          <Pills />
        </div>

        <div className="relative flex items-center rounded-lg border border-black/10 bg-white mt-auto">
          <input
            type="text"
            placeholder="Ask AI..."
            className="flex-1 px-3 py-2 pr-20 text-xs text-black/70 placeholder:text-black/40 bg-transparent border-none outline-none"
          />
          <div className="absolute right-2 flex items-center gap-1">
            <button
              type="button"
              className="flex h-6 w-6 items-center justify-center rounded hover:bg-black/5 transition-colors"
            >
              <Paperclip className="h-3 w-3 text-black/60" />
            </button>
            <button
              type="button"
              className="flex h-6 w-6 items-center justify-center rounded hover:bg-black/5 transition-colors"
            >
              <Mic className="h-3 w-3 text-black/60" />
            </button>
            <button
              type="button"
              className="flex h-6 w-6 items-center justify-center rounded bg-black/20 hover:bg-black/30 transition-colors"
            >
              <ArrowUp className="h-3 w-3 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// C3 Stage 1: Review state
export function C3S1({ isActive }: { isActive?: boolean }) {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex flex-col" style={{ width: CARD_WIDTH, height: "100%" }}>
      <div className="text-sm font-semibold text-black/85">Review</div>
      <div className="mt-1 text-sm text-black/55">
        Edit information and generate for more
      </div>
      <div className="mt-2 text-xs font-semibold text-black/70">
        Why is your invention better?
      </div>

      <div className="mt-4 rounded-xl border border-black/10 bg-black/[0.02] p-3 h-[120px]">
        <div className="text-xs text-black/60 leading-relaxed">
          Our Oxygen sensor uses a carbon nanotube compsite and TiO2. Operates at room temperature and requires no heating. Ceramic sensors ...
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="flex h-6 w-6 items-center justify-center rounded-full border border-black/10 hover:bg-black/5 transition-colors"
          >
            <ChevronLeft className="h-3 w-3 text-black/60" />
          </button>
          <button
            type="button"
            className="flex h-6 w-6 items-center justify-center rounded-full border border-black/10 hover:bg-black/5 transition-colors"
          >
            <ChevronRight className="h-3 w-3 text-black/60" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded hover:bg-black/5 transition-colors"
          >
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          </button>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded hover:bg-black/5 transition-colors"
            >
              <Edit className="h-4 w-4 text-black/60" />
            </button>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded hover:bg-black/5 transition-colors"
            >
              <RefreshCw className="h-4 w-4 text-black/60" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// C3 Stage 2: Routing + Signatures
export function C3S2({ isActive }: { isActive?: boolean }) {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex flex-col" style={{ width: CARD_WIDTH, height: "100%" }}>
      <div className="text-sm font-semibold text-black/85">
        Routing + Signatures
      </div>
      <div className="mt-1 text-sm text-black/55">
        Submitted IDF routing and approvals status
      </div>

      <RoutingBox />
    </div>
  )
}

// Helper component for routing box (always shown)
function RoutingBox() {
  return (
    <div className="mt-4 rounded-xl border border-black/10 bg-black/[0.02] p-3">
      <div className="flex items-center justify-between">
        <div className="text-xs font-medium text-black/60">Approvals</div>
        <div className="text-[11px] text-black/45">3/4 Signed</div>
      </div>

      <div className="mt-3 space-y-2 text-[11px]">
        <div className="flex items-center justify-between">
          <span className="text-black/55">Inventor 1</span>
          <div className="flex items-center gap-1">
            <span className="text-black/35">Signed</span>
            <CheckCircle2 className="h-3 w-3 text-green-600" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-black/55">Inventor 2</span>
          <div className="flex items-center gap-1">
            <span className="text-black/35">Signed</span>
            <CheckCircle2 className="h-3 w-3 text-green-600" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-black/55">Department Head</span>
          <div className="flex items-center gap-1">
            <span className="text-black/35">Pending</span>
            <Circle className="h-2 w-2 text-amber-500 fill-amber-500" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-black/55">TTO intake</span>
          <div className="flex items-center gap-1">
            <span className="text-black/35">Signed</span>
            <CheckCircle2 className="h-3 w-3 text-green-600" />
          </div>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-black/10">
        <div className="text-[11px] text-black/45">Case number # 312</div>
      </div>
    </div>
  )
}
