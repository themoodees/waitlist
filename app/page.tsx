export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Empathy />
      <WhatYouGet />
      <HowItWorks />
      <WhyCompass />
      <Objections />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* ─── NAVBAR ─────────────────────────────────────────────────────── */

function Navbar() {
  return (
    <header
      style={{ backgroundColor: "#F7F4EE", borderBottom: "1px solid #DAD4CA" }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + tagline */}
        <div className="flex items-center gap-4">
          <span
            className="font-cormorant text-2xl font-semibold tracking-widest uppercase"
            style={{ color: "#24352D" }}
          >
            Compass
          </span>
          <span
            className="font-inter text-xs hidden sm:inline"
            style={{ color: "#6E726C" }}
          >
            Find clarity. Find direction.
          </span>
        </div>

        {/* CTA */}
        <a
          href="#" // TODO: Replace with Stripe payment link
          className="font-inter text-sm font-medium px-5 py-3 transition-opacity hover:opacity-80"
          style={{ backgroundColor: "#24352D", color: "#F7F4EE" }}
        >
          Get My Report — ¥1,500
        </a>
      </div>
    </header>
  );
}

/* ─── HERO ────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-6 py-24 relative"
      style={{ backgroundColor: "#F7F4EE" }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <h1
          className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-8"
          style={{ color: "#24352D", maxWidth: "820px" }}
        >
          You&rsquo;re earning. You&rsquo;re spending. But where is it all going?
        </h1>

        <p
          className="font-inter text-base sm:text-lg leading-relaxed mb-10"
          style={{ color: "#6E726C", maxWidth: "600px" }}
        >
          Compass is a personal financial analysis made for foreigners living in
          Japan. Answer a few questions about your money, and we&rsquo;ll send
          you a clear, personalised report on your habits — plus a simple plan
          to take back control.
        </p>

        <a
          href="#" // TODO: Replace with Stripe payment link
          className="font-inter text-base font-medium inline-block px-8 py-4 mb-6 transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#B49A6C", color: "#24352D" }}
        >
          → Get My Report — ¥1,500
        </a>

        <p className="font-inter text-sm block" style={{ color: "#6E726C" }}>
          Takes 7–10 minutes · Fully personalised to your answers · Delivered to
          your inbox
        </p>
      </div>

      {/* Gold divider at bottom of section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ backgroundColor: "#B49A6C" }}
      />
    </section>
  );
}

/* ─── EMPATHY ─────────────────────────────────────────────────────── */

function Empathy() {
  const painPoints = [
    "I earn a decent salary but I never seem to save anything.",
    "I don't really know what I spend — I just check the balance and hope.",
    "The Japanese financial system confuses me. NISA? iDeCo? I don't know where to start.",
    "Amazon, convenience stores, Uber Eats… it adds up but I don't know by how much.",
    "I want to travel, save, and invest — but I can't seem to do all three.",
  ];

  return (
    <section className="px-6 py-24" style={{ backgroundColor: "#24352D" }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-cormorant text-4xl sm:text-5xl font-semibold leading-tight mb-8"
          style={{ color: "#F7F4EE" }}
        >
          Living in Japan changes your relationship with money.
        </h2>

        <p
          className="font-inter text-base sm:text-lg leading-relaxed mb-10"
          style={{ color: "#F7F4EE", maxWidth: "680px", opacity: 0.85 }}
        >
          The convenience store on every corner. The vending machines. The
          late-night delivery. The social pressure to keep up. The pension and
          health insurance you&rsquo;re not sure you&rsquo;re handling right. Most
          foreigners here are managing day to day — but not really understanding
          their money.
        </p>

        <ul className="space-y-4 mb-12" style={{ maxWidth: "640px" }}>
          {painPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="font-inter text-base mt-0.5 flex-shrink-0"
                style={{ color: "#B49A6C" }}
              >
                —
              </span>
              <span
                className="font-inter text-base leading-relaxed"
                style={{ color: "#F7F4EE", opacity: 0.85 }}
              >
                &ldquo;{point}&rdquo;
              </span>
            </li>
          ))}
        </ul>

        <p
          className="font-cormorant text-2xl sm:text-3xl italic"
          style={{ color: "#B49A6C" }}
        >
          If any of that sounds familiar — this report was made for you.
        </p>
      </div>
    </section>
  );
}

/* ─── WHAT YOU GET ────────────────────────────────────────────────── */

const deliverables = [
  {
    label: "Your Key Insights",
    text: "The patterns in your spending and habits that are quietly working against you — explained clearly, without judgment.",
  },
  {
    label: "Your Biggest Money Leak",
    text: "The one area draining your budget the most, why it's happening, and what it's costing you every year.",
  },
  {
    label: "Your 3-Step Action Plan",
    text: "Three concrete actions tailored to your situation — the highest-impact moves you can make right now, in the right order.",
  },
  {
    label: "Your Personal Closing",
    text: "A direct, encouraging message written specifically for you — where you are, what you said, and what's possible next.",
  },
];

function WhatYouGet() {
  return (
    <section className="px-6 py-24" style={{ backgroundColor: "#F7F4EE" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p
          className="font-inter text-xs font-medium tracking-widest uppercase mb-4"
          style={{ color: "#B49A6C" }}
        >
          What You Receive
        </p>

        <h2
          className="font-cormorant text-4xl sm:text-5xl font-semibold mb-4"
          style={{ color: "#24352D" }}
        >
          Your personal Compass Report
        </h2>

        <p
          className="font-inter text-base sm:text-lg leading-relaxed mb-14"
          style={{ color: "#6E726C", maxWidth: "680px" }}
        >
          This isn&rsquo;t a generic budgeting guide you could find on Google.
          Every Compass report is built entirely around your answers — your
          income, your situation in Japan, your habits, and your goals. No two
          reports are the same. No fluff. No generic tips. Just what actually
          applies to you.
        </p>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
          {deliverables.map((item, i) => (
            <div
              key={i}
              className="p-8"
              style={{
                backgroundColor: "#F7F4EE",
                border: "1px solid #DAD4CA",
              }}
            >
              <p
                className="font-inter text-xs font-medium tracking-widest uppercase mb-3"
                style={{ color: "#B49A6C" }}
              >
                {item.label}
              </p>
              <p
                className="font-inter text-sm sm:text-base leading-relaxed"
                style={{ color: "#6E726C" }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS ────────────────────────────────────────────────── */

const steps = [
  {
    num: "01",
    title: "Purchase your report",
    body: "One-time payment of ¥1,500. No subscription, no hidden fees.",
  },
  {
    num: "02",
    title: "Fill out your questionnaire",
    body: "A 7–10 minute reflection on your finances, spending habits, and goals in Japan. No spreadsheets needed — estimates are fine.",
  },
  {
    num: "03",
    title: "Receive your report",
    body: "Your report is prepared specifically around your answers and delivered to your inbox within 3–5 days.",
  },
];

function HowItWorks() {
  return (
    <section className="px-6 py-24" style={{ backgroundColor: "#DAD4CA" }}>
      <div className="max-w-6xl mx-auto">
        <p
          className="font-inter text-xs font-medium tracking-widest uppercase mb-4"
          style={{ color: "#B49A6C" }}
        >
          The Process
        </p>

        <h2
          className="font-cormorant text-4xl sm:text-5xl font-semibold mb-14"
          style={{ color: "#24352D" }}
        >
          Simple. Personal. Actionable.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Gold connecting line — desktop only */}
          <div
            className="hidden md:block absolute top-9 left-[16.67%] right-[16.67%] h-px"
            style={{ backgroundColor: "#B49A6C" }}
          />

          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div
                className="font-cormorant text-6xl font-light mb-4 leading-none"
                style={{ color: "#B49A6C" }}
              >
                {step.num}
              </div>
              <h3
                className="font-inter text-base font-medium mb-2"
                style={{ color: "#24352D" }}
              >
                {step.title}
              </h3>
              <p
                className="font-inter text-sm sm:text-base leading-relaxed"
                style={{ color: "#6E726C" }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── WHY COMPASS ─────────────────────────────────────────────────── */

function WhyCompass() {
  return (
    <section className="px-6 py-24" style={{ backgroundColor: "#F7F4EE" }}>
      <div className="max-w-6xl mx-auto text-center">
        <p
          className="font-inter text-xs font-medium tracking-widest uppercase mb-4"
          style={{ color: "#B49A6C" }}
        >
          Why Compass
        </p>

        <h2
          className="font-cormorant text-4xl sm:text-5xl font-semibold mb-6"
          style={{ color: "#24352D" }}
        >
          Built for where you actually are.
        </h2>

        <p
          className="font-inter text-base sm:text-lg leading-relaxed mx-auto mb-14"
          style={{ color: "#6E726C", maxWidth: "640px" }}
        >
          Most financial advice isn&rsquo;t built for people living abroad. It
          assumes you understand the local system, speak the language fluently,
          and have been planning since your twenties. Compass is different. It
          starts where you actually are — not where you&rsquo;re supposed to be.
          Your answers are read carefully, your situation is considered, and what
          comes back is a report that makes sense for your life in Japan — not
          someone else&rsquo;s.
        </p>

        {/* Pull quote */}
        <div className="mx-auto" style={{ maxWidth: "600px" }}>
          <div className="h-px mb-8" style={{ backgroundColor: "#B49A6C" }} />
          <p
            className="font-cormorant text-2xl sm:text-3xl italic"
            style={{ color: "#24352D" }}
          >
            &ldquo;Not where you&rsquo;re supposed to be. Where you actually are.&rdquo;
          </p>
          <div className="h-px mt-8" style={{ backgroundColor: "#B49A6C" }} />
        </div>
      </div>
    </section>
  );
}

/* ─── OBJECTIONS ──────────────────────────────────────────────────── */

const objections = [
  {
    q: "¥1,500 for a PDF?",
    a: "A single unused subscription costs more than that every month. This report helps you find it.",
  },
  {
    q: "I already know I spend too much.",
    a: "Knowing and understanding are different. This shows you why it's happening — and what to actually do about it, in the right order.",
  },
  {
    q: "I'll sort my finances out next month.",
    a: "Next month will feel exactly the same as this month. This takes 10 minutes and gives you a plan today.",
  },
  {
    q: "Will this actually be personalised to me?",
    a: "Yes. Every Compass report is built around your specific answers. Your income, your habits, your goals in Japan. No two reports are the same.",
  },
];

function Objections() {
  return (
    <section className="px-6 py-24" style={{ backgroundColor: "#24352D" }}>
      <div className="max-w-6xl mx-auto">
        <p
          className="font-inter text-xs font-medium tracking-widest uppercase mb-4"
          style={{ color: "#B49A6C" }}
        >
          Common Questions
        </p>

        <h2
          className="font-cormorant text-4xl sm:text-5xl font-semibold mb-12"
          style={{ color: "#F7F4EE" }}
        >
          You might be thinking&hellip;
        </h2>

        <div>
          {objections.map((obj, i) => (
            <div
              key={i}
              className="py-8"
              style={{
                borderTop: i === 0 ? "none" : "1px solid #6E726C",
              }}
            >
              <p
                className="font-cormorant text-xl sm:text-2xl italic mb-3"
                style={{ color: "#F7F4EE" }}
              >
                &ldquo;{obj.q}&rdquo;
              </p>
              <p
                className="font-inter text-sm sm:text-base leading-relaxed"
                style={{ color: "#6E726C", maxWidth: "600px" }}
              >
                {obj.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ───────────────────────────────────────────────────── */

function FinalCTA() {
  return (
    <section className="px-6 py-24" style={{ backgroundColor: "#B49A6C" }}>
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-semibold mb-5"
          style={{ color: "#24352D" }}
        >
          Ready to find clarity on your money in Japan?
        </h2>

        <p
          className="font-inter text-base sm:text-lg mb-10 mx-auto"
          style={{ color: "#24352D", maxWidth: "520px" }}
        >
          For less than a dinner out, you&rsquo;ll get a clear picture of your
          finances — and a real plan to move forward.
        </p>

        <a
          href="#" // TODO: Replace with Stripe payment link
          className="font-inter text-base font-medium inline-block px-8 py-4 mb-6 transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#24352D", color: "#F7F4EE" }}
        >
          → Get My Compass Report — ¥1,500
        </a>

        <p
          className="font-inter text-sm block"
          style={{ color: "#24352D", opacity: 0.7 }}
        >
          7–10 minute questionnaire · Fully personalised · Delivered within 3–5 days
        </p>
      </div>
    </section>
  );
}

/* ─── FOOTER ──────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="px-6 pb-8" style={{ backgroundColor: "#24352D" }}>
      {/* Gold top line */}
      <div className="h-px mb-12" style={{ backgroundColor: "#B49A6C" }} />

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-8 mb-12">
        {/* Left: logo + tagline */}
        <div>
          <p
            className="font-cormorant text-2xl font-semibold tracking-widest uppercase mb-2"
            style={{ color: "#F7F4EE" }}
          >
            Compass
          </p>
          <p className="font-inter text-xs" style={{ color: "#6E726C" }}>
            Find clarity. Find direction.
          </p>
        </div>

        {/* Right: contact */}
        <div className="sm:text-right">
          <p className="font-inter text-sm" style={{ color: "#6E726C" }}>
            Questions?{" "}
            <a
              href="mailto:hello@compass.jp"
              className="underline hover:opacity-80 transition-opacity"
              style={{ color: "#6E726C" }}
            >
              hello@compass.jp
            </a>
          </p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div
        className="max-w-6xl mx-auto border-t pt-6 text-center"
        style={{ borderColor: "#3a4a42" }}
      >
        <p className="font-inter text-xs" style={{ color: "#6E726C" }}>
          &copy; 2026 Compass. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
