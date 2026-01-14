import FeaturesClient from "./FeaturesClient"

export default function PitchFeatures() {
  return (
    <FeaturesClient>
      <main className="max-w-[1100px] mx-auto px-8 py-24 space-y-24">
        <Section
          title="Disclosure"
          built={[
            "Structured invention disclosure forms",
            "Inventor and ownership data capture",
            "Attachment and document handling",
          ]}
        />
        <Section
          title="Evaluation"
          built={[
            "Task-based evaluation workflows",
            "Prior art and market research support",
            "Automated report generation",
            "Status tracking and audit trail",
          ]}
        />
        <Section
          title="Protection"
          built={[
            "Attorney handoff with full context",
            "Draft tracking and status updates",
            "Integration into invention records",
          ]}
        />
        <Section
          title="Marketing"
          built={[
            "Invention webpages",
            "Deal rooms with access control",
            "Structured external sharing",
          ]}
        />
        <Section
          title="Licensing"
          built={[
            "Licensing workflow scaffolding",
            "Term sheet to agreement tracking",
            "Post-agreement follow-up visibility",
          ]}
        />
      </main>
    </FeaturesClient>
  )
}

function Section({ title, built }: { title: string; built: string[] }) {
  return (
    <section>
      <h2 className="text-3xl font-semibold">{title}</h2>
      <ul className="mt-6 space-y-2 text-muted-foreground">
        {built.map(item => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </section>
  )
}
