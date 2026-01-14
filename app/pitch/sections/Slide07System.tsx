import { Slide } from "./Slide"
import SystemFlow from "./SystemFlow"

export default function Slide07System() {
  return (
    <Slide>
      <h2 className="text-4xl font-semibold">One system. One source of truth.</h2>
      <p className="mt-4 text-lg text-muted-foreground max-w-[60ch]">
        Invention data is captured once and flows continuously through evaluation,
        IP protection, marketing, and licensing — without re-entry or loss.
      </p>

      <div className="mt-12">
        <SystemFlow />
      </div>
    </Slide>
  )
}
