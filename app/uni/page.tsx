import HeroSection from "@/components/layout/HeroSection"
import PageSection from "@/components/layout/PageSection"
import SectionIntro from "@/components/sections/System/SectionIntro"
import Logo from "@/components/elements/Logo"
import { Badge } from "@/components/ui/badge"
import { CircleXIcon, ExternalLink, Cog, Users, Zap, TrendingUp, AlertCircle, Layers, Activity, LayoutGrid, FileText, BarChart, Settings, Shield, Database, ClipboardCheck, Bell, Globe, Eye, FileLock, LayoutDashboard } from "lucide-react"

export default function UniPage() {
  return (
    <>
      {/* HERO */}
      <div className="relative">
       
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_35%,rgba(255,255,255,0.9)_82%,rgba(255,255,255,1)_100%)]" />
        <div className="relative z-10">
          <HeroSection
            className="pt-56 pb-44"
            headline= { <>TTOs -  <br/> meet,  ttOS.</> }
             subline= { <>Improve Productivity. <br/> Reduce manual work. <br/> Build trust.</> }
           >
           
            
          </HeroSection>
        </div>
      </div>


      {/* SECTION 1: SIZE SPECTRUM */}
      <PageSection
        eyebrow="Sizing"
        title="One workflow doesn't fit every office."
        description={
          <>
            Disclosure volume and staffing determine what tools, process discipline, and reporting are even possible.
            <br />
            Segmenting TTOs,
          </>
        }
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { tier: "XL", label: "XL", disclosures: "500+", staff: "50+", note: "Industrial-scale throughput" },
            { tier: "L", label: "Large", disclosures: "300+", staff: "30+", note: "Dedicated specialization by stage" },
            { tier: "M", label: "Medium", disclosures: "100+", staff: "10+", note: "Hybrid roles, heavy context switching" },
            { tier: "S", label: "Small", disclosures: "≤ 50", staff: "1–3", note: "Heroic effort, fragile continuity" },
          ].map((x) => (
            <div key={x.tier} className="rounded-2xl border border-black/10 bg-white p-4 text-center elevation-md">
              <div className="text-lg font-medium text-black/50">{x.label}</div>
              <div className="mt-2 text-xl font-semibold tracking-tight text-black">{x.disclosures}</div>
              <div className="text-sm text-black/55">disclosures / year</div>

              <div className="mt-3 text-xl font-semibold tracking-tight text-black">{x.staff}</div>
              <div className="text-sm text-black/55">staff</div>

              <div className="mt-3 text-sm text-black/60">{x.note}</div>
            </div>
          ))}
        </div>
      </PageSection>

      {/* SECTION 2: XL SPOTLIGHT */}
      <PageSection
        eyebrow="XL Spotlight"
        title="MIT Technology Licensing Office (TLO)"
        description=""
        topDivider
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* MIT metrics */}
          <div className="rounded-2xl border border-black/10 bg-white p-5 elevation-md">
            <div>
              <div className="text-sm font-semibold text-black">MIT TLO</div>
              <div className="text-xs text-black/50 mt-1 flex items-center gap-1.5 flex-wrap">
                Sources: MIT TLO FY2025 Annual Report (PDF)
                <a
                  href="https://tlo.mit.edu/sites/default/files/2025-08/TLO-FY2025AnnualReport%20%28Web%29_0.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-black/50 hover:text-black/70 transition-colors"
                >
                  <ExternalLink className="h-3 w-3" />
                </a>
                <span className="mx-1">•</span>
                Team size
                <a
                  href="https://tlo.mit.edu/about/our-team"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-black/50 hover:text-black/70 transition-colors"
                >
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                { k: "Invention disclosures", v: "684" },
                { k: "New patents filed", v: "623" },
                { k: "Licenses and Options", v: "137" },
                { k: "Technologies available", v: "2,849" },
              ].map((m) => (
                <div key={m.k} className="rounded-xl border border-black/10 bg-neutral-50 p-3 flex flex-col justify-between min-h-[70px] elevation-md">
                  <div className="text-[11px] leading-4 text-black/50">{m.k}</div>
                  <div className="text-lg font-semibold text-black">{m.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <div className="text-sm font-semibold text-black mb-3">MIT TLO Team</div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {[
                  { k: "Total Staff", v: "49" },
                  { k: "Senior leadership", v: "5" },
                  { k: "Licensing team", v: "16" },
                  { k: "Admin and support", v: "28" },
                ].map((m) => (
                  <div key={m.k} className="rounded-xl border border-black/10 bg-neutral-50 p-3 flex flex-col justify-between min-h-[70px] elevation-md">
                    <div className="text-[11px] leading-4 text-black/50">{m.k}</div>
                    <div className="text-lg font-semibold text-black">{m.v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-black/10 bg-neutral-50 p-4 elevation-md">
              <div className="text-xs font-medium text-black/60 mb-4">Volume data - 2020 to 2025</div>

              {/* Graph */}
              <div className="space-y-4">
                {[
                  { label: "License Agreements Executed", historical: 1955, fy2025: 90 },
                  { label: "Disclosures Received", historical: 15639, fy2025: 684 },
                ].map((item) => {
                  const maxValue = Math.max(item.historical, 20000);
                  const historicalWidth = (item.historical / maxValue) * 100;
                  
                  return (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="w-40 text-xs font-semibold text-black/70 flex-shrink-0">
                        {item.label}
                      </div>
                      <div className="flex-1 flex items-center relative">
                        <div className="flex-1 flex items-center">
                          <div
                            className="h-8 bg-neutral-200 border border-black/10"
                            style={{ width: `${historicalWidth}%` }}
                          />
                          <div className="text-xs font-semibold text-black/70 ml-2">
                            {(item.historical + item.fy2025).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Assumptions */}
          <div className="rounded-2xl border border-black/10 bg-white p-5 elevation-md">
            <div className="text-sm font-semibold text-black mb-5 flex items-center gap-2">
              <Cog className="h-4 w-4 text-black/60" />
              Automation Benefits
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Left Column: Time Estimate */}
              <div>
                <div className="text-sm font-semibold text-black mb-4">Time Estimate</div>
                <div className="space-y-4">
                  {/* Disclosure Card */}
                  <div className="rounded-xl border border-black/10 bg-neutral-50 p-4">
                    <div className="font-medium text-sm text-black/80">Disclosure</div>
                    <div className="text-[10px] text-black/50 mb-2">Assumptions</div>
                    <div className="text-xs text-black/70 space-y-1">
                      <div>• 5 hours / Disclosure Form</div>
                      <div>= 684 × 5 hours</div>
                      <div>= 3,420 hours</div>
                      <div className="flex items-center gap-1.5">
                        <AlertCircle className="h-3 w-3 text-black/50" />
                        <span>~2 FTE of academic</span>
                      </div>
                    </div>
                  </div>

                  {/* Evaluation Card */}
                  <div className="rounded-xl border border-black/10 bg-neutral-50 p-4">
                    <div className="font-medium text-sm text-black/80">Evaluation</div>
                    <div className="text-[10px] text-black/50 mb-2">Assumptions</div>
                    <div className="text-xs text-black/70 space-y-1">
                      <div>• 10 to 40 hours per disclosure</div>
                      <div>~ Average it to 20 hours per disclosure</div>
                      <div>= 684 × 20 hours</div>
                      <div>= 13,680 hours</div>
                      <div>= 7 FTE of TTO staff time</div>
                      <div className="mt-1">for MIT, team of 16 licensing staff + 2 interns, that is</div>
                      <div className="flex items-center gap-1.5">
                        <AlertCircle className="h-3 w-3 text-black/50" />
                        <span>~ 4.4 months / staff</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: ttOS */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Logo width={16} height={16} className="flex-shrink-0" />
                  <span className="font-medium text-sm text-black/80">ttOS</span>
                </div>
                
                <div className="space-y-3">
                  {/* Disclosure Improvement */}
                  <div className="rounded-lg border border-black/10 bg-white p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-sm text-black/80">Disclosure Bot</div>
                      <Badge variant="outline" className="bg-green-50 border-transparent text-green-700 text-[10px] elevation-sm">
                        <TrendingUp />
                        10X faster
                      </Badge>
                    </div>
                    <div className="text-xs text-black/70">
                      <div>684 × 30 mins = 342 hours</div>
                      <div className="text-[10px] text-green-700 font-medium mt-1">90% time saving</div>
                    </div>
                  </div>
                  
                  {/* Evaluation Improvement */}
                  <div className="rounded-lg border border-black/10 bg-white p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-sm text-black/80">Evaluation Bot</div>
                      <Badge variant="outline" className="bg-green-50 border-transparent text-green-700 text-[10px] elevation-sm">
                        <TrendingUp />
                        20X faster
                      </Badge>
                    </div>
                    <div className="text-xs text-black/70">
                      <div>684 × 1 = 684 hours</div>
                      <div className="text-[10px] text-green-700 font-medium mt-1">95% time saving</div>
                    </div>
                  </div>
                  
                  {/* Marketing Bot */}
                  <div className="rounded-xl border border-black/10 bg-neutral-50 p-4">
                    <div className="font-medium text-sm text-black/80">Marketing Bot</div>
                    <div className="text-[10px] text-black/50 mb-2">Assumptions</div>
                    <div className="text-xs text-black/70 space-y-1">
                      <div>2,849 Technologies available</div>
                      <div>Each licensing staff is actively working on 100 technologies,</div>
                      <div>= 16 Staff × 100</div>
                      <div>= 1,600 technologies</div>
                      <div className="flex items-center gap-1.5">
                        <AlertCircle className="h-3 w-3 text-black/50" />
                        <span>1,249 technologies not marketed.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* NEW SECTION */}
      <PageSection topDivider>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Row 1 */}
          <div className="p-6 border-r border-black/10 last:border-r-0">
            <div className="flex items-center gap-2 mb-2">
              <Database className="h-4 w-4 text-black/70" />
              <h3 className="text-lg font-semibold text-black">No manual CRM entry</h3>
            </div>
            <p className="text-sm text-black/60">
              Licensing staff manually update CRM after work is done. ttOS auto-updates CRM from emails, calendar, and Teams chat.
            </p>
          </div>
          <div className="p-6 border-r border-black/10 last:border-r-0">
            <div className="flex items-center gap-2 mb-2">
              <ClipboardCheck className="h-4 w-4 text-black/70" />
              <h3 className="text-lg font-semibold text-black">No chasing paperwork</h3>
            </div>
            <p className="text-sm text-black/60">
              Automatically update inventor and agreement details. No chasing legal, marketing, or finance. All reports and signature status available in one spot.
            </p>
          </div>
          <div className="p-6 border-r border-black/10 last:border-r-0">
            <div className="flex items-center gap-2 mb-2">
              <Bell className="h-4 w-4 text-black/70" />
              <h3 className="text-lg font-semibold text-black">No manual updates</h3>
            </div>
            <p className="text-sm text-black/60">
              Where is this at? Has this been signed? No more manual email updates. All information available to inventors automatically.
            </p>
          </div>
          <div className="p-6 border-r border-black/10 last:border-r-0">
            <div className="flex items-center gap-2 mb-2">
              <BarChart className="h-4 w-4 text-black/70" />
              <h3 className="text-lg font-semibold text-black">No manual reports</h3>
            </div>
            <p className="text-sm text-black/60">
              Generate reports for all activities over the last 6 months, or report on specific faculty. All reporting done automatically.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-black/10">
          {/* Row 2 */}
          <div className="p-6 border-r border-black/10 last:border-r-0">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="h-4 w-4 text-black/70" />
              <h3 className="text-lg font-semibold text-black">No market bottleneck</h3>
            </div>
            <p className="text-sm text-black/60">
              Institutions outside large hubs struggle to showcase promising IP to industry. ttOS levels the playing field with large high-brand institutions in urban hubs.
            </p>
          </div>
          <div className="p-6 border-r border-black/10 last:border-r-0">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="h-4 w-4 text-black/70" />
              <h3 className="text-lg font-semibold text-black">No availability bias</h3>
            </div>
            <p className="text-sm text-black/60">
              Labs with high innovation potential can be overlooked if PIs aren't on the TTO's radar. ttOS eliminates availability bias and prevents lost opportunities.
            </p>
          </div>
          <div className="p-6 border-r border-black/10 last:border-r-0">
            <div className="flex items-center gap-2 mb-2">
              <FileLock className="h-4 w-4 text-black/70" />
              <h3 className="text-lg font-semibold text-black">No more manual NDA, MTA</h3>
            </div>
            <p className="text-sm text-black/60">
              Data rooms manage access and NDAs/MTAs for approved partners. This reduces time and negotiation overhead on NDAs and MTAs.
            </p>
          </div>
          <div className="p-6 border-r border-black/10 last:border-r-0">
            <div className="flex items-center gap-2 mb-2">
              <LayoutDashboard className="h-4 w-4 text-black/70" />
              <h3 className="text-lg font-semibold text-black">No task switching</h3>
            </div>
            <p className="text-sm text-black/60">
              Licensing staff switch from providing strategy to chasing Deed of assignment or reviews. Dashboard for inventors saves all this time.
            </p>
          </div>
        </div>
      </PageSection>

      {/* SECTION 3: THE LEVELLING THESIS */}
      <PageSection
        eyebrow="Levelling the playing field"
        title="Breakthrough innovation is not scarce; visibility is."
        description="High-potential research is produced across a wide range of institutions, disciplines, and geographies, but discovery systems disproportionately surface work from a small subset of well-resourced universities and research hubs. ttOS applies the same automated discovery and evaluation infrastructure used by large technology-transfer offices, reducing structural visibility gaps and enabling promising inventions to be identified earlier and more consistently."
        topDivider
      >
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="p-6 border-r border-black/10 last:border-r-0">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="h-4 w-4 text-black/70" />
              <h3 className="text-lg font-semibold text-black">Automated discovery</h3>
            </div>
            <p className="text-sm text-black/60">
              Surfaces innovations researchers might miss and eliminates availability bias by identifying labs with high potential regardless of institution size or location.
            </p>
          </div>
          <div className="p-6 border-r border-black/10 last:border-r-0">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="h-4 w-4 text-black/70" />
              <h3 className="text-lg font-semibold text-black">Sector expertise</h3>
            </div>
            <p className="text-sm text-black/60">
              Guides patent decisions and evaluation without resource constraints, enabling under-resourced institutions to make informed decisions on promising inventions.
            </p>
          </div>
          <div className="p-6 border-r border-black/10 last:border-r-0">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="h-4 w-4 text-black/70" />
              <h3 className="text-lg font-semibold text-black">Equal infrastructure</h3>
            </div>
            <p className="text-sm text-black/60">
              Same powerful discovery and evaluation system for S → XL offices, reducing structural visibility gaps and enabling earlier identification of promising inventions.
            </p>
          </div>
        </div>
      </PageSection>

      {/* SECTION 4: QUOTE */}
      <div className="relative py-20 md:py-24">
        <DotBackground />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_35%,rgba(255,255,255,0.9)_82%,rgba(255,255,255,1)_100%)]" />
        <div className="relative z-10 mx-auto max-w-[860px] text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-black">
            "The goal of AI in our office is to automate all the parts of the job that you hate, so you can do more of the parts of the job that you love."
          </h2>
          <div className="mt-3 text-sm md:text-base text-black/55">
            <div>Marc Sedam</div>
            <div>VP, NYU Langone Health</div>
          </div>
        </div>
      </div>

      {/* Optional bottom divider rhythm */}
      <div className="h-px w-full bg-black/10" />
    </>
  )
}
