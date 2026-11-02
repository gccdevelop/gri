import { Check, Compass } from "lucide-react";

/**
 * Distinguishes what GRI has already done from what it intends to develop.
 * Used consistently wherever both appear.
 */
export function StatusTag({ kind }: { kind: "undertaken" | "planned" }) {
  if (kind === "undertaken") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-800 px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-ivory-50">
        <Check aria-hidden="true" className="size-3.5" />
        Undertaken
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-dashed border-terracotta-600 px-3 py-[0.2rem] text-xs font-bold uppercase tracking-[0.1em] text-terracotta-600">
      <Compass aria-hidden="true" className="size-3.5" />
      Planned
    </span>
  );
}
