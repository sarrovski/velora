export type ToolStatus = "Working" | "Updating" | "Not Working";
export type PlatformStatus = "Published" | "Pending Review" | "Draft" | "Rejected" | "Suspended";

export const games = ["CS2", "Valorant", "Fortnite", "Apex Legends", "Call of Duty"];

export const tools = [
  {
    slug: "phantomx-tracker",
    name: "PhantomX Tracker",
    game: "Valorant",
    category: "Stats & Insights",
    seller: "DevStudio",
    sellerSlug: "devstudio",
    verified: true,
    platformStatus: "Published" as PlatformStatus,
    toolStatus: "Working" as ToolStatus,
    sponsored: true,
    rating: 4.9,
    reviews: 326,
    clicks: 1320,
    rank: "#1",
    description: "Performance analytics and match insights for competitive Valorant players.",
    longDescription: "PhantomX Tracker helps competitive players understand round history, agent performance, team impact, and ranking progression through a clean analytics dashboard.",
    features: ["Match analytics", "Agent performance", "Round history", "Rank tracking"],
    lastUpdated: "May 23, 2026",
  },
  {
    slug: "shadow-overlay",
    name: "Shadow Overlay",
    game: "CS2",
    category: "Overlays",
    seller: "DevStudio",
    sellerSlug: "devstudio",
    verified: true,
    platformStatus: "Pending Review" as PlatformStatus,
    toolStatus: "Updating" as ToolStatus,
    sponsored: false,
    rating: 4.4,
    reviews: 84,
    clicks: 412,
    rank: "Pending",
    description: "A clean in-game overlay for CS2 players who want better visibility and utility context.",
    longDescription: "Shadow Overlay gives CS2 players a polished HUD layer with crosshair sync, map awareness, and contextual utility information.",
    features: ["Overlay HUD", "Crosshair sync", "Map awareness"],
    lastUpdated: "May 21, 2026",
  },
  {
    slug: "stratpad-extension",
    name: "StratPad Extension",
    game: "Fortnite",
    category: "Utility",
    seller: "DevStudio",
    sellerSlug: "devstudio",
    verified: true,
    platformStatus: "Draft" as PlatformStatus,
    toolStatus: "Not Working" as ToolStatus,
    sponsored: false,
    rating: 0,
    reviews: 0,
    clicks: 0,
    rank: "Draft",
    description: "Strategy notes, team comms, and utility lineups for Fortnite teams.",
    longDescription: "StratPad Extension helps Fortnite teams organize strategies, comms, and utility notes before tournaments and scrims.",
    features: ["Strategy notes", "Team comms", "Utility lineups"],
    lastUpdated: "May 18, 2026",
  },
];

export const reviews = [
  { toolSlug: "phantomx-tracker", user: "Vortex", title: "Clean, fast, and reliable", rating: 5, body: "The stats feel accurate and the UI is simple to understand.", appealStatus: "None" },
  { toolSlug: "phantomx-tracker", user: "SentinelMain", title: "Good tool but setup was confusing", rating: 4, body: "Useful once installed. Setup instructions could be better.", appealStatus: "Pending Appeal" },
  { toolSlug: "shadow-overlay", user: "Hexa", title: "Nice overlay design", rating: 4, body: "Overlay is clean. Waiting for the next update before using it full time.", appealStatus: "None" },
];

export const plans = [
  { name: "Starter", price: "$29", products: 5, boosts: 1, appeals: 1, analytics: "Basic analytics", description: "For new sellers testing Velora." },
  { name: "Pro", price: "$79", products: 10, boosts: 5, appeals: 3, analytics: "Advanced analytics", description: "For serious sellers with multiple products.", recommended: true },
  { name: "Big Seller", price: "$199", products: 30, boosts: 15, appeals: 10, analytics: "Pro analytics", description: "For larger sellers with a full catalog." },
];

export const boosts = [
  { product: "PhantomX Tracker", status: "Active", package: "Standard Boost", spend: "$49", clicks: "912", ends: "8 days left" },
  { product: "Shadow Overlay", status: "Paused", package: "Starter Boost", spend: "$19", clicks: "104", ends: "Paused" },
];

export const auditLogs = [
  "Admin approved PhantomX Tracker",
  "Boost campaign activated for PhantomX Tracker",
  "Review appeal created by DevStudio",
  "Shadow Overlay submitted for review",
];
