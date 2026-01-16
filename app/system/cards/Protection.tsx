"use client"
import * as React from "react"
import { CheckCircle2, User, FileText, Clock, Calendar, Globe, DollarSign, Circle, Users } from "lucide-react"

const CARD_WIDTH = 240

// P1: Combined Approval Status + Approval Timeline (was P1 + P2)
export function P1({ stageKey, isActive }: { stageKey?: string | number; isActive?: boolean }) {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex flex-col" style={{ width: CARD_WIDTH, height: "100%" }}>
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <div className="text-sm font-semibold text-black/85">Approval Status</div>
        </div>
        <div className="space-y-1.5 text-[11px]">
          <div className="flex items-center justify-between">
            <span className="text-black/60">Status:</span>
            <span className="text-black/85">Provisional filing approved</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-black/60">Approval date:</span>
            <span className="text-black/85">March 15, 2025</span>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 pt-3">
        <div className="flex items-center gap-2 mb-2">
          <FileText className="h-4 w-4 text-blue-500" />
          <div className="text-sm font-semibold text-black/85">Required Documents</div>
        </div>
        <div className="space-y-1.5 text-[11px]">
          <div className="flex items-center justify-between">
            <span className="text-black/60">Invention disclosure form</span>
            <CheckCircle2 className="h-3 w-3 text-green-600" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-black/60">Prior art search results</span>
            <CheckCircle2 className="h-3 w-3 text-green-600" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-black/60">Technical specifications</span>
            <CheckCircle2 className="h-3 w-3 text-green-600" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-black/60">Market analysis report</span>
            <CheckCircle2 className="h-3 w-3 text-green-600" />
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 pt-3">
        <div className="flex items-center gap-2 mb-3">
          <Clock className="h-4 w-4 text-purple-500" />
          <div className="text-sm font-semibold text-black/85">Approval Timeline</div>
        </div>
        <div className="space-y-3 text-[11px]">
          <div className="flex items-start gap-2">
            <Circle className="h-2 w-2 text-green-600 fill-green-600 mt-1.5 flex-shrink-0" />
            <div>
              <div className="font-semibold text-black/85">Initial Review Completed</div>
              <div className="text-black/60">March 10, 2025</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Circle className="h-2 w-2 text-green-600 fill-green-600 mt-1.5 flex-shrink-0" />
            <div>
              <div className="font-semibold text-black/85">Committee Approval</div>
              <div className="text-black/60">March 15, 2025</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Circle className="h-2 w-2 text-green-600 fill-green-600 mt-1.5 flex-shrink-0" />
            <div>
              <div className="font-semibold text-black/85">Ready for Patent Drafting</div>
              <div className="text-black/60">March 20, 2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// P2: Drafting Progress (was P3)
export function P2({ stageKey, isActive }: { stageKey?: string | number; isActive?: boolean }) {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex flex-col" style={{ width: CARD_WIDTH, height: "100%" }}>
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <div className="text-sm font-semibold text-black/85">Drafting Progress</div>
        </div>
        <div className="space-y-2 text-[11px]">
          <div className="flex items-center justify-between">
            <span className="text-black/60">Abstract</span>
            <span className="text-green-600">Complete</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-black/60">Background</span>
            <span className="text-green-600">Complete</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-black/60">Claims</span>
            <span className="text-green-600">Complete</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-black/60">Detailed Description</span>
            <span className="text-green-600">Complete</span>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 pt-3">
        <div className="flex items-center gap-2 mb-2">
          <User className="h-4 w-4 text-blue-500" />
          <div className="text-sm font-semibold text-black/85">Assigned Attorney</div>
        </div>
        <div className="space-y-1 text-[11px] text-black/60">
          <div>Attorney: Sarah Johnson, Esq.</div>
          <div>Specialization: Life sciences</div>
          <div>Contact: sarah.j@patentlaw.com</div>
        </div>
      </div>
    </div>
  )
}

// P3: Patent Sections without bottom timeline (was P4)
export function P3({ stageKey, isActive }: { stageKey?: string | number; isActive?: boolean }) {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex flex-col" style={{ width: CARD_WIDTH, height: "100%" }}>
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-3">
          <FileText className="h-4 w-4 text-purple-500" />
          <div className="text-sm font-semibold text-black/85">Patent Sections</div>
        </div>
        <div className="space-y-3 text-[11px]">
          <div className="border-l-2 border-green-600 pl-3">
            <div className="font-semibold text-black/85 mb-1">Abstract</div>
            <div className="text-black/60 leading-relaxed">Novel mRNA delivery system for enhanced therapeutic efficacy...</div>
          </div>
          <div className="border-l-2 border-green-600 pl-3">
            <div className="font-semibold text-black/85 mb-1">Background of the Invention</div>
            <div className="text-black/60 leading-relaxed">Current mRNA therapies face challenges in stability and delivery...</div>
          </div>
          <div className="border-l-2 border-green-600 pl-3">
            <div className="font-semibold text-black/85 mb-1">Claims</div>
            <div className="text-black/60 leading-relaxed">1. A method for delivering mRNA comprising... (15 claims total)</div>
          </div>
          <div className="border-l-2 border-green-600 pl-3">
            <div className="font-semibold text-black/85 mb-1">Detailed Description</div>
            <div className="text-black/60 leading-relaxed">Comprehensive technical specification and implementation details...</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// P4: Inventors Review + Key Comments from P6 (was P5 + Key Comments from P6)
export function P4({ stageKey, isActive }: { stageKey?: string | number; isActive?: boolean }) {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex flex-col" style={{ width: CARD_WIDTH, height: "100%" }}>
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-2">
          <Users className="h-4 w-4 text-green-600" />
          <div className="text-sm font-semibold text-black/85">Inventors Review</div>
        </div>
        <div className="space-y-2 text-[11px]">
          <div className="flex items-center justify-between">
            <span className="text-black/60">Jane Doe</span>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3 text-green-600" />
              <span className="text-green-600">Reviewed</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-black/60">Jack Smith</span>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3 text-green-600" />
              <span className="text-green-600">Reviewed</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 pt-3">
        <div className="flex items-center gap-2 mb-2">
          <FileText className="h-4 w-4 text-blue-500" />
          <div className="text-sm font-semibold text-black/85">Review Status</div>
        </div>
        <div className="space-y-2 text-[11px]">
          <div className="flex items-center justify-between">
            <span className="text-black/60">Technical accuracy</span>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3 text-green-600" />
              <span className="text-green-600">Approved</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-black/60">Claims scope</span>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3 text-green-600" />
              <span className="text-green-600">Approved</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-black/60">Prior art coverage</span>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3 text-green-600" />
              <span className="text-green-600">Approved</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 pt-3">
        <div className="text-sm font-semibold text-black/85 mb-2">Key Comments</div>
        <div className="rounded-lg border border-black/10 bg-black/[0.02] p-3 text-[11px] text-black/60 leading-relaxed">
          "Technical description accurate. Suggest expanding claim 7 for additional delivery mechanisms."
          <div className="mt-2 text-black/50">- Jane Doe</div>
        </div>
      </div>
    </div>
  )
}

// P5: Filing Status (was P7)
export function P5({ stageKey, isActive }: { stageKey?: string | number; isActive?: boolean }) {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex flex-col" style={{ width: CARD_WIDTH, height: "100%" }}>
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <div className="text-sm font-semibold text-black/85">Filing Status</div>
        </div>
        <div className="space-y-1.5 text-[11px] text-black/60">
          <div><span className="font-medium">Application Type:</span> Utility Patent</div>
          <div><span className="font-medium">Filing Date:</span> May 15, 2025</div>
          <div><span className="font-medium">Application Number:</span> US 18/123,456</div>
          <div><span className="font-medium">Status:</span> Under examination</div>
        </div>
      </div>

      <div className="border-t border-black/10 pt-3">
        <div className="flex items-center gap-2 mb-2">
          <DollarSign className="h-4 w-4 text-blue-500" />
          <div className="text-sm font-semibold text-black/85">Filing Costs</div>
        </div>
        <div className="space-y-1.5 text-[11px]">
          <div className="flex items-center justify-between">
            <span className="text-black/60">USPTO Basic Fee</span>
            <div className="flex items-center gap-1">
              <span className="text-black/85">$1,760</span>
              <CheckCircle2 className="h-3 w-3 text-green-600" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-black/60">Search Fee</span>
            <div className="flex items-center gap-1">
              <span className="text-black/85">$700</span>
              <CheckCircle2 className="h-3 w-3 text-green-600" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-black/60">Examination Fee</span>
            <div className="flex items-center gap-1">
              <span className="text-black/85">$800</span>
              <CheckCircle2 className="h-3 w-3 text-green-600" />
            </div>
          </div>
          <div className="border-t border-black/10 pt-1.5 mt-1.5">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-black/85">Total Paid</span>
              <span className="font-semibold text-black/85">$3,260</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// P6: Prosecution Timeline (was P8)
export function P6({ stageKey, isActive }: { stageKey?: string | number; isActive?: boolean }) {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex flex-col" style={{ width: CARD_WIDTH, height: "100%" }}>
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="h-4 w-4 text-purple-500" />
          <div className="text-sm font-semibold text-black/85">Prosecution Timeline</div>
        </div>
        <div className="space-y-3 text-[11px]">
          <div className="flex items-start gap-2">
            <Circle className="h-2 w-2 text-green-600 fill-green-600 mt-1.5 flex-shrink-0" />
            <div>
              <div className="font-semibold text-black/85">Application Filed</div>
              <div className="text-black/60">May 15, 2025</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Circle className="h-2 w-2 text-blue-500 fill-blue-500 mt-1.5 flex-shrink-0" />
            <div>
              <div className="font-semibold text-black/85">First Office Action</div>
              <div className="text-black/60">Expected: November 2026</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Circle className="h-2 w-2 text-black/30 fill-black/30 mt-1.5 flex-shrink-0" />
            <div>
              <div className="font-semibold text-black/85">Response Period</div>
              <div className="text-black/60">3-6 months to respond</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Circle className="h-2 w-2 text-black/30 fill-black/30 mt-1.5 flex-shrink-0" />
            <div>
              <div className="font-semibold text-black/85">Patent Grant</div>
              <div className="text-black/60">Expected: 2027-2029</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 pt-3">
        <div className="flex items-center gap-2 mb-2">
          <Globe className="h-4 w-4 text-purple-500" />
          <div className="text-sm font-semibold text-black/85">International Filing</div>
        </div>
        <div className="space-y-1 text-[11px] text-black/60">
          <div><span className="font-medium">PCT Decision:</span> To be decided</div>
          <div><span className="font-medium">Decision due:</span> May 15, 2026</div>
        </div>
      </div>
    </div>
  )
}
