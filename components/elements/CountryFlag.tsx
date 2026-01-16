import Image from "next/image"
import { cn } from "@/lib/utils"

type FlagSize = "sm" | "md"

const SIZES = {
  sm: "h-4 w-4",   // 16px
  md: "h-5 w-5",   // 20px
}

export default function CountryFlag({
  country,
  size = "md",
  className,
}: {
  country: "us" | "gb" | "ch" | "ca" | "jp"
  size?: FlagSize
  className?: string
}) {
  return (
    <Image
      src={`/flags/${country}.svg`}
      alt={country}
      width={20}
      height={20}
      className={cn(
        "rounded-full object-cover",
        SIZES[size],
        className
      )}
    />
  )
}