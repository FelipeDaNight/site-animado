"use client";

import { useState } from "react";
import { CranialNervesExplorer } from "@/components/anatomy/cranial-nerves-explorer";
import { PeripheralNerveExplorer } from "@/components/anatomy/peripheral-nerve-explorer";

function cx(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const SECOES = ["Nervos cranianos", "Nervos periféricos"] as const;
type Secao = (typeof SECOES)[number];

export function NervousSystemExplorer() {
  const [secao, setSecao] = useState<Secao>("Nervos cranianos");

  return (
    <div>
      <div className="flex flex-wrap gap-1.5">
        {SECOES.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSecao(s)}
            className={cx(
              "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
              secao === s
                ? "border-brand/30 bg-brand-soft text-brand-strong"
                : "border-border text-foreground-muted hover:border-border-strong hover:text-foreground"
            )}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="mt-5">
        {secao === "Nervos cranianos" ? <CranialNervesExplorer /> : <PeripheralNerveExplorer />}
      </div>
    </div>
  );
}
