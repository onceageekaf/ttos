"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "motion/react";

export type Anchor =
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "center"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight";

export interface Connection {
  from: string;
  to: string;
  fromAnchor?: Anchor;
  toAnchor?: Anchor;
  style?: "elbow" | "curve";
}

interface CardConnectorsProps {
  containerRef: React.RefObject<HTMLElement | null>;
  connections: Connection[];
  strokeWidth?: number;
  className?: string;
  strokeColor?: string;
  cardStates?: Record<string, "triggered" | "running" | "completed">;
}

interface PathData {
  d: string;
  fromId: string;
  toId: string;
  fromPoint: { x: number; y: number };
  toPoint: { x: number; y: number };
}

function getAnchorPoint(
  rect: DOMRect,
  containerRect: DOMRect,
  anchor: Anchor = "center"
): { x: number; y: number } {
  const relativeX = rect.left - containerRect.left;
  const relativeY = rect.top - containerRect.top;

  switch (anchor) {
    case "top":
      return { x: relativeX + rect.width / 2, y: relativeY };
    case "right":
      return { x: relativeX + rect.width, y: relativeY + rect.height / 2 };
    case "bottom":
      return { x: relativeX + rect.width / 2, y: relativeY + rect.height };
    case "left":
      return { x: relativeX, y: relativeY + rect.height / 2 };
    case "topLeft":
      return { x: relativeX, y: relativeY };
    case "topRight":
      return { x: relativeX + rect.width, y: relativeY };
    case "bottomLeft":
      return { x: relativeX, y: relativeY + rect.height };
    case "bottomRight":
      return { x: relativeX + rect.width, y: relativeY + rect.height };
    case "center":
    default:
      return {
        x: relativeX + rect.width / 2,
        y: relativeY + rect.height / 2,
      };
  }
}

function createElbowPath(
  from: { x: number; y: number },
  to: { x: number; y: number },
  fromAnchor?: Anchor,
  toAnchor?: Anchor
): string {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  
  // Special handling for specific connections
  // Disclosure → Evaluation: down to midpoint of Evaluation, then right
  if (fromAnchor === "bottom" && toAnchor === "left") {
    const midY = to.y; // Midpoint Y of target (Evaluation's left side Y)
    return `M ${from.x} ${from.y} L ${from.x} ${midY} L ${to.x} ${midY} L ${to.x} ${to.y}`;
  }
  
  // Marketing → Licensing: right to midpoint of Licensing, then up
  if (fromAnchor === "right" && toAnchor === "bottom") {
    const midX = to.x; // Midpoint X of target (Licensing's bottom X)
    return `M ${from.x} ${from.y} L ${midX} ${from.y} L ${midX} ${to.y} L ${to.x} ${to.y}`;
  }
  
  // Default behavior for other connections
  // Determine path direction based on anchors and positions
  let goVerticalFirst = false;
  
  if (fromAnchor === "bottom" || fromAnchor === "top") {
    goVerticalFirst = true;
  } else if (toAnchor === "left" || toAnchor === "right") {
    goVerticalFirst = Math.abs(dy) > Math.abs(dx);
  } else {
    goVerticalFirst = Math.abs(dy) > Math.abs(dx);
  }

  if (goVerticalFirst) {
    const midY = from.y + dy / 2;
    return `M ${from.x} ${from.y} L ${from.x} ${midY} L ${to.x} ${midY} L ${to.x} ${to.y}`;
  } else {
    const midX = from.x + dx / 2;
    return `M ${from.x} ${from.y} L ${midX} ${from.y} L ${midX} ${to.y} L ${to.x} ${to.y}`;
  }
}

function createCurvePath(
  from: { x: number; y: number },
  to: { x: number; y: number }
): string {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const controlPoint1X = from.x + dx * 0.5;
  const controlPoint1Y = from.y;
  const controlPoint2X = from.x + dx * 0.5;
  const controlPoint2Y = to.y;

  return `M ${from.x} ${from.y} C ${controlPoint1X} ${controlPoint1Y}, ${controlPoint2X} ${controlPoint2Y}, ${to.x} ${to.y}`;
}

export function CardConnectors({
  containerRef,
  connections,
  strokeWidth = 2,
  className = "",
  strokeColor = "#e5e7eb",
  cardStates = {},
}: CardConnectorsProps) {
  const [paths, setPaths] = useState<PathData[]>([]);
  const [lineAnimations, setLineAnimations] = useState<Record<string, boolean>>({});
  const [circleStates, setCircleStates] = useState<Record<string, "grey" | "green">>({});
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const cardObserverRef = useRef<ResizeObserver | null>(null);

  const computePaths = React.useCallback(() => {
    if (!containerRef.current) return;

    // Use the container's actual dimensions (not getBoundingClientRect which accounts for scale)
    const containerRect = {
      left: 0,
      top: 0,
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight,
    };
    
    const newPaths: PathData[] = [];

    for (const connection of connections) {
      const fromEl = document.getElementById(connection.from);
      const toEl = document.getElementById(connection.to);

      if (!fromEl || !toEl) continue;

      // Get positions relative to the container (not screen coordinates)
      const fromRect = {
        left: fromEl.offsetLeft,
        top: fromEl.offsetTop,
        width: fromEl.offsetWidth,
        height: fromEl.offsetHeight,
      };
      const toRect = {
        left: toEl.offsetLeft,
        top: toEl.offsetTop,
        width: toEl.offsetWidth,
        height: toEl.offsetHeight,
      };

      const fromPoint = getAnchorPoint(
        fromRect as DOMRect,
        containerRect as DOMRect,
        connection.fromAnchor || "right"
      );
      const toPoint = getAnchorPoint(
        toRect as DOMRect,
        containerRect as DOMRect,
        connection.toAnchor || "left"
      );

      let d: string;
      if (connection.style === "curve") {
        d = createCurvePath(fromPoint, toPoint);
      } else {
        d = createElbowPath(fromPoint, toPoint, connection.fromAnchor, connection.toAnchor);
      }

      newPaths.push({
        d,
        fromId: connection.from,
        toId: connection.to,
        fromPoint,
        toPoint,
      });
    }

    setPaths(newPaths);
  }, [containerRef, connections]);

  useEffect(() => {
    if (!containerRef.current) return;

    const computeAfterLayout = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          computePaths();
        });
      });
    };

    computeAfterLayout();

    const handleResize = () => {
      computePaths();
    };

    window.addEventListener("resize", handleResize);

    resizeObserverRef.current = new ResizeObserver(() => {
      computePaths();
    });
    resizeObserverRef.current.observe(containerRef.current);

    const cardElements = connections
      .flatMap((c) => [
        document.getElementById(c.from),
        document.getElementById(c.to),
      ])
      .filter((el): el is HTMLElement => el !== null);

    if (cardElements.length > 0) {
      cardObserverRef.current = new ResizeObserver(() => {
        computePaths();
      });
      cardElements.forEach((el) => {
        cardObserverRef.current?.observe(el);
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserverRef.current?.disconnect();
      cardObserverRef.current?.disconnect();
    };
  }, [containerRef, connections, computePaths]);

  useEffect(() => {
    // When a card becomes completed, start its line animation
    connections.forEach((connection) => {
      const fromState = cardStates[connection.from];
      const connectionKey = `${connection.from}-${connection.to}`;
      
      if (fromState === "completed" && !lineAnimations[connectionKey]) {
        // Start line animation when from card is completed (border + badge done)
        setLineAnimations((prev) => ({ ...prev, [connectionKey]: true }));
        
        // After line animation finishes (1200ms), turn to-circle green
        setTimeout(() => {
          setCircleStates((prev) => ({ ...prev, [connection.to]: "green" }));
        }, 1200);
      }
    });
  }, [cardStates, connections, lineAnimations]);

  if (paths.length === 0) return null;

  const getConnectionState = (fromId: string, toId: string, index: number) => {
    const fromState = cardStates[fromId];
    const toState = cardStates[toId];
    const connectionKey = `${fromId}-${toId}`;
    
    // From circle is green when from card border animation finishes (completed)
    const fromCircleGreen = fromState === "completed";
    
    // Line animates only after from card is completed AND we've triggered it
    const lineActive = fromState === "completed" && lineAnimations[connectionKey];
    
    // To circle: check if we've set it to green via line animation, otherwise use card state
    const toCircleState = circleStates[toId] || (toState === "running" || toState === "completed" ? "green" : "grey");
    const toCircleGreen = toCircleState === "green";
    
    return {
      fromCircleGreen,
      lineActive,
      toCircleGreen,
      toCircleGrey: !toCircleGreen,
    };
  };

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-visible ${className}`}
      style={{ position: "absolute", inset: 0 }}
    >
      {paths.map((path, index) => {
        const state = getConnectionState(path.fromId, path.toId, index);
        
        return (
          <g key={`${path.fromId}-${path.toId}-${index}`}>
            {/* Base grey path */}
            <motion.path
              d={path.d}
              fill="none"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              initial={{ pathLength: 1, opacity: 0.3 }}
              animate={{ 
                pathLength: 1,
                opacity: 0.3
              }}
            />
            {/* Animated green path */}
            {state.lineActive && (
              <motion.path
                d={path.d}
                fill="none"
                stroke="#22c55e"
                strokeWidth={strokeWidth}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1,
                  opacity: 1
                }}
                transition={{
                  pathLength: {
                    duration: 1.2,
                    ease: "easeInOut",
                  },
                  opacity: {
                    duration: 0.3,
                  },
                }}
              />
            )}
            <motion.circle
              cx={path.fromPoint.x}
              cy={path.fromPoint.y}
              r={3}
              fill={state.fromCircleGreen ? "#22c55e" : strokeColor}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                fill: state.fromCircleGreen ? "#22c55e" : strokeColor
              }}
              transition={{
                duration: 0.3,
              }}
            />
            <motion.circle
              cx={path.toPoint.x}
              cy={path.toPoint.y}
              r={3}
              fill={state.toCircleGreen ? "#22c55e" : strokeColor}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                fill: state.toCircleGreen ? "#22c55e" : strokeColor
              }}
              transition={{
                duration: 0.3,
              }}
            />
          </g>
        );
      })}
    </svg>
  );
}

