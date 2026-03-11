export function Architecture() {
  const agents = [
    { name: "Lead Orchestrator", role: "Coordinates agents across planning echelons", accent: true },
    { name: "Threat Analysis Agent", role: "Processes adversary behavior and intel", accent: false },
    { name: "Terrain & Domain Agent", role: "Multi-domain spatial reasoning", accent: false },
    { name: "Force Posture Agent", role: "Friendly force allocation and readiness", accent: false },
    { name: "COA Generator", role: "Produces and ranks courses of action", accent: false },
    { name: "Simulation Evaluator", role: "Runs COAs through iterative simulation", accent: false },
  ];

  return (
    <section id="architecture" className="relative py-24 border-t border-[var(--clr-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="section-label">ARCHITECTURE</span>
          <h2
            className="mt-4 text-3xl sm:text-4xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Heterogeneous agents.
            <br />
            <span className="text-[var(--clr-accent)]">Unified mission plan.</span>
          </h2>
          <p className="mt-6 text-[var(--clr-text-dim)] leading-relaxed">
            Unlike monolithic or homogeneous multi-agent approaches, ChaMP employs
            heterogeneous agent collaboration along both horizontal and vertical axes —
            specialized agents coordinate across functional roles while a lead agent
            orchestrates across planning echelons.
          </p>
        </div>

        {/* Agent grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {agents.map((a, i) => (
            <div key={i} className="agent-node">
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: a.accent ? "var(--clr-accent)" : "var(--clr-blue)",
                    boxShadow: a.accent
                      ? "0 0 8px var(--clr-accent)"
                      : "0 0 6px var(--clr-blue)",
                  }}
                />
                <span className="text-xs font-semibold tracking-wide text-[var(--clr-text)]">
                  {a.name}
                </span>
              </div>
              <p className="text-[var(--clr-text-dim)] text-xs leading-relaxed">
                {a.role}
              </p>
            </div>
          ))}
        </div>

        {/* Connection line visualization */}
        <div className="mt-12 flex items-center gap-4 justify-center">
          <div className="h-px flex-1 max-w-[200px] bg-gradient-to-r from-transparent to-[var(--clr-accent)] opacity-30" />
          <div className="flex items-center gap-2 px-4 py-2 border border-[var(--clr-border)] bg-[var(--clr-surface)]">
            <div className="pulse-dot" />
            <span
              className="text-[0.65rem] tracking-widest text-[var(--clr-accent)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              CHAT INTERFACE — HUMAN IN THE LOOP
            </span>
            <div className="pulse-dot" />
          </div>
          <div className="h-px flex-1 max-w-[200px] bg-gradient-to-l from-transparent to-[var(--clr-accent)] opacity-30" />
        </div>
      </div>
    </section>
  );
}
