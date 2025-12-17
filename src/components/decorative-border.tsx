import React from "react";

interface DecorativeBorderProps {
  className?: string;
}

export function DecorativeBorder({ className }: DecorativeBorderProps) {
  return (
    <div
      className={`absolute -inset-32 text-gray-100 max-xl:[mask-image:linear-gradient(90deg,#0000_0%,#000_24px_calc(100%_-_24px),#0000_100%),linear-gradient(#0000_0%,#000_24px_calc(100%_-_24px),#0000_100%)] max-xl:-inset-6 z-[-1] [mask-image:linear-gradient(90deg,#0000_0%,#000_120px_calc(100%_-_120px),#0000_100%),linear-gradient(#0000_0%,#000_120px_calc(100%_-_120px),#0000_100%)] [mask-size:100%_100%] [mask-repeat:no-repeat] [mask-composite:intersect] ${className || ""}`}
    >
      {/* Top left corner */}
      <svg
        width="1"
        viewBox="0 0 1 120"
        className="h-32 fill-none absolute top-0 left-32 [translate:-100%]"
      >
        <path
          d="M0.5 0V120"
          strokeLinecap="round"
          strokeDasharray="4 4"
          className="stroke-current"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        viewBox="0 0 120 1"
        className="h-px fill-none absolute top-32 left-0 [translate:0_-100%]"
      >
        <path
          d="M0.5 0.5L120 0.5"
          strokeLinecap="round"
          strokeDasharray="4 4"
          className="stroke-current"
        />
      </svg>
      {/* Top right corner */}
      <svg
        width="1"
        viewBox="0 0 1 120"
        className="h-32 fill-none absolute top-0 right-32 [translate:100%]"
      >
        <path
          d="M0.5 0V120"
          strokeLinecap="round"
          strokeDasharray="4 4"
          className="stroke-current"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        viewBox="0 0 120 1"
        className="h-px fill-none absolute top-32 right-0 [translate:0_-100%]"
      >
        <path
          d="M0.5 0.5L120 0.5"
          strokeLinecap="round"
          strokeDasharray="4 4"
          className="stroke-current"
        />
      </svg>
      {/* Bottom right corner */}
      <svg
        width="1"
        viewBox="0 0 1 120"
        className="h-32 fill-none absolute right-32 bottom-0 [translate:100%]"
      >
        <path
          d="M0.5 0V120"
          strokeLinecap="round"
          strokeDasharray="4 4"
          className="stroke-current"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        viewBox="0 0 120 1"
        className="h-px fill-none absolute right-0 bottom-32 [translate:0_100%]"
      >
        <path
          d="M0.5 0.5L120 0.5"
          strokeLinecap="round"
          strokeDasharray="4 4"
          className="stroke-current"
        />
      </svg>
      {/* Bottom left corner */}
      <svg
        width="1"
        viewBox="0 0 1 120"
        className="h-32 fill-none absolute bottom-0 left-32 [translate:-100%]"
      >
        <path
          d="M0.5 0V120"
          strokeLinecap="round"
          strokeDasharray="4 4"
          className="stroke-current"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        viewBox="0 0 120 1"
        className="h-px fill-none absolute bottom-32 left-0 [translate:0_100%]"
      >
        <path
          d="M0.5 0.5L120 0.5"
          strokeLinecap="round"
          strokeDasharray="4 4"
          className="stroke-current"
        />
      </svg>
    </div>
  );
}

