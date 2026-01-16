// app/(marketing)/unbundling/page.tsx
import Link from "next/link";

type TocItem = { id: string; label: string; depth: 2 | 3 };

const TOC: TocItem[] = [
  { id: "intro", label: "Introduction", depth: 2 },

  { id: "part-i", label: "Part I — The bottleneck is institutional", depth: 2 },
  { id: "bundle", label: "1. Universities became a bundle", depth: 3 },
  { id: "untracked", label: "2. The pipeline is real — uninstrumented", depth: 3 },
  { id: "point-tools", label: "3. Why point tools don’t fix it", depth: 3 },

  { id: "part-ii", label: "Part II — What unbundling looks like", depth: 2 },
  { id: "executable", label: "4. Unbundling is executable workflow", depth: 3 },
  { id: "os-layer", label: "5. The missing layer: an operating system", depth: 3 },

  { id: "part-iii", label: "Part III — ttOS architecture", depth: 2 },
  { id: "object-model", label: "6. The object model", depth: 3 },
  { id: "modules", label: "7. The modules", depth: 3 },
  { id: "automation", label: "8. Automation as default", depth: 3 },

  { id: "part-iv", label: "Part IV — What gets unlocked", depth: 2 },
  { id: "speed", label: "9. Speed without chaos", depth: 3 },
  { id: "quality", label: "10. Quality at scale", depth: 3 },
  { id: "global", label: "11. A global leveling effect", depth: 3 },

  { id: "conclusion", label: "Conclusion", depth: 2 },
  { id: "references", label: "References", depth: 2 },
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

function Callout({
  title,
  children,
  tone = "neutral",
}: {
  title?: string;
  children: React.ReactNode;
  tone?: "neutral" | "claim" | "warning";
}) {
  return (
    <aside
      className={clsx(
        "my-6 rounded-xl border border-neutral-200 p-5",
        tone === "neutral" && "bg-neutral-50",
        tone === "claim" && "bg-neutral-50",
        tone === "warning" && "bg-neutral-50"
      )}
    >
      {title ? <div className="mb-2 font-medium text-neutral-900">{title}</div> : null}
      <div className="text-sm leading-6 text-neutral-500">{children}</div>
    </aside>
  );
}

function Figure({
  title,
  caption,
  children,
}: {
  title?: string;
  caption?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="my-8 rounded-xl border border-neutral-200 bg-neutral-50 p-5">
      {title ? <div className="mb-3 text-sm font-medium text-neutral-900">{title}</div> : null}
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">{children}</div>
      {caption ? <figcaption className="mt-3 text-xs leading-5 text-neutral-400">{caption}</figcaption> : null}
    </figure>
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

function ModuleTiles() {
  // Swap these for your existing card components if you already have them.
  const mods = [
    { name: "Disclosure", desc: "Capture structured disclosure objects, not static forms." },
    { name: "Evaluation", desc: "Repeatable diligence, scoring, and decision memos." },
    { name: "Protection", desc: "IP workflows with provenance and fewer surprises." },
    { name: "Marketing", desc: "Auto-generated summaries and partner targeting." },
    { name: "Licensing", desc: "Term iteration, approvals, signatures, obligations." },
  ];
  return (
    <div className="my-8 grid gap-3 sm:grid-cols-2">
      {mods.map((m) => (
        <div key={m.name} className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
          <div className="text-sm font-medium text-neutral-900">{m.name}</div>
          <div className="mt-2 text-sm leading-6 text-neutral-500">{m.desc}</div>
        </div>
      ))}
    </div>
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
                Unbundling Pre-Commercial Research
              </AnchorHeading>

              <p className="mt-3 text-lg leading-7 text-neutral-500">
                Why <span className="font-medium text-neutral-900">ttOS</span> is the missing operating system between discovery and scale.
              </p>

              <div className="mt-4 text-sm text-neutral-400">
                ttOS • Last updated Jan 14, 2026
              </div>
            </header>

          <MobileToc items={TOC} />

          {/* INTRO */}
          <section>
            <AnchorHeading id="intro" as="h2" className="text-xl font-medium text-neutral-900">
                Introduction
              </AnchorHeading>
            <p className="mt-3 leading-7 text-neutral-500">
                Pre-commercial research has a coordination problem. Not a talent problem. Not a "more funding" problem.
              A <span className="font-medium text-neutral-900">systems problem</span>: workflows are fragmented, evidence is scattered,
                decisions are inconsistent, and the people doing the work are overloaded.
              </p>
            <p className="mt-3 leading-7 text-neutral-500">
              <span className="font-medium text-neutral-900">ttOS exists to change that</span> by turning the pipeline into something you can
                run, measure, and improve.
              </p>

              <Callout tone="claim" title="Thesis">
                Universities generate breakthroughs, but translation is limited by operational friction. Unbundling research
                means modularizing the pipeline into observable, automatable stages — and ttOS is the system that makes that possible.
              </Callout>

              <ModuleTiles />

            <Figure
              title="Figure — The pipeline, made explicit"
              caption="Replace this placeholder with your existing workflow visual (static image or your WorkflowHeroCanvas component)."
            >
              <div className="p-6 text-sm text-neutral-400">
                Placeholder: embed your existing pipeline component or an image from /public.
              </div>
            </Figure>
          </section>

          {/* PART I */}
          <section className="mt-12">
            <AnchorHeading id="part-i" as="h2" className="text-xl font-medium text-neutral-900">
              Part I — The bottleneck is institutional, not scientific
            </AnchorHeading>

            <section className="mt-6">
              <AnchorHeading id="bundle" as="h3" className="text-lg font-medium text-neutral-900">
                1. Universities became a bundle
              </AnchorHeading>
              <p className="mt-3 leading-7 text-neutral-500">
                Modern universities perform many societal roles at once: research, education, credentialing, lab infrastructure,
                IP stewardship, partnering, compliance, and more. "Unbundling" means separating a bundled system into parts that can
                be improved independently.
              </p>
              <ul className="mt-4 list-disc pl-6 leading-7 text-neutral-500">
                <li><span className="font-medium text-neutral-900">Uncertainty</span> — what do we have, what is it worth, what should happen next?</li>
                <li><span className="font-medium text-neutral-900">Opacity</span> — where is the deal, who owns the next step, what's blocked?</li>
                <li><span className="font-medium text-neutral-900">Overburdened execution</span> — humans doing integration work across inboxes, PDFs, and legacy CRMs.</li>
              </ul>
            </section>

            <section className="mt-8">
              <AnchorHeading id="untracked" as="h3" className="text-lg font-medium text-neutral-900">
                2. The pipeline is real — it's just not instrumented
              </AnchorHeading>
              <p className="mt-3 leading-7 text-neutral-500">
                Every office runs a version of: capture → assess → protect → package → match → transact → manage.
                The tragedy is that most of it lives in email threads and spreadsheets.
              </p>
              <Callout tone="claim">
                <span className="font-medium text-neutral-900">Claim:</span> pre-commercial research isn't "stuck." It's <span className="font-medium text-neutral-900">untracked</span>.
              </Callout>
            </section>

            <section className="mt-8">
              <AnchorHeading id="point-tools" as="h3" className="text-lg font-medium text-neutral-900">
                3. Why point tools don't fix it
              </AnchorHeading>
              <p className="mt-3 leading-7 text-neutral-500">
                CRMs, contract tools, IP databases, deal rooms — each solves a slice. Unbundling requires the end-to-end connective tissue:
                consistent objects, consistent states, consistent provenance, and consistent automation.
              </p>
            </section>
          </section>

          {/* PART II */}
          <section className="mt-12">
            <AnchorHeading id="part-ii" as="h2" className="text-xl font-medium text-neutral-900">
              Part II — What unbundling should look like in practice
            </AnchorHeading>

            <section className="mt-6">
              <AnchorHeading id="executable" as="h3" className="text-lg font-medium text-neutral-900">
                4. Unbundling is executable workflow, not reform
              </AnchorHeading>
              <p className="mt-3 leading-7 text-neutral-500">
                Unbundling pre-commercial research means each stage has clear inputs, produces clear outputs, leaves a trace,
                and can be automated and benchmarked.
              </p>
            </section>

            <section className="mt-8">
              <AnchorHeading id="os-layer" as="h3" className="text-lg font-medium text-neutral-900">
                5. The missing layer: an operating system
              </AnchorHeading>
              <p className="mt-3 leading-7 text-neutral-500">
                The ecosystem has producers (labs), allocators (grants/VC), and scale engines (industry). What's missing is the neutral substrate
                that coordinates handoffs with speed and quality.
              </p>
              <Callout title="What ttOS is" tone="claim">
                ttOS is the coordination substrate: a shared object model + stage gates + automation that makes the pipeline runnable.
              </Callout>
            </section>
          </section>

          {/* PART III */}
          <section className="mt-12">
            <AnchorHeading id="part-iii" as="h2" className="text-xl font-medium text-neutral-900">
              Part III — ttOS: the pipeline, made legible and runnable
            </AnchorHeading>

            <section className="mt-6">
              <AnchorHeading id="object-model" as="h3" className="text-lg font-medium text-neutral-900">
                6. The object model
              </AnchorHeading>
              <p className="mt-3 leading-7 text-neutral-500">
                ttOS treats tech transfer as a graph of objects with state: inventions, evidence, people, partners, agreements, and workflow stages.
              </p>
            </section>

            <section className="mt-8">
              <AnchorHeading id="modules" as="h3" className="text-lg font-medium text-neutral-900">
                7. The modules
              </AnchorHeading>
              <p className="mt-3 leading-7 text-neutral-500">
                Disclosure, Evaluation, Protection, Marketing, Licensing — each module is a stage with standardized inputs/outputs and a shared underlying model.
              </p>
              <ModuleTiles />
            </section>

            <section className="mt-8">
              <AnchorHeading id="automation" as="h3" className="text-lg font-medium text-neutral-900">
                8. Automation as default
              </AnchorHeading>
              <p className="mt-3 leading-7 text-neutral-500">
                The system self-updates from communications and documents, drives reminders from stage gates, and keeps dashboards aligned to reality.
              </p>
            </section>
          </section>

          {/* PART IV */}
          <section className="mt-12">
            <AnchorHeading id="part-iv" as="h2" className="text-xl font-medium text-neutral-900">
              Part IV — What gets unlocked when the pipeline is real
            </AnchorHeading>

            <section className="mt-6">
              <AnchorHeading id="speed" as="h3" className="text-lg font-medium text-neutral-900">
                9. Speed without chaos
              </AnchorHeading>
              <p className="mt-3 leading-7 text-neutral-500">
                Explicit workflow lowers cycle time, prevents silent stalls, and makes handoffs clean.
              </p>
            </section>

            <section className="mt-8">
              <AnchorHeading id="quality" as="h3" className="text-lg font-medium text-neutral-900">
                10. Quality at scale
              </AnchorHeading>
              <p className="mt-3 leading-7 text-neutral-500">
                Translation capacity should not be limited to a few hero deals. Standardization gives the long tail a fair shot.
              </p>
            </section>

            <section className="mt-8">
              <AnchorHeading id="global" as="h3" className="text-lg font-medium text-neutral-900">
                11. A global leveling effect
              </AnchorHeading>
              <p className="mt-3 leading-7 text-neutral-500">
                Breakthroughs exist across the full research base; operational advantage shouldn't be reserved for a handful of institutions.
              </p>
            </section>
          </section>

          {/* CONCLUSION */}
          <section className="mt-12">
            <AnchorHeading id="conclusion" as="h2" className="text-xl font-medium text-neutral-900">
                Conclusion
              </AnchorHeading>
            <p className="mt-3 leading-7 text-neutral-500">
                Unbundling pre-commercial research isn't about stripping universities down. It's about giving society a pipeline that can
                reliably turn discoveries into useful things. ttOS is not a dashboard — it's executable infrastructure.
              </p>
          </section>

          {/* REFERENCES */}
          <section className="mt-12">
            <AnchorHeading id="references" as="h2" className="text-xl font-medium text-neutral-900">
              References
              </AnchorHeading>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-6 text-neutral-500">
              <li>
                Ben Reinhardt — "Shifting the impossible to the inevitable (PARPA)".{" "}
                <a className="underline underline-offset-2 hover:text-neutral-900" href="https://blog.benjaminreinhardt.com/parpa">Source</a>
              </li>
              <li>
                "Unbundling the University" (extended essay).{" "}
                <a className="underline underline-offset-2 hover:text-neutral-900" href="https://www.unbundle-the-university.com/">Source</a>
              </li>
              <li>
                "How can we develop transformative tools for thought?" (TTFT).{" "}
                <a className="underline underline-offset-2 hover:text-neutral-900" href="https://numinous.productions/ttft/">Source</a>
              </li>
            </ol>
          </section>

          <div className="mt-12 flex flex-wrap gap-3">
            <a className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100 hover:underline" href="#top">
              Back to top
            </a>
            <Link className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100 hover:underline" href="/system">
              Explore the system
          </Link>
        </div>
        </article>
        </div>
      </main>
    </div>
  );
}