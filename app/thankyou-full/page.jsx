export default function ThankYouFullPage() {
  return (
    <main
      style={{ backgroundColor: "#F7F4EE", minHeight: "100vh" }}
      className="px-6 py-20 font-[family-name:var(--font-inter)]"
    >
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>

        {/* Top label */}
        <p
          className="text-center text-xs tracking-[0.2em] uppercase mb-5"
          style={{ color: "#B49A6C", fontFamily: "var(--font-inter)" }}
        >
          Full Report
        </p>

        {/* Headline */}
        <h1
          className="text-center font-[family-name:var(--font-cormorant)] font-semibold leading-tight mb-6"
          style={{ color: "#24352D", fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
        >
          Thank you — you&rsquo;re in.
        </h1>

        {/* Subheadline */}
        <p
          className="text-center text-base mx-auto mb-12"
          style={{
            color: "#6E726C",
            maxWidth: "580px",
            lineHeight: "1.85",
            fontFamily: "var(--font-inter)",
          }}
        >
          Your purchase is confirmed. The next step is your 20–30 minute
          questionnaire — everything in your report is built from your answers.
        </p>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "#DAD4CA", width: "100%" }} className="mb-0" />

        {/* Steps */}
        <div>

          {/* Step 01 */}
          <div className="py-8 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
            <div className="md:w-16 shrink-0">
              <span
                className="font-[family-name:var(--font-cormorant)] font-semibold text-4xl"
                style={{ color: "#B49A6C" }}
              >
                01
              </span>
            </div>
            <div className="md:w-44 shrink-0">
              <p className="font-medium text-base" style={{ color: "#24352D" }}>
                Check your email
              </p>
            </div>
            <div className="flex-1">
              <p className="text-base" style={{ color: "#6E726C", lineHeight: "1.75" }}>
                You&rsquo;ll receive a receipt from Stripe with your purchase details.
              </p>
            </div>
          </div>

          <div style={{ height: "1px", backgroundColor: "#DAD4CA" }} />

          {/* Step 02 */}
          <div className="py-8 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
            <div className="md:w-16 shrink-0">
              <span
                className="font-[family-name:var(--font-cormorant)] font-semibold text-4xl"
                style={{ color: "#B49A6C" }}
              >
                02
              </span>
            </div>
            <div className="md:w-44 shrink-0">
              <p className="font-medium text-base" style={{ color: "#24352D" }}>
                Complete your questionnaire
              </p>
            </div>
            <div className="flex-1">
              <p className="text-base mb-3" style={{ color: "#6E726C", lineHeight: "1.75" }}>
                Fill it out below — it takes about 20–30 minutes and is the only
                thing we need to build your report. A link has also been sent to
                your inbox in case you&rsquo;d like to return to it later.
              </p>
              <a
                href="https://tally.so/r/5BOr96"
                className="text-base hover:underline"
                style={{
                  color: "#B49A6C",
                  textDecoration: "none",
                  fontFamily: "var(--font-inter)",
                }}
              >
                Click here to fill out your questionnaire
              </a>
            </div>
          </div>

          <div style={{ height: "1px", backgroundColor: "#DAD4CA" }} />

          {/* Step 03 */}
          <div className="py-8 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
            <div className="md:w-16 shrink-0">
              <span
                className="font-[family-name:var(--font-cormorant)] font-semibold text-4xl"
                style={{ color: "#B49A6C" }}
              >
                03
              </span>
            </div>
            <div className="md:w-44 shrink-0">
              <p className="font-medium text-base" style={{ color: "#24352D" }}>
                Receive your report
              </p>
            </div>
            <div className="flex-1">
              <p className="text-base" style={{ color: "#6E726C", lineHeight: "1.75" }}>
                Your personalised Full Report will arrive in your inbox within 3–5 days.
              </p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "#DAD4CA", width: "100%" }} />

        {/* Closing line */}
        <p
          className="text-center text-sm mt-12"
          style={{ color: "#6E726C", fontFamily: "var(--font-inter)" }}
        >
          Questions? Email us at{" "}
          <a
            href="mailto:hello@compasss.life"
            style={{ color: "#B49A6C", textDecoration: "none" }}
            className="hover:underline"
          >
            hello@compasss.life
          </a>
        </p>

      </div>
    </main>
  );
}
