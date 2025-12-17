import { Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { SpinnerBadge } from "./Spinnerbadge";
import { MovingBorder } from "./moving-border";
import { motion } from "motion/react";

export interface DataModelAttribute {
  icon?: string;
  label: string;
}

export interface DataModelCardProps {
  id?: string;
  title: string;
  type: "Custom" | "Standard";
  typeColor: "blue" | "gray";
  iconColor: "emerald" | "yellow" | "cyan" | "violet" | "blue";
  attributes: DataModelAttribute[];
  moreText?: string | number;
  className?: string;
  icon?: React.ReactNode;
  state?: "triggered" | "running" | "completed";
  onStateChange?: (state: "triggered" | "running" | "completed") => void;
  borderStartAnchor?: "top" | "right" | "bottom" | "left";
}

export function DataModelCard({
  id,
  title,
  type,
  typeColor,
  iconColor,
  attributes,
  moreText,
  className,
  icon,
  state,
  onStateChange,
  borderStartAnchor,
}: DataModelCardProps) {
  const isTriggered = state === "triggered";
  const isRunning = state === "running";
  const hasActiveState = isTriggered || isRunning;
  
  // Calculate start angle based on anchor position
  const getStartAngle = (anchor?: "top" | "right" | "bottom" | "left") => {
    switch (anchor) {
      case "top":
        return 0; // 0deg = top
      case "right":
        return 90; // 90deg = right
      case "bottom":
        return 180; // 180deg = bottom
      case "left":
        return 270; // 270deg = left
      default:
        return 0; // Default to top
    }
  };
  
  const startAngle = getStartAngle(borderStartAnchor);
  const iconColors = {
    emerald: "fill-emerald-500",
    yellow: "fill-yellow-500",
    cyan: "fill-cyan-500",
    violet: "fill-violet-500",
    blue: "fill-blue-600",
  };

  const defaultIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" className="h-5 fill-none">
      <g>
        <path
          fillRule="evenodd"
          d="M1.04497 2.73005C.5 3.79961.5 5.19974.5 8v4c0 2.8003 0 4.2004.54497 5.27.47936.9408 1.24427 1.7057 2.18508 2.185C4.29961 20 5.69974 20 8.5 20h4c2.8003 0 4.2004 0 5.27-.545.9408-.4793 1.7057-1.2442 2.185-2.185.545-1.0696.545-2.4697.545-5.27V8c0-2.80026 0-4.20039-.545-5.26995-.4793-.94081-1.2442-1.70572-2.185-2.185083C16.7004 0 15.3003 0 12.5 0h-4C5.69974 0 4.29961 0 3.23005.544967 2.28924 1.02433 1.52433 1.78924 1.04497 2.73005Zm7.5934 5.27932 2.77403-2.77404c1.442-1.44194 3.7798-1.44193 5.2217 0 1.4055 1.40547 1.4411 3.66213.1067 5.11067-.0575.0625-.1553.0624-.2154.0023l-3.6618-3.6618c-.1406-.14057-.3685-.14057-.5091 0L9.83501 9.20602c-.33044.33044-.8662.33044-1.19664 0-.33045-.33045-.33045-.8662 0-1.19665ZM4.39576 5.2898c-1.50201 1.50202-1.50201 3.93727 0 5.4393l5.38489 5.3849c.33045.3304.86625.3304 1.19665 0 .3304-.3305.3304-.8662 0-1.1967l-1.68618-1.6861c-.24032-.2404-.24032-.63 0-.8703.24032-.2404.62996-.2404.87028 0l1.6318 1.6318c.3605.3604.9449.3604 1.3054 0 .3605-.3605.3605-.945 0-1.3055l-1.6318-1.6318c-.2403-.2403-.2403-.6299 0-.8702.2404-.24037.63-.24037.8703 0l1.6862 1.6861c.3304.3305.8662.3305 1.1966 0 .1985-.1984.2777-.4708.2379-.7284l-2.8374-2.85147-1.8429 1.85217c-.87067.8749-2.2554.8749-3.12603 0-.85917-.86347-.89138-2.26221-.01358-3.14439l1.93724-1.94689c-1.51106-1.25986-3.76119-1.1807-5.17937.23748Z"
          clipRule="evenodd"
          className={iconColors[iconColor]}
        ></path>
      </g>
    </svg>
  );

  return (
    <motion.div
      id={id}
      className={cn(
        "relative flex flex-col rounded-lg border-solid border bg-white p-2 shadow-sm h-auto min-h-0",
        className
      )}
      animate={{
        borderColor: "#f3f4f6",
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      {hasActiveState && (
        <MovingBorder duration={4000} rx="0.5rem" ry="0.5rem" startAngle={startAngle} />
      )}
      {state && (
        <div className="absolute bottom-full right-[1px] z-20 flex items-end justify-end">
          <SpinnerBadge
            state={state}
            onStateChange={onStateChange}
            className="mb-0 gap-0"
          />
        </div>
      )}
      <div className="relative z-10 bg-white rounded-lg h-full w-full">
        <div className="lg:pb-3 flex items-center justify-between [border-bottom-style:solid] border-b border-gray-200 pb-2">
        <div className="lg:gap-x-1.5 lg:text-sm flex items-center gap-x-1 text-xs leading-5 font-semibold tracking-[-0.22px] text-zinc-900">
          {icon || defaultIcon}
          <span>{title}</span>
        </div>
        <div className="flex items-center">
        </div>
      </div>
      <ul>
        {attributes.map((attr, idx) => (
          <li
            key={idx}
            className="lg:gap-x-1.5 lg:px-3 lg:pt-1.5 lg:pb-1.5 lg:tracking-[0] lg:text-xs lg:font-medium lg:leading-4 flex w-full items-center gap-x-1 [border-bottom-style:solid] border-b border-gray-100 px-2.5 pt-1 pb-1 text-[9.5px] text-gray-600"
          >
            <span className="text-ellipsis whitespace-nowrap overflow-x-hidden">{attr.label}</span>
          </li>
        ))}
      </ul>
      {moreText && (
        <div className="lg:gap-x-2 lg:px-3 lg:pt-1.5 lg:pb-0 lg:text-xs lg:leading-4 flex w-full items-center gap-x-1.5 px-2.5 pt-1 pb-0 text-[8.5px] leading-3 font-medium tracking-[-0.22px] text-gray-400">
          <div className="flex items-center justify-center h-6 w-6 rounded-full bg-black">
            <Bot className="h-4 w-4 fill-none stroke-white" />
          </div>
          <span className="text-ellipsis overflow-x-hidden [text-wrap:wrap]">
            {typeof moreText === "number" ? `${moreText} More Attributes` : moreText}
          </span>
        </div>
      )}
      </div>
    </motion.div>
  );
}

