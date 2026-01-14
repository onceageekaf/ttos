import { Slide } from "./Slide"

export default function Slide01Vision() {
  return (
    <Slide>
      <div className="h-full flex flex-col">
        <div className="flex-1 flex flex-col justify-center items-center space-y-6">
          <div className="w-full h-20 bg-gray-100 border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
            <span className="text-gray-400 text-lg">Title Placeholder</span>
          </div>
          <div className="w-full flex-1 bg-gray-50 border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
            <span className="text-gray-400">Content Placeholder</span>
          </div>
        </div>
      </div>
    </Slide>
  )
}
