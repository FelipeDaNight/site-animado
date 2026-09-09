import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Repertório Certo — repertório sociocultural para redações",
  description:
    "Digite o tema da sua redação e receba citações, dados, leis e exemplos relevantes, com explicação de como usá-los sem fugir do tema.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">{children}</body>
    </html>
  );
}
