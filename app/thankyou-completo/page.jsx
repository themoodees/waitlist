export const metadata = {
  title: "Obrigado — Compass Relatório Completo",
  description:
    "Sua compra do Relatório Completo foi confirmada. Preencha o questionário para receber seu relatório Compass personalizado.",
};

const QUESTIONNAIRE_URL = "https://tally.so/r/QKXVyp";

export default function ThankYouCompletoPage() {
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
          <a href="/pt">
            <img
              src="/images/compass-logo-horizontal.png"
              alt="Compass — Encontre clareza. Encontre direção."
            />
          </a>
        </header>

        <main className="thankyou-main">
          <div className="thankyou-card">
            <span className="thankyou-label">Relatório Completo</span>
            <h1>Obrigado — está confirmado.</h1>
            <p>
              Sua compra foi confirmada. O próximo passo é o questionário de
              20–30 minutos — tudo no seu relatório é construído com base nas
              suas respostas.
            </p>

            <ol className="thankyou-steps">
              <li>
                <span className="thankyou-step-num">01</span>
                <div className="thankyou-step-text">
                  <strong>Verifique seu e-mail</strong>
                  <span>
                    Você receberá um recibo da Stripe com os detalhes da sua
                    compra.
                  </span>
                </div>
              </li>
              <li>
                <span className="thankyou-step-num">02</span>
                <div className="thankyou-step-text">
                  <strong>Preencha o questionário</strong>
                  <span>
                    Responda abaixo — leva cerca de 20–30 minutos e é a única
                    coisa que precisamos para construir seu relatório. Um link
                    também foi enviado para sua caixa de entrada caso queira
                    retornar depois.
                    <br />
                    <a
                      href={QUESTIONNAIRE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Clique aqui
                    </a>{" "}
                    para preencher o questionário
                  </span>
                </div>
              </li>
              <li>
                <span className="thankyou-step-num">03</span>
                <div className="thankyou-step-text">
                  <strong>Receba seu relatório</strong>
                  <span>
                    Seu Relatório Completo personalizado chegará na sua caixa de
                    entrada em 3–5 dias.
                  </span>
                </div>
              </li>
            </ol>

            <p>
              Dúvidas? Envie um e-mail para{" "}
              <a href="mailto:hello@compasss.life">hello@compasss.life</a>
            </p>

            <a href="/pt" className="thankyou-home">
              ← Voltar ao Compass
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
