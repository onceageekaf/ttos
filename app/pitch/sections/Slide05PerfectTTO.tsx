import { Slide } from "./Slide"

export default function Slide05PerfectTTO() {
  return (
    <Slide>
      <div className="h-full flex flex-col">
        <div className="mb-8">
          <div className="w-3/4 h-12 bg-gray-100 border-2 border-dashed border-gray-300 rounded"></div>
        </div>
        <div className="flex-1 bg-gray-50 border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
          <span className="text-gray-400">Content Placeholder</span>
        </div>
      </div>
    </Slide>
  )
}
