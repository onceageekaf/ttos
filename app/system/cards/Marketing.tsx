"use client"
import * as React from "react"
import { Lightbulb, CheckCircle2, FileText, Users, TrendingUp, BarChart3, Target, Folder, Eye, Clock, AlertCircle, DollarSign, Shield, Calculator, Wrench } from "lucide-react"

const CARD_WIDTH = 240

// M1: Invention Overview
export function M1({ stageKey, isActive }: { stageKey?: string | number; isActive?: boolean }) {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex flex-col" style={{ width: CARD_WIDTH, height: "100%" }}>
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className="h-4 w-4 text-yellow-500" />
          <div className="text-sm font-semibold text-black/85">Invention Overview</div>
        </div>
        <div className="space-y-2 text-[11px] text-black/60">
          <div>
            <span className="font-medium text-black/85">Title:</span> mRNA Vaccine Technology
          </div>
          <div>
            <span className="font-medium text-black/85">Field:</span> Biotechnology & Medicine
          </div>
          <div>
            <span className="font-medium text-black/85">Innovation Type:</span> Breakthrough Technology
          </div>
          <div>
            <span className="font-medium text-black/85">Development Stage:</span> Proof of Concept
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 pt-3">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <div className="text-sm font-semibold text-black/85">Key Benefits</div>
        </div>
        <div className="space-y-1.5 text-[11px] text-black/60">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-600" />
            <span>Rapid vaccine development capability</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-600" />
            <span>Enhanced immune response</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-600" />
            <span>Scalable manufacturing process</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-600" />
            <span>Cost-effective production</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// M2: Technical Summary & Target Applications
export function M2({ stageKey, isActive }: { stageKey?: string | number; isActive?: boolean }) {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex flex-col" style={{ width: CARD_WIDTH, height: "100%" }}>
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-2">
          <FileText className="h-4 w-4 text-purple-500" />
          <div className="text-sm font-semibold text-black/85">Technical Summary</div>
        </div>
        <div className="space-y-2 text-[11px] text-black/60 leading-relaxed">
          <p>This innovation represents a significant advancement in mRNA vaccine technology, providing enhanced stability and efficacy compared to existing solutions.</p>
          <p>The technology enables rapid response to emerging pathogens while maintaining high safety standards and manufacturing scalability.</p>
        </div>
      </div>

      <div className="border-t border-black/10 pt-3">
        <div className="flex items-center gap-2 mb-2">
          <Users className="h-4 w-4 text-orange-500" />
          <div className="text-sm font-semibold text-black/85">Target Applications</div>
        </div>
        <div className="space-y-1.5 text-[11px] text-black/60">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            <span>Pandemic response vaccines</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            <span>Personalized cancer immunotherapy</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            <span>Rare disease treatments</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            <span>Preventive medicine applications</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// M3: Marketing Campaign
export function M3({ stageKey, isActive }: { stageKey?: string | number; isActive?: boolean }) {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex flex-col" style={{ width: CARD_WIDTH, height: "100%" }}>
      <div className="mb-2">
        <div className="text-sm font-semibold text-black/85 mb-1">Marketing Campaign</div>
        <div className="text-[10px] text-black/50">Marketing process information</div>
      </div>

      <div className="space-y-3 text-[11px]">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <Users className="h-3.5 w-3.5 text-blue-500" />
            <div className="font-semibold text-black/85">Contact Lists</div>
          </div>
          <div className="space-y-1 text-black/60 pl-6">
            <div>Industry Partners: 147 contacts</div>
            <div>Investors: 89 contacts</div>
            <div>Research Institutions: 234 contacts</div>
            <div>Government Agencies: 45 contacts</div>
          </div>
        </div>

        <div className="border-t border-black/10 pt-2">
          <div className="flex items-center gap-2 mb-1.5">
            <FileText className="h-3.5 w-3.5 text-green-500" />
            <div className="font-semibold text-black/85">Campaign Status</div>
          </div>
          <div className="space-y-1 text-black/60 pl-6">
            <div>Emails Sent: 325</div>
            <div>Open Rate: 68%</div>
            <div>Response Rate: 24%</div>
            <div>Meetings Scheduled: 18</div>
          </div>
        </div>

        <div className="border-t border-black/10 pt-2">
          <div className="flex items-center gap-2 mb-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-purple-500" />
            <div className="font-semibold text-black/85">Top Prospects</div>
          </div>
          <div className="space-y-1 text-black/60 pl-6">
            <div>BioTech Corp - High Interest</div>
            <div>PharmaCorp International</div>
            <div>VentureX Bio - Follow-up scheduled</div>
            <div>MedTech Solutions</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// M4: Financial Model (2x width)
export function M4({ stageKey, isActive }: { stageKey?: string | number; isActive?: boolean }) {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex flex-col" style={{ width: CARD_WIDTH * 2, height: "100%" }}>
      <div className="mb-3">
        <div className="text-sm font-semibold text-black/85 mb-1">Financial Model</div>
        <div className="text-[10px] text-black/50">Marketing process information</div>
      </div>

      <div className="grid grid-cols-3 divide-x divide-black/10">
        {/* Top Row */}
        <div className="pr-[1px] pb-[1px]">
          <div className="pr-3 pb-3 space-y-2">
            <div className="flex items-center gap-2 mb-1.5">
              <DollarSign className="h-3.5 w-3.5 text-green-500" />
              <div className="font-semibold text-black/85 text-[11px]">Revenue Model</div>
            </div>
            <div className="space-y-1 text-[11px] text-black/60">
              <div>Licensing Revenue: $2.5M</div>
              <div>Royalty Rate: 3.5%</div>
              <div>Upfront Payment: $500K</div>
              <div>Milestone Payments: $1.2M</div>
              <div className="mt-1.5 pt-1.5 border-t border-black/10">
                <div className="font-medium text-black/85 mb-1">Annual Projections:</div>
                <div>Year 1: $800K</div>
                <div>Year 3: $2.1M</div>
                <div>Year 5: $4.8M</div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-[1px] pb-[1px]">
          <div className="px-3 pb-3 space-y-2">
            <div className="flex items-center gap-2 mb-1.5">
              <TrendingUp className="h-3.5 w-3.5 text-blue-500" />
              <div className="font-semibold text-black/85 text-[11px]">Market Analysis</div>
            </div>
            <div className="space-y-1 text-[11px] text-black/60">
              <div>TAM: $12.5B</div>
              <div>SAM: $3.2B</div>
              <div>Market Share Target: 0.8%</div>
              <div>Growth Rate: 15% CAGR</div>
              <div className="mt-1.5 pt-1.5 border-t border-black/10">
                <div className="font-medium text-black/85 mb-1">Competition:</div>
                <div>Direct Competitors: 3</div>
                <div>Indirect Competitors: 12</div>
                <div className="text-green-600">Competitive Advantage: Strong</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pl-[1px] pb-[1px]">
          <div className="pl-3 pb-3 space-y-2">
            <div className="flex items-center gap-2 mb-1.5">
              <BarChart3 className="h-3.5 w-3.5 text-green-500" />
              <div className="font-semibold text-black/85 text-[11px]">Revenue Breakdown</div>
            </div>
            <div className="space-y-2 text-[11px]">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-black/60">Upfront Fees</span>
                  <span className="text-black/85">20%</span>
                </div>
                <div className="h-2 bg-black/5 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: "20%" }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-black/60">Milestone Payments</span>
                  <span className="text-black/85">30%</span>
                </div>
                <div className="h-2 bg-black/5 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "30%" }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-black/60">Royalty Revenue</span>
                  <span className="text-black/85">50%</span>
                </div>
                <div className="h-2 bg-black/5 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: "50%" }} />
                </div>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-black/10">
              <div className="flex items-center gap-2 mb-1.5">
                <BarChart3 className="h-3.5 w-3.5 text-purple-500" />
                <div className="font-semibold text-black/85 text-[11px]">Financial Metrics</div>
              </div>
              <div className="space-y-1 text-[11px] text-black/60">
                <div>NPV (10 years): $18.5M</div>
                <div>IRR: 45%</div>
                <div>Payback Period: 2.8 years</div>
                <div className="text-orange-600">Risk Score: Medium</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// M5: Data Room (2x width)
export function M5({ stageKey, isActive }: { stageKey?: string | number; isActive?: boolean }) {
  return (
    <div className="p-4 border border-black/10 bg-white rounded-2xl elevation-sm flex flex-col" style={{ width: CARD_WIDTH * 2, height: "100%" }}>
      <div className="mb-3">
        <div className="text-sm font-semibold text-black/85 mb-1">Data Room</div>
        <div className="text-[10px] text-black/50">Marketing process information</div>
      </div>

      <div>
        {/* Top Row - 3 columns */}
        <div className="grid grid-cols-3 divide-x divide-black/10">
          <div className="pr-[1px] pb-[1px]">
            <div className="pr-3 pb-3 space-y-2">
              <div className="flex items-center gap-2 mb-1.5">
                <Folder className="h-3.5 w-3.5 text-blue-500" />
                <div className="font-semibold text-black/85 text-[11px]">Categories</div>
              </div>
              <div className="space-y-1 text-[11px] text-black/60">
                <div>Technical: 24 files</div>
                <div>Financial Models: 8 files</div>
                <div>Legal Documents: 15 files</div>
                <div>Market Research: 12 files</div>
              </div>
            </div>
          </div>

          <div className="px-[1px] pb-[1px]">
            <div className="px-3 pb-3 space-y-2">
              <div className="flex items-center gap-2 mb-1.5">
                <Users className="h-3.5 w-3.5 text-green-500" />
                <div className="font-semibold text-black/85 text-[11px]">Access Control</div>
              </div>
              <div className="space-y-1 text-[11px] text-black/60">
                <div>Authorized Users: 18</div>
                <div>Pending Invitations: 5</div>
                <div>Active Sessions: 7</div>
                <div>Downloads: 12</div>
              </div>
            </div>
          </div>

          <div className="pl-[1px] pb-[1px]">
            <div className="pl-3 pb-3 space-y-2">
              <div className="flex items-center gap-2 mb-1.5">
                <Eye className="h-3.5 w-3.5 text-purple-500" />
                <div className="font-semibold text-black/85 text-[11px]">Activity Summary</div>
              </div>
              <div className="space-y-1 text-[11px] text-black/60">
                <div>Total Views: 342</div>
                <div>Downloads: 89</div>
                <div>Last Access: 2 hours ago</div>
                <div>Peak Activity: March 22</div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="h-px bg-black/10 my-[1px]" />

        {/* Second Row - 2 columns */}
        <div className="grid grid-cols-2 divide-x divide-black/10">
          <div className="pr-[1px] pt-[1px]">
            <div className="pr-3 pt-3 space-y-2">
              <div className="font-semibold text-black/85 text-[11px] mb-1.5">Data Room Contents</div>
              <div className="space-y-2 text-[11px]">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-2 flex-1">
                    <FileText className="h-3.5 w-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-medium text-black/85">Executive Summary</div>
                      <div className="text-black/60 text-[10px]">Complete overview</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-black/50">
                    <Eye className="h-3 w-3" />
                    <span>45</span>
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-2 flex-1">
                    <FileText className="h-3.5 w-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-medium text-black/85">Technical Specs</div>
                      <div className="text-black/60 text-[10px]">Documentation</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-black/50">
                    <Eye className="h-3 w-3" />
                    <span>32</span>
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-2 flex-1">
                    <FileText className="h-3.5 w-3.5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-medium text-black/85">Financial Models</div>
                      <div className="text-black/60 text-[10px]">Revenue projections</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-black/50">
                    <Eye className="h-3 w-3" />
                    <span>28</span>
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-2 flex-1">
                    <FileText className="h-3.5 w-3.5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-medium text-black/85">IP Portfolio</div>
                      <div className="text-black/60 text-[10px]">Patent applications</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-black/50">
                    <Eye className="h-3 w-3" />
                    <span>23</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pl-[1px] pt-[1px]">
            <div className="pl-3 pt-3 space-y-2">
              <div className="font-semibold text-black/85 text-[11px] mb-1.5">Legal Agreements</div>
              <div className="space-y-2 text-[11px]">
                <div className="flex items-center gap-2">
                  <FileText className="h-3.5 w-3.5 text-green-500" />
                  <span className="text-black/60">NDAs Signed:</span>
                  <span className="text-black/85">15/18</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-3.5 w-3.5 text-blue-500" />
                  <span className="text-black/60">MTAs:</span>
                  <span className="text-black/85">8/12</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-3.5 w-3.5 text-orange-500" />
                  <span className="text-orange-600">Next Steps: 3 pending</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-purple-500" />
                  <span className="text-purple-600">Due Diligence: 5 active</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wrench className="h-3.5 w-3.5 text-gray-500" />
                  <span className="text-black/60">Licensing:</span>
                  <span className="text-black/85">2 received</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
