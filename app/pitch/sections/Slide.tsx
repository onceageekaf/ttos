import { ReactNode } from "react"

export function Slide({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen flex items-center justify-center pt-12 pb-8 px-8">
      <div className="w-full max-w-[1280px] aspect-video bg-white border-2 border-black/10 shadow-lg relative">
        <div className="h-full p-12 flex flex-col">
          {children}
        </div>
      </div>
    </section>
  )
}
