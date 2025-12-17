"use client";

import { useState, useEffect, useRef } from "react";
import { DataModelCard, DataModelCardProps } from "./data-model-card";
import { CardConnectors } from "./card-connectors";
import type { Anchor } from "./card-connectors";

interface Tab {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

interface ImageShowcaseProps {
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  tabs?: Tab[];
  dataModelCards?: Omit<DataModelCardProps, "className">[];
}

export function ImageShowcase({
  imageSrc = "https://proxy.extractcss.dev/https://attio.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsales-screen.34ccb32c.png&w=3840&q=75",
  imageAlt = "Sales",
  imageWidth = 4536,
  imageHeight = 3000,
  tabs = [
    { label: "Sales", isActive: true },
    { label: "Product-led growth" },
    { label: "Product-led sales" },
    { label: "Marketplaces" },
  ],
  dataModelCards,
}: ImageShowcaseProps) {
  const [cardStates, setCardStates] = useState<Record<string, "triggered" | "running" | "completed">>({});
  const [screenSize, setScreenSize] = useState<"lg" | "xl">("lg");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      setScreenSize(width >= 1280 ? "xl" : "lg");
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  useEffect(() => {
    const completionOrder = [
      "Disclosure",  // Disclosure (first)
      "Evaluation",  // Evaluation (second)
      "Protection",  // Protection (third)
      "Marketing",   // Marketing (fourth)
      "Licensing",   // Licensing (fifth)
    ];

    const timeouts: NodeJS.Timeout[] = [];

    // Calculate delays for each card
    // Border animation duration is 4000ms
    // Badge transitions should match: triggered → running → completed within 4000ms
    // Line animation duration is 1200ms
    // Total cycle: border (4000ms) + line (1200ms) = 5200ms per card
    
    completionOrder.forEach((cardId, index) => {
      const baseDelay = 500;
      const cycleDuration = 5200; // border (4000ms) + line (1200ms)
      const cardStartDelay = baseDelay + index * cycleDuration;
      
      // Badge transitions within border animation (4000ms total)
      const triggerDelay = cardStartDelay;
      const runningDelay = cardStartDelay + 1333; // 1/3 of border duration
      const completedDelay = cardStartDelay + 4000; // End of border animation

      // Trigger state
      timeouts.push(
        setTimeout(() => {
          setCardStates((prev) => ({ ...prev, [cardId]: "triggered" }));
        }, triggerDelay)
      );

      // Running state
      timeouts.push(
        setTimeout(() => {
          setCardStates((prev) => ({ ...prev, [cardId]: "running" }));
        }, runningDelay)
      );

      // Completed state
      timeouts.push(
        setTimeout(() => {
          setCardStates((prev) => ({ ...prev, [cardId]: "completed" }));
        }, completedDelay)
      );
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);
  return (
    <>
      {dataModelCards && dataModelCards.length > 0 && (
        <div className="image-showcase-container w-full max-w-[1200px] mx-auto px-6 pb-2.5">
          <div className="image-showcase-inner relative left-0 right-0 w-full">
            <div className="grid">
              <div className="col-start-1 row-start-1">
                <div ref={containerRef} className="relative lg:scale-[0.75] xl:scale-100" style={{ transformOrigin: 'center top' }}>
                  <div className="relative grid grid-cols-[repeat(118,1fr)] auto-rows-auto gap-y-5 pb-2.5">
                    {dataModelCards.map((card, idx) => {
                      // Card order: [0] Disclosure (Top Left), [1] Licensing (Top Right), 
                      //            [2] Evaluation (Bottom Left), [3] Protection (Bottom Center), [4] Marketing (Bottom Right)
                      const positionClasses = [
                        // [0] Disclosure - Top Left
                        "lg:rounded-xl xl:col-start-[span_22] xl:col-end-[span_22] lg:p-3 relative col-start-[span_27] col-end-[span_27] row-start-1",
                        // [1] Licensing - Top Right
                        "lg:rounded-xl xl:col-end-[span_22] lg:p-3 xl:col-start-[97] relative col-end-[span_27] col-start-[92] row-start-1",
                        // [2] Evaluation - Bottom Left (10px below Learn More button)
                        "lg:rounded-xl xl:col-end-[span_22] lg:p-3 xl:col-start-[21] relative col-end-[span_27] col-start-[11] row-start-[6] lg:!mt-[0.625rem] xl:!mt-[0.625rem]",
                        // [3] Protection - Bottom Center (10px below Learn More button)
                        "lg:rounded-xl xl:col-end-[span_22] lg:p-3 xl:col-start-[49] relative col-end-[span_27] col-start-[47] row-start-[6] lg:!mt-[0.625rem] xl:!mt-[0.625rem]",
                        // [4] Marketing - Bottom Right (10px below Learn More button)
                        "lg:rounded-xl xl:col-end-[span_22] lg:p-3 xl:col-start-[77] relative col-end-[span_27] col-start-[82] row-start-[6] lg:!mt-[0.625rem] xl:!mt-[0.625rem]",
                      ];
                      // Set border start anchor based on connector position and screen size
                      // Card order: [0] Disclosure, [1] Licensing, [2] Evaluation, [3] Protection, [4] Marketing
                      // Connections: Disclosure→Evaluation, Evaluation→Protection, 
                      //             Protection→Marketing, Marketing→Licensing
                      const borderStartAnchors: (("top" | "right" | "bottom" | "left") | undefined)[] = screenSize === "xl" 
                        ? [
                            undefined,  // [0] Disclosure: starts at top
                            "bottom",   // [1] Licensing: circle on bottom from Marketing→Licensing (top→bottom)
                            "top",      // [2] Evaluation: circle on top from Disclosure→Evaluation (bottom→top)
                            "left",     // [3] Protection: circle on left from Evaluation→Protection (right→left)
                            "left",     // [4] Marketing: circle on left from Protection→Marketing (right→left)
                          ]
                        : [
                            undefined,  // [0] Disclosure: starts at top
                            "bottom",   // [1] Licensing: circle on bottom from Marketing→Licensing (top→bottom)
                            "top",      // [2] Evaluation: circle on top from Disclosure→Evaluation (bottom→top)
                            "left",     // [3] Protection: circle on left from Evaluation→Protection (right→left)
                            "top",      // [4] Marketing: circle on top from Protection→Marketing (right→left, but top connection)
                            ];
                      const cardState = card.id ? cardStates[card.id] : undefined;
                      return (
                        <DataModelCard
                          key={idx}
                          {...card}
                                className={positionClasses[idx]}
                                state={cardState}
                                borderStartAnchor={borderStartAnchors[idx]}
                        />
                      );
                    })}
                  </div>
                  <CardConnectors
                    containerRef={containerRef}
                    connections={[
                      {
                        from: "Disclosure",
                        to: "Evaluation",
                        fromAnchor: screenSize === "xl" ? "bottom" : "bottom",
                        toAnchor: screenSize === "xl" ? "top" : "top",
                        style: "elbow",
                      },
                      {
                        from: "Evaluation",
                        to: "Protection",
                        fromAnchor: "right",
                        toAnchor: "left",
                        style: "elbow",
                      },
                      {
                        from: "Protection",
                        to: "Marketing",
                        fromAnchor: "right",
                        toAnchor: "left",
                        style: "elbow",
                      },
                      {
                        from: "Marketing",
                        to: "Licensing",
                        fromAnchor: screenSize === "xl" ? "top" : "top",
                        toAnchor: screenSize === "xl" ? "bottom" : "bottom",
                        style: "elbow",
                      },
                          ]}
                          strokeWidth={2}
                          strokeColor="#d4d4d8"
                          cardStates={cardStates}
                        />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

