export function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 border-t border-[var(--clr-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <span className="section-label">CORE CAPABILITIES</span>
        <h2
          className="mt-4 text-3xl sm:text-4xl font-bold leading-tight max-w-xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          From scenario to battle-tested plan.{" "}
          <span className="text-[var(--clr-text-dim)]">Automatically.</span>
        </h2>

        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          {/* Card 1 — Pre-Mission Planning */}
          <div className="glow-card corner-marks p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center border border-[var(--clr-accent)] bg-[var(--clr-accent-dim)]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 10l5 5L17 5" stroke="var(--clr-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span
                  className="text-[0.6rem] tracking-widest text-[var(--clr-text-dim)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  CAPABILITY 01
                </span>
                <h3 className="text-lg font-semibold">Pre-Mission Planning at Scale</h3>
              </div>
            </div>

            <p className="text-[var(--clr-text-dim)] text-sm leading-relaxed mb-6">
              Given a scenario, threat intel, and force posture, ChaMP generates COAs
              and refines them through iterative simulation. After each run, the system
              ingests performance feedback — what worked, what failed, where the plan
              broke down — and produces improved COAs for the next iteration.
            </p>

            {/* Loop visualization */}
            <div className="flex flex-wrap items-center gap-2">
              {["Generate COA", "Simulate", "Evaluate", "Refine"].map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="tag text-[var(--clr-accent)] border-[var(--clr-accent)]/30">
                    {step}
                  </span>
                  {i < 3 && (
                    <svg width="16" height="8" viewBox="0 0 16 8" className="text-[var(--clr-border-accent)]">
                      <path d="M0 4h12M10 1l3 3-3 3" stroke="currentColor" strokeWidth="1" fill="none"/>
                    </svg>
                  )}
                </div>
              ))}
              {/* Loop-back arrow */}
              <svg width="20" height="14" viewBox="0 0 20 14" className="text-[var(--clr-accent)] opacity-50 ml-1">
                <path d="M18 1C18 1 18 7 10 7H2M2 7l3-3M2 7l3 3" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Card 2 — Dynamic Replanning */}
          <div className="glow-card corner-marks p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center border border-[var(--clr-warning)] bg-[var(--clr-warning-dim)]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 3v7l4 4" stroke="var(--clr-warning)" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="10" cy="10" r="7" stroke="var(--clr-warning)" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <div>
                <span
                  className="text-[0.6rem] tracking-widest text-[var(--clr-text-dim)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  CAPABILITY 02
                </span>
                <h3 className="text-lg font-semibold">Dynamic Replanning During Execution</h3>
              </div>
            </div>

            <p className="text-[var(--clr-text-dim)] text-sm leading-relaxed mb-6">
              During simulation or live execution, conditions change — an intercept
              launch occurs, adversary behavior shifts, assets are lost. ChaMP detects
              these changes and autonomously replans, adjusting COAs to the new reality
              without waiting for manual reassessment.
            </p>

            {/* Event visualization */}
            <div className="space-y-2">
              {[
                { event: "INTERCEPT LAUNCH DETECTED", status: "REPLANNING", color: "var(--clr-warning)" },
                { event: "ASSET DELTA-3 LOST", status: "COA ADJUSTED", color: "var(--clr-accent)" },
                { event: "ADVERSARY MANEUVER SHIFT", status: "ADAPTING", color: "var(--clr-blue)" },
              ].map((e, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2 px-3 bg-[var(--clr-surface-2)] border border-[var(--clr-border)]"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem" }}
                >
                  <span className="text-[var(--clr-text-dim)]">{e.event}</span>
                  <span style={{ color: e.color }}>{e.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 3 — Scenario Generation (full-width featured card) */}
        <div className="mt-6 glow-card scenario-card p-8 lg:p-10" style={{ borderColor: "var(--clr-border)" }}>
          <div className="scan-beam" />
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12 items-start">
            {/* Left: text content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center border border-[var(--clr-violet)] bg-[var(--clr-violet-dim)]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2L10 6" stroke="var(--clr-violet)" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M10 6L4 10" stroke="var(--clr-violet)" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M10 6L16 10" stroke="var(--clr-violet)" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M10 6L10 11" stroke="var(--clr-violet)" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="10" cy="2" r="1.5" fill="var(--clr-violet)"/>
                    <circle cx="4" cy="10" r="1.5" fill="var(--clr-violet)" opacity="0.7"/>
                    <circle cx="10" cy="11" r="1.5" fill="var(--clr-violet)" opacity="0.7"/>
                    <circle cx="16" cy="10" r="1.5" fill="var(--clr-violet)" opacity="0.7"/>
                    <path d="M4 10L2 14" stroke="var(--clr-violet)" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
                    <path d="M4 10L6 14" stroke="var(--clr-violet)" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
                    <path d="M16 10L14 14" stroke="var(--clr-violet)" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
                    <path d="M16 10L18 14" stroke="var(--clr-violet)" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
                  </svg>
                </div>
                <div>
                  <span
                    className="text-[0.6rem] tracking-widest text-[var(--clr-text-dim)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    CAPABILITY 03
                  </span>
                  <h3 className="text-lg font-semibold">Scenario Generation</h3>
                </div>
              </div>

              <p className="text-[var(--clr-text-dim)] text-sm leading-relaxed mb-6">
                ChaMP ingests the mission context — objectives, constraints, operating
                environment — and autonomously generates a rich set of plausible
                scenarios. Each scenario captures unique threat vectors, decision
                points, and environmental conditions, giving planners comprehensive
                situational coverage without manual authoring.
              </p>

              <div className="flex items-center gap-3">
                <span
                  className="text-4xl font-bold"
                  style={{
                    fontFamily: "var(--font-mono)",
                    background: "linear-gradient(135deg, var(--clr-violet), #c4b5fd)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  8x
                </span>
                <span className="text-sm text-[var(--clr-text-dim)]">
                  faster than manual<br/>scenario generation
                </span>
              </div>
            </div>

            {/* Right: Scenario generation flow visualization */}
            <div className="relative">
              <svg
                viewBox="0 0 520 340"
                className="w-full h-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="scenarioGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(167,139,250,0.04)" strokeWidth="0.5"/>
                  </pattern>
                  <radialGradient id="engineGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(167,139,250,0.15)"/>
                    <stop offset="100%" stopColor="rgba(167,139,250,0)"/>
                  </radialGradient>
                  <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--clr-text-dim)"/>
                    <stop offset="100%" stopColor="var(--clr-violet)"/>
                  </linearGradient>
                  <linearGradient id="outGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--clr-violet)"/>
                    <stop offset="100%" stopColor="var(--clr-blue)"/>
                  </linearGradient>
                  <linearGradient id="outGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--clr-violet)"/>
                    <stop offset="100%" stopColor="var(--clr-accent)"/>
                  </linearGradient>
                  <linearGradient id="outGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--clr-violet)"/>
                    <stop offset="100%" stopColor="var(--clr-warning)"/>
                  </linearGradient>
                  <filter id="nodeGlow">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feMerge>
                      <feMergeNode in="blur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                <rect width="520" height="340" fill="url(#scenarioGrid)"/>

                {/* ─── LEFT: Mission context inputs ─── */}
                {[
                  { y: 55, label: "MISSION OBJECTIVE" },
                  { y: 100, label: "OPERATIONAL CONTEXT" },
                  { y: 145, label: "CONSTRAINTS & RULES" },
                  { y: 190, label: "FORCE POSTURE" },
                  { y: 235, label: "THREAT ASSESSMENT" },
                ].map((item, i) => (
                  <g key={i} className={`scenario-node scenario-node-d${Math.min(5, i + 1)}`} style={{ transformOrigin: `60px ${item.y}px` }}>
                    <rect x="8" y={item.y - 11} width="120" height="22" rx="2" fill="var(--clr-surface-2)" stroke="var(--clr-border)" strokeWidth="0.7"/>
                    <text x="68" y={item.y + 4} textAnchor="middle" fill="var(--clr-text)" fontSize="6.5" fontFamily="var(--font-mono)" letterSpacing="0.05em" opacity="0.85">{item.label}</text>
                  </g>
                ))}

                {/* ─── Flow lines: inputs → engine ─── */}
                {[55, 100, 145, 190, 235].map((y, i) => (
                  <path
                    key={i}
                    d={`M 128 ${y} C 160 ${y}, 170 170, 195 170`}
                    stroke="url(#flowGrad)" strokeWidth="0.8" opacity="0.4"
                    className={`scenario-tree-path scenario-tree-path-d${Math.min(5, i + 1)}`}
                  />
                ))}

                {/* ─── CENTER: ChaMP engine ─── */}
                <ellipse cx="260" cy="170" rx="80" ry="70" fill="url(#engineGlow)"/>

                <g filter="url(#nodeGlow)" className="scenario-node scenario-node-d3" style={{ transformOrigin: "260px 170px" }}>
                  {/* Hexagonal engine shape */}
                  <polygon
                    points="260,120 305,145 305,195 260,220 215,195 215,145"
                    fill="var(--clr-surface)" stroke="var(--clr-violet)" strokeWidth="1.2"
                  />
                  {/* Inner ring */}
                  <polygon
                    points="260,135 292,152 292,188 260,205 228,188 228,152"
                    fill="none" stroke="var(--clr-violet)" strokeWidth="0.5" opacity="0.3"
                  />
                  {/* Center icon — neural/processing symbol */}
                  <circle cx="260" cy="160" r="8" fill="none" stroke="var(--clr-violet)" strokeWidth="0.8" opacity="0.6"/>
                  <circle cx="260" cy="160" r="3" fill="var(--clr-violet)" className="scenario-glow"/>
                  <line x1="260" y1="152" x2="260" y2="142" stroke="var(--clr-violet)" strokeWidth="0.6" opacity="0.4"/>
                  <line x1="267" y1="164" x2="275" y2="170" stroke="var(--clr-violet)" strokeWidth="0.6" opacity="0.4"/>
                  <line x1="253" y1="164" x2="245" y2="170" stroke="var(--clr-violet)" strokeWidth="0.6" opacity="0.4"/>
                  <circle cx="260" cy="141" r="2" fill="var(--clr-violet)" opacity="0.5"/>
                  <circle cx="276" cy="171" r="2" fill="var(--clr-violet)" opacity="0.5"/>
                  <circle cx="244" cy="171" r="2" fill="var(--clr-violet)" opacity="0.5"/>
                  <text x="260" y="190" textAnchor="middle" fill="var(--clr-violet)" fontSize="7" fontFamily="var(--font-mono)" fontWeight="600" letterSpacing="0.1em">ChaMP</text>
                </g>

                {/* ─── Flow lines: engine → scenarios ─── */}
                <path d="M 305 145 C 330 130, 335 60, 355 55" stroke="url(#outGrad1)" strokeWidth="1.2" opacity="0.6" className="scenario-tree-path scenario-tree-path-d4"/>
                <path d="M 305 158 C 335 155, 340 120, 355 115" stroke="url(#outGrad1)" strokeWidth="1.2" opacity="0.6" className="scenario-tree-path scenario-tree-path-d4"/>
                <path d="M 305 170 C 330 170, 340 170, 355 170" stroke="url(#outGrad2)" strokeWidth="1.2" opacity="0.6" className="scenario-tree-path scenario-tree-path-d4"/>
                <path d="M 305 182 C 335 185, 340 220, 355 225" stroke="url(#outGrad2)" strokeWidth="1.2" opacity="0.6" className="scenario-tree-path scenario-tree-path-d5"/>
                <path d="M 305 195 C 330 210, 340 275, 355 280" stroke="url(#outGrad3)" strokeWidth="1.2" opacity="0.6" className="scenario-tree-path scenario-tree-path-d5"/>

                {/* ─── RIGHT: Generated scenario cards ─── */}
                {[
                  { y: 40, label: "SCENARIO A-1", sub: "Naval interdiction", color: "var(--clr-blue)" },
                  { y: 100, label: "SCENARIO A-2", sub: "Air superiority ops", color: "var(--clr-blue)" },
                  { y: 160, label: "SCENARIO B-1", sub: "Combined arms, urban", color: "var(--clr-accent)" },
                  { y: 220, label: "SCENARIO B-2", sub: "Asymmetric defense", color: "var(--clr-accent)" },
                  { y: 280, label: "SCENARIO C-1", sub: "Rapid deployment", color: "var(--clr-warning)" },
                ].map((s, i) => (
                  <g key={i} className={`scenario-node scenario-node-d${Math.min(7, i + 4)}`} style={{ transformOrigin: `430px ${s.y + 10}px` }}>
                    <rect x="355" y={s.y} width="160" height="40" rx="3" fill="var(--clr-surface)" stroke={s.color} strokeWidth="0.8"/>
                    {/* Left accent bar */}
                    <rect x="355" y={s.y} width="3" height="40" rx="1" fill={s.color} opacity="0.7"/>
                    {/* Status dot */}
                    <circle cx="370" cy={s.y + 14} r="3" fill={s.color} className="scenario-glow"/>
                    {/* Label */}
                    <text x="382" y={s.y + 16} fill={s.color} fontSize="7.5" fontFamily="var(--font-mono)" fontWeight="600">{s.label}</text>
                    {/* Description */}
                    <text x="370" y={s.y + 30} fill="#e8eaf0" fontSize="6.5" fontFamily="var(--font-mono)">{s.sub}</text>
                  </g>
                ))}

                {/* ─── Decorative: phase labels ─── */}
                <text x="68" y="28" textAnchor="middle" fill="#e8eaf0" fontSize="6.5" fontFamily="var(--font-mono)" opacity="0.6" letterSpacing="0.15em">MISSION CONTEXT</text>
                <line x1="8" y1="34" x2="128" y2="34" stroke="var(--clr-border)" strokeWidth="0.5" opacity="0.4"/>

                <text x="435" y="28" textAnchor="middle" fill="#e8eaf0" fontSize="6.5" fontFamily="var(--font-mono)" opacity="0.6" letterSpacing="0.15em">GENERATED SCENARIOS</text>
                <line x1="355" y1="34" x2="515" y2="34" stroke="var(--clr-border)" strokeWidth="0.5" opacity="0.4"/>

              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
