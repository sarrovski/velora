// src/lib/visual-identities.ts
// Game visual identity map — no official logos, text/gradient marks only

export interface GameIdentity {
  /** Short mark shown in badge, e.g. "V", "CS", "F" */
  mark: string;
  /** Human-readable label */
  label: string;
  /** Tailwind gradient className for the badge background */
  gradientClass: string;
  /** Tailwind text colour className */
  textClass: string;
  /** Tailwind ring/border colour className for active filter state */
  ringClass: string;
}

export const gameIdentities: Record<string, GameIdentity> = {
  Valorant: {
    mark: "V",
    label: "Valorant",
    gradientClass: "bg-gradient-to-br from-red-600 to-rose-400",
    textClass: "text-white",
    ringClass: "ring-rose-400/60",
  },
  CS2: {
    mark: "CS",
    label: "CS2",
    gradientClass: "bg-gradient-to-br from-yellow-500 to-orange-400",
    textClass: "text-white",
    ringClass: "ring-orange-400/60",
  },
  Fortnite: {
    mark: "F",
    label: "Fortnite",
    gradientClass: "bg-gradient-to-br from-sky-500 to-blue-400",
    textClass: "text-white",
    ringClass: "ring-sky-400/60",
  },
  "Apex Legends": {
    mark: "A",
    label: "Apex Legends",
    gradientClass: "bg-gradient-to-br from-red-700 to-orange-500",
    textClass: "text-white",
    ringClass: "ring-orange-500/60",
  },
  "Call of Duty": {
    mark: "COD",
    label: "Call of Duty",
    gradientClass: "bg-gradient-to-br from-slate-600 to-slate-400",
    textClass: "text-white",
    ringClass: "ring-slate-400/60",
  },
  "League of Legends": {
    mark: "LoL",
    label: "League of Legends",
    gradientClass: "bg-gradient-to-br from-blue-700 to-cyan-500",
    textClass: "text-white",
    ringClass: "ring-cyan-400/60",
  },
  "Escape from Tarkov": {
    mark: "EfT",
    label: "Escape from Tarkov",
    gradientClass: "bg-gradient-to-br from-stone-600 to-amber-700",
    textClass: "text-white",
    ringClass: "ring-amber-600/60",
  },
  Rust: {
    mark: "R",
    label: "Rust",
    gradientClass: "bg-gradient-to-br from-orange-700 to-amber-500",
    textClass: "text-white",
    ringClass: "ring-amber-500/60",
  },
};

/** Fallback identity for unknown / "All" */
export const fallbackIdentity: GameIdentity = {
  mark: "?",
  label: "Unknown",
  gradientClass: "bg-gradient-to-br from-slate-700 to-slate-500",
  textClass: "text-white",
  ringClass: "ring-slate-400/60",
};

/** Returns the identity for a game name, or the fallback */
export function getGameIdentity(game: string): GameIdentity {
  return gameIdentities[game] ?? fallbackIdentity;
}
