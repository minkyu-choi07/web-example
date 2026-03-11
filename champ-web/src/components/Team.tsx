export function Team() {
  const members = [
    "Ryan Himes",
    "Ryan Lagasse",
    "Matthew Rakel",
    "Kaila Billie",
    "Rob Lake",
    "Glen Chandler",
    "Hari Khanal",
    "Justin Cao",
    "Alex Rosa Rivera",
    "Minkyu Choi",
  ];

  return (
    <section id="team" className="relative py-24 border-t border-[var(--clr-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <span className="section-label">TEAM</span>
        <h2
          className="mt-4 text-3xl sm:text-4xl font-bold leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Built by operators.{" "}
          <span className="text-[var(--clr-text-dim)]">For operators.</span>
        </h2>

        <div className="mt-12 flex flex-wrap gap-3">
          {members.map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3 bg-[var(--clr-surface)] border border-[var(--clr-border)] hover:border-[var(--clr-accent)] transition-colors"
            >
              {/* Avatar placeholder */}
              <div
                className="w-8 h-8 flex items-center justify-center bg-[var(--clr-surface-2)] border border-[var(--clr-border)]"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--clr-accent)" }}
              >
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
