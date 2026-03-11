export function Stats() {
  const stats = [
    { value: "+30%", label: "Higher Total Reward vs COA-GPT", sub: "ARMY DEVCOM Baseline" },
    { value: "10×", label: "Faster COA Generation", sub: "vs Manual Staff Process" },
    { value: "0", label: "Human Feedback Required", sub: "Autonomous Iteration" },
  ];

  return (
    <section className="relative py-16 border-y border-[var(--clr-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-[var(--clr-border)]">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center px-8">
              <span className="stat-num">{s.value}</span>
              <span className="mt-3 text-sm font-medium text-[var(--clr-text)]">
                {s.label}
              </span>
              <span
                className="mt-1 text-[var(--clr-text-dim)]"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.04em" }}
              >
                {s.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
