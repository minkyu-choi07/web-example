export function Problem() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — problem statement */}
          <div>
            <span className="section-label">THE CHALLENGE</span>
            <h2
              className="mt-4 text-3xl sm:text-4xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Threats move at machine speed.
              <br />
              <span className="text-[var(--clr-text-dim)]">
                Planning doesn&apos;t.
              </span>
            </h2>
            <p className="mt-6 text-[var(--clr-text-dim)] leading-relaxed max-w-lg">
              Mission planning in warfighting is a cognitively demanding, time-critical
              task requiring the integration of doctrine, commander intent, terrain
              analysis, and adversary behavior into coherent courses of action. Traditional
              processes are largely manual and cannot keep pace with the complexity and
              tempo of modern multi-domain operations.
            </p>
          </div>

          {/* Right — pain points */}
          <div className="space-y-4">
            {[
              {
                icon: "⏱",
                title: "Planning delays kill",
                desc: "Against hypersonic threats, minutes matter. Manual COA development takes hours.",
              },
              {
                icon: "🧠",
                title: "Cognitive overload",
                desc: "Staff must synthesize doctrine, threat intel, terrain, and intent under extreme pressure.",
              },
              {
                icon: "🔄",
                title: "Static plans break",
                desc: "During execution, conditions shift — intercept launches, lost assets, adversary adaptation — and plans go stale.",
              },
              {
                icon: "📊",
                title: "Information overload",
                desc: "Delays and data saturation degrade operational effectiveness and lead to mission-critical failures.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glow-card p-5 flex gap-4 items-start"
              >
                <span className="text-2xl mt-0.5 shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <p className="mt-1 text-sm text-[var(--clr-text-dim)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
