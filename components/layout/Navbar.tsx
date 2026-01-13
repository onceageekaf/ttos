"use client"

import Link from "next/link"
import PageShell from "@/components/layout/PageShell"
import Logo from "@/components/elements/Logo"
import { Button } from "@/components/ui/button"

export default function Navbar() {

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
      <PageShell width="cards" className="relative flex h-14 items-center">
        {/* LEFT — brand */}
        <Link href="/" className="flex items-center gap-2">
          <Logo width={24} height={24} />
          <span className="text-sm font-semibold text-black">ttOS</span>
        </Link>

        {/* RIGHT — CTA */}
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" className="h-6 px-2 text-xs min-w-[24px]">
            <Link href="mailto:ashwin.ravikumar@gmail.com">Contact</Link>
          </Button>
        </div>
      </PageShell>
    </header>
  )
}
