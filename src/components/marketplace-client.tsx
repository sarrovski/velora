// src/components/marketplace-client.tsx
// Client-side marketplace UI — game badges + payment pills
// Business logic (filtering, sorting) is unchanged; purely visual improvements.

"use client";

import Link from "next/link";
import { Badge, Card } from "@/components/ui";
import { PaymentPillRow } from "@/components/payment-pill";
import { getGameIdentity } from "@/lib/visual-identities";
import { cn } from "@/lib/helpers";
import type { listings } from "@/lib/data";

// ─── Game Badge ─────────────────────────────────────────────────────────────

export function GameBadge({
  game,
  size = "sm",
}: {
  game: string;
  size?: "sm" | "md" | "lg";
}) {
  const id = getGameIdentity(game);
  const sizeClasses = {
    sm: "h-6 w-6 text-xs",
    md: "h-8 w-8 text-sm",
    lg: "h-10 w-10 text-base",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-black tracking-tight shadow-sm",
        sizeClasses[size],
        id.gradientClass,
        id.textClass
      )}
      title={id.label}
    >
      {id.mark}
    </span>
  );
}

// ─── Category Badge ──────────────────────────────────────────────────────────

const categoryIcons: Record<string, string> = {
  "Analytics / Overlay": "◈",
  "Overlay / Utility": "⬡",
  "Reseller Offer": "↗",
};

export function CategoryBadge({ category }: { category: string }) {
  const icon = categoryIcons[category] ?? "◇";
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-xs text-slate-400">
      <span className="text-[0.6rem] opacity-60">{icon}</span>
      {category}
    </span>
  );
}

// ─── Game Filter Bar ─────────────────────────────────────────────────────────

export function GameFilterBar({
  games,
  selected,
}: {
  games: string[];
  selected: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {["All", ...games].map((game) => {
        const isAll = game === "All";
        const isActive = selected === game;
        const id = isAll ? null : getGameIdentity(game);
        return (
          <a
            key={game}
            href={
              isAll
                ? "/marketplace"
                : `/marketplace?game=${encodeURIComponent(game)}`
            }
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition",
              isActive
                ? "border-purple-400/50 bg-purple-500/20 text-purple-100 ring-1 ring-purple-400/30 shadow-lg shadow-purple-500/10"
                : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/20 hover:bg-white/[0.07]"
            )}
          >
            {id && (
              <span
                className={cn(
                  "inline-flex h-5 w-5 items-center justify-center rounded-md text-[0.6rem] font-black",
                  id.gradientClass,
                  id.textClass
                )}
              >
                {id.mark}
              </span>
            )}
            {game}
          </a>
        );
      })}
    </div>
  );
}

// ─── Payment Filter Bar ──────────────────────────────────────────────────────

export function PaymentFilterBar({
  paymentMethods,
  selected,
  selectedGame,
}: {
  paymentMethods: string[];
  selected: string;
  selectedGame: string;
}) {
  const gameParam =
    selectedGame !== "All"
      ? `game=${encodeURIComponent(selectedGame)}&`
      : "";

  return (
    <div className="flex flex-wrap gap-2">
      {["All", "Pending", ...paymentMethods.slice(0, 5)].map((payment) => {
        const isActive = selected === payment;
        return (
          <a
            key={payment}
            href={`/marketplace?${gameParam}payment=${encodeURIComponent(payment)}`}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition",
              isActive
                ? "border-cyan-400/50 bg-cyan-500/20 text-cyan-100 ring-1 ring-cyan-400/30 shadow-lg shadow-cyan-500/10"
                : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/20 hover:bg-white/[0.07]"
            )}
          >
            {payment}
          </a>
        );
      })}
    </div>
  );
}

// ─── Product Card ─────────────────────────────────────────────────────────────

type Listing = (typeof listings)[number];

export function ProductCard({
  listing,
  index,
}: {
  listing: Listing;
  index: number;
}) {
  return (
    <Card className="p-5">
      <div className="grid gap-5 lg:grid-cols-[60px_1fr_240px] lg:items-center">
        {/* Hero area: rank + game badge */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-lg font-black text-purple-200">
            #{index + 1}
          </div>
          <GameBadge game={listing.game} size="md" />
        </div>

        {/* Main info */}
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-xl font-bold">{listing.name}</h2>
            <Badge tone="amber">{listing.claimStatus}</Badge>
            <Badge>{listing.architecture}</Badge>
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <span className="text-sm text-slate-500">{listing.seller}</span>
            <CategoryBadge category={listing.category} />
          </div>
          <div className="mt-3">
            <PaymentPillRow payments={listing.verifiedPayments} compact />
          </div>
        </div>

        {/* Integrity + CTA */}
        <div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
            <div className="text-sm text-slate-400">Integrity</div>
            <div className="mt-1 text-2xl font-black">
              {listing.integrity ?? "Pending"}
            </div>
            <div className="mt-1 text-xs text-slate-500">
              {listing.confidence} confidence
            </div>
          </div>
          <Link
            href={`/listings/${listing.slug}`}
            className="mt-3 inline-flex w-full justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-4 py-2.5 text-sm font-semibold"
          >
            View listing
          </Link>
        </div>
      </div>
    </Card>
  );
}
