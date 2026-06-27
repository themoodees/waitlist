import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compass — Análise Financeira Pessoal para Estrangeiros no Japão",
  description:
    "O Compass é um relatório de análise financeira personalizado para estrangeiros que vivem no Japão. Responda algumas perguntas e receba um relatório claro e prático na sua caixa de entrada.",
};

export default function PtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
