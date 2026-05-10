// src/components/payment-pill.tsx
// Nicer payment method pills — purely visual, no business logic changes

import { cn } from "@/lib/helpers";

export type PaymentMethod =
  | "Crypto"
  | "PayPal G&S"
  | "PayPal F&F"
  | "Card"
  | "CashApp"
  | "Skrill"
  | "Wise"
  | "Gift Cards"
  | "Bank Transfer";

interface PaymentConfig {
  /** Very short label, used in compact mode */
  short: string;
  /** Full display label */
  label: string;
  /** SVG-style inline mark rendered in the pill */
  mark: React.ReactNode;
  /** Tailwind classes for the pill background + ring */
  className: string;
}

// Inline SVG marks — no external files, no official brand assets
function CryptoMark() {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3 fill-current" aria-hidden>
      <circle cx="8" cy="8" r="7" className="opacity-30" />
      <text x="8" y="11.5" textAnchor="middle" fontSize="8" fontWeight="bold">₿</text>
    </svg>
  );
}

function CardMark() {
  return (
    <svg viewBox="0 0 16 10" className="h-3 w-4 fill-current" aria-hidden>
      <rect x="0" y="0" width="16" height="10" rx="2" className="opacity-30" />
      <rect x="0" y="3" width="16" height="2.5" className="opacity-70" />
    </svg>
  );
}

function PayPalMark() {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3 fill-current" aria-hidden>
      <path d="M4 3h5c2 0 3.5 1.2 3 3.5C11.5 9 10 10 8 10H6.5L6 13H3.5L5 3H4zm2 1.5L5.5 8.5H7c1.2 0 2-.6 2.2-2C9.4 5 8.8 4.5 7.5 4.5H6z" />
    </svg>
  );
}

function CashAppMark() {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3 fill-current" aria-hidden>
      <text x="8" y="12" textAnchor="middle" fontSize="11" fontWeight="bold">$</text>
    </svg>
  );
}

function BankMark() {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3 fill-current" aria-hidden>
      <polygon points="8,1 15,6 1,6" className="opacity-80" />
      <rect x="2" y="7" width="2" height="5" />
      <rect x="7" y="7" width="2" height="5" />
      <rect x="12" y="7" width="2" height="5" />
      <rect x="1" y="13" width="14" height="2" />
    </svg>
  );
}

function GiftMark() {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3 fill-current" aria-hidden>
      <rect x="1" y="6" width="14" height="9" rx="1" className="opacity-40" />
      <rect x="1" y="4" width="14" height="3" rx="1" className="opacity-70" />
      <path d="M8 4 C8 4 6 1 4.5 2.5 S6 5 8 4z" />
      <path d="M8 4 C8 4 10 1 11.5 2.5 S10 5 8 4z" />
      <rect x="7" y="4" width="2" height="11" className="opacity-90" />
    </svg>
  );
}

function SkrillMark() {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3 fill-current" aria-hidden>
      <text x="8" y="12" textAnchor="middle" fontSize="10" fontWeight="bold">S</text>
    </svg>
  );
}

function WiseMark() {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3 fill-current" aria-hidden>
      <path d="M1 4 L5 12 L8 6 L11 12 L15 4" strokeWidth="2" stroke="currentColor" fill="none" />
    </svg>
  );
}

const paymentConfigs: Record<string, PaymentConfig> = {
  Crypto: {
    short: "₿",
    label: "Crypto",
    mark: <CryptoMark />,
    className:
      "border-amber-400/30 bg-amber-500/10 text-amber-200 ring-amber-400/20",
  },
  "PayPal G&S": {
    short: "PP",
    label: "PayPal G&S",
    mark: <PayPalMark />,
    className:
      "border-blue-400/30 bg-blue-500/10 text-blue-200 ring-blue-400/20",
  },
  "PayPal F&F": {
    short: "FF",
    label: "PayPal F&F",
    mark: <PayPalMark />,
    className:
      "border-sky-400/30 bg-sky-500/10 text-sky-200 ring-sky-400/20",
  },
  Card: {
    short: "💳",
    label: "Card",
    mark: <CardMark />,
    className:
      "border-violet-400/30 bg-violet-500/10 text-violet-200 ring-violet-400/20",
  },
  CashApp: {
    short: "$",
    label: "CashApp",
    mark: <CashAppMark />,
    className:
      "border-emerald-400/30 bg-emerald-500/10 text-emerald-200 ring-emerald-400/20",
  },
  Skrill: {
    short: "SK",
    label: "Skrill",
    mark: <SkrillMark />,
    className:
      "border-purple-400/30 bg-purple-500/10 text-purple-200 ring-purple-400/20",
  },
  Wise: {
    short: "W",
    label: "Wise",
    mark: <WiseMark />,
    className:
      "border-teal-400/30 bg-teal-500/10 text-teal-200 ring-teal-400/20",
  },
  "Gift Cards": {
    short: "GC",
    label: "Gift Cards",
    mark: <GiftMark />,
    className:
      "border-pink-400/30 bg-pink-500/10 text-pink-200 ring-pink-400/20",
  },
  "Bank Transfer": {
    short: "BT",
    label: "Bank Transfer",
    mark: <BankMark />,
    className:
      "border-slate-400/30 bg-slate-500/10 text-slate-300 ring-slate-400/20",
  },
};

const defaultConfig: PaymentConfig = {
  short: "?",
  label: "Unknown",
  mark: null,
  className: "border-white/10 bg-white/[0.04] text-slate-400",
};

/**
 * A visual pill for a single payment method.
 * - compact=true  → only shows the short mark (e.g. inside a card row)
 * - compact=false → shows mark + full label
 *
 * Does NOT change visibility/verification logic — caller decides whether to render.
 */
export function PaymentPill({
  method,
  compact = false,
}: {
  method: string;
  compact?: boolean;
}) {
  const cfg = paymentConfigs[method] ?? defaultConfig;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs font-medium ring-1",
        cfg.className
      )}
      title={cfg.label}
    >
      <span className="flex-shrink-0 opacity-80">{cfg.mark}</span>
      {!compact && <span>{cfg.label}</span>}
    </span>
  );
}

/**
 * Renders a row of PaymentPill items from a list of payment method strings.
 * Preserves existing behaviour: shows "Payments pending" when the list is empty.
 */
export function PaymentPillRow({
  payments,
  compact = false,
}: {
  payments: string[];
  compact?: boolean;
}) {
  if (payments.length === 0) {
    return (
      <span className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-xs text-slate-400">
        Payments pending
      </span>
    );
  }
  return (
    <div className="flex flex-wrap gap-1.5">
      {payments.map((p) => (
        <PaymentPill key={p} method={p} compact={compact} />
      ))}
    </div>
  );
}
