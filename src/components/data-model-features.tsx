"use client";

import { FeatureCard } from "./feature-card";
import { CornerMarkers } from "./corner-markers";

interface Feature {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  mobileImageSrc?: string;
  mobileImageWidth?: number;
  mobileImageHeight?: number;
  gridCols?: string;
  gridColsLg?: string;
}

interface DataModelFeaturesProps {
  heading?: {
    highlight?: string;
    text: string;
  };
  description?: string;
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    title: "Build for any business model.",
    description: "Easily create custom objects for any use case you can think of.",
    imageSrc:
      "https://proxy.extractcss.dev/https://a.storyblok.com/f/234930/2416x1008/7987c6bb44/data-model.png/m/3840x0/filters:quality(65)",
    imageAlt: "Data model",
    imageWidth: 2416,
    imageHeight: 1008,
    mobileImageSrc:
      "https://proxy.extractcss.dev/https://a.storyblok.com/f/234930/1472x1008/75df2fe074/data-model-mobile.png/m/3840x0/filters:quality(65)",
    mobileImageWidth: 1472,
    mobileImageHeight: 1008,
    gridCols: "col-start-[span_12] col-end-[span_12]",
    gridColsLg: "lg:col-start-[span_6] lg:col-end-[span_6]",
  },
  {
    title: "Iterate faster than ever.",
    description: "Sort, filter and utilize millions of records in milliseconds.",
    imageSrc:
      "https://proxy.extractcss.dev/https://a.storyblok.com/f/234930/1472x1008/766a491ebe/filter.png/m/3840x0/filters:quality(65)",
    imageAlt: "Filter",
    imageWidth: 1472,
    imageHeight: 1008,
    gridCols: "col-start-[span_12] col-end-[span_12]",
    gridColsLg: "lg:col-start-[span_4] lg:col-end-[span_4]",
  },
  {
    title: "Fine-tune to your data structure.",
    description: "Tweak Attio until it's a perfect fit with your existing data model.",
    imageSrc:
      "https://proxy.extractcss.dev/https://a.storyblok.com/f/234930/1472x1008/b47729f7b9/attribute.png/m/3840x0/filters:quality(65)",
    imageAlt: "Attribute",
    imageWidth: 1472,
    imageHeight: 1008,
    gridCols: "col-start-[span_12] col-end-[span_12]",
    gridColsLg: "lg:col-start-[span_4] lg:col-end-[span_4]",
  },
  {
    title: "Create associations.",
    description:
      "Link objects to make sure your data is accurate, actionable and insightful with our powerful graph model.",
    imageSrc:
      "https://proxy.extractcss.dev/https://a.storyblok.com/f/234930/2416x1008/05697e3348/associations.png/m/3840x0/filters:quality(65)",
    imageAlt: "Associations",
    imageWidth: 2416,
    imageHeight: 1008,
    mobileImageSrc:
      "https://proxy.extractcss.dev/https://a.storyblok.com/f/234930/1472x996/8987e24f31/create-associations-mobile.png/m/3840x0/filters:quality(65)",
    mobileImageWidth: 1472,
    mobileImageHeight: 996,
    gridCols: "col-start-[span_12] col-end-[span_12]",
    gridColsLg: "lg:col-start-[span_6] lg:col-end-[span_6]",
  },
];

export function DataModelFeatures({
  heading = {
    highlight: "Blazingly fast,",
    text: "amazingly flexible.",
  },
  description = "Attio's custom objects help you build the perfect CRM data model for your business' needs.",
  features = defaultFeatures,
}: DataModelFeaturesProps) {
  return (
    <section className="text-zinc-900 tracking-[-0.4px] text-base font-medium leading-6 bg-white">
      <div className="xl:max-w-6xl 2xl:max-w-screen-2xl max-sm:px-4 sm:max-w-md md:max-w-screen-sm lg:max-w-screen-2xl w-full max-w-full mx-auto px-6">
        <div className="lg:pt-24 xl:pt-32 lg:pb-24 xl:pb-32 grid grid-cols-12 gap-x-6 border-gray-200 pt-16 pb-16">
          <div className="xl:col-start-2 xl:col-end-12 col-start-[span_12] col-end-[span_12]">
            <div className="lg:pb-16 xl:pb-24 flex flex-col pb-10">
              <div className="mx-auto flex max-w-xl flex-col items-center text-center">
                <div className="grid grid-cols-10 gap-x-6 gap-y-4">
                  <h2 className="[font-family:var(--font-inter-display),var(--font-inter),sans-serif] lg:text-4xl lg:leading-10 col-start-1 col-end-[-1] tracking-[-0.4px] text-3xl font-semibold leading-10 [text-wrap:pretty]">
                    {heading.highlight && (
                      <>
                        <span className="text-gray-500">{heading.highlight}</span>
                        <br />
                      </>
                    )}
                    {heading.text}
                  </h2>
                  <p className="lg:text-xl lg:leading-7 col-start-1 col-end-[-1] tracking-[-0.4px] text-lg font-medium leading-6 [text-wrap:pretty]">
                    {description}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:auto-rows-fr lg:grid-cols-10 relative my-8 grid gap-y-px gap-x-px border-solid border border-gray-200 bg-gray-200">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  imageSrc={feature.imageSrc}
                  imageAlt={feature.imageAlt}
                  imageWidth={feature.imageWidth}
                  imageHeight={feature.imageHeight}
                  mobileImageSrc={feature.mobileImageSrc}
                  mobileImageWidth={feature.mobileImageWidth}
                  mobileImageHeight={feature.mobileImageHeight}
                  className={`${feature.gridCols || ""} ${feature.gridColsLg || ""} lg:row-start-[span_1] lg:row-end-[span_1]`}
                />
              ))}
              <CornerMarkers />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

