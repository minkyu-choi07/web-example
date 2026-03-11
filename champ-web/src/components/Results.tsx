export function Results() {
  return (
    <section id="results" className="relative py-24 border-t border-[var(--clr-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <span className="section-label">RESULTS</span>
        <h2
          className="mt-4 text-3xl sm:text-4xl font-bold leading-tight max-w-xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Proven superiority.{" "}
          <span className="text-[var(--clr-accent)]">Zero human feedback.</span>
        </h2>
        <p className="mt-6 text-[var(--clr-text-dim)] leading-relaxed max-w-2xl">
          ChaMP-generated courses of action were benchmarked against COA-GPT
          (ARMY DEVCOM) — achieving significantly higher total reward, greater
          enemy attrition, and fewer friendly losses on average, all without
          requiring human feedback during the generation loop.
        </p>

        {/* Benchmark comparison */}
        <div className="mt-16 grid sm:grid-cols-2 gap-6 max-w-3xl">
          {/* ChaMP */}
          <div className="glow-card corner-marks p-8">
            <span
              className="text-[0.6rem] tracking-widest text-[var(--clr-accent)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              CHAMP
            </span>
            <div className="mt-4 space-y-5">
              <div>
                <div className="flex justify-between text-xs text-[var(--clr-text-dim)] mb-1" style={{ fontFamily: "var(--font-mono)" }}>
                  <span>Total Reward</span>
                  <span className="text-[var(--clr-accent)]">+30%</span>
                </div>
                <div className="h-2 bg-[var(--clr-surface-2)] overflow-hidden">
                  <div className="h-full bg-[var(--clr-accent)]" style={{ width: "85%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-[var(--clr-text-dim)] mb-1" style={{ fontFamily: "var(--font-mono)" }}>
                  <span>Enemy Attrition</span>
                  <span className="text-[var(--clr-accent)]">HIGHER</span>
                </div>
                <div className="h-2 bg-[var(--clr-surface-2)] overflow-hidden">
                  <div className="h-full bg-[var(--clr-accent)]" style={{ width: "78%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-[var(--clr-text-dim)] mb-1" style={{ fontFamily: "var(--font-mono)" }}>
                  <span>Friendly Losses</span>
                  <span className="text-[var(--clr-accent)]">FEWER</span>
                </div>
                <div className="h-2 bg-[var(--clr-surface-2)] overflow-hidden">
                  <div className="h-full bg-[var(--clr-accent)]" style={{ width: "25%" }} />
                </div>
              </div>
            </div>
          </div>

          {/* COA-GPT Baseline */}
          <div className="p-8 border border-[var(--clr-border)] bg-[var(--clr-surface)]">
            <span
              className="text-[0.6rem] tracking-widest text-[var(--clr-text-dim)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              COA-GPT (BASELINE)
            </span>
            <div className="mt-4 space-y-5">
              <div>
                <div className="flex justify-between text-xs text-[var(--clr-text-dim)] mb-1" style={{ fontFamily: "var(--font-mono)" }}>
                  <span>Total Reward</span>
                  <span>BASELINE</span>
                </div>
                <div className="h-2 bg-[var(--clr-surface-2)] overflow-hidden">
                  <div className="h-full bg-[var(--clr-text-dim)] opacity-40" style={{ width: "55%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-[var(--clr-text-dim)] mb-1" style={{ fontFamily: "var(--font-mono)" }}>
                  <span>Enemy Attrition</span>
                  <span>LOWER</span>
                </div>
                <div className="h-2 bg-[var(--clr-surface-2)] overflow-hidden">
                  <div className="h-full bg-[var(--clr-text-dim)] opacity-40" style={{ width: "48%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-[var(--clr-text-dim)] mb-1" style={{ fontFamily: "var(--font-mono)" }}>
                  <span>Friendly Losses</span>
                  <span>HIGHER</span>
                </div>
                <div className="h-2 bg-[var(--clr-surface-2)] overflow-hidden">
                  <div className="h-full bg-[var(--clr-text-dim)] opacity-40" style={{ width: "55%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
