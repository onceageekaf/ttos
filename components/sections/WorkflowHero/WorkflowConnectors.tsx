"use client";

import * as React from "react";

type AnchorId =
  | "disclosure"
  | "evaluation"
  | "protection"
  | "marketing"
  | "licensing";

   
type Port = "top" | "right" | "bottom" | "left";

type Link = {
  from: { id: AnchorId; port: Port };
  to: { id: AnchorId; port: Port };
};

type Pt = { x: number; y: number };

export type WorkflowConnectorsProps = {
  scopeRef?: React.RefObject<HTMLDivElement | null>;
  mode?: "desktop" | "stacked";
  strokeWidth?: number;
  stroke?: string;
  dotRadius?: number;

  /** duration per segment */
  drawDurationMs?: number;
  /** gap between segments */
  gapMs?: number;

  className?: string;
};


function qAnchor(scope: HTMLElement, id: AnchorId, port: Port) {
  return scope.querySelector(
    `[data-ttos-anchor="${id}:${port}"]`
  ) as HTMLElement | null;
}

function ptFromEl(el: HTMLElement, scopeRect: DOMRect): Pt {
  const r = el.getBoundingClientRect();
  // The anchor itself is 0x0 positioned; use its top-left as the point.
  return { x: r.left - scopeRect.left, y: r.top - scopeRect.top };
}

/**
 * One-corner elbow if possible:
 * - Prefer a single bend: (ax, by) OR (bx, ay)
 * - Pick the one that matches the "arrival direction" (end port) so it doesn't look like it comes from the wrong side.
 */
function elbowPath(a: Pt, b: Pt, from: Port, to: Port) {
  // If already almost aligned, draw straight.
  const dx = Math.abs(b.x - a.x);
  const dy = Math.abs(b.y - a.y);
  if (dx < 2 || dy < 2) return `M ${a.x} ${a.y} L ${b.x} ${b.y}`;

  // Two candidate corners
  const corner1: Pt = { x: a.x, y: b.y }; // vertical then horizontal
  const corner2: Pt = { x: b.x, y: a.y }; // horizontal then vertical

  // Choose corner to make the final segment "enter" the target from its port direction.
  // If target port is LEFT/RIGHT, final segment should be horizontal.
  // If target port is TOP/BOTTOM, final segment should be vertical.
  const wantHorizontalEnd = to === "left" || to === "right";

  const corner = wantHorizontalEnd ? corner1 : corner2;

  return `M ${a.x} ${a.y} L ${corner.x} ${corner.y} L ${b.x} ${b.y}`;
}

export default function WorkflowConnectors({
  scopeRef,
  mode = "desktop",
  strokeWidth = 1.4,
  stroke = "rgba(119, 117, 117, 0.3)",
  dotRadius = 4,
  drawDurationMs = 650,
  gapMs = 180,
  className = "",
}: WorkflowConnectorsProps) {
  const [viewBox, setViewBox] = React.useState({ w: 0, h: 0 });
  const [paths, setPaths] = React.useState<
    Array<{ d: string; a: Pt; b: Pt }>
  >([]);

  const links = React.useMemo<Link[]>(() => {
    if (mode === "stacked") {
      return [
        { from: { id: "disclosure", port: "bottom" }, to: { id: "evaluation", port: "top" } },
        { from: { id: "evaluation", port: "bottom" }, to: { id: "protection", port: "top" } },
        { from: { id: "protection", port: "bottom" }, to: { id: "marketing", port: "top" } },
        { from: { id: "marketing", port: "bottom" }, to: { id: "licensing", port: "top" } },
      ];
    }

    // DESKTOP layout (your current grid)
    // Fix: disclosure → evaluation should land on evaluation LEFT (not RIGHT)
    return [
      { from: { id: "disclosure", port: "right" }, to: { id: "evaluation", port: "left" } },
      { from: { id: "evaluation", port: "right" }, to: { id: "protection", port: "left" } },
      { from: { id: "protection", port: "bottom" }, to: { id: "marketing", port: "right" } },
      { from: { id: "marketing", port: "left" }, to: { id: "licensing", port: "right" } },
    ];
  }, [mode]);

  React.useEffect(() => {
    const el = scopeRef?.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      const rect = el.getBoundingClientRect();
      setViewBox({ w: rect.width, h: rect.height });
    });

    ro.observe(el);

    const recompute = () => {
      const scope = scopeRef?.current;
      if (!scope) return;

      const scopeRect = scope.getBoundingClientRect();
      setViewBox({ w: scopeRect.width, h: scopeRect.height });

      const computed: Array<{ d: string; a: Pt; b: Pt }> = [];

      for (const link of links) {
        const aEl = qAnchor(scope, link.from.id, link.from.port);
        const bEl = qAnchor(scope, link.to.id, link.to.port);
        if (!aEl || !bEl) continue;

        const a = ptFromEl(aEl, scopeRect);
        const b = ptFromEl(bEl, scopeRect);

        computed.push({
          d: elbowPath(a, b, link.from.port, link.to.port),
          a,
          b,
        });
      }

      setPaths(computed);
    };

    // initial + on next frames (layout settle)
    recompute();
    const t1 = requestAnimationFrame(recompute);
    const t2 = requestAnimationFrame(recompute);

    window.addEventListener("scroll", recompute, true);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(t1);
      cancelAnimationFrame(t2);
      window.removeEventListener("scroll", recompute, true);
    };
  }, [scopeRef, links]);

  const [hasScope, setHasScope] = React.useState(false);
  React.useEffect(() => {
    setHasScope(!!scopeRef?.current);
  }, [scopeRef]);

  if (!hasScope) return null;
  if (viewBox.w <= 1 || viewBox.h <= 1) return null;
  if (!paths.length) return null;

  const segmentMs = drawDurationMs + gapMs;

  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox={`0 0 ${viewBox.w} ${viewBox.h}`}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "visible",
      }}
    >
      <style>{`
        @keyframes ttos-draw {
          from { stroke-dashoffset: 1; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes ttos-dot {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {paths.map((p, i) => {
        const delay = i * segmentMs;

        return (
          <g key={i}>
            {/* START DOT */}
            <circle
              cx={p.a.x}
              cy={p.a.y}
              r={dotRadius}
              fill={stroke}
              style={{
                opacity: 0,
                transformOrigin: `${p.a.x}px ${p.a.y}px`,
                animation: `ttos-dot 180ms ease-out ${delay}ms forwards`,
              }}
            />

            {/* PATH */}
            <path
              d={p.d}
              pathLength={1}
              fill="none"
              stroke={stroke}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="1"
              strokeDashoffset="1"
              style={{
                animation: `ttos-draw ${drawDurationMs}ms ease-out ${delay}ms forwards`,
              }}
            />

            {/* END DOT */}
            <circle
              cx={p.b.x}
              cy={p.b.y}
              r={dotRadius}
              fill={stroke}
              style={{
                opacity: 0,
                transformOrigin: `${p.b.x}px ${p.b.y}px`,
                animation: `ttos-dot 220ms ease-out ${delay + drawDurationMs}ms forwards`,
              }}
            />
          </g>
        );
      })}
    </svg>
  );
}