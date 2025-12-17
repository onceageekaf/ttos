import React from "react";

interface CornerMarkersProps {
  className?: string;
}

export function CornerMarkers({ className }: CornerMarkersProps) {
  return (
    <>
      <svg
        width="7"
        className={`h-2 fill-none absolute -top-1 -left-1 text-gray-400 ${className || ""}`}
        viewBox="0 0 7 7"
      >
        <path d="M3.5 0V7M0 3.5H7" className="stroke-current" />
      </svg>
      <svg
        width="7"
        className={`h-2 fill-none absolute -bottom-1 -left-1 text-gray-400 ${className || ""}`}
        viewBox="0 0 7 7"
      >
        <path d="M3.5 0V7M0 3.5H7" className="stroke-current" />
      </svg>
      <svg
        width="7"
        className={`h-2 fill-none absolute -top-1 -right-1 text-gray-400 ${className || ""}`}
        viewBox="0 0 7 7"
      >
        <path d="M3.5 0V7M0 3.5H7" className="stroke-current" />
      </svg>
      <svg
        width="7"
        className={`h-2 fill-none absolute -right-1 -bottom-1 text-gray-400 ${className || ""}`}
        viewBox="0 0 7 7"
      >
        <path d="M3.5 0V7M0 3.5H7" className="stroke-current" />
      </svg>
    </>
  );
}

