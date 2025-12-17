"use client";

interface NavigationButtonsProps {
  activeTab?: "Data" | "Workflows" | "Reporting" | "Pipeline";
  onTabChange?: (tab: "Data" | "Workflows" | "Reporting" | "Pipeline") => void;
}

export function NavigationButtons({
  activeTab = "Reporting",
  onTabChange,
}: NavigationButtonsProps) {
  const tabs: Array<"Data" | "Workflows" | "Reporting" | "Pipeline"> = [
    "Data",
    "Workflows",
    "Reporting",
    "Pipeline",
  ];

  return (
    <div className="relative border-t border-gray-200 bg-gradient-to-b from-[#FDFDFD] to-white">
      <svg
        width="100%"
        height="1"
        className="text-gray-200 absolute inset-x-0 top-[46px] lg:top-36"
      >
        <line
          x1="0"
          y1="0.5"
          x2="100%"
          y2="0.5"
          stroke="currentColor"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />
      </svg>
      <div className="w-full">
        <div className="pb-8 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-24 pt-8 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20">
          <div className="grid grid-cols-12">
            <div className="col-start-1 col-end-[-1] sm:col-start-2 sm:col-end-[-2] md:col-start-2 md:col-end-[-2] lg:col-start-2 lg:col-end-[-2] xl:col-start-2 xl:col-end-12">
              <div className="relative pb-7">
                <svg
                  width="1"
                  height="100%"
                  className="text-gray-200 -left-px absolute"
                >
                  <line
                    x1="0.5"
                    y1="0"
                    x2="0.5"
                    y2="100%"
                    stroke="currentColor"
                    strokeDasharray="4 6"
                    strokeLinecap="round"
                  />
                </svg>
                <svg
                  width="1"
                  height="100%"
                  className="text-gray-200 -right-px absolute"
                >
                  <line
                    x1="0.5"
                    y1="0"
                    x2="0.5"
                    y2="100%"
                    stroke="currentColor"
                    strokeDasharray="4 6"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="relative">
                  <div className="grid w-full grid-cols-2 gap-x-px bg-gray-200 lg:grid-cols-4">
                    {tabs.map((tab) => {
                      const isActive = tab === activeTab;
                      return (
                        <div key={tab} className="relative w-full overflow-hidden">
                          <button
                            onClick={() => onTabChange?.(tab)}
                            className={`flex h-16 w-full items-center justify-center border-b border-gray-200 px-4 font-medium text-[15px] leading-5 cursor-pointer hover:text-gray-600 transition-colors duration-150 ease-out ${
                              isActive
                                ? "bg-gray-50 text-gray-900"
                                : "bg-gray-50 text-gray-700"
                            }`}
                          >
                            {tab}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

