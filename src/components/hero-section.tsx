"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  badge?: string;
  subtitle?: string;
  title?: string;
  description?: string;
  primaryButtonLabel?: string;
  primaryButtonHref?: string;
  secondaryButtonLabel?: string;
  secondaryButtonHref?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function HeroSection({
  badge = "Launching soon. Q2 2026.",
  subtitle = "Meet ttOS.",
  title = "Your research, translated.",
  description = "10X Faster. From Months to weeks.",
  primaryButtonLabel = "Learn More",
  secondaryButtonLabel = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
}: HeroSectionProps) {
  return (
    <header className="flex w-full flex-col items-center pt-4 sm:pt-5 md:pt-6 lg:pt-7 xl:pt-8">
      {subtitle && (
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl leading-5 sm:leading-6 md:leading-6 lg:leading-7 xl:leading-7 mt-3 sm:mt-3.5 md:mt-4 lg:mt-4.5 xl:mt-5 max-w-xl text-center tracking-[-0.01em] font-medium [text-wrap:balance] text-neutral-800 px-4 sm:px-6">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl leading-5 sm:leading-6 md:leading-6 lg:leading-7 xl:leading-7 mt-3 sm:mt-3.5 md:mt-4 lg:mt-4.5 xl:mt-5 max-w-xl text-center tracking-[-0.01em] font-medium [text-wrap:balance] text-gray-500 px-4 sm:px-6">
          {description}
        </p>
      )}
      <div className="flex-col sm:flex-row mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8 flex w-full items-center justify-center gap-x-2.5 gap-y-2 px-4 sm:px-6">
        <Button
          onClick={onPrimaryClick}
          variant="default"
          size="sm"
          className="hidden sm:flex rounded-xl px-3.5 tracking-[-0.005em]"
        >
          <ChevronRight />
          {primaryButtonLabel}
        </Button>
        <Button
          onClick={onSecondaryClick}
          variant="ghost"
          size="default"
          className="flex sm:hidden h-10 rounded-xl pl-3.5 pr-3 text-gray-800 hover:text-neutral-800 hover:bg-gray-100 focus-visible:text-neutral-800 focus-visible:bg-gray-100 active:text-neutral-800 active:bg-gray-100 group"
        >
          <span>{secondaryButtonLabel}</span>
          <ArrowRight className="h-3.5 w-3.5 fill-none relative transition-all duration-500 ease-in-out group-hover:translate-x-1 group-hover:duration-150 group-active:translate-x-1 group-active:duration-[50ms]" />
        </Button>
      </div>
    </header>
  );
}

