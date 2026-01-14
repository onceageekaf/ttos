import { Slide } from "./Slide"

export default function Slide04RootCause() {
  return (
    <Slide>
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <div className="w-1/2 h-10 bg-gray-100 border-2 border-dashed border-gray-300 rounded"></div>
        </div>
        <div className="flex-1 space-y-4">
          <div className="h-16 bg-gray-50 border-2 border-dashed border-gray-300 rounded"></div>
          <div className="h-16 bg-gray-50 border-2 border-dashed border-gray-300 rounded"></div>
          <div className="h-16 bg-gray-50 border-2 border-dashed border-gray-300 rounded"></div>
        </div>
      </div>
    </Slide>
  )
}
