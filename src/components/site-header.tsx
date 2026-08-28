"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Star } from "lucide-react";
import { Logo } from "./logo";
import { SearchTrigger } from "./search-trigger";
import { ThemeToggle } from "./theme-toggle";
import { useFavorites } from "@/lib/favorites";

const NAV_LINKS = [
  { href: "/atualizacoes", label: "Atualizações" },
  { href: "/medicamentos", label: "Medicamentos" },
  { href: "/doencas", label: "Doenças" },
  { href: "/anatomia/esqueleto", label: "Anatomia 3D", activePrefix: "/anatomia" },
];

function cx(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const favorites = useFavorites();

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Logo className="h-9 w-9" />
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold text-foreground">Rx Estudante</span>
            <span className="block text-xs text-foreground-subtle">Biblioteca clínica</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname?.startsWith(link.activePrefix ?? link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cx(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-brand-soft text-brand-strong"
                    : "text-foreground-muted hover:bg-background-raised hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden sm:block">
            <SearchTrigger />
          </div>
          <Link
            href="/favoritos"
            title="Favoritos"
            aria-label="Favoritos"
            className={cx(
              "relative inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-colors",
              pathname === "/favoritos"
                ? "border-brand/30 bg-brand-soft text-brand-strong"
                : "border-border text-foreground-muted hover:border-border-strong hover:text-foreground"
            )}
          >
            <Star className="h-4 w-4" />
            {favorites.length > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 text-[10px] font-semibold text-white">
                {favorites.length}
              </span>
            )}
          </Link>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground-muted md:hidden"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-border px-4 pb-4 pt-2 md:hidden">
          <div className="mb-3">
            <SearchTrigger className="flex h-10 w-full items-center gap-2 rounded-lg border border-border bg-background-raised px-3 text-sm text-foreground-subtle" />
          </div>
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname?.startsWith(link.activePrefix ?? link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cx(
                    "rounded-lg px-3 py-2.5 text-sm font-medium",
                    active ? "bg-brand-soft text-brand-strong" : "text-foreground-muted"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
