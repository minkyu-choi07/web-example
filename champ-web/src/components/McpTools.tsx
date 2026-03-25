"use client";

import { useState, useRef, useCallback, useEffect } from "react";

/* ── JSON syntax highlighting ───────────────────────────────── */

function syntaxHighlight(json: string): string {
  return json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(
      /("(?:\\.|[^"\\])*")\s*:/g,
      '<span style="color: var(--clr-blue)">$1</span>:',
    )
    .replace(
      /:\s*("(?:\\.|[^"\\])*")/g,
      ': <span style="color: var(--clr-accent)">$1</span>',
    );
}

/* ── Tool data ──────────────────────────────────────────────── */

type McpTool = {
  id: string;
  name: string;
  label: string;
  category: string;
  color: string;
  colorDim: string;
  description: string;
  capability: string[];
  usage: string;
  docsUrl: string;
  mcpConfig: string;
  image: string;
  comingSoon?: boolean;
};

type McpCategory = {
  id: string;
  label: string;
  color: string;
  colorDim: string;
  iconPath: string;
  tools: McpTool[];
};

const CATEGORIES: McpCategory[] = [
  {
    id: "mission-planning",
    label: "Mission Planning Doctrine",
    color: "var(--clr-accent)",
    colorDim: "var(--clr-accent-dim)",
    iconPath: "M12 2L12 8M12 8L6 14M12 8L18 14M12 8L12 16M6 14L4 18M6 14L8 18M18 14L16 18M18 14L20 18",
    tools: [
      {
        id: "mdmp",
        name: "MDMP",
        label: "Military Decision-Making Process",
        category: "Mission Planning Doctrine",
        color: "var(--clr-accent)",
        colorDim: "var(--clr-accent-dim)",
        image: "https://picsum.photos/seed/mdmp/80/80",
        description:
          "Structured analytical methodology for operational planning. Implements the seven-step MDMP framework — receipt of mission, mission analysis, COA development, COA analysis, COA comparison, COA approval, and orders production.",
        capability: [
          "Automated mission analysis from OPORD fragments",
          "COA generation with terrain & threat overlay",
          "Wargaming simulation for COA stress-testing",
          "Decision matrix scoring & comparison",
          "OPLAN / OPORD document synthesis",
        ],
        usage:
          "Invoke with a mission statement or OPORD fragment. The tool will walk through each MDMP step, producing structured outputs at each phase. Combine with GRXX for route-integrated COAs.",
        docsUrl: "#",
        mcpConfig: `{
  "mcpServers": {
    "champ-mdmp": {
      "command": "npx",
      "args": ["-y", "@champ/mcp-mdmp"],
      "env": {
        "CHAMP_API_KEY": "your-api-key",
        "CHAMP_ENDPOINT": "https://api.champ.mil/v2"
      }
    }
  }
}`,
      },
    ],
  },
  {
    id: "route-planning",
    label: "Route Planning",
    color: "var(--clr-blue)",
    colorDim: "var(--clr-blue-dim)",
    iconPath: "M3 17L9 11L13 15L21 7M21 7H15M21 7V13",
    tools: [
      {
        id: "grxx",
        name: "GRXX",
        label: "Ground Route Planning",
        category: "Route Planning",
        color: "var(--clr-blue)",
        colorDim: "var(--clr-blue-dim)",
        image: "https://picsum.photos/seed/grxx/80/80",
        description:
          "Ground route computation engine for convoy and maneuver element movement. Factors in terrain classification, threat corridors, logistics waypoints, and time-distance analysis.",
        capability: [
          "Multi-waypoint ground route optimization",
          "Terrain trafficability analysis (OAKOC)",
          "Threat avoidance corridor mapping",
          "Time-distance-fuel computation",
          "Alternate route generation with risk scores",
        ],
        usage:
          "Provide start/end grid coordinates and optional waypoints. Specify vehicle type for trafficability filtering. Returns primary and alternate routes with risk assessments.",
        docsUrl: "#",
        mcpConfig: `{
  "mcpServers": {
    "champ-grxx": {
      "command": "npx",
      "args": ["-y", "@champ/mcp-grxx"],
      "env": {
        "CHAMP_API_KEY": "your-api-key",
        "CHAMP_ENDPOINT": "https://api.champ.mil/v2"
      }
    }
  }
}`,
      },
      {
        id: "darxx",
        name: "DARXX",
        label: "Dynamic Air Route Planning",
        category: "Route Planning",
        color: "var(--clr-blue)",
        colorDim: "var(--clr-blue-dim)",
        image: "https://picsum.photos/seed/darxx/80/80",
        description:
          "Air corridor and rotary-wing route planning with real-time airspace deconfliction. Integrates ADA threat rings, restricted operating zones, and altitude optimization.",
        capability: [
          "Low-level air route generation",
          "ADA threat ring avoidance",
          "Airspace deconfliction (ROZ/HIDACZ)",
          "Altitude profile optimization",
          "Multi-aircraft flow scheduling",
        ],
        usage:
          "Input departure and arrival points with aircraft type. The engine computes nap-of-earth routes avoiding known ADA positions. Supports batch planning for air assaults.",
        docsUrl: "#",
        mcpConfig: `{
  "mcpServers": {
    "champ-darxx": {
      "command": "npx",
      "args": ["-y", "@champ/mcp-darxx"],
      "env": {
        "CHAMP_API_KEY": "your-api-key",
        "CHAMP_ENDPOINT": "https://api.champ.mil/v2"
      }
    }
  }
}`,
      },
    ],
  },
  {
    id: "topology",
    label: "Topology",
    color: "var(--clr-warning)",
    colorDim: "var(--clr-warning-dim)",
    iconPath: "M3 20L8 14L13 17L21 4",
    tools: [
      {
        id: "weather",
        name: "Weather",
        label: "Operational Weather Intelligence",
        category: "Topology",
        color: "var(--clr-warning)",
        colorDim: "var(--clr-warning-dim)",
        image: "",
        description:
          "Real-time and forecast meteorological data fused with operational impact analysis. Translates raw weather into mission-specific effects on mobility, visibility, and comms.",
        capability: [
          "METAR / TAF ingestion and parsing",
          "Operational weather effects matrix",
          "Visibility & ceiling impact on ISR/CAS",
          "Cross-country mobility degradation forecast",
          "NBC contamination dispersion modeling",
        ],
        usage:
          "Query by MGRS grid or named area of interest. Returns current conditions plus 72-hour forecast with operational impact annotations for specified mission types.",
        docsUrl: "#",
        mcpConfig: `{
  "mcpServers": {
    "champ-weather": {
      "command": "npx",
      "args": ["-y", "@champ/mcp-weather"],
      "env": {
        "CHAMP_API_KEY": "your-api-key",
        "CHAMP_ENDPOINT": "https://api.champ.mil/v2"
      }
    }
  }
}`,
      },
      {
        id: "terrain",
        name: "Terrain",
        label: "Terrain Analysis Engine",
        category: "Topology",
        color: "var(--clr-warning)",
        colorDim: "var(--clr-warning-dim)",
        image: "",
        description:
          "Digital terrain analysis using DTED/SRTM elevation data. Generates OAKOC overlays, line-of-sight analysis, and cross-country mobility corridors.",
        capability: [
          "OAKOC terrain overlay generation",
          "Line-of-sight / intervisibility analysis",
          "Slope & elevation profile computation",
          "Key terrain identification",
          "Avenues of approach classification",
        ],
        usage:
          "Provide an area of interest as a bounding box or polygon. Specify analysis type (LOS, mobility, full OAKOC). Returns structured overlays compatible with mapping tools.",
        docsUrl: "#",
        mcpConfig: `{
  "mcpServers": {
    "champ-terrain": {
      "command": "npx",
      "args": ["-y", "@champ/mcp-terrain"],
      "env": {
        "CHAMP_API_KEY": "your-api-key",
        "CHAMP_ENDPOINT": "https://api.champ.mil/v2"
      }
    }
  }
}`,
      },
      {
        id: "tbd-topo",
        name: "TBD",
        label: "Additional Topology Tool",
        category: "Topology",
        color: "var(--clr-warning)",
        colorDim: "var(--clr-warning-dim)",
        image: "",
        comingSoon: true,
        description: "To be determined. A future topology analysis tool.",
        capability: [],
        usage: "Coming soon.",
        docsUrl: "#",
        mcpConfig: "",
      },
    ],
  },
  {
    id: "force-optimization",
    label: "Force Optimization",
    color: "var(--clr-violet)",
    colorDim: "var(--clr-violet-dim)",
    iconPath: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    tools: [
      {
        id: "blue-force-optimizer",
        name: "Blue Force Optimizer",
        label: "Blue Force Allocation & Optimization",
        category: "Force Optimization",
        color: "var(--clr-violet)",
        colorDim: "var(--clr-violet-dim)",
        image: "",
        comingSoon: true,
        description:
          "AI-driven force allocation engine that optimizes unit positioning, task organization, and resource distribution across the battlespace. Balances combat power ratios against mission requirements and constraint sets.",
        capability: [
          "Optimal task organization generation",
          "Combat power ratio analysis",
          "Multi-objective resource allocation",
          "Force laydown visualization",
          "What-if force structure comparison",
        ],
        usage:
          "Coming soon. This tool is currently under development and will be available in a future release of the ChaMP MCP protocol.",
        docsUrl: "#",
        mcpConfig: `{
  "mcpServers": {
    "champ-bfo": {
      "command": "npx",
      "args": ["-y", "@champ/mcp-blue-force-optimizer"],
      "env": {
        "CHAMP_API_KEY": "your-api-key",
        "CHAMP_ENDPOINT": "https://api.champ.mil/v2"
      }
    }
  }
}`,
      },
    ],
  },
];

/* ── Tool detail modal ──────────────────────────────────────── */

function ToolModal({ tool, onClose }: { tool: McpTool; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    >
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className="relative w-full max-w-[580px] max-h-[85vh] overflow-y-auto corner-marks"
        style={{
          background: "var(--clr-surface)",
          border: `1px solid ${tool.color}`,
          animation: "fadeUp 0.25s ease-out",
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-0">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 flex-shrink-0 overflow-hidden flex items-center justify-center"
              style={{
                border: `1px solid ${tool.color}`,
                background: tool.image ? "transparent" : tool.colorDim,
              }}
            >
              {tool.image ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: tool.color,
                    letterSpacing: "0.06em",
                  }}
                >
                  MCP
                </span>
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3
                  className="text-lg font-bold tracking-wider"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: tool.color,
                  }}
                >
                  {tool.name}
                </h3>
                <span
                  className="tag"
                  style={{
                    color: tool.color,
                    borderColor: tool.color,
                    background: tool.colorDim,
                    fontSize: "0.6rem",
                    padding: "2px 8px",
                  }}
                >
                  OPERATIONAL
                </span>
              </div>
              <p
                className="text-[var(--clr-text-dim)] mt-0.5"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                }}
              >
                {tool.label}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[var(--clr-text-dim)] hover:text-[var(--clr-text)] transition-colors p-1"
            style={{ fontSize: "1.25rem", lineHeight: 1 }}
          >
            &times;
          </button>
        </div>

        <div
          className="mx-6 mt-4"
          style={{ height: 1, background: "var(--clr-border)" }}
        />

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <ModalSection label="DESCRIPTION" color={tool.color}>
            <p
              className="text-[var(--clr-text-dim)] leading-relaxed"
              style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem" }}
            >
              {tool.description}
            </p>
          </ModalSection>

          {/* Capabilities */}
          <ModalSection label="CAPABILITIES" color={tool.color}>
            <div className="space-y-2">
              {tool.capability.map((cap) => (
                <div
                  key={cap}
                  className="flex items-start gap-2"
                  style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem" }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    className="mt-0.5 flex-shrink-0"
                  >
                    <path
                      d="M2 7h8M8 4l3 3-3 3"
                      stroke={tool.color}
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[var(--clr-text-dim)]">{cap}</span>
                </div>
              ))}
            </div>
          </ModalSection>

          {/* How to Use */}
          <ModalSection label="HOW TO USE" color={tool.color}>
            <p
              className="text-[var(--clr-text-dim)] leading-relaxed"
              style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem" }}
            >
              {tool.usage}
            </p>
          </ModalSection>

          {/* MCP Config */}
          <ModalSection label="MCP.JSON CONFIGURATION" color={tool.color}>
            <div
              className="relative"
              style={{
                background: "var(--clr-surface-2)",
                border: "1px solid var(--clr-border)",
              }}
            >
              {/* File tab */}
              <div
                className="flex items-center gap-2 px-4 py-2"
                style={{
                  borderBottom: "1px solid var(--clr-border)",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 1h5l3 3v7H2V1z" stroke="var(--clr-text-dim)" strokeWidth="0.8" fill="none" />
                  <path d="M7 1v3h3" stroke="var(--clr-text-dim)" strokeWidth="0.8" fill="none" />
                </svg>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "var(--clr-text-dim)",
                    letterSpacing: "0.03em",
                  }}
                >
                  mcp.json
                </span>
              </div>
              {/* Code */}
              <pre
                className="p-4 overflow-x-auto"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  lineHeight: "1.6",
                  color: "var(--clr-text)",
                  margin: 0,
                }}
              >
                <code
                  dangerouslySetInnerHTML={{
                    __html: syntaxHighlight(tool.mcpConfig),
                  }}
                />
              </pre>
            </div>
          </ModalSection>

          {/* Docs link */}
          <a
            href={tool.docsUrl}
            className="flex items-center justify-center gap-2 w-full py-3 transition-all duration-200"
            style={{
              border: `1px solid ${tool.color}`,
              color: tool.color,
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              fontWeight: 600,
              background: tool.colorDim,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = tool.color;
              e.currentTarget.style.color = "var(--clr-bg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = tool.colorDim;
              e.currentTarget.style.color = tool.color;
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 2h7v10H2V2z" stroke="currentColor" strokeWidth="1.2" fill="none" />
              <path d="M5 5h2M5 7h3M5 9h2" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
              <path d="M9 4h3v10H5" stroke="currentColor" strokeWidth="1.2" fill="none" />
            </svg>
            View Full Documentation
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 9L9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function ModalSection({
  label,
  color,
  children,
}: {
  label: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <div
          style={{ width: 6, height: 6, background: color, flexShrink: 0 }}
        />
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            fontWeight: 500,
            color: "var(--clr-text-dim)",
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
          }}
        >
          {label}
        </span>
        <div
          className="flex-1"
          style={{ height: 1, background: "var(--clr-border)" }}
        />
      </div>
      {children}
    </div>
  );
}

/* ── Tool chip ──────────────────────────────────────────────── */

function ToolChip({ tool, onClick }: { tool: McpTool; onClick: () => void }) {
  return (
    <button
      onClick={tool.comingSoon ? undefined : onClick}
      className="agent-node group w-full text-left flex items-center gap-3"
      style={tool.comingSoon ? { opacity: 0.55, cursor: "default" } : undefined}
    >
      {/* Icon block */}
      <div
        className="w-9 h-9 flex-shrink-0 overflow-hidden flex items-center justify-center"
        style={{
          border: `1px solid ${tool.color}`,
          background: tool.image ? "transparent" : tool.colorDim,
        }}
      >
        {tool.image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={tool.image}
            alt={tool.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.55rem",
              fontWeight: 700,
              color: tool.color,
              letterSpacing: "0.04em",
            }}
          >
            MCP
          </span>
        )}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span
            className="text-sm font-bold tracking-wider"
            style={{ fontFamily: "var(--font-display)", color: tool.color }}
          >
            {tool.name}
          </span>
          {tool.comingSoon ? (
            <span
              className="tag"
              style={{
                color: "var(--clr-text-dim)",
                borderColor: "var(--clr-border-accent)",
                background: "var(--clr-surface-2)",
                fontSize: "0.5rem",
                padding: "1px 6px",
              }}
            >
              COMING SOON
            </span>
          ) : (
            <div className="pulse-dot" style={{ background: tool.color, boxShadow: `0 0 8px ${tool.color}` }} />
          )}
        </div>
        <p
          className="text-[var(--clr-text-dim)] truncate"
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem" }}
        >
          {tool.label}
        </p>
      </div>

      {/* Arrow */}
      {!tool.comingSoon && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="flex-shrink-0 text-[var(--clr-text-dim)] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
        >
          <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

/* ── Main section ───────────────────────────────────────────── */

export function McpTools() {
  const [selectedTool, setSelectedTool] = useState<McpTool | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction === "left" ? -364 : 364, behavior: "smooth" });
  }, []);

  return (
    <>
      <section
        id="mcp-tools"
        className="relative py-24 border-t border-[var(--clr-border)]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between">
            <div>
              <span className="section-label">MCP TOOL REGISTRY</span>
              <h2
                className="mt-4 text-3xl sm:text-4xl font-bold leading-tight max-w-xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                ChaMP MCP.{" "}
                <span className="text-[var(--clr-text-dim)]">
                  Integrated tool layer.
                </span>
              </h2>
              <p
                className="mt-4 text-[var(--clr-text-dim)] text-sm leading-relaxed max-w-lg"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Each MCP tool exposes a typed interface that ChaMP agents can invoke
                autonomously. Click any tool to inspect its schema, capabilities, and
                usage patterns. Feel free to connect them to your agent.
              </p>
              <p
                className="mt-3 text-sm"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-[var(--clr-text-dim)]">Want to toolify your software? </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 transition-colors duration-200"
                  style={{ color: "var(--clr-accent)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.textDecoration = "underline"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.textDecoration = "none"; }}
                >
                  <span style={{ fontWeight: 600 }}>Reach out to us</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 9L9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </p>
            </div>

            {/* Arrow buttons */}
            <div className="hidden sm:flex items-center gap-2 mb-1">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 flex items-center justify-center transition-all duration-200"
                style={{
                  border: "1px solid var(--clr-border)",
                  background: canScrollLeft ? "var(--clr-surface)" : "transparent",
                  color: canScrollLeft ? "var(--clr-text)" : "var(--clr-border-accent)",
                  cursor: canScrollLeft ? "pointer" : "default",
                }}
                aria-label="Scroll left"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 flex items-center justify-center transition-all duration-200"
                style={{
                  border: "1px solid var(--clr-border)",
                  background: canScrollRight ? "var(--clr-surface)" : "transparent",
                  color: canScrollRight ? "var(--clr-text)" : "var(--clr-border-accent)",
                  cursor: canScrollRight ? "pointer" : "default",
                }}
                aria-label="Scroll right"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Category cards — horizontal scroll */}
          <div className="relative mt-16">
            {/* Left gradient fade */}
            {canScrollLeft && (
              <div
                className="absolute left-0 top-0 bottom-4 w-16 z-10 pointer-events-none"
                style={{
                  background: "linear-gradient(to right, var(--clr-bg), transparent)",
                }}
              />
            )}
            {/* Right gradient fade */}
            {canScrollRight && (
              <div
                className="absolute right-0 top-0 bottom-4 w-16 z-10 pointer-events-none"
                style={{
                  background: "linear-gradient(to left, var(--clr-bg), transparent)",
                }}
              />
            )}

            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-4"
              style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
            >
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="glow-card corner-marks p-6 flex-shrink-0 flex flex-col"
                style={{ width: "340px", height: "320px", scrollSnapAlign: "start" }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 flex items-center justify-center"
                    style={{
                      border: `1px solid ${cat.color}`,
                      background: cat.colorDim,
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d={cat.iconPath}
                        stroke={cat.color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <span
                      className="text-[0.6rem] tracking-widest text-[var(--clr-text-dim)]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {cat.tools.length} TOOL{cat.tools.length !== 1 ? "S" : ""}
                    </span>
                    <h3
                      className="text-base font-semibold tracking-wide"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {cat.label}
                    </h3>
                  </div>
                </div>

                {/* Divider */}
                <div className="divider mb-4" />

                {/* Tools — scrollable */}
                <div
                  className="flex-1 min-h-0 overflow-y-auto"
                  style={{ scrollbarWidth: "thin", scrollbarColor: "var(--clr-border-accent) transparent" }}
                >
                  <div className="space-y-2">
                    {cat.tools.map((tool) => (
                      <ToolChip
                        key={tool.id}
                        tool={tool}
                        onClick={() => setSelectedTool(tool)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>

          {/* Bottom status bar */}
          <div
            className="mt-8 flex items-center justify-between py-3 px-5"
            style={{
              background: "var(--clr-surface)",
              border: "1px solid var(--clr-border)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="pulse-dot" />
              <span className="text-[var(--clr-text-dim)]">MCP Protocol v2.1</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedTool && (
        <ToolModal tool={selectedTool} onClose={() => setSelectedTool(null)} />
      )}
    </>
  );
}
