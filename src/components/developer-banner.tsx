"use client";

import { ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DeveloperBannerProps {
  text?: string;
  href?: string;
  onClose?: () => void;
}

export function DeveloperBanner({ 
  text = "Join the waitlist",
  href = "/platform/developers",
  onClose 
}: DeveloperBannerProps) {
  return (
    <div className="isolate flex h-12 w-full items-center justify-center bg-black shadow">
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex h-full items-center justify-center">
        <div className="relative flex w-full h-full items-stretch justify-center px-4 sm:px-6 md:px-8 lg:px-12">
          <a
            className="max-md:justify-start relative flex w-full h-full items-center justify-center gap-y-1.5 gap-x-1.5 text-white group"
            href={href}
          >
            <span className="[paint-order:stroke_fill] bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat bg-[length:0%_0.06em] transition-all duration-500 ease-in-out dark:mix-blend-screen group-hover:bg-[length:100%_0.06em] group-hover:duration-300 group-active:bg-[length:100%_0.06em] group-active:duration-[50ms] group-focus-visible:bg-[length:100%_0.06em] group-focus-visible:duration-300 relative text-ellipsis whitespace-nowrap overflow-x-hidden overflow-y-hidden text-sm leading-5">
              {text}
            </span>
            <ChevronRight className="h-3.5 w-3.5 fill-none transition-all duration-500 ease-in-out group-hover:translate-x-1 group-hover:duration-150 group-active:translate-x-1 group-active:duration-[50ms]" />
          </a>
          {onClose && (
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="absolute top-2/4 right-0 translate-y-[-50%] rounded-xl text-gray-100 hover:bg-zinc-900 hover:border-neutral-300 focus-visible:bg-neutral-800 focus-visible:border-gray-600 active:text-white active:border-white"
            >
              <X className="h-5 w-5 fill-none dark:text-gray-200" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

