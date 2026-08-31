import type { Metadata } from "next";
import { Source_Serif_4, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "@/components/theme-script";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CommandPalette } from "@/components/command-palette";
import { medications } from "@/data/medications";
import { diseases } from "@/data/diseases";
import { updates } from "@/data/updates";

const fontDisplay = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const fontBody = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontData = IBM_Plex_Mono({
  variable: "--font-data",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Rx Estudante — Biblioteca clínica para estudo",
    template: "%s — Rx Estudante",
  },
  description:
    "Medicamentos, doenças e atualizações clínicas organizados para consulta rápida durante a graduação em medicina.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontData.variable} h-full antialiased`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <CommandPalette medications={medications} diseases={diseases} updates={updates} />
      </body>
    </html>
  );
}
