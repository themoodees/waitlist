"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Will this actually be personalised to me?",
    a: "Yes. Every report is built around your specific answers — your income, your habits, your goals in Japan. No two are the same.",
  },
  {
    q: "Is ¥5,000 worth it?",
    a: "Most readers find a pattern costing them ¥100,000 or more per year they'd never quantified. The report pays for itself the first time you act on it.",
  },
  {
    q: "I already know I spend too much.",
    a: "Knowing and understanding are different. This shows you why it's happening — and what to do about it, in the right order.",
  },
  {
    q: "I don't have time for a long questionnaire.",
    a: "The Basic Report takes 5 minutes. The Full Report takes the length of a commute — and gives you a complete financial plan for the next 12 months.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className="border-t" style={{ borderColor: "var(--warm-grey)" }}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-8 text-left"
              aria-expanded={isOpen}
            >
              <span className="lp02-faq-q">{item.q}</span>
              <span
                className="shrink-0 text-lg transition-transform duration-200"
                style={{
                  color: "var(--grey)",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
                aria-hidden
              >
                ↓
              </span>
            </button>
            {isOpen && (
              <p className="pb-8 text-[15px] leading-relaxed" style={{ color: "var(--grey)" }}>
                {item.a}
              </p>
            )}
          </div>
        );
      })}
      <div className="lp02-divider" />
    </div>
  );
}
