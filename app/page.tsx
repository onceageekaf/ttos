import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "In Pursuit of a Perfect TTO | ttOS",
  description:
    "How AI-powered infrastructure can plug the leaks in the global innovation pipeline and ensure that breakthrough research reaches the people who need it most.",
  openGraph: {
    title: "In Pursuit of a Perfect TTO | ttOS",
    description:
      "How AI-powered infrastructure can plug the leaks in the global innovation pipeline and ensure that breakthrough research reaches the people who need it most.",
    type: "article",
  },
}

// References data
const references = [
  {
    id: 1,
    label: "OECD Main Science and Technology Indicators",
    url: "https://www.oecd.org/en/data/datasets/main-science-and-technology-indicators.html",
  },
  {
    id: 2,
    label: "Renaissance Philanthropy — America's Innovation Pipeline Is Leaking",
    url: "https://www.renaissancephilanthropy.org/news-and-insights/americas-innovation-pipeline-is-leaking-and-were-losing-game-changing-startups",
  },
  {
    id: 3,
    label: "AUTM Licensing Activity Survey",
    url: "https://autm.net",
  },
  {
    id: 4,
    label: "UK Government HE-BCI Survey 2022-23",
    url: "https://www.ukri.org/wp-content/uploads/2025/02/RE-240225-HE-BCI-2022_23-Final.pdf",
  },
  {
    id: 5,
    label: "Eurostat R&D Expenditure Statistics",
    url: "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=R%26D_expenditure",
  },
  {
    id: 6,
    label: "Nature — China Overtakes US in Research Output",
    url: "https://www.nature.com/articles/d41586-025-03715-z",
  },
  {
    id: 7,
    label: "WIPO Global Innovation Index 2023",
    url: "https://www.wipo.int/edocs/pubdocs/en/wipo-pub-2000-2023-en-main-report-global-innovation-index-2023-16th-edition.pdf",
  },
]

// Region data for pipeline comparison
const regions = [
  {
    name: "United States",
    subtitle: "Mature ecosystem",
    percentage: 70,
    description: "Robust TTO network",
    stat: "$4.1B licensing revenue (2022)",
    statUrl: "https://autm.net",
    refId: 3,
    details: "established VC ecosystem; still loses most research to the 'valley of death'",
  },
  {
    name: "United Kingdom",
    subtitle: "Concentrated excellence",
    percentage: 55,
    stat: "£287M Intellectual Property income (2022-23)",
    statUrl:
      "https://www.ukri.org/wp-content/uploads/2025/02/RE-240225-HE-BCI-2022_23-Final.pdf",
    refId: 4,
    details:
      "Golden Triangle dominance (Oxford, Cambridge, London); severe regional disparity; post-Brexit uncertainty",
  },
  {
    name: "Europe",
    subtitle: "Fragmented",
    percentage: 45,
    description: "World-class research",
    stat: "€328B R&D investment",
    statUrl: "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=R%26D_expenditure",
    refId: 5,
    details: "27+ fragmented national systems; inconsistent IP frameworks; persistent brain drain",
  },
  {
    name: "Asia-Pacific",
    subtitle: "Rapidly growing",
    percentage: 35,
    stat: "China now leads in research output",
    statUrl: "https://www.nature.com/articles/d41586-025-03715-z",
    refId: 6,
    details: "nascent TTO infrastructure; cultural barriers to academic entrepreneurship; VC concentrated in few hubs",
  },
  {
    name: "Global South",
    subtitle: "Critical gap",
    percentage: 15,
    description: "Minimal TTO infrastructure",
    stat: "0.5% of global patents",
    statUrl:
      "https://www.wipo.int/edocs/pubdocs/en/wipo-pub-2000-2023-en-main-report-global-innovation-index-2023-16th-edition.pdf",
    refId: 7,
    details: "isolated researchers; locally-relevant innovations never commercialized; extreme talent exodus",
  },
]

// AI Bots
const bots = [
  { name: "Disclosure", description: "Autofill disclosure forms" },
  { name: "Evaluation", description: "Due diligence, prior art and market numbers" },
  { name: "Protection", description: "Patent draft and filing" },
  { name: "Marketing", description: "Highlights, Contact lists, Data Room" },
  { name: "Licensing", description: "Strategy, Negotiation and Execution" },
]

// Platform features
const platformFeatures = [
  {
    title: "Streamline Workflows",
    description: "Inventor dashboard and Caseview dashboard for real time updates",
  },
  {
    title: "Coordinate IP Bundling",
    description: "Combine complementary patents into more valuable packages",
  },
  {
    title: "Agreement coordination",
    description: "Standardized agreements that adapt to all jurisdictions. Compare and sign online",
  },
  {
    title: "Connect to Markets",
    description: "Match innovations with industry partners and investors globally",
  },
]

// Impact stats
const impactStats = [
  {
    value: "1,000+",
    label: "Potential new startups per year from research that would otherwise be lost to the 'valley of death'",
  },
  {
    value: "$50B+",
    label: "Estimated annual value of research currently lost due to commercialization failures globally",
  },
  {
    value: "100K+",
    label: "Researchers in underserved regions who could gain access to world-class tech transfer guidance",
  },
  {
    value: "10x",
    label: "Potential increase in IP discovery rate by eliminating availability bias and surfacing hidden innovations",
  },
]

// Partner principles
const partnerPrinciples = [
  {
    title: "Infrastructure investments compound.",
    description: "Building the rails for innovation creates returns that grow over decades, not quarters.",
  },
  {
    title: "Global challenges need global solutions.",
    description:
      "Climate change, pandemics, and food security require innovation from everywhere, not just elite institutions in wealthy countries.",
  },
  {
    title: "AI can democratize expertise.",
    description:
      "What once required expensive professionals can now be delivered at scale to anyone with an internet connection.",
  },
  {
    title: "Systemic change creates lasting value.",
    description: "Strategic partners can drive impact that extends far beyond any single investment or initiative.",
  },
]

export default function GlobalPaperStandalonePage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Document */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-neutral-900 mb-8 leading-none">
            In Pursuit of a Perfect TTO
          </h1>
          <p className="text-xl text-neutral-500 leading-relaxed max-w-2xl mx-auto">
            How AI-powered infrastructure can plug the leaks in the global innovation pipeline and ensure that
            breakthrough research reaches the people who need it most.
          </p>
        </div>

        {/* Section 01: The Innovation Pipeline Is Broken */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="font-mono text-sm text-neutral-400 whitespace-nowrap">[ 01 ]</span>
            <h2 className="text-2xl font-medium tracking-tight text-neutral-900">The Innovation Pipeline Is Broken</h2>
          </div>
          <div className="space-y-6">
            <p className="text-neutral-500 leading-relaxed text-lg">
              Every year, the world invests over{" "}
              <a
                href={references[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-neutral-900 underline underline-offset-2 hover:text-neutral-500"
              >
                $700 billion in research and development
              </a>
              <sup className="text-[10px]">1</sup>. This investment produces extraordinary discoveries — potential cures
              for diseases, solutions to climate change, technologies that could transform lives. Yet{" "}
              <span className="font-medium text-neutral-900">
                less than 5% of this research ever reaches the market
              </span>
              .
            </p>

            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8">
              <p className="text-neutral-900 leading-relaxed mb-6">
                The problem is not a lack of innovation. It is a{" "}
                <span className="font-medium">systemic failure in the pipeline</span> that connects research to
                real-world impact. A recent analysis by Renaissance Philanthropy has identified{" "}
                <a
                  href={references[1].url}
            target="_blank"
            rel="noopener noreferrer"
                  className="font-medium underline underline-offset-2 hover:text-neutral-500"
                >
                  over 60 distinct failure points
                </a>
                <sup className="text-[10px]">2</sup> in the U.S. innovation ecosystem alone — and the United States has
                the most developed tech transfer infrastructure in the world.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-neutral-100 rounded-lg p-4 text-center">
                  <p className="text-3xl font-medium text-neutral-900">$700B+</p>
                  <p className="text-sm text-neutral-500 mt-1">Global R&D annually</p>
                </div>
                <div className="bg-neutral-100 rounded-lg p-4 text-center">
                  <p className="text-3xl font-medium text-neutral-900">{"<"}5%</p>
                  <p className="text-sm text-neutral-500 mt-1">Ever commercialized</p>
                </div>
                <div className="bg-neutral-100 rounded-lg p-4 text-center">
                  <p className="text-3xl font-medium text-neutral-900">60+</p>
                  <p className="text-sm text-neutral-500 mt-1">Failure points (US)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: The Crisis Is Global */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="font-mono text-sm text-neutral-400 whitespace-nowrap">[ 02 ]</span>
            <h2 className="text-2xl font-medium tracking-tight text-neutral-900">The Crisis Is Global — and Unequal</h2>
          </div>
          <div className="space-y-6">
            <p className="text-neutral-500 leading-relaxed text-lg">
              Developed economies like the{" "}
              <span className="font-medium text-neutral-900">United States and United Kingdom</span> often respond to
              innovation pipeline failures by pouring more resources into the system — more funding, more programs, more
              initiatives. But{" "}
              <span className="font-medium text-neutral-900">
                adding more water to leaky pipes doesn't fix the leaks
              </span>
              . It simply increases the volume of what's lost.
            </p>

            <p className="text-neutral-500 leading-relaxed text-lg">
              Meanwhile, in much of the world,{" "}
              <span className="font-medium text-neutral-900">the pipes barely exist at all</span>. Researchers in
              emerging economies face not just leaky infrastructure, but often no infrastructure whatsoever — no TTOs,
              no patent support, no pathway from lab to market.
            </p>

            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8">
              <h3 className="font-medium text-neutral-900 mb-6">Pipeline Integrity by Region</h3>
              <div className="space-y-6">
                {regions.map((region) => (
                  <div key={region.name} className="flex gap-4 items-start">
                    <div className="w-28 flex-shrink-0">
                      <p className="font-medium text-neutral-900">{region.name}</p>
                      <p className="text-xs text-neutral-400">{region.subtitle}</p>
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-neutral-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-neutral-900 rounded-full"
                          style={{ width: `${region.percentage}%` }}
                        />
                      </div>
                      <p className="text-sm text-neutral-500 mt-2">
                        {region.description && `${region.description}; `}
                        <a
                          href={region.statUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-2 hover:text-neutral-900"
                        >
                          {region.stat}
                        </a>
                        <sup className="text-[10px]">{region.refId}</sup>; {region.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-100 border border-neutral-200 rounded-xl p-6">
              <p className="text-neutral-900 leading-relaxed">
                <span className="font-medium">The asymmetry is stark:</span> a researcher in Boston with a breakthrough
                has access to institutional support, patent attorneys, licensing professionals, and investor networks. A
                researcher in Nairobi, São Paulo, or Manila with an equally important discovery often has{" "}
                <span className="font-medium">none of these resources</span>. Their only options are to abandon the work
                — or emigrate.
              </p>
            </div>
          </div>
        </section>

        {/* Section 03: ttOS Solution */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="font-mono text-sm text-neutral-400 whitespace-nowrap">[ 03 ]</span>
            <h2 className="text-2xl font-medium tracking-tight text-neutral-900">
              ttOS: AI Infrastructure for Global Tech Transfer
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-neutral-500 leading-relaxed text-lg">
              ttOS is building the AI-powered infrastructure to democratize tech transfer globally. Our approach
              addresses the pipeline leaks at every stage — from initial disclosure through successful
              commercialization.
            </p>

            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8">
              <h3 className="font-medium text-neutral-900 mb-6">Two-Layer Architecture</h3>
              <div className="space-y-6">
                {/* Layer 1: Free AI Bots */}
                <div className="bg-neutral-100 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <div className="w-8 h-8 flex-shrink-0 rounded-lg bg-neutral-900 text-white flex items-center justify-center text-sm font-medium">
                      1
                    </div>
                    <h4 className="font-medium text-neutral-900">Free AI Bots for Everyone</h4>
                    <span className="text-xs bg-neutral-200 px-2 py-1 rounded-full text-neutral-500 whitespace-nowrap">
                      Global Access
                    </span>
                  </div>
                  <p className="text-sm text-neutral-500 mb-4">
                    Our suite of AI bots provides every researcher — regardless of institution or geography — with
                    world-class tech transfer guidance:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {bots.map((bot) => (
                      <div key={bot.name} className="bg-white rounded-lg p-3 text-center">
                        <p className="text-sm font-medium text-neutral-900">{bot.name}</p>
                        <p className="text-xs text-neutral-400 mb-2">Bot</p>
                        <p className="text-xs text-neutral-500">{bot.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Layer 2: Platform for Institutions */}
                <div className="bg-neutral-100 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <div className="w-8 h-8 flex-shrink-0 rounded-lg bg-neutral-900 text-white flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <h4 className="font-medium text-neutral-900">Platform for Institutions</h4>
                    <span className="text-xs bg-neutral-200 px-2 py-1 rounded-full text-neutral-500 whitespace-nowrap">
                      Systemic Scale
                    </span>
                  </div>
                  <p className="text-sm text-neutral-500 mb-4">
                    Our institutional platform enables universities, research organizations, and governments to:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {platformFeatures.map((feature) => (
                      <div key={feature.title} className="bg-white rounded-lg p-3">
                        <p className="text-sm font-medium text-neutral-900">{feature.title}</p>
                        <p className="text-xs text-neutral-400">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 text-center">
                <p className="text-3xl font-medium text-neutral-900">10x</p>
                <p className="text-sm text-neutral-500 mt-2">Faster Processing</p>
              </div>
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 text-center">
                <p className="text-3xl font-medium text-neutral-900">24/7</p>
                <p className="text-sm text-neutral-500 mt-2">Available in any timezone</p>
              </div>
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 text-center">
                <p className="text-3xl font-medium text-neutral-900">10+</p>
                <p className="text-sm text-neutral-500 mt-2">Languages supported</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 04: Surfacing Hidden Innovation */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="font-mono text-sm text-neutral-400 whitespace-nowrap">[ 04 ]</span>
            <h2 className="text-2xl font-medium tracking-tight text-neutral-900">Surfacing Hidden Innovation</h2>
          </div>
          <div className="space-y-6">
            <p className="text-neutral-500 leading-relaxed text-lg">
              One of the most persistent challenges in tech transfer is{" "}
              <span className="font-medium text-neutral-900">availability bias</span> — the tendency to focus on
              innovations from researchers and labs already on the TTO's radar, while overlooking high-potential
              discoveries elsewhere.
            </p>

            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8">
              <h3 className="font-medium text-neutral-900 mb-6">Eliminating Blind Spots</h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-neutral-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-neutral-900">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Surface Overlooked Innovations</p>
                    <p className="text-sm text-neutral-500 mt-1">
                      ttOS proactively identifies innovations researchers themselves might miss — discoveries with
                      commercial potential that would otherwise remain buried in academic publications or lab notebooks.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-neutral-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-neutral-900">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Level the Playing Field</p>
                    <p className="text-sm text-neutral-500 mt-1">
                      Labs with high innovation potential can be overlooked if PIs aren't well-connected or at
                      prestigious institutions. ttOS eliminates this availability bias by identifying potential
                      regardless of institution size or location.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-neutral-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-neutral-900">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Prevent Lost Opportunities</p>
                    <p className="text-sm text-neutral-500 mt-1">
                      Every overlooked innovation is a lost opportunity — for the researcher, the institution, and
                      society. ttOS ensures that promising discoveries don't fall through the cracks simply because they
                      weren't visible to the right people at the right time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-100 border border-neutral-200 rounded-xl p-6">
              <p className="text-neutral-900 leading-relaxed">
                <span className="font-medium">An important capability:</span> while the core mission of ttOS is to
                streamline the tech transfer process, this ability to surface hidden innovation represents a meaningful
                additional benefit — helping institutions discover value they didn't know they had.
              </p>
            </div>
          </div>
        </section>

        {/* Section 05: Systemic Impact */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="font-mono text-sm text-neutral-400 whitespace-nowrap">[ 05 ]</span>
            <h2 className="text-2xl font-medium tracking-tight text-neutral-900">Potential for Systemic Impact</h2>
          </div>
          <div className="space-y-6">
            <p className="text-neutral-500 leading-relaxed text-lg">
              By plugging the leaks in the global innovation pipeline, investment in ttOS can generate cascading
              benefits across the entire research-to-impact ecosystem:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {impactStats.map((stat) => (
                <div key={stat.value} className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                  <p className="text-3xl font-medium text-neutral-900 mb-2">{stat.value}</p>
                  <p className="text-sm text-neutral-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-neutral-100 border border-neutral-200 rounded-xl p-6">
              <p className="text-neutral-900 leading-relaxed">
                <span className="font-medium">The multiplier effect :</span> every researcher who
                successfully commercializes their work creates jobs, generates tax revenue, attracts further investment,
                and inspires the next generation. By fixing the infrastructure, strategic investment doesn't just fund
                one innovation — it unlocks an entire ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Section 06: The Opportunity */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="font-mono text-sm text-neutral-400 whitespace-nowrap">[ 06 ]</span>
            <h2 className="text-2xl font-medium tracking-tight text-neutral-900">The Opportunity for Partners</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8">
              <p className="text-lg text-neutral-900 leading-relaxed mb-6">
                We are seeking partners who share our vision of a brighter future through science, technology, and
                innovation. Partners who understand that:
              </p>
              <ul className="space-y-4">
                {partnerPrinciples.map((principle, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-neutral-900">{index + 1}</span>
                    </span>
                    <p className="text-neutral-500">
                      <span className="font-medium text-neutral-900">{principle.title}</span> {principle.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-neutral-900 text-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-medium tracking-tight mb-4">Join Us in Plugging the Leaks</h3>
              <p className="text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-6">
                Together, we can ensure that breakthrough research — wherever it originates — has a pathway to impact.
                We can build the infrastructure that transforms the global innovation pipeline from a system of loss to
                a system of abundance.
              </p>
              <p className="text-sm text-neutral-400">
                Contact us to discuss partnership opportunities and learn more about our work.
              </p>
            </div>
          </div>
        </section>

        {/* References */}
        <section className="border-t border-neutral-200 pt-12">
          <h3 className="font-medium text-neutral-900 mb-6">References</h3>
          <ol className="text-xs text-neutral-500 space-y-2 list-decimal list-inside">
            {references.map((ref) => (
              <li key={ref.id}>
                <a
                  href={ref.url}
            target="_blank"
            rel="noopener noreferrer"
                  className="hover:text-neutral-900 underline underline-offset-2"
          >
                  {ref.label}
          </a>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  )
}
