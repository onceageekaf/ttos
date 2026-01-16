"use client";

import React from "react";
import ModuleCard, {
  ModuleCardItem,
  ModuleCardFooter,
} from "@/components/sections/WorkflowHero/ModuleCard";
import WorkflowConnectors from "@/components/sections/WorkflowHero/WorkflowConnectors";
import PageShell from "@/components/layout/PageShell";
import DotBackground from "@/components/elements/DotBackground";

type WorkflowKey =
  | "disclosure"
  | "evaluation"
  | "protection"
  | "marketing"
  | "licensing";

type WorkflowCard = {
  key: WorkflowKey;
  title: string;
  icon?: React.ReactNode;
  items: ModuleCardItem[];
  footer?: ModuleCardFooter;
};

type Props = {
  cards: WorkflowCard[];
  heroSlot?: React.ReactNode;
  compactCards?: boolean;
  className?: string;
};

export default function WorkFlowHeroLayout({
  cards,
  heroSlot,
  compactCards = true,
  className = "",
}: Props) {
  const cardByKey = Object.fromEntries(cards.map((c) => [c.key, c])) as Record<
    WorkflowKey,
    WorkflowCard
  >;

  const stackRef = React.useRef<HTMLDivElement | null>(null)
  const lgGridRef = React.useRef<HTMLDivElement | null>(null)
  const xlGridRef = React.useRef<HTMLDivElement | null>(null)

  return (
    <section className={className}>
      {/* =========================
         MOBILE / TABLET: HERO + STACK (<lg)
      ========================== */}
      <div className="lg:hidden">
        <PageShell width="cards" className="py-8">
          {heroSlot ? (
            <div className="mb-8 flex justify-center">
              <div className="w-full max-w-[520px]">{heroSlot}</div>
            </div>
          ) : null}

          <div ref={stackRef} className="relative isolate">
            <WorkflowConnectors
              scopeRef={stackRef}
              mode="stacked"
              strokeWidth={1.4}
              dotRadius={4}
              drawDurationMs={650}
              gapMs={180}
              className="absolute inset-0"
            />

            <div className="flex flex-col items-center gap-4">
              {(
                ["disclosure", "evaluation", "protection", "marketing", "licensing"] as const
              ).map((k) =>
                cardByKey[k] ? (
                  <ModuleCard
                    key={k}
                    anchorId={k}
                    title={cardByKey[k].title}
                    icon={cardByKey[k].icon}
                    items={cardByKey[k].items}
                    footer={cardByKey[k].footer}
                    variant={compactCards ? "compact" : "default"}
                  />
                ) : null
              )}
            </div>
          </div>
        </PageShell>
      </div>

      {/* =========================
          DESKTOP LG (1024–1279)
        ========================== */}
      <div className="relative hidden w-full pb-0 lg:block xl:hidden">
        {/* background layer */}
        <div className="pointer-events-none absolute inset-0">
          <DotBackground />
          {/* fade / vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_40%,rgba(255,255,255,0.9)_85%,rgba(255,255,255,1)_100%)]" />
        </div>

        <PageShell width="cards" className="relative">
          <div
            ref={lgGridRef}
            className="relative grid isolate"
            style={{
              gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
              gridTemplateRows: "repeat(7, minmax(auto, 1fr))",
              columnGap: "20px",
              rowGap: "20px",
            }}
          >
            <WorkflowConnectors
              scopeRef={lgGridRef}
              mode="desktop"
              strokeWidth={1.4}
              dotRadius={4}
              drawDurationMs={650}
              gapMs={180}
              className="absolute inset-0"
            />

            {/* HERO */}
            <div
              className="z-[10] flex justify-center"
              style={{ gridColumn: "4 / 10", gridRow: "1 / 4" }}
            >
              <div className="w-full max-w-[520px]">{heroSlot ?? null}</div>
            </div>

            {/* Top row: Disclosure, Evaluation, Protection */}
            {cardByKey.disclosure ? (
              <div className="z-[5] flex justify-start items-start min-w-0" style={{ gridColumn: "1 / 3", gridRow: "2 / 4" }}>
                <ModuleCard
                  anchorId="disclosure"
                  title={cardByKey.disclosure.title}
                  icon={cardByKey.disclosure.icon}
                  items={cardByKey.disclosure.items}
                  footer={cardByKey.disclosure.footer}
                  variant={compactCards ? "compact" : "default"}
                />
              </div>
            ) : null}

            {cardByKey.evaluation ? (
              <div className="z-[5] flex justify-center items-start min-w-0" style={{ gridColumn: "5 / 9", gridRow: "2 / 4", transform: "translateX(10px)" }}>
                <ModuleCard
                  anchorId="evaluation"
                  title={cardByKey.evaluation.title}
                  icon={cardByKey.evaluation.icon}
                  items={cardByKey.evaluation.items}
                  footer={cardByKey.evaluation.footer}
                  variant={compactCards ? "compact" : "default"}
                />
              </div>
            ) : null}

            {cardByKey.protection ? (
              <div className="z-[5] flex justify-end items-start min-w-0" style={{ gridColumn: "12 / 15", gridRow: "2 / 4" }}>
                <ModuleCard
                  anchorId="protection"
                  title={cardByKey.protection.title}
                  icon={cardByKey.protection.icon}
                  items={cardByKey.protection.items}
                  footer={cardByKey.protection.footer}
                  variant={compactCards ? "compact" : "default"}
                />
              </div>
            ) : null}

            {/* Bottom row: Licensing, Marketing - equal spacing from edges */}
            {cardByKey.licensing ? (
              <div className="z-[10] flex justify-center items-start min-w-0" style={{ gridColumn: "2 / 5", gridRow: "5 / 7" }}>
                <ModuleCard
                  anchorId="licensing"
                  title={cardByKey.licensing.title}
                  icon={cardByKey.licensing.icon}
                  items={cardByKey.licensing.items}
                  footer={cardByKey.licensing.footer}
                  variant={compactCards ? "compact" : "default"}
                />
              </div>
            ) : null}

            {cardByKey.marketing ? (
              <div className="z-[10] flex justify-center items-start min-w-0" style={{ gridColumn: "9 / 12", gridRow: "5 / 7" }}>
                <ModuleCard
                  anchorId="marketing"
                  title={cardByKey.marketing.title}
                  icon={cardByKey.marketing.icon}
                  items={cardByKey.marketing.items}
                  footer={cardByKey.marketing.footer}
                  variant={compactCards ? "compact" : "default"}
                />
              </div>
            ) : null}
          </div>
        </PageShell>
      </div>

      {/* =========================
         DESKTOP XL (>=1280)
      ========================== */}
      <div className="relative hidden w-full pb-0 xl:block">
        {/* background layer */}
        <div className="pointer-events-none absolute inset-0">
          <DotBackground />
          {/* fade / vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_40%,rgba(255,255,255,0.9)_85%,rgba(255,255,255,1)_100%)]" />
        </div>


        <PageShell width="cards" className="relative">
          <div
            ref={xlGridRef}
            className="relative grid isolate h-full"
            style={{
              gridTemplateColumns: "repeat(20, minmax(0, 1fr))",
              gridTemplateRows: "repeat(7, minmax(auto, 1fr))",
              columnGap: "24px",
              rowGap: "24px",
            }}
          >
            <WorkflowConnectors
              scopeRef={xlGridRef}
              mode="desktop"
              strokeWidth={1.4}
              dotRadius={5}
              drawDurationMs={650}
              gapMs={180}
              className="absolute inset-0"
            />

            {/* HERO */}
            <div
              className="z-[10] flex justify-center"
              style={{
                gridColumn: "8 / 14",
                gridRow: "1 / 6",
                alignSelf: "start",
              }}
            >
              <div className="w-full max-w-[520px]">{heroSlot ?? null}</div>
            </div>

            {/* Top row: Disclosure, Evaluation, Protection */}
            {cardByKey.disclosure ? (
              <div
                style={{ gridColumn: "1 / 4", gridRow: "2 / 4" }}
                className="z-[5] flex justify-start items-start min-w-0"
              >
                <ModuleCard
                  anchorId="disclosure"
                  title={cardByKey.disclosure.title}
                  icon={cardByKey.disclosure.icon}
                  items={cardByKey.disclosure.items}
                  footer={cardByKey.disclosure.footer}
                  variant={compactCards ? "compact" : "default"}
                />
              </div>
            ) : null}

            {cardByKey.evaluation ? (
              <div
                style={{ gridColumn: "8 / 12", gridRow: "2 / 4", transform: "translateX(12px)" }}
                className="z-[5] flex justify-center items-start min-w-0"
              >
                <ModuleCard
                  anchorId="evaluation"
                  title={cardByKey.evaluation.title}
                  icon={cardByKey.evaluation.icon}
                  items={cardByKey.evaluation.items}
                  footer={cardByKey.evaluation.footer}
                  variant={compactCards ? "compact" : "default"}
                />
              </div>
            ) : null}

            {cardByKey.protection ? (
              <div
                style={{ gridColumn: "16 / 20", gridRow: "2 / 4" }}
                className="z-[5] flex justify-end items-start min-w-0"
              >
                <ModuleCard
                  anchorId="protection"
                  title={cardByKey.protection.title}
                  icon={cardByKey.protection.icon}
                  items={cardByKey.protection.items}
                  footer={cardByKey.protection.footer}
                  variant={compactCards ? "compact" : "default"}
                />
              </div>
            ) : null}

            {/* Bottom row: Licensing, Marketing - equal spacing from edges */}
            {cardByKey.licensing ? (
              <div
                style={{ gridColumn: "5 / 9", gridRow: "5 / 7" }}
                className="z-[10] flex justify-center items-start min-w-0"
              >
                <ModuleCard
                  anchorId="licensing"
                  title={cardByKey.licensing.title}
                  icon={cardByKey.licensing.icon}
                  items={cardByKey.licensing.items}
                  footer={cardByKey.licensing.footer}
                  variant={compactCards ? "compact" : "default"}
                />
              </div>
            ) : null}

            {cardByKey.marketing ? (
              <div
                style={{ gridColumn: "12 / 16", gridRow: "5 / 7" }}
                className="z-[10] flex justify-center items-start min-w-0"
              >
                <ModuleCard
                  anchorId="marketing"
                  title={cardByKey.marketing.title}
                  icon={cardByKey.marketing.icon}
                  items={cardByKey.marketing.items}
                  footer={cardByKey.marketing.footer}
                  variant={compactCards ? "compact" : "default"}
                />
              </div>
            ) : null}
          </div>
        </PageShell>
      </div>
    </section>
  );
}
