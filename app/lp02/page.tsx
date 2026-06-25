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
  return (
    <p
      className="mb-4 text-xs font-medium uppercase tracking-[0.15em]"
      style={{ color: "#6E726C" }}
    >
      {children}
    </p>
  );
}

function Divider() {
  return <div className="my-16 h-px w-full" style={{ backgroundColor: "#DAD4CA" }} />;
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="mb-8 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#24352D" }}>
          <span className="shrink-0 font-medium" style={{ color: "#24352D" }}>
            →
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Lp02() {
  return (
    <div className="font-[family-name:var(--font-inter)]" style={{ backgroundColor: "#F7F4EE", color: "#24352D" }}>
      {/* NAV */}
      <nav className="sticky top-0 z-50 px-6 py-5 md:px-12" style={{ backgroundColor: "#F7F4EE" }}>
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Image
            src="/images/compass-logo-horizontal.png"
            alt="Compass"
            width={140}
            height={36}
            className="h-8 w-auto"
            priority
          />
          <a href="#pricing" className="text-sm" style={{ color: "#24352D" }}>
            See pricing ↓
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 pb-16 md:px-12">
        {/* HERO */}
        <section className="fade-in pt-8 md:pt-16">
          <h1 className="mb-6 text-4xl leading-tight font-semibold md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            You&apos;re earning. You&apos;re spending.
            <br />
            But where is it all going?
          </h1>
          <p className="mb-8 max-w-xl text-base leading-relaxed md:text-lg" style={{ color: "#6E726C" }}>
            A personal financial report, built around your answers — not a template. Made for foreigners
            living in Japan who want a clear picture of their money and what to do next.
          </p>
          <div className="mb-4 flex flex-wrap items-center gap-4">
            <a
              href={STRIPE_FULL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full px-6 py-3 text-sm font-medium"
              style={{ backgroundColor: "#24352D", color: "#F7F4EE" }}
            >
              Get the Full Report — ¥5,000
            </a>
            <a
              href={STRIPE_BASIC}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline"
              style={{ color: "#24352D" }}
            >
              Basic Report — ¥1,000
            </a>
          </div>
          <p className="text-sm" style={{ color: "#6E726C" }}>
            One-time payment · No subscription · Delivered within 3–5 days
          </p>
        </section>

        <Divider />

        {/* DOES THIS SOUND LIKE YOU */}
        <section className="fade-in">
          <SectionLabel>Does this sound like you?</SectionLabel>
          <ul className="mb-8 space-y-4">
            {empathyQuotes.map((quote) => (
              <li key={quote} className="text-base leading-relaxed md:text-lg" style={{ color: "#24352D" }}>
                &ldquo;{quote}&rdquo;
              </li>
            ))}
          </ul>
          <p className="text-base leading-relaxed md:text-lg" style={{ color: "#6E726C" }}>
            If any of that sounds familiar, this report was made for you.
          </p>
        </section>

        <Divider />

        {/* PRICING */}
        <section id="pricing" className="fade-in">
          <SectionLabel>Choose your depth</SectionLabel>
          <h2 className="mb-10 text-3xl font-semibold leading-tight md:text-4xl">
            Two reports. One clear direction.
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Basic */}
            <div
              className="flex flex-col rounded-2xl p-6 md:p-8"
              style={{ backgroundColor: "#F7F4EE", border: "1px solid #DAD4CA" }}
            >
              <h3 className="mb-2 text-lg font-semibold">Basic Report</h3>
              <p className="mb-1 text-3xl font-semibold">¥1,000</p>
              <p className="mb-6 text-sm" style={{ color: "#6E726C" }}>
                5-min questionnaire
              </p>
              <FeatureList items={basicFeatures} />
              <a
                href={STRIPE_BASIC}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block rounded-full py-3 text-center text-sm font-medium"
                style={{ border: "1px solid #DAD4CA", color: "#24352D" }}
              >
                Get Basic
              </a>
            </div>

            {/* Full */}
            <div
              className="flex flex-col rounded-2xl p-6 md:p-8"
              style={{ backgroundColor: "#F7F4EE", border: "1.5px solid #24352D" }}
            >
              <span
                className="mb-4 inline-block self-start rounded-full px-3 py-1 text-xs font-medium"
                style={{ backgroundColor: "rgba(36, 53, 45, 0.08)", color: "#24352D" }}
              >
                Recommended
              </span>
              <h3 className="mb-2 text-lg font-semibold">Full Report</h3>
              <p className="mb-1 text-3xl font-semibold">¥5,000</p>
              <p className="mb-6 text-sm" style={{ color: "#6E726C" }}>
                20–30 min questionnaire
              </p>
              <FeatureList items={fullFeatures} />
              <a
                href={STRIPE_FULL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block rounded-full py-3 text-center text-sm font-medium"
                style={{ backgroundColor: "#24352D", color: "#F7F4EE" }}
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
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step) => (
              <div key={step.num}>
                <p className="mb-3 text-2xl font-semibold" style={{ color: "#24352D" }}>
                  {step.num}
                </p>
                <p className="mb-2 text-base font-semibold">{step.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6E726C" }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* FAQ */}
        <section className="fade-in">
          <SectionLabel>Common questions</SectionLabel>
          <FaqAccordion />
        </section>

        <Divider />

        {/* FINAL CTA */}
        <section className="fade-in">
          <div
            className="rounded-2xl px-6 py-10 text-center md:px-10 md:py-12"
            style={{ backgroundColor: "#EDE9E0" }}
          >
            <h2 className="mb-3 text-2xl font-semibold leading-tight md:text-3xl">
              Ready to understand your money in Japan?
            </h2>
            <p className="mb-8 text-base" style={{ color: "#6E726C" }}>
              One report. Built entirely around your answers.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={STRIPE_FULL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full px-6 py-3 text-sm font-medium"
                style={{ backgroundColor: "#24352D", color: "#F7F4EE" }}
              >
                Get the Full Report — ¥5,000
              </a>
              <a
                href={STRIPE_BASIC}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline"
                style={{ color: "#24352D" }}
              >
                or Basic for ¥1,000
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="fade-in mt-16 text-center">
          <p className="mb-3 text-sm" style={{ color: "#6E726C" }}>
            Questions?{" "}
            <a href={`mailto:${EMAIL}`} className="underline" style={{ color: "#6E726C" }}>
              {EMAIL}
            </a>
          </p>
          <p className="text-xs" style={{ color: "#6E726C" }}>
            © 2026 Compass. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
