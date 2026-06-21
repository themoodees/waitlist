export default function ThankYouPage() {
  return (
    <main
      style={{ backgroundColor: "#F7F4EE", minHeight: "100vh" }}
      className="font-[family-name:var(--font-inter)]"
    >
      {/* Top gold line */}
      <div style={{ backgroundColor: "#B49A6C", height: "3px", width: "100%" }} />

      <div className="px-6 py-16 flex flex-col items-center">

        {/* Logo */}
        <div className="text-center mb-2">
          <p
            className="font-[family-name:var(--font-cormorant)] tracking-[0.25em] text-3xl font-semibold"
            style={{ color: "#24352D" }}
          >
            COMPASS
          </p>
          <p
            className="mt-2 text-sm"
            style={{ color: "#6E726C", fontFamily: "var(--font-inter)" }}
          >
            Find clarity. Find direction.
          </p>
        </div>

        {/* Divider */}
        <div
          className="my-10"
          style={{
            height: "1px",
            backgroundColor: "#B49A6C",
            width: "100%",
            maxWidth: "480px",
          }}
        />

        {/* Main content */}
        <div className="w-full text-center" style={{ maxWidth: "560px" }}>
          <h1
            className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-semibold leading-tight mb-8"
            style={{ color: "#24352D" }}
          >
            Thank you. Your report is on its way.
          </h1>

          <p
            className="text-base leading-relaxed mb-10"
            style={{ color: "#6E726C", lineHeight: "1.85" }}
          >
            Your Basic Report will be prepared specifically around your answers
            and delivered to your inbox within 3–5 days.
            <br />
            <br />
            There&rsquo;s one thing left to do — fill out your questionnaire. It
            takes about 5 minutes and is the only information we&rsquo;ll use to
            build your report. The more honest you are, the more useful your
            report will be.
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://tally.so/r/5BOr96"
              className="block w-full text-center text-base font-medium py-5 px-8 transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "#B49A6C",
                color: "#24352D",
                maxWidth: "400px",
                borderRadius: "0",
                fontFamily: "var(--font-inter)",
                textDecoration: "none",
              }}
            >
              → Fill Out Your Questionnaire
            </a>

            <p className="text-xs" style={{ color: "#6E726C" }}>
              Takes 5 minutes · No spreadsheets needed · Estimates are fine
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-10"
          style={{
            height: "1px",
            backgroundColor: "#B49A6C",
            width: "100%",
            maxWidth: "480px",
          }}
        />

        {/* Closing note */}
        <p
          className="text-center text-base italic"
          style={{
            color: "#6E726C",
            maxWidth: "480px",
            fontFamily: "var(--font-cormorant)",
            lineHeight: "1.8",
          }}
        >
          If you have any questions before your report arrives, reach us at{" "}
          <span style={{ color: "#24352D" }}>hello@compasss.life</span>
        </p>
      </div>
    </main>
  );
}
