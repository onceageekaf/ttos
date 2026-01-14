import { Slide } from "./Slide"

export default function Slide06Solution() {
  return (
    <Slide>
      <h2 className="text-4xl font-semibold">ttOS — the Tech Transfer Operating System</h2>
      <p className="mt-4 text-lg text-muted-foreground max-w-[60ch]">
        A 360° infrastructure platform supporting the full technology transfer lifecycle —
        from first disclosure to post-licensing follow-up.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-medium mb-3">Lifecycle coverage</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>Disclosure</li>
            <li>Evaluation</li>
            <li>Protection</li>
            <li>Marketing</li>
            <li>Licensing</li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-3">Already built</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>Structured invention disclosure intake</li>
            <li>Centralised invention records and metadata</li>
            <li>Evaluation task workflows and reporting</li>
            <li>Licensing workflow scaffolding</li>
            <li>Portfolio-level pipeline visibility</li>
          </ul>
        </div>
      </div>
    </Slide>
  )
}
