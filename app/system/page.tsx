// src/app/system/page.tsx
"use client"
import DotBackground from "@/components/elements/DotBackground"
import SystemHeroAnimation from "@/components/sections/System/SystemHeroAnimation"
import SectionIntro from "@/components/sections/System/SectionIntro"
import C1FlipAnimation from "./animation/C1FlipAnimation"
import EvaluationFlipAnimation from "./animation/EvaluationFlipAnimation"
import ProtectionFlipAnimation from "./animation/ProtectionFlipAnimation"
import MarketingFlipAnimation from "./animation/MarketingFlipAnimation"
import LicensingFlipAnimation from "./animation/LicensingFlipAnimation"
import { CircleXIcon } from "lucide-react"

export default function SystemPage() {
  return (
    <>
      {/* HERO */}
      <div className="relative">
        <DotBackground />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_40%,rgba(255,255,255,0.9)_85%,rgba(255,255,255,1)_100%)]" />
        <div className="relative z-10 pt-60 pb-40">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
              Blazingly fast.
            </h1>
            <p className="text-xl text-neutral-600 mb-6">
              Turn hours into minutes.
            </p>
            <SystemHeroAnimation className="mt-6" />
          </div>
        </div>
      </div>
    
      {/* CORE MODULES */}
      <section className="py-16">
      <div className="border border-black/10 bg-white p-6 md:p-8">
        <SectionIntro
          eyebrow="System"
          title="Modular agents."
          description={
            <>
              Run any agent.
              <br />
              Run <span className="font-medium text-black">Disclosure</span> bot.
              <br />
              Run{" "}
              <span className="font-medium text-black">Disclosure</span> and {" "}
              <span className="font-medium text-black">Evaluation</span>{" "}
              <br />
              Run{" "}
              <span className="font-medium text-black">Disclosure</span> and {" "}
              <span className="font-medium text-black">Evaluation,</span>{" "}
              <CircleXIcon className="inline h-[0.9em] w-[0.9em] mx-1 text-black/40 align-middle" />
              <span className="text-black/50">Protection</span>,{" "}
              <span className="font-medium text-black">Marketing </span>...
            </>
          }
          className="mb-0"
        />
      </div>

        {/* Hairline divider between System and Core Module 1 */}
        <div className="border-t border-black/10 my-8" />

        {/* Test content appended after SectionIntro */}
        <div className="min-h-screen py-8 px-6">
          <div className="mx-auto w-full max-w-[1200px]">
            <section className="grid grid-cols-12 gap-6 items-start">
              {/* LEFT — Sticky rail (1/3) */}
              <div className="col-span-12 lg:col-span-4 self-start">
                <div className="sticky top-28">
                  <div className="text-xs font-medium tracking-wide text-black/50">
                    Core Module [ 0 1 ]
                  </div>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-black">
                    Disclosure Bot
                  </h3>

                  <div className="mt-2 text-sm font-semibold text-black/85">
                    Nobody likes filling forms. ttOS fills them for you.
                  </div>

                  <p className="mt-6 text-xs lg:text-sm text-black/55 leading-relaxed">
                    Upload a manuscript, slides, drawings, or lab notes and ttOS extracts the key fields and drafts your invention disclosure automatically.
                  </p>

                  <p className="mt-4 text-xs lg:text-sm text-black/55 leading-relaxed">
                    No documents yet? Start from a guided chat and build the disclosure from scratch.
                  </p>

                  <div className="mt-6 text-sm font-semibold text-black/85">
                    Go beyond "Don't know."
                  </div>

                  <p className="mt-4 text-xs lg:text-sm text-black/55 leading-relaxed">
                    ttOS generates a first-pass market snapshot and development needs (applications, users, constraints, next experiments).
                  </p>

                  <p className="mt-4 text-xs lg:text-sm text-black/55 leading-relaxed">
                    Edit anything, regenerate with feedback, and submit a disclosure that's actually ready for evaluation.
                  </p>
                </div>
              </div>

              {/* RIGHT — Visual container (2/3) */}
              <div className="col-span-12 lg:col-span-8">
                <div className="overflow-hidden">
                  <div className="p-4 lg:p-5">
                    <C1FlipAnimation />
                  </div>
                </div>
              </div>
            </section>

            {/* Hairline between sections */}
            <div className="border-t border-black/10 my-8" />

            {/* Evaluation Section */}
            <section className="grid grid-cols-12 gap-6 items-start pt-6">
              {/* LEFT — Sticky rail (1/3) */}
              <div className="col-span-12 lg:col-span-4 self-start">
                <div className="sticky top-28">
                  <div className="text-xs font-medium tracking-wide text-black/50">
                    Core Module [ 0 2 ]
                  </div>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-black">
                    Evaluation Bot
                  </h3>

                  <div className="mt-2 text-sm font-semibold text-black/85">
                    Decide faster. With evidence.
                  </div>

                  <p className="mt-6 text-xs lg:text-sm text-black/55 leading-relaxed">
                    Evaluation Bot removes the bottleneck by generating structured, decision-ready assessments directly from disclosure data.
                  </p>

                  <p className="mt-4 text-xs lg:text-sm text-black/55 leading-relaxed">
                    Patentability signals, prior art indicators, and risk factors are produced automatically — without waiting for reports, panels, or committees.
                  </p>

                  <div className="mt-6 text-sm font-semibold text-black/85">
                    Replace "we need more analysis" with a clear position.
                  </div>

                  <p className="mt-4 text-xs lg:text-sm text-black/55 leading-relaxed">
                    Evaluation Bot produces patentability signals, prior art risk indicators, and market relevance summaries aligned with likely development pathways.
                  </p>

                  <p className="mt-4 text-xs lg:text-sm text-black/55 leading-relaxed">
                    All outputs are editable, regenerable, and auditable. Feedback improves the analysis instead of restarting it.
                  </p>
                </div>
              </div>

              {/* RIGHT — Visual container (2/3) */}
              <div className="col-span-12 lg:col-span-8">
                <div className="overflow-hidden">
                  <div className="p-4 lg:p-5">
                    <EvaluationFlipAnimation />
                  </div>
                </div>
              </div>
            </section>

            {/* Hairline between sections */}
            <div className="border-t border-black/10 my-8" />

            {/* Protection Section */}
            <section className="grid grid-cols-12 gap-6 items-start pt-6">
              {/* LEFT — Sticky rail (1/3) */}
              <div className="col-span-12 lg:col-span-4 self-start">
                <div className="sticky top-28">
                  <div className="text-xs font-medium tracking-wide text-black/50">
                    Core Module [ 0 3 ]
                  </div>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-black">
                    Protection Bot
                  </h3>

                  <div className="mt-2 text-sm font-semibold text-black/85">
                    Protection is where technology transfer secures value.
                  </div>

                  <p className="mt-6 text-xs lg:text-sm text-black/55 leading-relaxed">
                    Protection Bot generates patent strategy recommendations, prior art analysis, and filing timelines directly from evaluation data.
                  </p>

                  <p className="mt-4 text-xs lg:text-sm text-black/55 leading-relaxed">
                    No manual research. No missed deadlines. No overlooked opportunities.
                  </p>

                  <div className="mt-6 text-sm font-semibold text-black/85">
                    Replace "we need to file a patent" with a strategic protection plan.
                  </div>

                  <p className="mt-4 text-xs lg:text-sm text-black/55 leading-relaxed">
                    Protection Bot produces patentability assessments, prior art summaries, and filing recommendations aligned with market opportunities and competitive landscape.
                  </p>

                  <p className="mt-4 text-xs lg:text-sm text-black/55 leading-relaxed">
                    All outputs are editable, regenerable, and actionable. Feedback improves the strategy instead of restarting it.
                  </p>
                </div>
              </div>

              {/* RIGHT — Visual container (2/3) */}
              <div className="col-span-12 lg:col-span-8">
                <div className="overflow-hidden">
                  <div className="p-4 lg:p-5">
                    <ProtectionFlipAnimation />
                  </div>
                </div>
              </div>
            </section>

            {/* Hairline between sections */}
            <div className="border-t border-black/10 my-8" />

            {/* Marketing Section */}
            <section className="grid grid-cols-12 gap-6 items-start pt-6">
              {/* LEFT — Sticky rail (1/3) */}
              <div className="col-span-12 lg:col-span-4 self-start">
                <div className="sticky top-28">
                  <div className="text-xs font-medium tracking-wide text-black/50">
                    Core Module [ 0 4 ]
                  </div>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-black">
                    Marketing Bot
                  </h3>

                  <div className="mt-2 text-sm font-semibold text-black/85">
                    Marketing is where technology transfer accelerates.
                  </div>

                  <p className="mt-6 text-xs lg:text-sm text-black/55 leading-relaxed">
                    Marketing Bot generates targeted outreach materials, identifies potential licensees, and creates compelling value propositions directly from evaluation data.
                  </p>

                  <p className="mt-4 text-xs lg:text-sm text-black/55 leading-relaxed">
                    No manual research. No generic templates. No missed opportunities.
                  </p>

                  <div className="mt-6 text-sm font-semibold text-black/85">
                    Replace "we need to create marketing materials" with ready-to-send outreach.
                  </div>

                  <p className="mt-4 text-xs lg:text-sm text-black/55 leading-relaxed">
                    Marketing Bot produces tailored pitch decks, one-pagers, and licensing summaries aligned with specific industry verticals and use cases.
                  </p>

                  <p className="mt-4 text-xs lg:text-sm text-black/55 leading-relaxed">
                    All materials are editable, regenerable, and trackable. Feedback improves the messaging instead of restarting it.
                  </p>
                </div>
              </div>

              {/* RIGHT — Visual container (2/3) */}
              <div className="col-span-12 lg:col-span-8">
                <div className="overflow-hidden">
                  <div className="p-4 lg:p-5">
                    <MarketingFlipAnimation />
                  </div>
                </div>
              </div>
            </section>

            {/* Hairline between sections */}
            <div className="border-t border-black/10 my-8" />

            {/* Licensing Section */}
            <section className="grid grid-cols-12 gap-6 items-start pt-6">
              {/* LEFT — Sticky rail (1/3) */}
              <div className="col-span-12 lg:col-span-4 self-start">
                <div className="sticky top-28">
                  <div className="text-xs font-medium tracking-wide text-black/50">
                    Core Module [ 0 5 ]
                  </div>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-black">
                    Licensing Bot
                  </h3>

                  <div className="mt-2 text-sm font-semibold text-black/85">
                    Licensing is where technology transfer closes deals.
                  </div>

                  <p className="mt-6 text-xs lg:text-sm text-black/55 leading-relaxed">
                    Licensing Bot generates license agreements, term sheets, and negotiation frameworks directly from marketing and evaluation data.
                  </p>

                  <p className="mt-4 text-xs lg:text-sm text-black/55 leading-relaxed">
                    No manual drafting. No template mismatches. No deal delays.
                  </p>

                  <div className="mt-6 text-sm font-semibold text-black/85">
                    Replace "we need to draft a license agreement" with ready-to-negotiate terms.
                  </div>

                  <p className="mt-4 text-xs lg:text-sm text-black/55 leading-relaxed">
                    Licensing Bot produces tailored agreements, term sheets, and deal structures aligned with industry standards and specific use cases.
                  </p>

                  <p className="mt-4 text-xs lg:text-sm text-black/55 leading-relaxed">
                    All documents are editable, regenerable, and compliant. Feedback improves the terms instead of restarting it.
                  </p>
                </div>
              </div>

              {/* RIGHT — Visual container (2/3) */}
              <div className="col-span-12 lg:col-span-8">
                <div className="overflow-hidden min-h-[500px]">
                  <div className="p-4 lg:p-5">
                    <LicensingFlipAnimation />
                  </div>
                </div>
              </div>
            </section>
      </div>
      </div>
      </section>
    </>
  )
}
