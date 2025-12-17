import { cn } from "@/lib/utils";
import React from "react";

interface DotBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  showContent?: boolean;
  showMask?: boolean;
  opacity?: number;
}

export function DotBackground({ 
  className, 
  children, 
  showContent = false,
  showMask = true,
  opacity = 1
}: DotBackgroundProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <div
        className={cn(
          "absolute inset-0",
          "bg-[length:14px_14px] lg:bg-[length:20px_20px]",
          "[background-image:radial-gradient(var(--muted-foreground)_1px,transparent_1px)]",
        )}
        style={{ opacity, zIndex: 0 }}
      />
      {/* Radial gradient for the container to give a faded look */}
      {showMask && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      )}
      {showContent && (
        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          Backgrounds
        </p>
      )}
      {children}
    </div>
  );
}

