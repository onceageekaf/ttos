"use client";

import Image from "next/image";
import { DecorativeBorder } from "./decorative-border";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  mobileImageSrc?: string;
  mobileImageWidth?: number;
  mobileImageHeight?: number;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  imageSrc,
  imageAlt = "",
  imageWidth = 1472,
  imageHeight = 1008,
  mobileImageSrc,
  mobileImageWidth,
  mobileImageHeight,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={`relative flex flex-col justify-between gap-y-8 gap-x-8 bg-white p-10 ${className || ""}`}
    >
      <DecorativeBorder />
      <div className="lg:max-w-lg flex flex-col gap-y-1 gap-x-1 tracking-[-0.4px] text-base font-medium leading-6">
        <p className="font-semibold text-neutral-800">{title}</p>
        <p className="[text-wrap:pretty] text-gray-600">{description}</p>
      </div>
      <div className="lg:mx-0 lg:max-w-none mx-auto max-w-sm">
        {mobileImageSrc && (
          <Image
            alt={imageAlt}
            loading="lazy"
            width={mobileImageWidth || imageWidth}
            height={mobileImageHeight || imageHeight}
            decoding="async"
            className="lg:hidden max-h-80 object-contain text-transparent"
            src={mobileImageSrc}
          />
        )}
        <Image
          alt={imageAlt}
          loading="lazy"
          width={imageWidth}
          height={imageHeight}
          decoding="async"
          className={`object-contain text-transparent ${mobileImageSrc ? "lg:block hidden" : ""}`}
          src={imageSrc}
        />
      </div>
    </div>
  );
}

