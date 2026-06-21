export const metadata = {
  title: "Thank You — Compass Full Report",
  description:
    "Your Full Report purchase is confirmed. Complete your questionnaire to receive your personalised Compass report.",
};

const QUESTIONNAIRE_URL = "https://tally.so/r/b5gZ46";

export default function ThankYouFullPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Inter:wght@300;400;500;600&display=swap');

        .thankyou-page {
          min-height: 100vh;
          background: #F7F4EE;
          color: #24352D;
          font-family: 'Inter', system-ui, sans-serif;
          display: flex;
          flex-direction: column;
        }

        .thankyou-nav {
          padding: 18px 48px;
          border-bottom: 1px solid #DAD4CA;
          background: #F7F4EE;
        }

        .thankyou-nav img {
          height: 44px;
          width: auto;
          display: block;
        }

        .thankyou-main {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 64px 24px;
        }

        .thankyou-card {
          max-width: 640px;
          width: 100%;
          text-align: center;
        }

        .thankyou-label {
          display: block;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #B49A6C;
          margin-bottom: 20px;
        }

        .thankyou-card h1 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 500;
          line-height: 1.15;
          margin-bottom: 24px;
        }

        .thankyou-card p {
          font-size: 17px;
          line-height: 1.75;
          color: #6E726C;
          margin-bottom: 20px;
        }

        .thankyou-steps {
          list-style: none;
          margin: 40px 0;
          padding: 0;
          text-align: left;
        }

        .thankyou-steps li {
          display: flex;
          gap: 16px;
          padding: 20px 0;
          border-bottom: 1px solid #DAD4CA;
        }

        .thankyou-steps li:first-child {
          border-top: 1px solid #DAD4CA;
        }

        .thankyou-step-num {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 32px;
          color: #B49A6C;
          line-height: 1;
          flex-shrink: 0;
          width: 36px;
        }

        .thankyou-step-text strong {
          display: block;
          font-size: 15px;
          font-weight: 500;
          color: #24352D;
          margin-bottom: 6px;
        }

        .thankyou-step-text span {
          font-size: 14px;
          line-height: 1.6;
          color: #6E726C;
        }

        .thankyou-step-text a {
          color: #24352D;
          font-weight: 500;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .thankyou-home {
          display: inline-block;
          margin-top: 16px;
          font-size: 14px;
          color: #6E726C;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        @media (max-width: 768px) {
          .thankyou-nav {
            padding: 14px 16px;
          }

          .thankyou-nav img {
            height: 30px;
          }
        }
      `}</style>

      <div className="thankyou-page">
        <header className="thankyou-nav">
          <a href="/">
            <img
              src="/images/compass-logo-horizontal.png"
              alt="Compass — Find clarity. Find direction."
            />
          </a>
        </header>

        <main className="thankyou-main">
          <div className="thankyou-card">
            <span className="thankyou-label">Full Report</span>
            <h1>Thank you — you&apos;re in.</h1>
            <p>
              Your purchase is confirmed. The next step is your 20–30 minute
              questionnaire — everything in your report is built from your
              answers.
            </p>

            <ol className="thankyou-steps">
              <li>
                <span className="thankyou-step-num">01</span>
                <div className="thankyou-step-text">
                  <strong>Check your email</strong>
                  <span>
                    You&apos;ll receive a receipt from Stripe with your purchase
                    details.
                  </span>
                </div>
              </li>
              <li>
                <span className="thankyou-step-num">02</span>
                <div className="thankyou-step-text">
                  <strong>Complete your questionnaire</strong>
                  <span>
                    Fill it out below — it takes about 20–30 minutes and is the
                    only thing we need to build your report. A link has also
                    been sent to your inbox in case you&apos;d like to return to
                    it later.
                    <br />
                    <a
                      href={QUESTIONNAIRE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click here
                    </a>{" "}
                    to fill out your questionnaire
                  </span>
                </div>
              </li>
              <li>
                <span className="thankyou-step-num">03</span>
                <div className="thankyou-step-text">
                  <strong>Receive your report</strong>
                  <span>
                    Your personalised Full Report will arrive in your inbox
                    within 3–5 days.
                  </span>
                </div>
              </li>
            </ol>

            <p>
              Questions? Email us at{" "}
              <a href="mailto:hello@compasss.life">hello@compasss.life</a>
            </p>

            <a href="/" className="thankyou-home">
              ← Back to Compass
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
