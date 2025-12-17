import { CheckCircle, Lightbulb, Play } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Spinner } from "./ui/spinner";
import { useState } from "react";

export type BadgeState = "triggered" | "running" | "completed";

interface SpinnerBadgeProps {
    state?: BadgeState;
    onStateChange?: (state: BadgeState) => void;
    showSecondBadge?: boolean;
    secondBadgeText?: string;
    secondBadgeIcon?: React.ReactNode;
    className?: string;
}

export function SpinnerBadge({ 
    state: controlledState, 
    onStateChange,
    showSecondBadge = false,
    secondBadgeText = "New Invention",
    secondBadgeIcon = <Lightbulb className="size-3" />,
    className 
}: SpinnerBadgeProps = {}) {
    const [internalState, setInternalState] = useState<BadgeState>("triggered");
    const state = controlledState !== undefined ? controlledState : internalState;
    
    if (!state) {
        return null;
    }
    
    const isCompleted = state === "completed";
    const isRunning = state === "running";
    const isTriggered = state === "triggered";

    const badgeContent = (
        <motion.div
            className="flex items-center justify-center gap-1 rounded-full border px-1.5 py-0.5 text-xs lg:rounded-lg lg:px-1.5 lg:py-px lg:tracking-[0] lg:text-xs lg:font-medium rounded-md border-solid px-1 py-[0.5px] text-[9.5px] leading-3"
            animate={{
                backgroundColor: isCompleted ? "#dcfce7" : isRunning ? "#f3e8ff" : "#fef3c7",
                borderColor: isCompleted ? "#c7f4d3" : isRunning ? "#e9d5ff" : "#fde68a",
                color: isCompleted ? "#0b935d" : isRunning ? "#a855f7" : "#d97706",
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
        >
            <AnimatePresence mode="wait">
                {isTriggered ? (
                    <motion.div
                        key="triggered"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-1 whitespace-nowrap"
                    >
                        <Play className="size-3" />
                        <span className="text-xs">Triggered</span>
                    </motion.div>
                ) : isRunning ? (
                    <motion.div
                        key="running"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-1 whitespace-nowrap"
                    >
                        <Spinner className="size-3" />
                        <span className="text-xs">Running</span>
                    </motion.div>
                ) : (
                    <motion.div
                        key="completed"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-1 whitespace-nowrap"
                    >
                        <CheckCircle className="size-3" />
                        <span className="text-xs">Completed</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );

    if (className && className.includes("mb-0 gap-0")) {
        // For card usage - return just the badge without wrapper
        return badgeContent;
    }

    // For standalone usage - return with wrapper and optional second badge
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={className || "flex items-center gap-4 mb-6 [--radius:1.2rem]"}
        >
            {badgeContent}

            {showSecondBadge && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
                    className="flex items-center justify-center gap-1 rounded-full border px-1.5 py-0.5 text-xs bg-yellow-100 text-yellow-700 border-yellow-200"
                >
                    {secondBadgeIcon}
                    <span className="text-xs">{secondBadgeText}</span>
                </motion.div>
            )}
        </motion.div>
    );
}
