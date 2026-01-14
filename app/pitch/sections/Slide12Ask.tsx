import { Slide } from "./Slide"

export default function Slide12Ask() {
  return (
    <Slide>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="w-full max-w-2xl space-y-6">
          <div className="h-16 bg-gray-100 border-2 border-dashed border-gray-300 rounded"></div>
          <div className="h-32 bg-gray-50 border-2 border-dashed border-gray-300 rounded"></div>
        </div>
      </div>
    </Slide>
  )
}
