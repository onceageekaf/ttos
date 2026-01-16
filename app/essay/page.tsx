import Link from "next/link";
import { 
  ExternalLink,
  FileText,
  ClipboardList,
  ShieldPlus,
  Globe,
  ReceiptText,
  User,
  Tag,
  BadgeCheck,
  Search,
  ScanSearch,
  Send,
  FolderLock,
  Handshake,
  CalendarClock,
} from "lucide-react";
import InventorDashboard from "@/components/sections/Dashboard/Inventor";
import CaseView from "@/components/sections/Dashboard/CaseView";
import DashboardShell from "@/components/sections/Dashboard/layout/DashboardShell";
import WorkflowHeroLayout from "@/components/sections/WorkflowHero/WorkflowHeroLayout";
import type { ModuleCardItem } from "@/components/sections/WorkflowHero/ModuleCard";

type TocItem = { id: string; label: string; depth: 2 | 3 };

const TOC: TocItem[] = [
  { id: "perfect-tto", label: "What is a perfect TTO?", depth: 2 },
  { id: "introduction", label: "Introduction", depth: 3 },
  { id: "systemic-failures", label: "The four systemic failures", depth: 3 },
  { id: "size-matters", label: "Size matters", depth: 2 },
  { id: "mit-example", label: "Example: MIT TLO", depth: 3 },
  { id: "human-cost", label: "The human cost", depth: 2 },
  { id: "what-to-measure", label: "What should we measure?", depth: 3 },
  { id: "manual-process", label: "The process is manual", depth: 2 },
  { id: "innovation-pipeline", label: "The innovation pipeline", depth: 3 },
  { id: "workflow", label: "Workflow", depth: 3 },
  { id: "solution", label: "Solution", depth: 3 },
  { id: "ai-infrastructure", label: "AI as infrastructure", depth: 2 },
  { id: "ttos", label: "What is needed: ttOS", depth: 3 },
  { id: "conclusion", label: "Conclusion", depth: 2 },

];

function clsx(...s: Array<string | false | null | undefined>) {
  return s.filter(Boolean).join(" ");
}

function AnchorHeading({
  id,
  as,
  children,
  className,
}: {
  id: string;
  as: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
}) {
  const Tag = as;
  return (
    <Tag id={id} className={clsx("scroll-mt-24", className)}>
      <a href={`#${id}`} className="no-underline">
      {children}
      </a>
    </Tag>
  );
}

function StickyToc({ items }: { items: TocItem[] }) {
  return (
    <nav className="sticky top-20 hidden max-h-[calc(100vh-6rem)] w-full overflow-auto pr-2 lg:block">
      <div className="mb-3 text-xs font-medium uppercase tracking-wide text-neutral-400">
        On this page
      </div>
      <ul className="space-y-1 text-sm">
        {items.map((it) => (
          <li key={it.id} className={clsx(it.depth === 3 && "pl-3")}>
            <a className="block rounded-lg px-2 py-1 text-neutral-500 hover:text-neutral-900 hover:underline" href={`#${it.id}`}>
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MobileToc({ items }: { items: TocItem[] }) {
  return (
    <details className="mb-6 rounded-xl border border-neutral-200 bg-neutral-50 p-4 lg:hidden">
      <summary className="cursor-pointer text-sm font-medium text-neutral-900">On this page</summary>
      <ul className="mt-3 space-y-1 text-sm">
        {items.map((it) => (
          <li key={it.id} className={clsx(it.depth === 3 && "pl-3")}>
            <a className="block rounded-lg px-2 py-1 text-neutral-500 hover:text-neutral-900 hover:underline" href={`#${it.id}`}>
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <main className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside>
            <StickyToc items={TOC} />
          </aside>

          <article className="min-w-0">
            <header className="mb-10">
              <div className="mb-3 text-sm text-neutral-500">
                <Link href="/" className="hover:text-neutral-900 hover:underline">ttOS</Link>
                <span className="mx-2 text-neutral-400">/</span>
                <span className="text-neutral-500">Essay</span>
              </div>

              <AnchorHeading id="top" as="h1" className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
                In pursuit of a perfect TTO
              </AnchorHeading>

              <p className="mt-3 text-lg leading-7 text-neutral-500">
                How unbundling execution—and rebuilding it as infrastructure—can fix technology transfer.
              </p>

              <div className="mt-4 text-sm text-neutral-400">
                Ash Ravikumar • January 2026
              </div>
            </header>

          <MobileToc items={TOC} />

          {/* What this is */}
          <section className="mt-10">
            
            <p className="mt-3 leading-7 text-neutral-500">
              This is an extended essay attempting to summarize what's broken in university technology transfer—across universities, research labs, and academic institutions more broadly.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              There's a lot of noise in this space. Most of it clusters around the same themes: spin-outs don't happen efficiently, processes are slow, and everyone has an opinion about greed vs speed.
            </p>
            <p className="mt-3 mb-3 leading-7 text-neutral-500">
              This piece is my attempt to do two things:
            </p>
            <ol className="list-decimal pl-6 text-neutral-500 leading-7 space-y-2">
              <li>Describe the system failures in a way that matches what it feels like to operate inside them, and</li>
              <li>Present a solution that fits into the larger proposal of unbundling the university, as written by Ben Reinhardt.</li>
            </ol>
          </section>

          {/* What is a perfect TTO */}
          <section className="mt-10">
            <AnchorHeading id="perfect-tto" as="h2" className="text-xl font-medium text-neutral-900">
              What is a perfect TTO?
              </AnchorHeading>
            <div className="relative my-8">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_35%,rgba(255,255,255,0.9)_82%,rgba(255,255,255,1)_100%)]" />
              <div className="relative z-10 mx-auto max-w-[860px] text-center">
                <h3 className="text-xl md:text-xl lg:text-2xl font-semibold tracking-tight text-black">
                  "One of the basic rules of the universe is that nothing is perfect. Perfection simply doesn't exist… Without imperfection, neither you nor I would exist."
                </h3>
                <cite className="mt-3 text-sm md:text-base text-black/55">
                  <div> - Stephen Hawking</div>
                </cite>
              </div>
            </div>
            <p className="mt-3 leading-7 text-neutral-500">
              With that caveat in mind, let's start with a simple question:
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              If you removed constraints of budget and talent, what would a perfect tech transfer office actually look like?
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              This question is useful not because it indulges idealism, but because it exposes how much of today's dysfunction is treated as inevitable. If you imagine a TTO without inherited limits, you're forced to separate true constraints from habits, incentives, and legacy design choices.
            </p>
            <blockquote className="text-neutral-700 font-medium leading-7">
              <p className="mb-3 text-neutral-500 leading-7">
                In a perfect TTO:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 leading-7 space-y-2">
                <li>Every disclosed invention is given a credible path to real-world use.</li>
                <li>The office is a place people want to work with—and work for.</li>
                <li>Companies actively seek out university technologies rather than being "marketed" to.</li>
                <li>Researchers engage early and speak openly about positive experiences.</li>
                <li>TTO staff are known for speed, clarity, and execution—and are in demand elsewhere.</li>
                <li>University leadership treats the TTO as core institutional infrastructure, not a back-office function, and recognizes its role in turning research into real outcomes.</li>
              </ul>
            </blockquote>
            <p className="mt-3 leading-7 text-neutral-500">
              When I shared this description with friends working inside TTOs, one of them joked that I should add "world peace" to the list.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              The gap between this vision and current practice feels unbridgeable. But that gap is precisely the point. In this piece, I argue the ideal is not utopian. The failures are not primarily cultural, individual, or financial.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              They are systemic.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              What follows examines the constraints that prevent technology transfer from working as intended—and outlines why unbundling the system makes this version of a TTO not only plausible, but inevitable.
            </p>
           
            <p className="mt-3 mb-3 leading-7 text-neutral-500">
              In the debates and arguments around tech transfer, there are three seminal works,
            </p>
            <ol className="list-decimal pl-6 text-neutral-500 leading-7 space-y-2">
              <li>Unbundling the University <a className="text-blue-600 inline-flex items-center gap-1" href="https://www.unbundle-the-university.com/" target="_blank" rel="noopener noreferrer"><ExternalLink className="h-3 w-3" /></a>— Ben Reinhardt, Speculative Technologies, Feb 2025</li>
              <li>America's Innovation Pipeline Is Leaking <a className="text-blue-600 inline-flex items-center gap-1" href="https://www.renaissancephilanthropy.org/news-and-insights/americas-innovation-pipeline-is-leaking-and-were-losing-game-changing-startups" target="_blank" rel="noopener noreferrer"><ExternalLink className="h-3 w-3" /></a> — Renaissance Philanthropy. Written byOrin Herskowitz, Dmytro Pokhylko, and Kumar Garg</li>
              <li>Spinout.fyi <a className="text-blue-600 inline-flex items-center gap-1" href="https://spinout.fyi" target="_blank" rel="noopener noreferrer"><ExternalLink className="h-3 w-3" /></a> — Nathan Benaich, AirStreet Capital. First and most reliable open source data of founders from academia globally</li>
            </ol>
            
            <p className="mt-3 leading-7 text-neutral-500">
              Ben uses a bundling analogy: a coffee shop + laundromat + karaoke bar all merged into one space because it made sense historically. But none of the individual functions work properly because the combined system is optimized for none.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              Renaissance uses the leaky pipe: the innovation pipeline leaks at dozens of points (they list 60+ in the U.S. system alone), and the fix isn't more water—it's fixing the leaks.
            </p>
           
          </section>

          {/* Introduction */}
          <section className="mt-10">
            <AnchorHeading id="introduction" as="h2" className="text-xl font-medium text-neutral-900">
              Introduction
              </AnchorHeading>
            <p className="mt-3 leading-7 text-neutral-500">
              If you replace "university" for "technology transfer" in Ben's essay, the logic holds perfectly. The TTO problem fits thematically with the larger proposal of unbundling the university.
            </p>
            <blockquote className="text-neutral-700 font-medium leading-7 border-l-4 border-neutral-300 pl-6 my-6">
              <p className="mb-3 text-neutral-500 leading-7">
                Tech transfer is a tricky thing. Almost everybody touches it at some point: filing an invention disclosure, negotiating a license, watching a promising technology languish in "tech transfer limbo," or wondering why the breakthrough in the lab next door never made it to market.
              </p>
              <p className="mb-3 text-neutral-500 leading-7">
                Across the board—from administrators to researchers to industry partners to venture capitalists—there's broad agreement that:
              </p>
              <ol className="list-decimal pl-6 text-neutral-500 leading-7 space-y-2">
                <li>Tech transfer is important</li>
                <li>The current system is not working well</li>
                <li>Reform is needed</li>
              </ol>
              <p className=" mt-3 mb-3 text-neutral-500 leading-7">
                But there's strong disagreement about:
              </p>
              <ol className="list-decimal pl-6 text-neutral-500 leading-7 space-y-2">
                <li>Why tech transfer matters (economic development? social impact? revenue?)</li>
                <li>What is broken (understaffing? incentives? legal complexity? risk?)</li>
                <li>How it should change (more funding? new policy? different metrics?)</li>
              </ol>
              <p className=" mt-3 mb-3 text-neutral-500 leading-7">
                It's a blind-men-and-an-elephant situation. Each stakeholder is holding the piece of the system closest to their priorities:
              </p>
              <ul className="list-disc pl-6 text-neutral-500 leading-7 space-y-2">
                <li>Researchers experience bureaucracy and delay</li>
                <li>Administrators see liability and risk</li>
                <li>Industry sees slow negotiation and unclear ownership</li>
                <li>Policymakers see weak outputs</li>
                <li>VCs see friction, confusing terms, and often—yes—greed</li>
              </ul>
              <p className=" mt-3 mb-3 text-neutral-500 leading-7">
                The list goes on.
              </p>
            </blockquote>
            <p className="mt-3 mb-3 leading-7 text-neutral-500">
              And to borrow from Ben's conclusion: <br />
              The solution is not to burn the system down. Unbundling a large, entrenched institution is a monumental task.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              The aim of this piece is narrower: fix one function and make it globally scalable.
            </p>
          </section>

          {/* The four systemic failures */}
          <section className="mt-10">
            <AnchorHeading id="systemic-failures" as="h2" className="text-xl font-medium text-neutral-900">
              The four systemic failures inside a TTO
              </AnchorHeading>
            <p className="mt-3 leading-7 text-neutral-500">
              There are four fundamental systemic failures in most TTO setups today:
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Uncertainty */}
              <div className="rounded-lg border border-neutral-200 bg-white p-6 elevation-md">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-neutral-900 font-mono text-sm font-medium text-white">1</span>
                  <h3 className="text-lg font-medium text-neutral-900">Uncertainty</h3>
                </div>
                <p className="text-neutral-600 leading-6 text-sm">
                  Outcomes can't be guaranteed. Success often depends on aligning external company interest with internal institutional processes. No other department in a university operates under the same uncertainty.
                </p>
                <p className="text-neutral-600 leading-6 text-sm mt-3">
                  This uncertainty, combined with the risk-averse nature of academia, leads to a predictable pattern: risk is managed through oversight and bureaucracy.
                </p>
              </div>

              {/* Card 2: Opacity */}
              <div className="rounded-lg border border-neutral-200 bg-white p-6 elevation-md">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-neutral-900 font-mono text-sm font-medium text-white">2</span>
                  <h3 className="text-lg font-medium text-neutral-900">Opacity</h3>
                </div>
                <p className="text-neutral-600 leading-6 text-sm mb-2">
                  For inventors and external partners, there is often no visibility into:
                </p>
                <ul className="list-disc pl-5 mb-3 text-neutral-600 leading-6 text-sm space-y-1">
                  <li>what stage a case is in</li>
                  <li>how long the next step will take</li>
                  <li>who is responsible</li>
                </ul>
                <p className="text-neutral-600 leading-6 text-sm">
                  Delegations of authority, approval chains, and inconsistent communication create confusion and frustration. Licensing professionals—at the coal face—take the heat.
                </p>
              </div>

              {/* Card 3: Overworked core */}
              <div className="rounded-lg border border-neutral-200 bg-white p-6 elevation-md">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-neutral-900 font-mono text-sm font-medium text-white">3</span>
                  <h3 className="text-lg font-medium text-neutral-900">Overworked core</h3>
                </div>
                <p className="text-neutral-600 leading-6 text-sm mb-3">
                  Licensing professionals coordinate the entire journey: inventors, internal stakeholders, administrators, internal/external legal, and companies. They are required to "influence without authority," while managing large, diverse portfolios.
                </p>
                <p className="text-neutral-600 leading-6 text-sm">
                  The workload is also highly variable—tied to academic calendars, grant cycles, and industry trends. That variability makes it almost impossible to optimize processes or implement systematic improvements.
                </p>
              </div>

              {/* Card 4: Lack of tools */}
              <div className="rounded-lg border border-neutral-200 bg-white p-6 elevation-md">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-neutral-900 font-mono text-sm font-medium text-white">4</span>
                  <h3 className="text-lg font-medium text-neutral-900">Lack of tools</h3>
                </div>
                <p className="text-neutral-600 leading-6 text-sm">
                  Most tech transfer software is built for reporting and compliance, not execution. Data gets entered after the work is done. The tools don't streamline operations—they add administrative burden to an already stretched team.
                </p>
              </div>
            </div>
            <p className="mt-8 leading-7 text-neutral-500">
              This is a scaling problem. The volume of potentially commercializable research exceeds the capacity to evaluate, protect, and market it—especially given the seasonal arrival of disclosures and the manual nature of the work. This isn't a funding problem solved by hiring more staff. It's structural.
            </p>
          </section>

          {/* Size matters */}
          <section className="mt-10">
            <AnchorHeading id="size-matters" as="h2" className="text-xl font-medium text-neutral-900">
              Size matters
              </AnchorHeading>
            <p className="mt-3 leading-7 text-neutral-500">
              Let's do a rough segmentation of TTOs by size:
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
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
            
          </section>

          {/* MIT Example */}
          <section className="mt-10">
            <AnchorHeading id="mit-example" as="h2" className="text-xl font-medium text-neutral-900">
              Example: MIT TLO (an XL office)
            </AnchorHeading>
            <p className="mt-3 leading-7 text-neutral-500">
              MIT's Technology Licensing Office (TLO) is a great example of the volume, sizing and publicly available report.
            </p>
            {/* MIT metrics */}
            <div className="mt-6 mb-8 rounded-2xl border border-black/10 bg-white p-5 elevation-sm w-fit">
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

              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  { k: "Invention disclosures", v: "684" },
                  { k: "New patents filed", v: "623" },
                  { k: "Licenses and Options", v: "137" },
                  { k: "Technologies available", v: "2,849" },
                ].map((m) => (
                  <div key={m.k} className="rounded-xl border border-black/10 bg-neutral-50 p-3 flex flex-col justify-between min-h-[70px] elevation-sm text-center w-fit min-w-[140px]">
                    <div className="text-[11px] leading-4 text-black/50">{m.k}</div>
                    <div className="text-lg font-semibold text-black">{m.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <div className="text-sm font-semibold text-black mb-3">MIT TLO Team</div>
                <div className="flex flex-wrap gap-3">
                  {[
                    { k: "Total Staff", v: "49" },
                    { k: "Senior leadership", v: "5" },
                    { k: "Licensing team", v: "16" },
                    { k: "Admin and support", v: "28" },
                  ].map((m) => (
                    <div key={m.k} className="rounded-xl border border-black/10 bg-neutral-50 p-3 flex flex-col justify-between min-h-[70px] elevation-sm text-center w-fit min-w-[140px]">
                      <div className="text-[11px] leading-4 text-black/50">{m.k}</div>
                      <div className="text-lg font-semibold text-black">{m.v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-black/10 bg-neutral-50 p-4 elevation-sm w-full">
                <div className="text-xs font-medium text-black/60 mb-3">Volume data - 2020 to 2025</div>

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
                        <div className="text-xs font-semibold text-black/70 flex-shrink-0 w-fit">
                          {item.label}
                        </div>
                        <div className="flex-1 flex items-center gap-2">
                          <div
                            className="h-8 bg-neutral-200 border border-black/10 flex-shrink-0"
                            style={{ width: `${historicalWidth}%` }}
                          />
                          <div className="text-xs font-semibold text-black/70 whitespace-nowrap">
                            {(item.historical + item.fy2025).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <p className="mt-3 mb-3 leading-7 text-neutral-500">
              Two immediate tells:
            </p>
            <ol className="list-decimal pl-6 text-neutral-500 leading-7 space-y-2">
              <li>Admin/support outnumbers the core licensing team</li>
              <li>The volume is enormous relative to the core team</li>
            </ol>
            <p className="mt-3 leading-7 text-neutral-500">
              Even basic math makes the point. If reviewing a disclosure takes 10–40 hours, and we use a conservative 20 hours average, that's:
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              684 × 20 = 13,680 hours of evaluation work.
            </p>
            <p className="mt-3 mb-3 leading-7 text-neutral-500">
              Spread across 21 licensing staff ( 16 staff + 3 Team leads + 2 interns), that's roughly 4 months per person per year just on evaluating new disclosures—before you factor in:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 leading-7 space-y-2">
              <li>patent prosecution and office actions</li>
              <li>marketing and outreach</li>
              <li> NDAs, MTAs and other agreements</li>
              <li>negotiation cycles</li>
              <li>internal approvals</li>
              <li>portfolio maintenance</li>
              <li>reporting and CRM updates</li>
            </ul>
            <p className="mt-3 leading-7 text-neutral-500">
              And the workload isn't evenly distributed. Some departments disclose far more than others. Some licensing professionals carry much heavier loads. That variability makes it worse, not better.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              Also, life sciences dominate licensing volume and revenue. Physical sciences and engineering often move slower and license less frequently, because of industry structure and adoption friction.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              This pattern isn't unique to MIT. It shows up everywhere—just with less resourcing.
            </p>
          </section>

          {/* The human cost */}
          <section className="mt-10">
            <AnchorHeading id="human-cost" as="h2" className="text-xl font-medium text-neutral-900">
              The human cost of bureaucracy
            </AnchorHeading>
            <p className="mt-3 leading-7 text-neutral-500">
              The systemic problems in technology transfer have human consequences.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              Researchers become frustrated with slow processes and learn to route around the TTO—sometimes legally, sometimes not. Licensing professionals burn out from impossible workloads and leave for industry positions. Promising technologies languish and eventually become obsolete, with their potential societal benefit never realized.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              More insidiously, the failures become self-reinforcing:
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              Researchers who have bad experiences stop submitting disclosures (or submit only when legally required), which reduces the TTO's visibility into valuable work. Licensing professionals, lacking time for proactive marketing, never build the industry relationships that would make their jobs easier.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              The cycle continues.
            </p>
          </section>

          {/* What should we measure */}
          <section className="mt-10">
            <AnchorHeading id="what-to-measure" as="h2" className="text-xl font-medium text-neutral-900">
              What should we measure?
            </AnchorHeading>
            <p className="mt-3 leading-7 text-neutral-500">
              The key number for any tech transfer office should be licenses executed per year.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              Revenue and equity are not good performance metrics for the office itself. The TTO doesn't control whether the licensee succeeds, or whether the startup becomes valuable. Those outcomes depend on the company and the founders.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              So the most direct measurable "output" the office controls is: executed agreements.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              For MIT, that's ~137 licenses/options/year across ~20 licensing staff—about ~7 per staff if averaged. That sounds good on paper, but it hides variance by field and deal complexity.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              And again, this is only the "execution count," not the total work required to make those executions happen.
            </p>
            <p className="mt-3 mb-3 leading-7 text-neutral-500">
              The key metric of number of licenses realigns the focus on revenue generation and not "economic development". Helps frame the questions:
            </p>
            <ul className="list-disc pl-6 text-neutral-500 leading-7 space-y-2">
              <li>"How many active cases should a licensing staff handle?"</li>
              <li>"How many licenses should a licensing staff execute per year?"</li>
            </ul>
            <p className="mt-3 leading-7 text-neutral-500">
              This change in metric changes the culture to be deal focused and not "economic development".
            </p>
          </section>

          {/* The process is manual */}
          <section className="mt-12">
            <AnchorHeading id="manual-process" as="h2" className="text-xl font-medium text-neutral-900">
              The process is manual all the way down
            </AnchorHeading>
            <p className="mt-3 leading-7 text-neutral-500">
              This is the part most outsiders underestimate.
            </p>
            <p className="mt-3 mb-3 leading-7 text-neutral-500">
              Licensing professionals don't just evaluate and negotiate. They also:
            </p>
            <ul className="list-disc pl-6 text-neutral-500 leading-7 space-y-2">
              <li>chase signatures through approval chains</li>
              <li>manage internal legal reviews</li>
              <li>answer constant status requests ("where is this at?")</li>
              <li>update CRMs designed for reporting, not execution</li>
              <li>restart the loop every time a new company shows interest</li>
            </ul>
            <p className="mt-3 leading-7 text-neutral-500">
              Even basic agreements—NDA/CDA, MTA, options, licenses—trigger a similar pattern:
            </p>
            <p className="mt-3 leading-7 text-neutral-500 font-mono text-sm">
              draft → review → approve → route → chase → sign → record → report.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              Each step has built-in delay. Delay creates follow-up. Follow-up creates more work. More work reduces proactive execution.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              If this isn't a system designed to fail, it's at least a system designed to stall.
            </p>
          </section>

          {/* The innovation pipeline */}
          <section className="mt-12">
            <AnchorHeading id="innovation-pipeline" as="h2" className="text-xl font-medium text-neutral-900">
              The innovation pipeline is broken
            </AnchorHeading>
            <p className="mt-3 leading-7 text-neutral-500">
              Every year the world invests over $700B in R&D. The output is extraordinary discoveries—but a tiny fraction reaches market.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              Renaissance argues the problem isn't a lack of innovation. It's failure in the pipeline that connects research to real-world impact. And even in the U.S., with the most developed infrastructure, there are 60+ identifiable leaks.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              Adding more water to a leaky system doesn't fix leaks. It increases the amount lost.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              In much of the world, the pipes barely exist. Researchers in emerging economies often have no TTO support, no patent support, no pathway. The asymmetry is brutal: a researcher in Boston has an apparatus; a researcher in Nairobi or Manila often has none.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              Availability bias follows: we over-focus on the institutions already visible to the system.
            </p>
          </section>

          {/* Workflow */}
          <section className="mt-12">
            <AnchorHeading id="workflow" as="h2" className="text-xl font-medium text-neutral-900">
              Workflow
            </AnchorHeading>
            <p className="mt-3 leading-7 text-neutral-500">
              Disclosure starts with a form. Most of the information already exists in manuscripts, slides, or lab notes—but the form demands it again, often in a way that doesn't match how academics think about their work.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              Then there's due diligence: funding agreements, sponsor rights, background IP, joint inventors, inter-institutional issues. The rules are straightforward, but the documents are scattered.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              Then evaluation: prior art search, literature, patentability risk, market potential, and judgment calls. Then internal review. Then patent drafting via external firms. Then inventor review. Then filing.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              Then marketing: a non-confidential summary, website listing, outreach lists, campaigns, follow-ups, calls. Then NDAs. Then deeper diligence. Then commercial value discussions. Then term sheet. Then license negotiation. Then signature routing.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              Post-agreement: inventor splits, revenue distribution, royalty reporting, audit trails, payment tracking.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              This is heavy, manual work with many touchpoints. The licensing professional carries the complexity.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              The system we need must remove manual touchpoints so people can spend time where judgment matters.
            </p>
          </section>

          {/* Solution */}
          <section className="mt-12">
            <AnchorHeading id="solution" as="h2" className="text-xl font-medium text-neutral-900">
              Solution
            </AnchorHeading>
            <p className="mt-3 leading-7 text-neutral-500">
              The solution is not "hire more people to do the same work faster." The solution is to fix the leaks so that when you do hire people, they can actually execute.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              Yes, this is where AI enters the conversation—and yes, people roll their eyes. Let me try to make the case properly.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              The goal is not replacing human judgment. It's augmenting human capacity—handling routine analysis and coordination so licensing professionals can spend time on the high-value work that actually requires expertise.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              The problems in tech transfer are structural, not always personnel. Most TTO professionals are competent and dedicated people working inside a system that makes success difficult.
            </p>
            <p className="mt-3 mb-3 leading-7 text-neutral-500">
              Fixing tech transfer means changing the relationship between:
            </p>
            <ul className="list-disc pl-6 text-neutral-500 leading-7 space-y-2">
              <li>Volume of work, and</li>
              <li>Capacity to do it</li>
            </ul>
            <p className="mt-3 mb-3 leading-7 text-neutral-500">
              There are two classical mechanisms:
            </p>
            <ol className="list-decimal pl-6 text-neutral-500 leading-7 space-y-2">
              <li>Reduce the work (be more selective)</li>
              <li>Increase capacity (do the same work faster)</li>
            </ol>
            <p className="mt-3 leading-7 text-neutral-500">
              Option 1 is unpalatable. <br /> Practically, it's hard to predict which inventions will matter. Philosophically, the mission is to maximize societal benefit—choosing not to pursue potential impact is hard to justify.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              Option 2 is adding more water. <br /> Historically means hiring more staff, which hits budget constraints and talent scarcity—and doesn't solve coordination overhead.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              AI offers a third path: <br /> Change the nature of the work, so humans do judgment and relationships while machines handle routine analysis and operational burden.
            </p>
          </section>

          {/* AI as infrastructure */}
          <section className="mt-12">
            <AnchorHeading id="ai-infrastructure" as="h2" className="text-xl font-medium text-neutral-900">
              AI as infrastructure, not replacement
            </AnchorHeading>
            <p className="mt-3 leading-7 text-neutral-500">
              Human judgment remains essential: evaluating potential, negotiating terms, managing relationships, making tradeoffs.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              But much of what consumes TTO time is not "human work." It's information retrieval, summarization, drafting standard documents, routing approvals, updating databases after the fact.
            </p>
            <p className="mt-3 mb-3 leading-7 text-neutral-500">
              AI can do those pieces faster and more consistently, freeing humans to focus on:
            </p>
            <ul className="list-disc pl-6 text-neutral-500 leading-7 space-y-2">
              <li>strategic evaluation</li>
              <li>relationship building</li>
              <li>complex negotiation</li>
              <li>portfolio strategy</li>
            </ul>
          </section>

          {/* What is needed: ttOS */}
          <section className="mt-12">
            <AnchorHeading id="ttos" as="h2" className="text-xl font-medium text-neutral-900">
              What is needed: a technology transfer operating system (ttOS)
            </AnchorHeading>
            <p className="mt-3 leading-7 text-neutral-500">
              What I'm proposing is a technology transfer operating system: ttOS.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              An AI-powered infrastructure that supports tech transfer execution—especially for institutions that can't staff like MIT. And, for XL scale offices, reduction in time of the manual work.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              Core capabilities:
            </p>
            <ol className="list-decimal pl-6 text-neutral-500 leading-7 space-y-6">
              <li>
                <div>Core automation modules: Disclosure, Evaluation, Protection, Marketing, and Licensing</div>
                <div className="mt-4 mb-0">
                  <WorkflowHeroLayout
                    cards={[
                      {
                        key: "disclosure",
                        title: "Disclosure",
                        icon: <FileText className="h-4 w-4 text-white" />,
                        items: [
                          { label: "Structured intake forms", itemIcon: <FileText /> },
                          { label: "Auto-fill from documents", itemIcon: <User /> },
                          { label: "Chatbot assistance", itemIcon: <Tag /> },
                        ],
                        footer: { label: "+ more attributes" },
                      },
                      {
                        key: "evaluation",
                        title: "Evaluation",
                        icon: <ClipboardList className="h-4 w-4 text-white" />,
                        items: [
                          { label: "Due diligence workflows", itemIcon: <BadgeCheck /> },
                          { label: "Prior art analysis", itemIcon: <Search /> },
                          { label: "Market research", itemIcon: <ScanSearch /> },
                        ],
                        footer: { label: "+ more attributes" },
                      },
                      {
                        key: "protection",
                        title: "Protection",
                        icon: <ShieldPlus className="h-4 w-4 text-white" />,
                        items: [
                          { label: "Patent strategy", itemIcon: <Send /> },
                          { label: "Attorney handoff", itemIcon: <FileText /> },
                          { label: "Docket management", itemIcon: <User /> },
                        ],
                        footer: { label: "+ more attributes" },
                      },
                      {
                        key: "marketing",
                        title: "Marketing",
                        icon: <Globe className="h-4 w-4 text-white" />,
                        items: [
                          { label: "Invention webpages", itemIcon: <Globe /> },
                          { label: "Contact lists", itemIcon: <FolderLock /> },
                          { label: "Data room", itemIcon: <FileText /> },
                        ],
                        footer: { label: "+ more attributes" },
                      },
                      {
                        key: "licensing",
                        title: "Licensing",
                        icon: <ReceiptText className="h-4 w-4 text-white" />,
                        items: [
                          { label: "Term sheets", itemIcon: <ReceiptText /> },
                          { label: "Agreement tracking", itemIcon: <Handshake /> },
                          { label: "Post-agreement follow-up", itemIcon: <CalendarClock /> },
                        ],
                        footer: { label: "+ more attributes" },
                      },
                    ]}
                    compactCards={true}
                    className="mt-0"
                  />
                </div>
              </li>
              <li>
                <div>Dashboards: inventor view + case view; fewer "where is this?" emails</div>
                <div className="mt-4 space-y-8">
                  <div>
                    <div className="mb-2 text-sm font-medium text-neutral-700">Inventor View</div>
                    <div className="w-[950px] overflow-visible -ml-4 sm:-ml-6 lg:-ml-8">
                      <DashboardShell variant="inventor" width="full">
                        <InventorDashboard />
                      </DashboardShell>
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 text-sm font-medium text-neutral-700">Case View</div>
                    <div className="w-[1000px] overflow-visible -ml-4 sm:-ml-6 lg:-ml-8">
                      <DashboardShell variant="case" width="full">
                        <CaseView />
                      </DashboardShell>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div>Automatic CRM: the work generates the record; no manual updating after the fact</div>
                <div className="mt-4 rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-50 p-8 text-center text-sm text-neutral-400">
                  [Visual placeholder: Automatic CRM flow diagram]
                </div>
              </li>
              <li>
                <div>Signature routing: rules + timeouts + escalation; make bottlenecks visible instead of hidden</div>
                <div className="mt-4 rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-50 p-8 text-center text-sm text-neutral-400">
                  [Visual placeholder: Signature routing workflow]
                </div>
              </li>
              <li>
                <div>Agreement orchestration: stop treating each university's NDA as sacred scripture; standardize by geography and tolerance</div>
                <div className="mt-4 rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-50 p-8 text-center text-sm text-neutral-400">
                  [Visual placeholder: Agreement orchestration system]
                </div>
              </li>
              <li>
                <div>Discovery + visibility: make inventions genuinely discoverable, not buried on a TTO site</div>
                <div className="mt-4 rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-50 p-8 text-center text-sm text-neutral-400">
                  [Visual placeholder: Discovery platform interface]
                </div>
              </li>
              <li>
                <div>Bundling: make it easy to combine related IP across institutions without doubling friction</div>
                <div className="mt-4 rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-50 p-8 text-center text-sm text-neutral-400">
                  [Visual placeholder: IP bundling visualization]
                </div>
              </li>
              <li>
                <div>Produce: make early-stage production possible using existing academic infrastructure—ttOS as the execution layer for early translation</div>
                <div className="mt-4 rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-50 p-8 text-center text-sm text-neutral-400">
                  [Visual placeholder: Production workflow diagram]
                </div>
              </li>
            </ol>
          </section>

          {/* Conclusion */}
          <section className="mt-12">
            <AnchorHeading id="conclusion" as="h2" className="text-xl font-medium text-neutral-900">
              Conclusion
            </AnchorHeading>
            <p className="mt-3 leading-7 text-neutral-500">
              Technology transfer matters because research matters. University labs generate insights that could improve human welfare—but potential is not impact. Potential becomes impact only when research reaches people and organizations that can apply it.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              The current system is straining under the weight of its own success. More research is produced than ever before, but the mechanisms for translating it have not evolved to match. The result is a widening gap between what's possible and what happens in reality: technologies that sit in queues, stall in negotiation loops, or die because nobody had time to find the right path.
            </p>
            <p className="mt-3 leading-7 text-neutral-500">
              AI will not solve everything. But it can address the capacity constraint that underlies many failures. By automating routine analysis and operational coordination, we can free professionals to do the work that only humans can do—and allow tech transfer to scale with research output instead of falling further behind.
            </p>
          </section>

          {/* Gratitude */}
          <section className="mt-12">
            <AnchorHeading id="gratitude" as="h2" className="text-xl font-medium text-neutral-900">
              Gratitude
            </AnchorHeading>
            <p className="mt-3 leading-7 text-neutral-500">
              Thank you to the people who gave feedback on drafts of this piece: Priyanka Dasgupta, Filipe Ramos, Hafida Boufraioua, Vlad Iorgulescu. And thank you to so many others whose wisdom and ideas contributed to this piece.
            </p>
          </section>

          <div className="mt-12 flex flex-wrap gap-3">
            <a className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100 hover:underline" href="#top">
              Back to top
            </a>
          </div>
        </article>
        </div>
      </main>
    </div>
  );
}
