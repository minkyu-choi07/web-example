export function Footer() {
  return (
    <footer id="contact" className="relative py-16 border-t border-[var(--clr-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 border-2 border-[var(--clr-accent)] flex items-center justify-center">
                <div className="w-2 h-2 bg-[var(--clr-accent)]" />
              </div>
              <span className="text-lg font-semibold tracking-wider" style={{ fontFamily: "var(--font-display)" }}>
                ChaMP
              </span>
            </div>
            <p className="text-sm text-[var(--clr-text-dim)] leading-relaxed max-w-md">
              Chat-enabled Multi-Agentic Mission Platform. Machine-speed mission
              planning and C2 for contested operational environments.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <a
              href="mailto:contact@champ.mil"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-[var(--clr-accent)] text-[var(--clr-bg)] font-semibold text-sm tracking-wider hover:brightness-110 transition-all"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              REQUEST BRIEF
            </a>
            <span
              className="text-[var(--clr-text-dim)]"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem" }}
            >
              UNCLASSIFIED // FOR OFFICIAL USE ONLY
            </span>
          </div>
        </div>

        <div className="divider mt-12 mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <span
            className="text-[var(--clr-text-dim)]"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.04em" }}
          >
            © {new Date().getFullYear()} ChaMP TEAM. ALL RIGHTS RESERVED.
          </span>
          <span
            className="text-[var(--clr-text-dim)]"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem" }}
          >
            GOLDEN DOME INITIATIVE
          </span>
        </div>
      </div>
    </footer>
  );
}
