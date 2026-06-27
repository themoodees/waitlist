import Image from "next/image";
import { FaqAccordion } from "./faq-accordion";
import "./lppt.css";

const STRIPE_BASIC = "https://buy.stripe.com/3cIdR96R6fbx3Ob7bQfw403";
const STRIPE_FULL = "https://buy.stripe.com/dRmdR9grG3sP84rao2fw404";
const EMAIL = "hello@compasss.life";

const empathyQuotes = [
  "Ganho um salário decente, mas nunca consigo economizar nada.",
  "O sistema financeiro japonês me confunde. NISA? iDeCo? Não sei por onde começar.",
  "Amazon, conveniências, Uber Eats… vai acumulando, mas não sei quanto.",
  "Quero viajar, poupar e investir — mas não consigo fazer os três ao mesmo tempo.",
];

const basicFeatures = [
  "Seu panorama financeiro",
  "Seu maior vazamento de dinheiro",
  "Sua personalidade financeira",
  "Uma nota de fechamento pessoal",
];

const fullFeatures = [
  "Análise linha a linha dos gastos",
  "Plano Manter / Cortar / Proteger",
  "Plano semana a semana de 90 dias",
  "Roteiro financeiro de 12 meses",
  "Guia do sistema financeiro japonês",
];

const steps = [
  {
    num: "01",
    title: "Escolha um relatório",
    body: "Pagamento único. Sem assinatura.",
  },
  {
    num: "02",
    title: "Preencha o questionário",
    body: "Sua renda, hábitos e objetivos no Japão.",
  },
  {
    num: "03",
    title: "Receba seu relatório",
    body: "Construído com base nas suas respostas. Na sua caixa de entrada em 3–5 dias.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="lp02-section-label">{children}</p>;
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="mb-8 space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "var(--grey)" }}>
          <span className="lp02-feat-dot" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Lppt() {
  return (
    <div className="lp02">
      <nav className="lp02-nav sticky top-0 z-50">
        <div className="lp02-nav-inner mx-auto max-w-3xl">
          <div className="lp02-nav-logo-wrap">
            <Image
              src="/images/compass-logo-horizontal.png"
              alt="Compass"
              width={160}
              height={44}
              className="lp02-nav-logo"
              priority
            />
          </div>
          <a href="#pricing" className="lp02-btn-green lp02-nav-cta">
            Ver Preços
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 pb-0 md:px-12">
        <section className="fade-in pt-12 md:pt-20">
          <h1 className="lp02-heading-xl mb-8">
            Você ganha. Você gasta.
            <br />
            Mas para onde vai tudo isso?
          </h1>
          <p className="lp02-body mb-10 max-w-xl text-[17px]">
            Um relatório financeiro pessoal, construído com base nas suas respostas — não um modelo. Feito
            para estrangeiros vivendo no Japão que querem uma visão clara do seu dinheiro e o que fazer a
            seguir.
          </p>
          <div className="mb-5 flex flex-wrap items-center gap-5">
            <a
              href={STRIPE_FULL}
              target="_blank"
              rel="noopener noreferrer"
              className="lp02-btn-green"
            >
              Obter o Relatório Completo — ¥3.000
            </a>
            <a
              href={STRIPE_BASIC}
              target="_blank"
              rel="noopener noreferrer"
              className="lp02-link text-sm"
            >
              Relatório Básico — ¥1.000
            </a>
          </div>
          <p className="text-[13px]" style={{ color: "var(--grey)" }}>
            Pagamento único · Sem assinatura · Entregue em 3–5 dias
          </p>
        </section>

        <div className="lp02-divider-gold my-16 w-full" />
      </main>

      <section className="fade-in lp02-band lp02-empathy">
        <div className="mx-auto max-w-3xl">
          <SectionLabel>Isso soa familiar?</SectionLabel>
          <ul className="mb-10 space-y-5">
            {empathyQuotes.map((quote) => (
              <li key={quote} className="lp02-empathy-quote text-base md:text-[17px]">
                &ldquo;{quote}&rdquo;
              </li>
            ))}
          </ul>
          <p className="lp02-closing">
            Se algo disso soou familiar, este relatório foi feito para você.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-3xl px-6 pb-0 md:px-12">
        <section id="pricing" className="fade-in pt-16 md:pt-20">
          <SectionLabel>Escolha sua profundidade</SectionLabel>
          <h2 className="lp02-heading-lg mb-10">Dois relatórios. Uma direção clara.</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="lp02-card lp02-card--basic flex flex-col">
              <h3 className="lp02-heading-md mb-4">Relatório Básico</h3>
              <p className="lp02-price mb-2">¥1.000</p>
              <p className="mb-8 text-[13px]" style={{ color: "var(--grey)" }}>
                Questionário de 5 minutos
              </p>
              <FeatureList items={basicFeatures} />
              <a
                href={STRIPE_BASIC}
                target="_blank"
                rel="noopener noreferrer"
                className="lp02-btn-green lp02-btn-full mt-auto"
              >
                Obter Básico
              </a>
            </div>

            <div className="lp02-card lp02-card--full flex flex-col">
              <span className="lp02-badge mb-5 self-start">Recomendado</span>
              <h3 className="lp02-heading-md mb-4">Relatório Completo</h3>
              <p className="lp02-price mb-2">¥3.000</p>
              <p className="mb-8 text-[13px]" style={{ color: "var(--grey)" }}>
                Questionário de 20–30 minutos
              </p>
              <FeatureList items={fullFeatures} />
              <a
                href={STRIPE_FULL}
                target="_blank"
                rel="noopener noreferrer"
                className="lp02-btn-gold lp02-btn-full mt-auto"
              >
                Obter Relatório Completo
              </a>
            </div>
          </div>
        </section>
      </main>

      <section className="fade-in lp02-band lp02-how-it-works">
        <div className="mx-auto max-w-3xl">
          <SectionLabel>Como funciona</SectionLabel>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((step) => (
              <div key={step.num}>
                <p className="lp02-step-num mb-5">{step.num}</p>
                <p className="lp02-step-title mb-3">{step.title}</p>
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--grey)" }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-3xl px-6 pb-0 md:px-12">
        <section className="fade-in pb-4 pt-16 md:pt-20">
          <SectionLabel>Perguntas frequentes</SectionLabel>
          <FaqAccordion />
        </section>
      </main>

      <section className="fade-in lp02-cta mt-16">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="lp02-heading-lg mb-5">Pronto para entender o seu dinheiro no Japão?</h2>
          <p className="mb-10 text-[17px] leading-relaxed" style={{ color: "var(--green)" }}>
            Um relatório. Construído inteiramente em torno das suas respostas.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href={STRIPE_FULL}
              target="_blank"
              rel="noopener noreferrer"
              className="lp02-btn-green"
            >
              Obter o Relatório Completo — ¥3.000
            </a>
            <a
              href={STRIPE_BASIC}
              target="_blank"
              rel="noopener noreferrer"
              className="lp02-link text-sm"
              style={{ color: "var(--green)", opacity: 0.65 }}
            >
              ou Básico por ¥1.000
            </a>
          </div>
        </div>
      </section>

      <footer className="fade-in lp02-footer px-6 py-14 text-center md:px-12">
        <p className="mb-4 text-[13px]" style={{ color: "var(--grey)" }}>
          Dúvidas?{" "}
          <a href={`mailto:${EMAIL}`} className="lp02-link" style={{ color: "var(--grey)" }}>
            {EMAIL}
          </a>
        </p>
        <p className="text-[11px] tracking-wide" style={{ color: "var(--grey)" }}>
          © 2026 Compass. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
