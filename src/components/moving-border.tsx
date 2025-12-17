"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const MovingBorder = ({
  duration = 2500,
  className,
  startAngle = 0,
  ...otherProps
}: {
  duration?: number;
  className?: string;
  startAngle?: number;
  [key: string]: any;
}) => {
  return (
    <div
      className={cn(
        "absolute -inset-[2px] rounded-lg pointer-events-none z-0",
        "animate-border-spin",
        className
      )}
      style={{
        animationDuration: `${duration}ms`,
        animationTimingFunction: "ease-in-out",
        animationIterationCount: "infinite",
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        padding: "2px",
        "--start-angle": `${startAngle}deg`,
        background: `conic-gradient(from calc(var(--border-angle, 0deg) + var(--start-angle, 0deg)), #22c55e 0deg, #22c55e 36deg, transparent 54deg, transparent 306deg, #22c55e 324deg, #22c55e 360deg)`,
      } as React.CSSProperties & { "--start-angle"?: string }}
      {...otherProps}
    />
  );
};

