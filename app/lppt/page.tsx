export default function Lppt() {
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
            Encontre clareza. Encontre direção.
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
          Ver Preços
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
            Você ganha. Você gasta. Mas para onde vai tudo isso?
          </h1>
          <p className="mb-10 max-w-[600px] text-base leading-relaxed md:text-lg" style={{ color: "#6E726C" }}>
            O Compass é uma análise financeira pessoal para estrangeiros vivendo no Japão. Responda algumas perguntas e enviaremos um relatório claro e personalizado sobre o seu dinheiro — mais um plano para você retomar o controle.
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
            → Encontrar Meu Relatório
          </a>
          <p className="mt-4 text-sm" style={{ color: "#6E726C" }}>
            A partir de ¥1.000 · Totalmente personalizado · Entregue na sua caixa de entrada
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
            POR QUE ISSO IMPORTA
          </p>
          <h2
            className="mb-8 text-4xl leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)", color: "#F7F4EE" }}
          >
            Viver no Japão muda a sua relação com o dinheiro.
          </h2>
          <p className="mb-10 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: "#F7F4EE" }}>
            A conveniência da loja em cada esquina. As máquinas de venda automática. O delivery de madrugada. A previdência e o seguro saúde que você não tem certeza se está gerenciando direito. A maioria dos estrangeiros aqui vive o dia a dia — mas sem realmente entender o próprio dinheiro.
          </p>
          <ul className="mb-12 space-y-5">
            {[
              "Ganho um salário decente, mas nunca consigo economizar nada.",
              "O sistema financeiro japonês me confunde. NISA? iDeCo? Não sei por onde começar.",
              "Amazon, conveniências, Uber Eats… vai acumulando, mas não sei quanto.",
              "Quero viajar, poupar e investir — mas não consigo fazer os três ao mesmo tempo.",
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
            Se algo disso soou familiar — este relatório foi feito para você.
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
            O QUE VOCÊ RECEBE
          </p>
          <h2
            className="mb-4 text-4xl leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)", color: "#24352D" }}
          >
            Todo relatório Compass começa por você.
          </h2>
          <p className="mb-14 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: "#6E726C" }}>
            Lemos o que você escreveu — sua renda, seus hábitos, seus objetivos. O que volta não é um modelo pronto. É um relatório construído em torno da pessoa específica que preencheu o questionário.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                label: "SEU PANORAMA FINANCEIRO",
                text: "Uma visão clara de para onde vai o seu dinheiro a cada mês — mapeado em relação à sua renda, seus custos fixos e os padrões que você talvez não tenha percebido.",
              },
              {
                label: "SEU MAIOR VAZAMENTO DE DINHEIRO",
                text: "A área que está causando mais dano agora. Identificada, explicada e — no Relatório Completo — quantificada até o que custa por ano.",
              },
              {
                label: "SUA PERSONALIDADE FINANCEIRA",
                text: "Uma leitura de como e por que você gasta do jeito que gasta — os padrões emocionais por trás dos números, não apenas os números em si.",
              },
              {
                label: "SEU FECHAMENTO PESSOAL",
                text: "Uma mensagem direta para onde você está de fato — não um encorajamento genérico, mas algo que só poderia ter sido escrito para você.",
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
            SUAS OPÇÕES
          </p>
          <h2
            className="mb-4 text-4xl leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)", color: "#24352D" }}
          >
            Dois relatórios. Dois níveis de profundidade.
          </h2>
          <p className="mb-14 max-w-[620px] text-base leading-relaxed md:text-lg" style={{ color: "#6E726C" }}>
            Ambos são construídos inteiramente em torno das suas respostas. A diferença é até onde você quer ir.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Basic Report Card */}
            <div className="flex flex-col p-8" style={{ backgroundColor: "#F7F4EE", border: "1px solid #DAD4CA" }}>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em]" style={{ color: "#B49A6C" }}>
                RELATÓRIO BÁSICO
              </p>
              <h3
                className="mb-4 text-3xl leading-tight md:text-4xl"
                style={{ fontFamily: "var(--font-cormorant)", color: "#24352D" }}
              >
                Clareza em 5 minutos.
              </h3>
              <p className="mb-8 text-base leading-relaxed" style={{ color: "#6E726C" }}>
                Responda algumas perguntas sobre sua renda, gastos e hábitos. Enviaremos um relatório focado que nomeia o único padrão que mais te custa — e que tipo de pessoa financeira você realmente é.
              </p>
              <div className="mb-8 h-px" style={{ backgroundColor: "#DAD4CA" }} />
              <p
                className="mb-1 text-4xl"
                style={{ fontFamily: "var(--font-cormorant)", color: "#24352D" }}
              >
                ¥1.000
              </p>
              <p className="mb-8 text-sm" style={{ color: "#6E726C" }}>
                Questionário de 5 minutos · Entregue em 3–5 dias
              </p>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.15em]" style={{ color: "#6E726C" }}>
                O QUE VOCÊ RECEBE
              </p>
              <ul className="mb-10 flex-1 space-y-5">
                {[
                  { title: "Seu panorama financeiro", body: "Uma visão estimada de para onde vai o seu dinheiro a cada mês." },
                  { title: "Seu maior vazamento de dinheiro", body: "O padrão que mais te custa — identificado, explicado e quantificado." },
                  { title: "Sua personalidade financeira", body: "Uma leitura clara de como e por que você gasta do jeito que gasta." },
                  { title: "Seu fechamento pessoal", body: "Uma mensagem direta escrita especificamente para onde você está agora." },
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
                Obter o Relatório Básico — ¥1.000
              </a>
              <p className="mt-3 text-center text-xs" style={{ color: "#6E726C" }}>
                Baseado em estimativas · Sem planilhas
              </p>
            </div>

            {/* Full Report Card */}
            <div className="flex flex-col p-8" style={{ backgroundColor: "#F7F4EE", border: "1.5px solid #B49A6C" }}>
              <div className="mb-4 inline-block self-start">
                <span
                  className="px-3 py-1 text-xs font-medium uppercase tracking-[0.15em]"
                  style={{ backgroundColor: "#B49A6C", color: "#24352D" }}
                >
                  RECOMENDADO
                </span>
              </div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em]" style={{ color: "#B49A6C" }}>
                RELATÓRIO COMPLETO
              </p>
              <h3
                className="mb-4 text-3xl leading-tight md:text-4xl"
                style={{ fontFamily: "var(--font-cormorant)", color: "#24352D" }}
              >
                Um plano financeiro completo.
              </h3>
              <p className="mb-8 text-base leading-relaxed" style={{ color: "#6E726C" }}>
                Compartilhe seus números exatos e construiremos um quadro completo da sua vida financeira no Japão — cada categoria detalhada, cada decisão mais clara, e um plano mês a mês para o que vem a seguir.
              </p>
              <div className="mb-8 h-px" style={{ backgroundColor: "#DAD4CA" }} />
              <p
                className="mb-1 text-4xl"
                style={{ fontFamily: "var(--font-cormorant)", color: "#24352D" }}
              >
                ¥5.000
              </p>
              <p className="mb-8 text-sm" style={{ color: "#6E726C" }}>
                Questionário de 20–30 minutos · Entregue em 3–5 dias
              </p>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.15em]" style={{ color: "#6E726C" }}>
                O QUE VOCÊ RECEBE
              </p>
              <ul className="mb-10 flex-1 space-y-5">
                {[
                  { title: "Seu panorama financeiro completo", body: "Todas as fontes de renda e categorias de despesa mapeadas umas contra as outras, com base nos seus números exatos." },
                  { title: "Análise linha a linha dos seus gastos", body: "Cada categoria de gasto examinada para que você saiba exatamente o que cortar, o que manter e por quê." },
                  { title: "Sua personalidade financeira", body: "Um perfil psicológico completo de como e por que você gasta — e o que isso significa para o seu futuro." },
                  { title: "Seu plano Manter / Cortar / Proteger", body: "Recomendações específicas e priorizadas que respeitam a sua vida real." },
                  { title: "Seu plano semana a semana de 90 dias", body: "Exatamente o que fazer e quando, na ordem certa, começando esta semana." },
                  { title: "Seu roteiro financeiro de 12 meses", body: "Onde você estará em 3, 6, 9 e 12 meses se seguir em frente." },
                  { title: "Seu guia do sistema financeiro japonês", body: "Explicações em português claro sobre NISA, iDeCo, imposto de residência e declaração autônoma — na ordem que importa para a sua situação." },
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
                Obter o Relatório Completo — ¥5.000
              </a>
              <p className="mt-3 text-center text-xs" style={{ color: "#6E726C" }}>
                Baseado nos seus números exatos · Mais completo
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
            O PROCESSO
          </p>
          <h2
            className="mb-16 text-4xl leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)", color: "#24352D" }}
          >
            Simples. Pessoal. Prático.
          </h2>
          <div className="flex flex-col gap-0 md:flex-row">
            {[
              {
                num: "01",
                title: "Escolha seu relatório",
                body: "Selecione a profundidade que se encaixa no seu momento. Pagamento único — sem assinatura, sem taxas ocultas.",
              },
              {
                num: "02",
                title: "Preencha seu questionário",
                body: "Uma reflexão focada sobre suas finanças e objetivos no Japão. 5 minutos para o Básico, 20–30 para o Completo.",
              },
              {
                num: "03",
                title: "Receba seu relatório",
                body: "Construído com base nas suas respostas e entregue na sua caixa de entrada em 3–5 dias.",
              },
            ].map((step, i) => (
              <div key={step.num} className="flex flex-1 flex-col md:flex-row">
                <div className="flex-1 py-8 md:px-10 md:py-0">
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
                    <div className="hidden w-px self-stretch md:block" style={{ backgroundColor: "#B49A6C" }} />
                    <div className="h-px w-full md:hidden" style={{ backgroundColor: "#B49A6C" }} />
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
            POR QUE COMPASS
          </p>
          <h2
            className="mb-8 text-4xl leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)", color: "#24352D" }}
          >
            Feito para onde você realmente está.
          </h2>
          <p className="mx-auto mb-16 max-w-[640px] text-base leading-relaxed md:text-lg" style={{ color: "#6E726C" }}>
            A maioria dos conselhos financeiros pressupõe que você entende o sistema local, fala o idioma e planeja desde os vinte anos. O Compass começa onde você realmente está — não onde deveria estar. Suas respostas são lidas com atenção, sua situação é considerada, e o que volta faz sentido para a sua vida no Japão.
          </p>
          <div className="mx-auto max-w-xl">
            <div className="h-px" style={{ backgroundColor: "#B49A6C" }} />
            <p
              className="py-8 text-2xl italic leading-snug md:text-3xl"
              style={{ fontFamily: "var(--font-cormorant)", color: "#24352D" }}
            >
              "Não onde você deveria estar. Onde você realmente está."
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
            PERGUNTAS FREQUENTES
          </p>
          <h2
            className="mb-16 text-4xl leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)", color: "#F7F4EE" }}
          >
            Você pode estar pensando…
          </h2>
          <div>
            {[
              {
                q: "Eu já sei que gasto demais.",
                a: "Saber e entender são coisas diferentes. Isso mostra por que está acontecendo — e o que fazer a respeito, na ordem certa.",
              },
              {
                q: "Este relatório será realmente personalizado para mim?",
                a: "Sim. Cada relatório é construído em torno das suas respostas específicas — sua renda, seus hábitos, seus objetivos no Japão. Não há dois iguais.",
              },
              {
                q: "Vale a pena pagar ¥5.000 por um relatório?",
                a: "A maioria dos leitores descobre um padrão que custa ¥100.000 ou mais por ano e que nunca tinham quantificado. O relatório se paga na primeira vez que você age com base nele.",
              },
              {
                q: "O que diferencia o Relatório Completo de simplesmente fazer um orçamento sozinho?",
                a: "Um orçamento diz o que você gastou. O Relatório Completo diz por quê — e o que isso significa. Você não recebe uma planilha. Você recebe um plano preciso e priorizado escrito para a pessoa específica que preencheu o questionário.",
              },
              {
                q: "Não tenho tempo para preencher um questionário longo.",
                a: "O Relatório Básico leva 5 minutos. O Completo leva o tempo de um trajeto de metrô — e entrega um plano financeiro completo para os próximos 12 meses.",
              },
              {
                q: "Vou organizar minhas finanças quando as coisas acalmarem.",
                a: "As coisas não acalmam no Japão — elas simplesmente continuam. O Relatório Básico existe para isso: um quadro claro de onde você está, em 5 minutos, sem esperar.",
              },
              {
                q: "E se eu ainda não estiver ganhando muito?",
                a: "O Relatório Básico foi feito exatamente para este momento. Ele mostra o único padrão causando mais dano agora — e o que fazer primeiro.",
              },
            ].map((item, i, arr) => (
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
                {i < arr.length - 1 && (
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
            Pronto para ter clareza sobre o seu dinheiro no Japão?
          </h2>
          <p className="mb-12 text-base leading-relaxed md:text-lg" style={{ color: "#24352D" }}>
            Um relatório. Construído inteiramente em torno das suas respostas. O quadro mais honesto das suas finanças que você já teve.
          </p>
          {/* TODO: Replace with Stripe payment link for Full Report */}
          <a
            href="#"
            className="inline-block px-10 py-4 text-sm font-medium"
            style={{ backgroundColor: "#24352D", color: "#F7F4EE" }}
          >
            → Obter o Relatório Completo — ¥5.000
          </a>
          <p className="mt-5 text-sm" style={{ color: "#24352D", opacity: 0.65 }}>
            {/* TODO: Replace href with Stripe payment link for Basic Report */}
            Ou comece com o{" "}
            <a href="#" className="underline" style={{ color: "#24352D" }}>
              Relatório Básico por ¥1.000
            </a>
          </p>
          <p className="mt-6 text-sm" style={{ color: "#24352D", opacity: 0.7 }}>
            Questionário de 20–30 minutos · Totalmente personalizado · Entregue em 3–5 dias
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
              Encontre clareza. Encontre direção.
            </p>
          </div>
          <p className="text-sm" style={{ color: "#6E726C" }}>
            Dúvidas?{" "}
            <a href="mailto:hello@compassreport.com" style={{ color: "#6E726C" }}>
              hello@compassreport.com
            </a>
          </p>
        </div>
        <p className="mt-12 text-center text-xs" style={{ color: "#6E726C" }}>
          © 2026 Compass. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
