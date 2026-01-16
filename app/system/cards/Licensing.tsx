"use client"
import * as React from "react"
import { Target, Users, DollarSign, CheckCircle2, TrendingUp, Clock, FileText, Shield, Globe, AlertCircle, Calendar, Circle } from "lucide-react"

const CARD_WIDTH = 240

// L1: Licensing Strategy (3x width)
export function L1({ stageKey, isActive }: { stageKey?: string | number; isActive?: boolean }) {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex flex-col" style={{ width: CARD_WIDTH * 3, height: "100%" }}>
      <div className="mb-3">
        <div className="text-sm font-semibold text-black/85 mb-1">Licensing Strategy</div>
        <div className="text-[10px] text-black/50">Licensing process information</div>
      </div>

      <div>
        {/* Top Row - 3 columns */}
        <div className="grid grid-cols-3 divide-x divide-black/10">
          <div className="pr-[1px] pb-[1px]">
            <div className="pr-3 pb-3 space-y-2">
              <div className="flex items-center gap-2 mb-1.5">
                <Target className="h-3.5 w-3.5 text-blue-500" />
                <div className="font-semibold text-black/85 text-[11px]">Market Strategy</div>
              </div>
              <div className="space-y-1 text-[11px] text-black/60">
                <div>Target Markets: Biotech, Pharma</div>
                <div>Geographic Focus: Global</div>
                <div>Licensing Model: Exclusive</div>
                <div>Revenue Target: $50M+</div>
              </div>
            </div>
          </div>

          <div className="px-[1px] pb-[1px]">
            <div className="px-3 pb-3 space-y-2">
              <div className="flex items-center gap-2 mb-1.5">
                <Users className="h-3.5 w-3.5 text-green-500" />
                <div className="font-semibold text-black/85 text-[11px]">Target Partners</div>
              </div>
              <div className="space-y-1 text-[11px] text-black/60">
                <div>Identified Companies: 25</div>
                <div>Tier 1 Prospects: 8</div>
                <div>Initial Contacts: 12</div>
                <div>Meetings Scheduled: 5</div>
              </div>
            </div>
          </div>

          <div className="pl-[1px] pb-[1px]">
            <div className="pl-3 pb-3 space-y-2">
              <div className="flex items-center gap-2 mb-1.5">
                <DollarSign className="h-3.5 w-3.5 text-purple-500" />
                <div className="font-semibold text-black/85 text-[11px]">Financial Terms</div>
              </div>
              <div className="space-y-1 text-[11px] text-black/60">
                <div>Upfront Payment: $2-5M</div>
                <div>Milestone Payments: $45M</div>
                <div>Royalty Rate: 8-12%</div>
                <div>Minimum Guarantees: $10M</div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="h-px bg-black/10 my-[1px]" />

        {/* Bottom Row - 3 columns */}
        <div className="grid grid-cols-3 divide-x divide-black/10">
          <div className="pr-[1px] pt-[1px]">
            <div className="pr-3 pt-3 space-y-2">
              <div className="font-semibold text-black/85 text-[11px] mb-1.5">Key Milestones</div>
              <div className="space-y-1.5 text-[11px]">
                <div className="flex items-center justify-between">
                  <span className="text-black/60">Target List Finalization</span>
                  <span className="text-green-600">Completed</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/60">Initial Outreach Campaign</span>
                  <span className="text-blue-600">In Progress</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/60">First-Round Meetings</span>
                  <span className="text-orange-600">Scheduled</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/60">Strategic Partner Selection</span>
                  <span className="text-black/40">Pending</span>
                </div>
              </div>
            </div>
          </div>

          <div className="px-[1px] pt-[1px]">
            <div className="px-3 pt-3 space-y-2">
              <div className="font-semibold text-black/85 text-[11px] mb-1.5">Success Metrics</div>
              <div className="space-y-1.5 text-[11px]">
                <div className="flex items-center justify-between">
                  <span className="text-black/60">Response Rate to Outreach</span>
                  <span className="text-green-600">48%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/60">Meeting Conversion Rate</span>
                  <span className="text-blue-600">42%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/60">Term Sheet Interest</span>
                  <span className="text-purple-600">3 prospects</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/60">Average Deal Timeline</span>
                  <span className="text-orange-600">8-12 months</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pl-[1px] pt-[1px]">
            <div className="pl-3 pt-3 space-y-2">
              <div className="font-semibold text-black/85 text-[11px] mb-1.5">Strategic Approach</div>
              <div className="space-y-2 text-[11px] text-black/60">
                <div className="flex items-start gap-2">
                  <Globe className="h-3.5 w-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-black/85 mb-0.5">Market Positioning</div>
                    <div className="text-[10px]">Position as breakthrough mRNA technology with validated therapeutic potential.</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="h-3.5 w-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-black/85 mb-0.5">Value Proposition</div>
                    <div className="text-[10px]">Proven efficacy, scalable manufacturing, regulatory pathway clarity.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// L2: Technical Due Diligence (3x width)
export function L2({ stageKey, isActive }: { stageKey?: string | number; isActive?: boolean }) {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex flex-col" style={{ width: CARD_WIDTH * 3, height: "100%" }}>
      <div className="mb-3">
        <div className="text-sm font-semibold text-black/85 mb-1">Technical Due Diligence</div>
        <div className="text-[10px] text-black/50">Licensing process information</div>
      </div>

      <div>
        {/* Top Row - 3 columns */}
        <div className="grid grid-cols-3 divide-x divide-black/10">
          <div className="pr-[1px] pb-[1px]">
            <div className="pr-3 pb-3 space-y-2">
              <div className="flex items-center gap-2 mb-1.5">
                <FileText className="h-3.5 w-3.5 text-blue-500" />
                <div className="font-semibold text-black/85 text-[11px]">Documentation Review</div>
              </div>
              <div className="space-y-1 text-[11px] text-black/60">
                <div>Technical Files: 89 documents</div>
                <div>Research Data: 45 datasets</div>
                <div>Manufacturing: 12 protocols</div>
                <div>Regulatory: 23 submissions</div>
              </div>
            </div>
          </div>

          <div className="px-[1px] pb-[1px]">
            <div className="px-3 pb-3 space-y-2">
              <div className="flex items-center gap-2 mb-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                <div className="font-semibold text-black/85 text-[11px]">Verification Status</div>
              </div>
              <div className="space-y-1 text-[11px] text-black/60">
                <div>Data Verified: 78%</div>
                <div>Claims Validated: 92%</div>
                <div>IP Confirmed: 100%</div>
                <div>Manufacturing: 85%</div>
              </div>
            </div>
          </div>

          <div className="pl-[1px] pb-[1px]">
            <div className="pl-3 pb-3 space-y-2">
              <div className="flex items-center gap-2 mb-1.5">
                <Clock className="h-3.5 w-3.5 text-purple-500" />
                <div className="font-semibold text-black/85 text-[11px]">Timeline</div>
              </div>
              <div className="space-y-1 text-[11px] text-black/60">
                <div>Duration: 8 weeks</div>
                <div>Progress: Week 5</div>
                <div>Expert Reviews: 3/4 complete</div>
                <div>Final Report: 2 weeks</div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="h-px bg-black/10 my-[1px]" />

        {/* Middle Section - Due Diligence Areas */}
        <div className="pt-[1px]">
          <div className="pt-3">
            <div className="font-semibold text-black/85 text-[11px] mb-2">Due Diligence Areas</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <FileText className="h-3.5 w-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium text-black/85 text-[11px] mb-1">Scientific Validation</div>
                    <div className="text-[10px] text-black/60 mb-1">Independent review of research data, methodology, and reproducibility by external experts</div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-green-100 text-green-700">95% Complete</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="h-3.5 w-3.5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium text-black/85 text-[11px] mb-1">IP Assessment</div>
                    <div className="text-[10px] text-black/60 mb-1">Freedom to operate analysis, patent landscape review, and competitive intelligence</div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-green-100 text-green-700">100% Complete</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <FileText className="h-3.5 w-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium text-black/85 text-[11px] mb-1">Manufacturing Feasibility</div>
                    <div className="text-[10px] text-black/60 mb-1">Scale-up potential, cost analysis, and quality control processes evaluation</div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-blue-100 text-blue-700">80% Complete</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="h-3.5 w-3.5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium text-black/85 text-[11px] mb-1">Regulatory Pathway</div>
                    <div className="text-[10px] text-black/60 mb-1">FDA/EMA guidance alignment, clinical trial design, and approval timeline assessment</div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-yellow-100 text-yellow-700">60% Complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="h-px bg-black/10 my-[1px]" />

        {/* Bottom Row - 2 columns */}
        <div className="grid grid-cols-2 divide-x divide-black/10">
          <div className="pr-[1px] pt-[1px]">
            <div className="pr-3 pt-3 space-y-2">
              <div className="font-semibold text-black/85 text-[11px] mb-1.5">Expert Review Panel</div>
              <div className="space-y-1.5 text-[11px]">
                <div className="flex items-center justify-between">
                  <span className="text-black/60">Dr. Sarah Chen - mRNA Technology</span>
                  <CheckCircle2 className="h-3 w-3 text-green-600" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/60">Prof. Michael Rodriguez - Regulatory</span>
                  <CheckCircle2 className="h-3 w-3 text-green-600" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/60">Dr. Lisa Park - Manufacturing</span>
                  <Clock className="h-3 w-3 text-blue-600" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/60">Dr. James Wilson - Clinical</span>
                  <AlertCircle className="h-3 w-3 text-orange-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="pl-[1px] pt-[1px]">
            <div className="pl-3 pt-3 space-y-2">
              <div className="font-semibold text-black/85 text-[11px] mb-1.5">Key Findings</div>
              <div className="space-y-1.5 text-[11px]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-black/60">Novel mechanism validated in multiple models</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-black/60">Strong patent protection with 15+ year runway</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-3 w-3 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span className="text-black/60">Manufacturing scale-up requires optimization</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="h-3 w-3 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-black/60">Clinical trial design under regulatory review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// L3: Negotiation (3x width)
export function L3({ stageKey, isActive }: { stageKey?: string | number; isActive?: boolean }) {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex flex-col" style={{ width: CARD_WIDTH * 3, height: "100%" }}>
      <div className="mb-3">
        <div className="text-sm font-semibold text-black/85 mb-1">Negotiation</div>
        <div className="text-[10px] text-black/50">Licensing process information</div>
      </div>

      <div>
        {/* Top Row - 3 columns */}
        <div className="grid grid-cols-3 divide-x divide-black/10">
          <div className="pr-[1px] pb-[1px]">
            <div className="pr-3 pb-3 space-y-2">
              <div className="flex items-center gap-2 mb-1.5">
                <Target className="h-3.5 w-3.5 text-blue-500" />
                <div className="font-semibold text-black/85 text-[11px]">Negotiation Status</div>
              </div>
              <div className="space-y-1 text-[11px] text-black/60">
                <div>Active Negotiations: 3 parties</div>
                <div>Round: Term Sheet</div>
                <div>Lead Prospect: BioTech Corp</div>
                <div>Timeline: 6 weeks</div>
              </div>
            </div>
          </div>

          <div className="px-[1px] pb-[1px]">
            <div className="px-3 pb-3 space-y-2">
              <div className="flex items-center gap-2 mb-1.5">
                <DollarSign className="h-3.5 w-3.5 text-green-500" />
                <div className="font-semibold text-black/85 text-[11px]">Financial Terms</div>
              </div>
              <div className="space-y-1 text-[11px] text-black/60">
                <div>Upfront: $3.5M</div>
                <div>Milestones: $42M</div>
                <div>Royalties: 10%</div>
                <div>Minimum: $8M/year</div>
              </div>
            </div>
          </div>

          <div className="pl-[1px] pb-[1px]">
            <div className="pl-3 pb-3 space-y-2">
              <div className="flex items-center gap-2 mb-1.5">
                <Calendar className="h-3.5 w-3.5 text-purple-500" />
                <div className="font-semibold text-black/85 text-[11px]">Key Dates</div>
              </div>
              <div className="space-y-1 text-[11px] text-black/60">
                <div>Term Sheet Due: March 30</div>
                <div>LOI Target: April 15</div>
                <div>Final Agreement: June 1</div>
                <div>Closing: July 15</div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="h-px bg-black/10 my-[1px]" />

        {/* Bottom Row - 3 columns */}
        <div className="grid grid-cols-3 divide-x divide-black/10">
          <div className="pr-[1px] pt-[1px]">
            <div className="pr-3 pt-3 space-y-2">
              <div className="font-semibold text-black/85 text-[11px] mb-1.5">Negotiation Points</div>
              <div className="space-y-1.5 text-[11px]">
                <div className="flex items-center justify-between">
                  <span className="text-black/60">Exclusivity Territory</span>
                  <CheckCircle2 className="h-3 w-3 text-green-600" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/60">Field of Use</span>
                  <CheckCircle2 className="h-3 w-3 text-green-600" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/60">Development Timelines</span>
                  <AlertCircle className="h-3 w-3 text-orange-600" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/60">Milestone Payments</span>
                  <AlertCircle className="h-3 w-3 text-orange-600" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/60">Sublicensing Rights</span>
                  <Circle className="h-3 w-3 text-blue-600 fill-blue-600" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/60">Termination Clauses</span>
                  <Circle className="h-3 w-3 text-blue-600 fill-blue-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="px-[1px] pt-[1px]">
            <div className="px-3 pt-3 space-y-2">
              <div className="font-semibold text-black/85 text-[11px] mb-1.5">Competing Offers</div>
              <div className="space-y-2 text-[11px]">
                <div>
                  <div className="font-medium text-black/85 mb-1">BioTech Corp</div>
                  <div className="text-green-600 mb-1">Lead</div>
                  <div className="text-[10px] text-black/60">Upfront: $3.5M | Milestones: $42M | Royalty: 10% | Territory: Global</div>
                </div>
                <div>
                  <div className="font-medium text-black/85 mb-1">PharmaCorp</div>
                  <div className="text-blue-600 mb-1">Active</div>
                  <div className="text-[10px] text-black/60">Upfront: $2.8M | Milestones: $38M | Royalty: 9% | Territory: US/EU</div>
                </div>
                <div>
                  <div className="font-medium text-black/85 mb-1">VentureX Bio</div>
                  <div className="text-orange-600 mb-1">Considering</div>
                  <div className="text-[10px] text-black/60">Upfront: $4.2M | Milestones: $35M | Royalty: 12% | Territory: Global</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pl-[1px] pt-[1px]">
            <div className="pl-3 pt-3 space-y-2">
              <div className="font-semibold text-black/85 text-[11px] mb-1.5">Recent Updates</div>
              <div className="space-y-1.5 text-[11px] text-black/60">
                <div>BioTech revised milestone structure</div>
                <div className="text-black/50 text-[10px]">2d ago</div>
                <div>Legal teams scheduled call</div>
                <div className="text-black/50 text-[10px]">3d ago</div>
                <div>PharmaCorp requested exclusivity extension</div>
                <div className="text-black/50 text-[10px]">5d ago</div>
                <div>VentureX submitted initial term sheet</div>
                <div className="text-black/50 text-[10px]">1w ago</div>
                <div>Management presentation completed</div>
                <div className="text-black/50 text-[10px]">1w ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// L4: Agreement Execution (3x width)
export function L4({ stageKey, isActive }: { stageKey?: string | number; isActive?: boolean }) {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex flex-col" style={{ width: CARD_WIDTH * 3, height: "100%" }}>
      <div className="mb-3">
        <div className="text-sm font-semibold text-black/85 mb-1">Agreement Execution</div>
        <div className="text-[10px] text-black/50">Licensing process information</div>
      </div>

      <div>
        {/* Top Row - 3 columns */}
        <div className="grid grid-cols-3 divide-x divide-black/10">
          <div className="pr-[1px] pb-[1px]">
            <div className="pr-3 pb-3 space-y-2">
              <div className="flex items-center gap-2 mb-1.5">
                <FileText className="h-3.5 w-3.5 text-blue-500" />
                <div className="font-semibold text-black/85 text-[11px]">Documentation</div>
              </div>
              <div className="space-y-1 text-[11px] text-black/60">
                <div>License Agreement: Draft v3</div>
                <div>Technical Schedules: Complete</div>
                <div>Financial Terms: Finalized</div>
                <div>Legal Review: 95%</div>
              </div>
            </div>
          </div>

          <div className="px-[1px] pb-[1px]">
            <div className="px-3 pb-3 space-y-2">
              <div className="flex items-center gap-2 mb-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                <div className="font-semibold text-black/85 text-[11px]">Execution Status</div>
              </div>
              <div className="space-y-1 text-[11px] text-black/60">
                <div>Signatures Required: 4/6</div>
                <div>Board Approval: Complete</div>
                <div>Regulatory Filing: Pending</div>
                <div>Closing Date: July 15</div>
              </div>
            </div>
          </div>

          <div className="pl-[1px] pb-[1px]">
            <div className="pl-3 pb-3 space-y-2">
              <div className="flex items-center gap-2 mb-1.5">
                <DollarSign className="h-3.5 w-3.5 text-purple-500" />
                <div className="font-semibold text-black/85 text-[11px]">Financial Setup</div>
              </div>
              <div className="space-y-1 text-[11px] text-black/60">
                <div>Escrow Account: Established</div>
                <div>Wire Instructions: Confirmed</div>
                <div>Payment Schedule: Approved</div>
                <div>First Payment: $3.5M</div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="h-px bg-black/10 my-[1px]" />

        {/* Middle Section - Agreement Terms Summary */}
        <div className="pt-[1px]">
          <div className="pt-3">
            <div className="font-semibold text-black/85 text-[11px] mb-2">Agreement Terms Summary</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Shield className="h-3.5 w-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium text-black/85 text-[11px] mb-0.5">Exclusive License</div>
                    <div className="text-[10px] text-black/60">Global exclusive rights for therapeutic applications of mRNA technology platform</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="h-3.5 w-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium text-black/85 text-[11px] mb-0.5">Term</div>
                    <div className="text-[10px] text-black/60">15 years with automatic renewal options based on patent life and commercialization</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="h-3.5 w-3.5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium text-black/85 text-[11px] mb-0.5">Development Obligations</div>
                    <div className="text-[10px] text-black/60">Phase I trials within 18 months, Phase II within 4 years, commercialization within 8 years</div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <DollarSign className="h-3.5 w-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium text-black/85 text-[11px] mb-0.5">Financial Structure</div>
                    <div className="text-[10px] text-black/60">$3.5M upfront, $42M in development milestones, 10% royalty on net sales</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium text-black/85 text-[11px] mb-0.5">Performance Milestones</div>
                    <div className="text-[10px] text-black/60">$5M at IND filing, $8M at Phase I completion, $12M at Phase II initiation</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="h-3.5 w-3.5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium text-black/85 text-[11px] mb-0.5">IP Protection</div>
                    <div className="text-[10px] text-black/60">Joint prosecution of improvements, licensee responsible for enforcement and defense</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="h-px bg-black/10 my-[1px]" />

        {/* Bottom Row - 2 columns */}
        <div className="grid grid-cols-2 divide-x divide-black/10">
          <div className="pr-[1px] pt-[1px]">
            <div className="pr-3 pt-3 space-y-2">
              <div className="font-semibold text-black/85 text-[11px] mb-1.5">Signature Status</div>
              <div className="space-y-1.5 text-[11px]">
                <div className="flex items-center justify-between">
                  <span className="text-black/60">Principal Investigator</span>
                  <CheckCircle2 className="h-3 w-3 text-green-600" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/60">Co-Inventor</span>
                  <CheckCircle2 className="h-3 w-3 text-green-600" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/60">Technology Transfer Office</span>
                  <CheckCircle2 className="h-3 w-3 text-green-600" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/60">BioTech Corp Legal</span>
                  <CheckCircle2 className="h-3 w-3 text-green-600" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/60">University President (Designate)</span>
                  <Clock className="h-3 w-3 text-orange-600" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/60">BioTech Corp CEO</span>
                  <Clock className="h-3 w-3 text-orange-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="pl-[1px] pt-[1px]">
            <div className="pl-3 pt-3 space-y-2">
              <div className="font-semibold text-black/85 text-[11px] mb-1.5">Next Steps</div>
              <div className="space-y-2 text-[11px]">
                <div className="flex items-start gap-2">
                  <Clock className="h-3.5 w-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-black/85 mb-0.5">Complete Final Signatures</div>
                    <div className="text-[10px] text-black/60">Awaiting final 2 signatures by July 10</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="h-3.5 w-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-black/85 mb-0.5">Execute Wire Transfer</div>
                    <div className="text-[10px] text-black/60">$3.5M upfront payment due at closing</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FileText className="h-3.5 w-3.5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-black/85 mb-0.5">File Regulatory Notifications</div>
                    <div className="text-[10px] text-black/60">Submit required disclosures within 30 days</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="h-3.5 w-3.5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-black/85 mb-0.5">Technology Transfer</div>
                    <div className="text-[10px] text-black/60">Schedule knowledge transfer sessions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
