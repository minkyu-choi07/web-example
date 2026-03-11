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
      </div>
    </section>
  );
}
