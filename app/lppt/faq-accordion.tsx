"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Este relatório será realmente personalizado para mim?",
    a: "Sim. Cada relatório é construído em torno das suas respostas específicas — sua renda, seus hábitos, seus objetivos no Japão. Não há dois iguais.",
  },
  {
    q: "Vale a pena pagar ¥3.000?",
    a: "A maioria dos leitores descobre um padrão que custa ¥100.000 ou mais por ano e que nunca tinham quantificado. O relatório se paga na primeira vez que você age com base nele.",
  },
  {
    q: "Eu já sei que gasto demais.",
    a: "Saber e entender são coisas diferentes. Isso mostra por que está acontecendo — e o que fazer a respeito, na ordem certa.",
  },
  {
    q: "Não tenho tempo para um questionário longo.",
    a: "O Relatório Básico leva 5 minutos. O Completo leva o tempo de um trajeto de metrô — e entrega um plano financeiro completo para os próximos 12 meses.",
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
