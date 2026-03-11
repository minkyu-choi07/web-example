"use client";

import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0c10]/90 backdrop-blur-md border-b border-[var(--clr-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 border-2 border-[var(--clr-accent)] flex items-center justify-center relative">
            <div className="w-3 h-3 bg-[var(--clr-accent)]" />
            <div className="absolute -top-[3px] -left-[3px] w-2 h-2 border-t border-l border-[var(--clr-accent)] opacity-50" />
            <div className="absolute -bottom-[3px] -right-[3px] w-2 h-2 border-b border-r border-[var(--clr-accent)] opacity-50" />
          </div>
          <span
            className="text-lg font-semibold tracking-wider"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ChaMP
          </span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Architecture", "Capabilities", "Results", "Team"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-[var(--clr-text-dim)] hover:text-[var(--clr-accent)] transition-colors"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.05em" }}
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2 border border-[var(--clr-accent)] text-[var(--clr-accent)] text-xs tracking-wider hover:bg-[var(--clr-accent)] hover:text-[var(--clr-bg)] transition-all duration-300"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          REQUEST BRIEF
        </a>
      </div>
    </nav>
  );
}
