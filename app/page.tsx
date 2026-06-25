export default function Home() {
  return (
    <div className="font-[family-name:var(--font-inter)]" style={{ backgroundColor: "#F7F4EE" }}>
      {/* NAVBAR */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
        style={{ backgroundColor: "#F7F4EE", borderBottom: "1px solid #DAD4CA" }}
      >
        <div className="flex items-center gap-4">
          <span
            className="text-xl tracking-[0.2em]"
            style={{ fontFamily: "var(--font-cormorant)", color: "#24352D" }}
          >
            COMPASS
          </span>
          <span className="hidden text-xs sm:block" style={{ color: "#6E726C" }}>
            Find clarity. Find direction.
          </span>
        </div>
        <a
          href="#pricing"
          className="px-5 py-2.5 text-sm font-medium"
          style={{
            backgroundColor: "#24352D",
            color: "#F7F4EE",
            fontFamily: "var(--font-inter)",
          }}
        >
          See Pricing
        </a>
      </nav>

      {/* HERO */}
      <section
        className="flex min-h-screen flex-col justify-center px-6 py-24 md:px-12 lg:px-24"
        style={{ backgroundColor: "#F7F4EE" }}
      >
        <div className="max-w-3xl">
          <h1
            className="mb-8 text-4xl leading-tight md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-cormorant)", color: "#24352D" }}
          >
            You're earning. You're spending. But where is it all going?
          </h1>
          <p className="mb-10 max-w-[600px] text-base leading-relaxed md:text-lg" style={{ color: "#6E726C" }}>
            Compass is a personal financial analysis for foreigners in Japan. Answer a few questions, and we'll send you a clear, personalised report on your money — plus a plan to take back control.
          </p>
          <a
            href="#pricing"
            className="inline-block px-8 py-4 text-base font-medium"
            style={{
              backgroundColor: "#B49A6C",
              color: "#24352D",
              fontFamily: "var(--font-inter)",
            }}
          >
            → Find Your Report
          </a>
          <p className="mt-4 text-sm" style={{ color: "#6E726C" }}>
            From ¥1,000 · Fully personalised · Delivered to your inbox
          </p>
        </div>
        <div className="mt-24 h-px w-full" style={{ backgroundColor: "#B49A6C" }} />
      </section>

      {/* EMPATHY SECTION */}
      <section className="px-6 py-24 md:px-12 lg:px-24" style={{ backgroundColor: "#24352D" }}>
        <div className="max-w-3xl">
          <p
            className="mb-6 text-xs font-medium uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-inter)", color: "#B49A6C" }}
          >
            WHY IT MATTERS
          </p>
          <h2
            className="mb-8 text-4xl leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)", color: "#F7F4EE" }}
          >
            Living in Japan changes your relationship with money.
          </h2>
          <p className="mb-10 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: "#F7F4EE" }}>
            The convenience store on every corner. The vending machines. The late-night delivery. The pension and health insurance you're not sure you're handling right. Most foreigners here are managing day to day — but not really understanding their money.
          </p>
          <ul className="mb-12 space-y-5">
            {[
              "I earn a decent salary but I never seem to save anything.",
              "The Japanese financial system confuses me. NISA? iDeCo? I don't know where to start.",
              "Amazon, convenience stores, Uber Eats… it adds up but I don't know by how much.",
              "I want to travel, save, and invest — but I can't seem to do all three.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "#B49A6C" }} />
                <span className="text-base leading-relaxed md:text-lg" style={{ color: "#F7F4EE" }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p
            className="text-xl italic md:text-2xl"
            style={{ fontFamily: "var(--font-cormorant)", color: "#B49A6C" }}
          >
            If any of that sounds familiar — this report was made for you.
          </p>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="px-6 py-24 md:px-12 lg:px-24" style={{ backgroundColor: "#F7F4EE" }}>
        <div className="mx-auto max-w-5xl">
          <p
            className="mb-6 text-xs font-medium uppercase tracking-[0.15em]"
            style={{ color: "#B49A6C" }}
          >
            WHAT YOU RECEIVE
          </p>
          <h2
            className="mb-4 text-4xl leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)", color: "#24352D" }}
          >
            Every Compass report starts with you.
          </h2>
          <p className="mb-14 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: "#6E726C" }}>
            We read what you wrote — your income, your habits, your goals. What comes back isn't a template. It's a report built around the specific person who filled in the questionnaire.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                label: "YOUR FINANCIAL PICTURE",
                text: "A clear view of where your money is actually going each month — mapped against your income, your fixed costs, and the patterns you may not have noticed.",
              },
              {
                label: "YOUR BIGGEST MONEY LEAK",
                text: "The one area doing the most damage right now. Named, explained, and — in the Full Report — quantified down to what it costs you every year.",
              },
              {
                label: "YOUR MONEY PERSONALITY",
                text: "A read on how and why you spend the way you do — the emotional patterns behind the numbers, not just the numbers themselves.",
              },
              {
                label: "YOUR PERSONAL CLOSING",
                text: "A direct message for where you actually are — not generic encouragement, but something that could only have been written for you.",
              },
            ].map((card) => (
              <div
                key={card.label}
                className="p-8"
                style={{
                  backgroundColor: "#F7F4EE",
                  border: "1px solid #DAD4CA",
                }}
              >
                <p
                  className="mb-4 text-xs font-medium uppercase tracking-[0.15em]"
                  style={{ color: "#B49A6C" }}
                >
                  {card.label}
                </p>
                <p className="text-base leading-relaxed" style={{ color: "#6E726C" }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="px-6 py-24 md:px-12 lg:px-24" style={{ backgroundColor: "#F7F4EE" }}>
        <div className="mx-auto max-w-5xl">
          <p
            className="mb-6 text-xs font-medium uppercase tracking-[0.15em]"
            style={{ color: "#B49A6C" }}
          >
            YOUR OPTIONS
          </p>
          <h2
            className="mb-4 text-4xl leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)", color: "#24352D" }}
          >
            Two reports. Two levels of depth.
          </h2>
          <p className="mb-14 max-w-[620px] text-base leading-relaxed md:text-lg" style={{ color: "#6E726C" }}>
            Both are built entirely around your answers. The difference is how far in you want to go.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Basic Report Card */}
            <div className="flex flex-col p-8" style={{ backgroundColor: "#F7F4EE", border: "1px solid #DAD4CA" }}>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em]" style={{ color: "#B49A6C" }}>
                BASIC REPORT
              </p>
              <h3
                className="mb-4 text-3xl leading-tight md:text-4xl"
                style={{ fontFamily: "var(--font-cormorant)", color: "#24352D" }}
              >
                Clarity in 5 minutes.
              </h3>
              <p className="mb-8 text-base leading-relaxed" style={{ color: "#6E726C" }}>
                Answer a handful of questions about your income, spending, and habits. We'll send you a focused report that names the single pattern costing you the most — and what kind of money person you actually are.
              </p>
              <div className="mb-8 h-px" style={{ backgroundColor: "#DAD4CA" }} />
              <p
                className="mb-1 text-4xl"
                style={{ fontFamily: "var(--font-cormorant)", color: "#24352D" }}
              >
                ¥1,000
              </p>
              <p className="mb-8 text-sm" style={{ color: "#6E726C" }}>
                5-minute questionnaire · Delivered within 3–5 days
              </p>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.15em]" style={{ color: "#6E726C" }}>
                WHAT YOU GET
              </p>
              <ul className="mb-10 flex-1 space-y-5">
                {[
                  { title: "Your financial snapshot", body: "An estimated overview of where your money is going each month." },
                  { title: "Your biggest money leak", body: "The one pattern costing you the most — named, explained, and quantified." },
                  { title: "Your money personality", body: "A clear read on how and why you spend the way you do." },
                  { title: "Your personal closing", body: "A direct message written specifically for where you are right now." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "#B49A6C" }} />
                    <span className="text-sm leading-relaxed" style={{ color: "#6E726C" }}>
                      <strong style={{ color: "#24352D" }}>{item.title}</strong>
                      {" — "}
                      {item.body}
                    </span>
                  </li>
                ))}
              </ul>
              {/* TODO: Replace with Stripe payment link for Basic Report */}
              <a
                href="#"
                className="block w-full py-4 text-center text-sm font-medium"
                style={{ backgroundColor: "#24352D", color: "#F7F4EE" }}
              >
                Get the Basic Report — ¥1,000
              </a>
              <p className="mt-3 text-center text-xs" style={{ color: "#6E726C" }}>
                Estimates-based · No spreadsheets needed
              </p>
            </div>

            {/* Full Report Card */}
            <div className="flex flex-col p-8" style={{ backgroundColor: "#F7F4EE", border: "1.5px solid #B49A6C" }}>
              <div className="mb-4 inline-block self-start">
                <span
                  className="px-3 py-1 text-xs font-medium uppercase tracking-[0.15em]"
                  style={{ backgroundColor: "#B49A6C", color: "#24352D" }}
                >
                  RECOMMENDED
                </span>
              </div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em]" style={{ color: "#B49A6C" }}>
                FULL REPORT
              </p>
              <h3
                className="mb-4 text-3xl leading-tight md:text-4xl"
                style={{ fontFamily: "var(--font-cormorant)", color: "#24352D" }}
              >
                A complete financial plan.
              </h3>
              <p className="mb-8 text-base leading-relaxed" style={{ color: "#6E726C" }}>
                Share your exact figures and we'll build a full picture of your financial life in Japan — every category broken down, every decision made clearer, and a month-by-month plan for what comes next.
              </p>
              <div className="mb-8 h-px" style={{ backgroundColor: "#DAD4CA" }} />
              <p
                className="mb-1 text-4xl"
                style={{ fontFamily: "var(--font-cormorant)", color: "#24352D" }}
              >
                ¥5,000
              </p>
              <p className="mb-8 text-sm" style={{ color: "#6E726C" }}>
                20–30 minute questionnaire · Delivered within 3–5 days
              </p>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.15em]" style={{ color: "#6E726C" }}>
                WHAT YOU GET
              </p>
              <ul className="mb-10 flex-1 space-y-5">
                {[
                  { title: "Your complete financial picture", body: "Every income source and expense category mapped against each other, built on your exact numbers." },
                  { title: "Line-by-line expense analysis", body: "Every spending category examined so you know precisely what to cut, what to keep, and why." },
                  { title: "Your money personality", body: "A full psychological profile of how and why you spend — and what it means for your future." },
                  { title: "Your Keep / Cut / Protect plan", body: "Specific, prioritised recommendations that respect your real life." },
                  { title: "Your 90-day week-by-week plan", body: "Exactly what to do and when, in the right order, starting this week." },
                  { title: "Your 12-month financial roadmap", body: "Where you'll be in 3, 6, 9, and 12 months if you follow through." },
                  { title: "Your Japan financial system guide", body: "Plain-English explanations of NISA, iDeCo, residence tax, and freelance filing — in the order that matters for your situation." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "#B49A6C" }} />
                    <span className="text-sm leading-relaxed" style={{ color: "#6E726C" }}>
                      <strong style={{ color: "#24352D" }}>{item.title}</strong>
                      {" — "}
                      {item.body}
                    </span>
                  </li>
                ))}
              </ul>
              {/* TODO: Replace with Stripe payment link for Full Report */}
              <a
                href="#"
                className="block w-full py-4 text-center text-sm font-medium"
                style={{ backgroundColor: "#B49A6C", color: "#24352D" }}
              >
                Get the Full Report — ¥5,000
              </a>
              <p className="mt-3 text-center text-xs" style={{ color: "#6E726C" }}>
                Built on your exact figures · Most complete
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-24 md:px-12 lg:px-24" style={{ backgroundColor: "#DAD4CA" }}>
        <div className="mx-auto max-w-5xl">
          <p
            className="mb-6 text-xs font-medium uppercase tracking-[0.15em]"
            style={{ color: "#B49A6C" }}
          >
            THE PROCESS
          </p>
          <h2
            className="mb-16 text-4xl leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)", color: "#24352D" }}
          >
            Simple. Personal. Actionable.
          </h2>
          <div className="flex flex-col gap-0 md:flex-row">
            {[
              {
                num: "01",
                title: "Choose your report",
                body: "Select the depth that fits where you are. One-time payment — no subscription, no hidden fees.",
              },
              {
                num: "02",
                title: "Fill out your questionnaire",
                body: "A focused reflection on your finances and goals in Japan. 5 minutes for the Basic Report, 20–30 for the Full.",
              },
              {
                num: "03",
                title: "Receive your report",
                body: "Built around your answers and delivered to your inbox within 3–5 days.",
              },
            ].map((step, i) => (
              <div key={step.num} className="flex flex-1 flex-col md:flex-row">
                <div className="flex-1 py-8 md:px-10 md:py-0" style={i > 0 ? {} : {}}>
                  <p
                    className="mb-4 text-5xl md:text-6xl"
                    style={{ fontFamily: "var(--font-cormorant)", color: "#B49A6C" }}
                  >
                    {step.num}
                  </p>
                  <p className="mb-3 text-base font-medium" style={{ color: "#24352D" }}>
                    {step.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6E726C" }}>
                    {step.body}
                  </p>
                </div>
                {i < 2 && (
                  <>
                    {/* Desktop vertical divider */}
                    <div
                      className="hidden w-px self-stretch md:block"
                      style={{ backgroundColor: "#B49A6C" }}
                    />
                    {/* Mobile horizontal divider */}
                    <div
                      className="h-px w-full md:hidden"
                      style={{ backgroundColor: "#B49A6C" }}
                    />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY COMPASS */}
      <section className="px-6 py-24 md:px-12 lg:px-24" style={{ backgroundColor: "#F7F4EE" }}>
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="mb-6 text-xs font-medium uppercase tracking-[0.15em]"
            style={{ color: "#B49A6C" }}
          >
            WHY COMPASS
          </p>
          <h2
            className="mb-8 text-4xl leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)", color: "#24352D" }}
          >
            Built for where you actually are.
          </h2>
          <p className="mx-auto mb-16 max-w-[640px] text-base leading-relaxed md:text-lg" style={{ color: "#6E726C" }}>
            Most financial advice assumes you understand the local system, speak the language, and have been planning since your twenties. Compass starts where you actually are — not where you're supposed to be. Your answers are read carefully, your situation is considered, and what comes back makes sense for your life in Japan.
          </p>
          <div className="mx-auto max-w-xl">
            <div className="h-px" style={{ backgroundColor: "#B49A6C" }} />
            <p
              className="py-8 text-2xl italic leading-snug md:text-3xl"
              style={{ fontFamily: "var(--font-cormorant)", color: "#24352D" }}
            >
              "Not where you're supposed to be. Where you actually are."
            </p>
            <div className="h-px" style={{ backgroundColor: "#B49A6C" }} />
          </div>
        </div>
      </section>

      {/* OBJECTIONS */}
      <section className="px-6 py-24 md:px-12 lg:px-24" style={{ backgroundColor: "#24352D" }}>
        <div className="mx-auto max-w-3xl">
          <p
            className="mb-6 text-xs font-medium uppercase tracking-[0.15em]"
            style={{ color: "#B49A6C" }}
          >
            COMMON QUESTIONS
          </p>
          <h2
            className="mb-16 text-4xl leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)", color: "#F7F4EE" }}
          >
            You might be thinking…
          </h2>
          <div className="space-y-0">
            {[
              {
                q: "I already know I spend too much.",
                a: "Knowing and understanding are different. This shows you why it's happening — and what to do about it, in the right order.",
              },
              {
                q: "Will this actually be personalised to me?",
                a: "Yes. Every report is built around your specific answers — your income, your habits, your goals in Japan. No two are the same.",
              },
              {
                q: "Is ¥5,000 worth it for a report?",
                a: "Most readers find a pattern costing them ¥100,000 or more per year they'd never quantified. The report pays for itself the first time you act on it.",
              },
              {
                q: "What makes the Full Report different from just budgeting myself?",
                a: "A budget tells you what you spent. The Full Report tells you why — and what it means. You don't get a spreadsheet. You get a precise, prioritised plan written for the specific person who filled in the questionnaire.",
              },
              {
                q: "I don't have time to fill out a long questionnaire.",
                a: "The Basic Report takes 5 minutes. The Full Report takes the length of a commute — and gives you a complete financial plan for the next 12 months.",
              },
              {
                q: "I'll sort my finances out when things calm down.",
                a: "Things don't calm down in Japan — they just continue. The Basic Report exists for this: a clear picture of where you are, in 5 minutes, without waiting.",
              },
              {
                q: "What if I'm not earning much yet?",
                a: "The Basic Report was built for exactly this moment. It shows you the one pattern doing the most damage right now — and what to do about it first.",
              },
            ].map((item, i) => (
              <div key={i}>
                <div className="py-8">
                  <p
                    className="mb-4 text-xl italic leading-snug md:text-2xl"
                    style={{ fontFamily: "var(--font-cormorant)", color: "#F7F4EE" }}
                  >
                    {item.q}
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: "#6E726C" }}>
                    {item.a}
                  </p>
                </div>
                {i < 6 && (
                  <div className="h-px" style={{ backgroundColor: "#6E726C" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24 text-center md:px-12 lg:px-24" style={{ backgroundColor: "#B49A6C" }}>
        <div className="mx-auto max-w-2xl">
          <h2
            className="mb-6 text-4xl leading-tight md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-cormorant)", color: "#24352D" }}
          >
            Ready to find clarity on your money in Japan?
          </h2>
          <p className="mb-12 text-base leading-relaxed md:text-lg" style={{ color: "#24352D" }}>
            One report. Built entirely around your answers. The most honest picture of your finances you've ever had.
          </p>
          {/* TODO: Replace with Stripe payment link for Full Report */}
          <a
            href="#"
            className="inline-block px-10 py-4 text-sm font-medium"
            style={{ backgroundColor: "#24352D", color: "#F7F4EE" }}
          >
            → Get the Full Report — ¥5,000
          </a>
          <p className="mt-5 text-sm" style={{ color: "#24352D", opacity: 0.65 }}>
            {/* TODO: Replace href with Stripe payment link for Basic Report */}
            Or start with the{" "}
            <a href="#" className="underline" style={{ color: "#24352D" }}>
              Basic Report for ¥1,000
            </a>
          </p>
          <p className="mt-6 text-sm" style={{ color: "#24352D", opacity: 0.7 }}>
            20–30 minute questionnaire · Fully personalised · Delivered within 3–5 days
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-12 md:px-12 lg:px-24" style={{ backgroundColor: "#24352D" }}>
        <div className="mb-8 h-px" style={{ backgroundColor: "#B49A6C" }} />
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p
              className="mb-2 text-xl tracking-[0.2em]"
              style={{ fontFamily: "var(--font-cormorant)", color: "#F7F4EE" }}
            >
              COMPASS
            </p>
            <p className="text-sm" style={{ color: "#6E726C" }}>
              Find clarity. Find direction.
            </p>
          </div>
          <p className="text-sm" style={{ color: "#6E726C" }}>
            Questions?{" "}
            <a href="mailto:hello@compassreport.com" style={{ color: "#6E726C" }}>
              hello@compassreport.com
            </a>
          </p>
        </div>
        <p className="mt-12 text-center text-xs" style={{ color: "#6E726C" }}>
          © 2026 Compass. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
