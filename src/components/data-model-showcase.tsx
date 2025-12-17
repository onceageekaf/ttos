"use client";

import { FileText, Building2, Handshake, Receipt, User, ShieldPlus, ClipboardList } from "lucide-react";
import { Hero } from "./hero";
import { ImageShowcase } from "./image-showcase";
import { DotBackground } from "./dot-background";
import { DataModelCardProps } from "./data-model-card";
import { DataModelFeatures } from "./data-model-features";
import { NavigationButtons } from "./navigation-buttons";

interface DataModelShowcaseProps {
  hero?: {
    badge?: string;
    title?: string;
    description?: string;
    primaryButtonLabel?: string;
    secondaryButtonLabel?: string;
    onPrimaryClick?: () => void;
    onSecondaryClick?: () => void;
  };
  imageShowcase?: {
    dataModelCards?: Omit<DataModelCardProps, "className">[];
  };
}

export function DataModelShowcase({
  hero = {
    badge: "Launching soon",
    title: "Your research, translated.",
    description: "10X Faster.",
    primaryButtonLabel: "Learn More",
    secondaryButtonLabel: "Learn More",
  },
  imageShowcase = {
    dataModelCards: [
      {
        id: "Disclosure",
        title: "Disclosure",
        type: "Custom",
        typeColor: "blue",
        iconColor: "emerald",
        icon: (
          <div className="flex items-center justify-center h-6 w-6 rounded bg-emerald-500">
            <FileText className="h-4 w-4 text-white" />
          </div>
        ),
        attributes: [
          { icon: "document", label: "Details of the Invention" },
          { icon: "tag", label: "Inventor(s) Details, address and contact information" },
          { icon: "location", label: "Keywords" },
        ],
        moreText: "Chat bot",
      },
      {
        id: "Licensing",
        title: "Licensing",
        type: "Custom",
        typeColor: "blue",
        iconColor: "yellow",
        icon: (
          <div className="flex items-center justify-center h-6 w-6 rounded bg-yellow-500">
            <Receipt className="h-4 w-4 text-white" />
          </div>
        ),
        attributes: [
          { icon: "document", label: "Draft term sheet" },
          { icon: "document", label: "Full licensing agreement" },
          { icon: "document", label: "Post Agreement followup" },
        ],
        moreText: 12,
      },
      {
        id: "Evaluation",
        title: "Evaluation",
        type: "Standard",
        typeColor: "gray",
        iconColor: "cyan",
        icon: (
          <div className="flex items-center justify-center h-6 w-6 rounded bg-cyan-500">
            <ClipboardList className="h-4 w-4 text-white" />
          </div>
        ),
        attributes: [
          { icon: "document", label: "Due Diligence" },
          { icon: "document", label: "Prior art search" },
          { icon: "document", label: "Market Research" },
        ],
        moreText: "Report created",
      },
      {
        id: "Protection",
        title: "Protection",
        type: "Standard",
        typeColor: "gray",
        iconColor: "emerald",
        icon: (
          <div className="flex items-center justify-center h-6 w-6 rounded bg-emerald-500">
            <ShieldPlus className="h-4 w-4 text-white" />
          </div>
        ),
        attributes: [
          { icon: "document", label: "Send Evaluation to patent attorney" },
          { icon: "document", label: "Draft provisional patent and file" },
          { icon: "document", label: "Update CRM" },
        ],
        moreText: "AI patent draft",
      },
      {
        id: "Marketing",
        title: "Marketing",
        type: "Standard",
        typeColor: "gray",
        iconColor: "blue",
        icon: (
          <div className="flex items-center justify-center h-6 w-6 rounded bg-blue-600">
            <User className="h-4 w-4 text-white" />
          </div>
        ),
        attributes: [
          { icon: "document", label: "Webpage for invention" },
          { icon: "document", label: "Deal Room with all technical data" },
          { icon: "document", label: "NDA, MTA for access control" },
        ],
        moreText: 5,
      },
    ],
  },
}: DataModelShowcaseProps = {}) {
  return (
    <div className="text-zinc-900 tracking-[-0.01em] text-base font-medium leading-6 bg-white select-none">
      <div className="flex min-h-screen max-w-[100vw] flex-col justify-between overflow-x-clip">
        <main>
          <section>
            <div className="w-full">
              <div className="pb-8 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-24 pt-8 sm:pt-10 md:pt-12 lg:pt-20 xl:pt-24 border-gray-200">
                <div className="col-start-1 col-end-[-1] sm:col-start-2 sm:col-end-[-2] md:col-start-2 md:col-end-[-2] lg:col-start-2 lg:col-end-[-2] xl:col-start-2 xl:col-end-12">
                  <div className="relative flex flex-col items-center min-h-[400px] lg:min-h-[600px]">
                    <div className="lg:-top-16 xl:-top-24 lg:-bottom-16 xl:-bottom-24 pointer-events-none absolute top-10 right-0 -bottom-10 left-0 z-0">
                      <DotBackground 
                        className="lg:h-full absolute bottom-0 h-[644px] w-full bg-transparent" 
                        opacity={0.3}
                        showMask={true}
                      />
                      <div className="lg:top-0 xl:h-[606px] lg:h-[506px] absolute top-1/3 h-72 w-full bg-[radial-gradient(168.39%_86.49%_at_50%_13.51%,#fff_0%,#fff0_100%_100%)] z-10"></div>
                      <div className="lg:h-44 absolute bottom-0 h-16 w-full bg-[linear-gradient(#fff0_0%,#fff_100%)] z-10"></div>
                    </div>
                    <div className="isolate w-full [perspective:3000px] relative">
                      <div className="w-full origin-bottom flex flex-col items-center duration-1250 ease-out hidden lg:flex absolute inset-0 z-10">
                        <div className="grid grid-cols-12 w-full pt-16 lg:pt-20 xl:pt-24">
                          <div className="col-[2/-2] flex justify-center">
                            <ImageShowcase {...imageShowcase} />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-12 relative z-20">
                        <div className="col-[2/-2]">
                          <Hero {...hero} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className="hidden">
          <NavigationButtons />
        </div>
        <div className="pt-8 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20 hidden">
          <DataModelFeatures />
        </div>
      </div>
    </div>
  );
}
