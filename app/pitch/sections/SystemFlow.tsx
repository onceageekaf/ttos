export default function SystemFlow() {
  return (
    <svg viewBox="0 0 900 360" className="w-full max-w-[900px] text-muted-foreground">
      {[
        { x: 40, y: 150, title: "Disclosure", note: "Intake, inventor data" },
        { x: 210, y: 150, title: "Evaluation", note: "Tasks, reports" },
        { x: 380, y: 70, title: "Protection", note: "Drafts, handoff" },
        { x: 380, y: 230, title: "Marketing", note: "Deal rooms" },
        { x: 600, y: 230, title: "Licensing", note: "Agreements, follow-up" },
      ].map(({ x, y, title, note }) => (
        <g key={title}>
          <rect x={x} y={y} rx={8} width={160} height={56} fill="none" stroke="currentColor" />
          <text x={x + 80} y={y + 24} textAnchor="middle" className="text-sm fill-current font-medium">
            {title}
          </text>
          <text x={x + 80} y={y + 42} textAnchor="middle" className="text-xs fill-current opacity-70">
            {note}
          </text>
        </g>
      ))}

      <path d="M200 178 L210 178" stroke="currentColor" />
      <path d="M370 178 L380 98" stroke="currentColor" />
      <path d="M370 178 L380 258" stroke="currentColor" />
      <path d="M540 258 L600 258" stroke="currentColor" />
    </svg>
  )
}
