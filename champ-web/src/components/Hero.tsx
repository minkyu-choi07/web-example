"use client";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center grid-bg scanlines overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--clr-bg)] via-transparent to-[var(--clr-bg)]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--clr-accent)] opacity-[0.03] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--clr-blue)] opacity-[0.04] rounded-full blur-[120px]" />

      {/* Side decoration */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-[var(--clr-border-accent)]" />
        <div className="pulse-dot" />
        <div className="w-px h-32 bg-[var(--clr-border-accent)]" />
        <div
          className="text-[0.6rem] tracking-[0.2em] text-[var(--clr-text-dim)]"
          style={{ fontFamily: "var(--font-mono)", writingMode: "vertical-rl" }}
        >
          MULTI-AGENT C2
        </div>
        <div className="w-px h-16 bg-gradient-to-b from-[var(--clr-border-accent)] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-4xl">
          {/* Tag */}
          <div className="animate-fade-up">
            <span className="tag">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--clr-accent)]" />
              DEFENSE AI PLATFORM
            </span>
          </div>

          {/* Title */}
          <h1
            className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-up delay-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Mission planning at{" "}
            <span className="text-[var(--clr-accent)]">machine speed</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-[var(--clr-text-dim)] max-w-2xl leading-relaxed animate-fade-up delay-400">
            ChaMP orchestrates specialized AI agents to generate, simulate, and
            refine courses of action — closing the gap between threat tempo and
            planning speed.
          </p>

          {/* CTA row */}
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up delay-600">
            <a
              href="#architecture"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-[var(--clr-accent)] text-[var(--clr-bg)] font-semibold text-sm tracking-wider hover:brightness-110 transition-all"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              EXPLORE PLATFORM
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#results"
              className="inline-flex items-center gap-3 px-7 py-3.5 border border-[var(--clr-border-accent)] text-[var(--clr-text-dim)] text-sm tracking-wider hover:border-[var(--clr-text-dim)] hover:text-[var(--clr-text)] transition-all"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              VIEW RESULTS
            </a>
          </div>

          {/* Chat preview */}
          <div className="mt-16 animate-fade-up delay-800">
            <div className="max-w-lg p-4 bg-[var(--clr-surface)] border border-[var(--clr-border)] corner-marks">
              <div className="flex items-center gap-2 mb-3">
                <div className="pulse-dot" />
                <span
                  className="text-[0.65rem] tracking-widest text-[var(--clr-accent)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  CHAMP TERMINAL
                </span>
              </div>
              <div
                className="text-sm text-[var(--clr-text-dim)] leading-relaxed"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <span className="text-[var(--clr-accent)]">&gt;</span>{" "}
                Generate COA for Scenario BRAVO-7, constrain to available THAAD
                battery positioning…
                <span className="cursor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
