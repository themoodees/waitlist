import Image from "next/image";
import { FaqAccordion } from "./faq-accordion";

const STRIPE_BASIC = "https://buy.stripe.com/9B68wPcbq1kH98v3ZEfw401";
const STRIPE_FULL = "https://buy.stripe.com/aFafZh1wM0gD3Ob3ZEfw400";
const EMAIL = "hello@compasss.life";

const empathyQuotes = [
  "I earn a decent salary but I never seem to save anything.",
  "The Japanese financial system confuses me. NISA? iDeCo? I don't know where to start.",
  "Amazon, convenience stores, Uber Eats… it adds up but I don't know by how much.",
  "I want to travel, save, and invest — but I can't seem to do all three.",
];

const basicFeatures = [
  "Your financial snapshot",
  "Your biggest money leak",
  "Your money personality",
  "A personal closing note",
];

const fullFeatures = [
  "Line-by-line expense analysis",
  "Keep / Cut / Protect plan",
  "90-day week-by-week plan",
  "12-month financial roadmap",
  "Japan financial system guide",
];

const steps = [
  {
    num: "01",
    title: "Choose a report",
    body: "One-time payment. No subscription.",
  },
  {
    num: "02",
    title: "Fill the questionnaire",
    body: "Your income, habits, and goals in Japan.",
  },
  {
    num: "03",
    title: "Receive your report",
    body: "Built around your answers. In your inbox within 3–5 days.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="lp02-section-label">{children}</p>;
}

function Divider() {
  return <div className="lp02-divider my-16 w-full" />;
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

export default function Lp02() {
  return (
    <div className="lp02">
      {/* NAV */}
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
            See Pricing
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 pb-0 md:px-12">
        {/* HERO */}
        <section className="fade-in pt-12 md:pt-20">
          <h1 className="lp02-heading-xl mb-8">
            You&apos;re earning. You&apos;re spending.
            <br />
            But where is it all going?
          </h1>
          <p className="lp02-body mb-10 max-w-xl text-[17px]">
            A personal financial report, built around your answers — not a template. Made for foreigners
            living in Japan who want a clear picture of their money and what to do next.
          </p>
          <div className="mb-5 flex flex-wrap items-center gap-5">
            <a
              href={STRIPE_FULL}
              target="_blank"
              rel="noopener noreferrer"
              className="lp02-btn-green"
            >
              Get the Full Report — ¥5,000
            </a>
            <a
              href={STRIPE_BASIC}
              target="_blank"
              rel="noopener noreferrer"
              className="lp02-link text-sm"
            >
              Basic Report — ¥1,000
            </a>
          </div>
          <p className="text-[13px]" style={{ color: "var(--grey)" }}>
            One-time payment · No subscription · Delivered within 3–5 days
          </p>
        </section>

        <div className="lp02-divider-gold my-16 w-full" />

        {/* DOES THIS SOUND LIKE YOU */}
        <section className="fade-in">
          <SectionLabel>Does this sound like you?</SectionLabel>
          <ul className="mb-10 space-y-5">
            {empathyQuotes.map((quote) => (
              <li key={quote} className="lp02-body-green text-base md:text-[17px]">
                &ldquo;{quote}&rdquo;
              </li>
            ))}
          </ul>
          <p className="lp02-closing">
            If any of that sounds familiar, this report was made for you.
          </p>
        </section>

        <Divider />

        {/* PRICING */}
        <section id="pricing" className="fade-in">
          <SectionLabel>Choose your depth</SectionLabel>
          <h2 className="lp02-heading-lg mb-10">Two reports. One clear direction.</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="lp02-card lp02-card--basic flex flex-col">
              <h3 className="lp02-heading-md mb-4">Basic Report</h3>
              <p className="lp02-price mb-2">¥1,000</p>
              <p className="mb-8 text-[13px]" style={{ color: "var(--grey)" }}>
                5-min questionnaire
              </p>
              <FeatureList items={basicFeatures} />
              <a
                href={STRIPE_BASIC}
                target="_blank"
                rel="noopener noreferrer"
                className="lp02-btn-green lp02-btn-full mt-auto"
              >
                Get Basic
              </a>
            </div>

            <div className="lp02-card lp02-card--full flex flex-col">
              <span className="lp02-badge mb-5 self-start">Recommended</span>
              <h3 className="lp02-heading-md mb-4">Full Report</h3>
              <p className="lp02-price mb-2">¥5,000</p>
              <p className="mb-8 text-[13px]" style={{ color: "var(--grey)" }}>
                20–30 min questionnaire
              </p>
              <FeatureList items={fullFeatures} />
              <a
                href={STRIPE_FULL}
                target="_blank"
                rel="noopener noreferrer"
                className="lp02-btn-gold lp02-btn-full mt-auto"
              >
                Get Full Report
              </a>
            </div>
          </div>
        </section>

        <Divider />

        {/* HOW IT WORKS */}
        <section className="fade-in">
          <SectionLabel>How it works</SectionLabel>
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
        </section>

        <Divider />

        {/* FAQ */}
        <section className="fade-in pb-4">
          <SectionLabel>Common questions</SectionLabel>
          <FaqAccordion />
        </section>
      </main>

      {/* FINAL CTA */}
      <section className="fade-in lp02-cta mt-16">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="lp02-heading-lg mb-5">Ready to understand your money in Japan?</h2>
          <p className="mb-10 text-[17px] leading-relaxed" style={{ color: "var(--green)" }}>
            One report. Built entirely around your answers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href={STRIPE_FULL}
              target="_blank"
              rel="noopener noreferrer"
              className="lp02-btn-green"
            >
              Get the Full Report — ¥5,000
            </a>
            <a
              href={STRIPE_BASIC}
              target="_blank"
              rel="noopener noreferrer"
              className="lp02-link text-sm"
              style={{ color: "var(--green)", opacity: 0.65 }}
            >
              or Basic for ¥1,000
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="fade-in lp02-footer px-6 py-14 text-center md:px-12">
        <p className="mb-4 text-[13px]" style={{ color: "var(--grey)" }}>
          Questions?{" "}
          <a href={`mailto:${EMAIL}`} className="lp02-link" style={{ color: "var(--grey)" }}>
            {EMAIL}
          </a>
        </p>
        <p className="text-[11px] tracking-wide" style={{ color: "var(--grey)" }}>
          © 2026 Compass. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
