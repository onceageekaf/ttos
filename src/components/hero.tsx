"use client";

import { Button } from "./ui/moving-border";

interface HeroProps {
  badge?: string;
  title?: string;
  description?: string;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function Hero({
  badge,
  title,
  description,
  primaryButtonLabel = "Learn More",
  secondaryButtonLabel = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
}: HeroProps) {
  return (
    <div className="hero-container w-full flex flex-col items-center">
      {badge && (
        <div className="hero-badge pt-2 sm:pt-2.5 md:pt-3 lg:pt-3.5 xl:pt-4 flex w-full flex-col items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-4">
          <Button
            borderRadius="0.75rem"
            className="bg-white dark:bg-white text-neutral-800 dark:text-neutral-800 border-gray-100 dark:border-gray-100 px-3 py-1.5 text-sm leading-5 font-medium h-auto w-auto"
            containerClassName="h-auto w-auto"
          >
            {badge}
          </Button>
          {title && (
            <h2 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-9 sm:leading-10 md:leading-[2.75rem] lg:leading-[3.25rem] xl:leading-[3.75rem] tracking-[-0.4px] sm:tracking-[-0.5px] md:tracking-[-0.6px] lg:tracking-[-0.7px] xl:tracking-[-0.8px] max-w-xl text-center font-semibold px-4 sm:px-6">
              {title.split(', ').map((part, index, array) => (
                <span key={index}>
                  {part}
                  {index < array.length - 1 && <br />}
                </span>
              ))}
            </h2>
          )}
        </div>
      )}
      {description && (
        <p className="hero-description text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl leading-6 sm:leading-7 md:leading-7 lg:leading-8 xl:leading-8 mt-1 sm:mt-1.5 md:mt-2 lg:mt-2 xl:mt-2.5 max-w-xl text-center tracking-[-0.01em] font-medium [text-wrap:balance] text-blue-600 px-4 sm:px-6">
          {description}
        </p>
      )}
    </div>
  );
}

